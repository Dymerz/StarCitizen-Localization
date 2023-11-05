# Description: Install the localization files for Star Citizen
# Author: Dymerz (Urbain Corentin)
# GitHub: https://github.com/Dymerz/StarCitizen-Localization

########################################
# SECTION Helpers ######################
########################################
Write-Debug Start

<#
  .SYNOPSIS
    Open a file dialog to select "StarCitizen_Launcher.exe" file
#>
Function Open-FileDialog($filter)
{
  [System.Reflection.Assembly]::LoadWithPartialName("System.windows.forms")|Out-Null

  $fileDialog = New-Object System.Windows.Forms.OpenFileDialog

  $fileDialog.Filter = $filter
  $fileDialog.ShowHelp = $true

  if($fileDialog.ShowDialog() -eq "OK")
  {
    return $fileDialog.FileName
  }
  return $null
}

Function Find-RSILauncherFolder()
{
  # Try to find the game folder from the default installation path
  $path = "C:\Program Files\Roberts Space Industries\"
  if (Test-Path -Path "$path\RSI Launcher\RSI Launcher.exe" -PathType Leaf)
  {
    Write-Debug "Found the RSI Launcher folder from the default installation path: $path"
    return "$path\RSI Launcher"
  }

  # Try to find the game folder from the "RSI Launcher" shortcut
  $path = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Roberts Space Industries\RSI Launcher.lnk"
  if (Test-Path -Path $path -PathType Leaf)
  {
    $wshShell   = New-Object -ComObject WScript.Shell
    $shortcut   = $wshShell.CreateShortcut($path)
    $targetPath = $shortcut.TargetPath

    # get resolve the "RSI Launcher" folder
    $rsiLauncherFolder = Split-Path -Path $targetPath -Parent

    if (Test-Path -Path "$rsiLauncherFolder\RSI Launcher.exe" -PathType Leaf)
    {
      Write-Debug "Found the RSI Launcher folder from the 'RSI Launcher' shortcut: $rsiLauncherFolder"
      return $rsiLauncherFolder
    }
  }

  return $null
}

<#
  .SYNOPSIS
    Try to guess the game folder from the "RSI Launcher" logs, the default installation path or the "RSI Launcher" shortcut
#>
Function Find-StarCitizenFolder()
{
  # Try to find the game folder from the "RSI Launcher" logs
  $path = Join-Path $env:APPDATA "\rsilauncher\logs\log.log"
  if (Test-Path -Path $path -PathType Leaf)
  {
    $content = Get-Content -Path $path -Raw
    $contentFixed = "[$content]" | Out-String # add missing '[' and ']' characters
    $contentFixed = $contentFixed -replace ',(\s*\])', '$1' # fix ending comma in object
    $contentFixed = $contentFixed -replace ',(\s*\})', '$1' # fix ending comma in array
    $fixedJson = $contentFixed | ConvertFrom-Json

    # get all "INSTALLER@INSTALL" events
    $events = $fixedJson | Where-Object { $_.'[browser][info] '.event -eq 'INSTALLER@INSTALL' }

    # get the "libraryFolder" property
    $libraryFolders = $events | ForEach-Object { $_.'[browser][info] '.data.gameInformation.libraryFolder }

    # get the last "libraryFolder" property as it is the most recent
    $lastLibraryFolder = $libraryFolders[-1]

    if (Test-Path -Path $lastLibraryFolder -PathType Container)
    {
      Write-Debug "Found the game folder from the 'RSI Launcher' logs: $lastLibraryFolder"
      return "$lastLibraryFolder\StarCitizen"
    }
  }

  # Try to find the game folder from the default installation path
  $path = "C:\Program Files\Roberts Space Industries\StarCitizen"
  if (Test-Path -Path "$path\LIVE\StarCitizen_Launcher.exe" -PathType Leaf)
  {
    Write-Debug "Found the game folder from the default installation path: $path"
    return $path
  }

  # Try to find the game folder from the "RSI Launcher" shortcut
  $path = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Roberts Space Industries\RSI Launcher.lnk"
  if (Test-Path -Path $path -PathType Leaf)
  {
    $wshShell   = New-Object -ComObject WScript.Shell
    $shortcut   = $wshShell.CreateShortcut($path)
    $targetPath = $shortcut.TargetPath

    # get resolve the "Roberts Space Industries" grand parent folder
    $rsiLauncherPath = Split-Path -Path $targetPath -Parent
    $rsiPath         = Split-Path -Path $rsiLauncherPath -Parent

    if (Test-Path -Path "$rsiPath\StarCitizen\LIVE\StarCitizen_Launcher.exe" -PathType Leaf)
    {
      Write-Debug "Found the game folder from the 'RSI Launcher' shortcut: $rsiPath"
      return "$rsiPath\StarCitizen"
    }
  }

  Write-Warning "Unable to find the game folder"
  return $null
}

<#
  .SYNOPSIS
    Create a menu to select an item from a list
#>
Function Select-FromList($title, $message = "Selection", $list = @())
{
  # Ask the user to select an item from the list
  Write-Host $title
  foreach ($key in $list.Keys)
  {
    $value = $list[$key]

    if($value.GetType() -ne [String])
    {
      $value = $($value.Keys | ForEach-Object { $value[$_] }) -join " - "
    }

    Write-Host "  $key. $value"
  }

  Write-Host ""
  $validChoice = $false
  do
  {
    $choice = Read-Host $message
    if ($list.Contains([int]$choice))
    {
      $validChoice = $true
    }
    else
    {
      Write-Host ""
      Write-Host "The number you entered is not valid."
    }
  } while (-not $validChoice)

  return $list[[int]$choice]
}

<#
  .SYNOPSIS
    Create a menu to select the game version
#>
Function Select-LanguageMenu()
{
  $lang_list = [ordered] @{
    0 = "REMOVE"
    1 = "english"
    2 = "french_(france)"
    3 = "german_(germany)"
    4 = "italian_(italy)"
    5 = "portuguese_(brazil)"
    6 = "spanish_(latin_america)"
    7 = "spanish_(spain)"
  }

  return Select-FromList -title "Select the language to install" -message "Selection" -list $lang_list
}

<#
  .SYNOPSIS
    Download the latest version of the localization files
#>
Function Invoke-DownloadLanguage($rootFolder, $language, $branch = "main")
{
  # Create the language folder if it does not exist
  $languagePath = "$rootFolder\data\Localization\$language"
  if (-not (Test-Path -Path "$languagePath" -PathType Container))
  {
    New-Item -ItemType Directory -Path "$languagePath"
  }

  # Download the latest version of the localization files
  try
  {
    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/$branch/data/Localization/$language/global.ini" -OutFile "$languagePath\global.ini"
  }
  catch
  {
    Write-Host ""
    Write-Host "The language ""$language"" does not exist."
    Write-Host ""
    Write-Host "Maybe the language is not available yet, you can check the status of the translations here:"
    Write-Host "https://github.com/Dymerz/StarCitizen-Localization#supported-languages"
    Write-Host ""
    return $false
  }

  return $true
}

<#
  .SYNOPSIS
    Update the 'user.cfg' file with the language settings
#>
Function Set-UserCfg($rootFolder, $language)
{
  # Check if the 'user.cfg' file exists, if not, create it
  if (-not (Test-Path -Path "$rootFolder\user.cfg"))
  {
    New-Item -ItemType File -Path "$rootFolder\user.cfg"
  }

  # Get the content of the 'user.cfg' file
  $userCfgContent = Get-Content -Path "$rootFolder\user.cfg"

  # Update the language settings or add if it does not exist
  if ($userCfgContent -match "^g_language\s*=" )
  {
    $userCfgContent = $userCfgContent -replace "^g_language\s*=.*", "g_language = $language"
  }
  else
  {
    $userCfgContent += "g_language = $language`n"
  }

  # Fix the audio language settings (see: https://issue-council.robertsspaceindustries.com/projects/STAR-CITIZEN/issues/STARC-86490)
  if ($userCfgContent -match "^g_languageAudio\s*=" )
  {
    $userCfgContent = $userCfgContent -replace "^g_languageAudio\s*=.*", "g_languageAudio = english"
  }
  else
  {
    $userCfgContent += "g_languageAudio = english`n"
  }

  # Save the 'user.cfg' file
  Set-Content -Path "$gameFolder\user.cfg" -Value $userCfgContent
  return $true
}

<#
  .SYNOPSIS
    Clear the language settings in the 'user.cfg' file
#>
Function Clear-Language($rootFolder)
{
  # Remove the Localization folder
  if (Test-Path -Path "$rootFolder\data\Localization" -PathType Container)
  {
    Remove-Item -Path "$rootFolder\data\Localization" -Recurse -Force
  }

  # Check if the 'user.cfg' file exists, if not, return
  if (-not (Test-Path -Path "$rootFolder\user.cfg"))
  {
    return
  }

  # Get the content of the 'user.cfg' file
  $userCfgContent = Get-Content -Path "$rootFolder\user.cfg"

  # Clear the language settings
  if ($userCfgContent -match "^g_language\s*=" )
  {
    $userCfgContent = $userCfgContent | Where-Object { $_ -notmatch '^g_language\s*=.*' }
  }

  # Clear the audio fix settings
  if ($userCfgContent -match "^g_languageAudio\s*=" )
  {
    $userCfgContent = $userCfgContent | Where-Object { $_ -notmatch '^g_languageAudio\s*=.*' }
  }

  Set-Content -Path "$rootFolder\user.cfg" -Value $userCfgContent
}

<#
  .SYNOPSIS
    Get the game version from the "build_manifest.id" file
#>
Function Get-GameVersion($gamePath, $environment)
{
  $buildManifest = Get-Content -Path "$gamePath\$environment\build_manifest.id" | ConvertFrom-Json
  return $buildManifest.Data.Branch
}


########################################
# !SECTION     #########################
# SECTION Main #########################
########################################

Write-Host @"
-------------------------------------------------------------
Description: Install the localization files for Star Citizen
GitHub: https://github.com/Dymerz/StarCitizen-Localization
-------------------------------------------------------------

Usage Instructions:
  1. Select the game folder
  2. Select the language to install/update
  3. Enjoy Star Citizen

"@

Start-Sleep -s 2

# Detect or ask the game folder
$gameFolder = ""
$findStarCitizenFolder = Find-StarCitizenFolder
if($findStarCitizenFolder)
{
  Write-Host "Found the game folder: $findStarCitizenFolder" -ForegroundColor Yellow
  Write-Host "Getting available game versions..." -ForegroundColor Yellow

  $environments = [ordered] @{}
  $index = 0

  # Get all sub folders (e.g. LIVE, PTU, ...)
  $subFolders = Get-ChildItem -Path $findStarCitizenFolder -Directory | Select-Object -ExpandProperty Name
  foreach ($subFolder in $subFolders)
  {
    # Check if the sub folder contains the "StarCitizen_Launcher.exe" file
    if (Test-Path -Path "$findStarCitizenFolder\$subFolder\StarCitizen_Launcher.exe" -PathType Leaf)
    {
      $version = Get-GameVersion -gamePath "$findStarCitizenFolder" -environment $subFolder
      $environments.Add($index, [ordered] @{ Name = $subFolder; Version = $version })
    }
  }

  $selectedEnvironment = $(Select-FromList -title "Select the game version to use" -message "Selection" -list $environments)
  $gameFolder = "$findStarCitizenFolder\$($selectedEnvironment.Name)"
}
else
{
  Write-Host "Select the StarCitizen_Launcher.exe in the game folder" -ForegroundColor Yellow
  $selectedFile = Open-FileDialog -filter "Star Citizen Launcher | StarCitizen_Launcher.exe"

  if(-not $selectedFile)
  {
    Write-Host ""
    Write-Host "An error occurred while selecting the game folder." -ForegroundColor Red
    Write-Host "If you think this is a bug, please report it here:" -ForegroundColor Red
    Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
    return
  }

  $gameFolder = Split-Path -Path $selectedFile -Parent
}

Write-Host "Using the game folder: $gameFolder" -ForegroundColor Yellow
Write-Host ""

$language = Select-LanguageMenu
if ($language -eq "REMOVE")
{
  Write-Host "Removing the language files..." -ForegroundColor Yellow
  Clear-Language -rootFolder $gameFolder

  Write-Host ""
  Write-Host "Uninstall completed" -ForegroundColor Green
  Read-Host "Press Enter to exit"
  return
}

Write-Host "Downloading the language files..." -ForegroundColor Yellow

$success = Invoke-DownloadLanguage -rootFolder $gameFolder -language $language -branch "main"
if (-not $success)
{
  Write-Host "Invoke-DownloadLanguage failed" -ForegroundColor Red
  Write-Host "An error occurred while installing the language files." -ForegroundColor Red
  Write-Host "If you think this is a bug, please report it here:" -ForegroundColor Red
  Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
  return
}

Write-Host "Configuring the game..." -ForegroundColor Yellow
Start-Sleep -s 2

$success = Set-UserCfg -rootFolder $gameFolder -language $language
if (-not $success)
{
  Write-Host "Update 'user.cfg' failed" -ForegroundColor Red
  Write-Host "An error occurred while updating the 'user.cfg' file." -ForegroundColor Red
  Write-Host "If you think this is a bug, please report it here:" -ForegroundColor Red
  Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
  return
}

Write-Host ""
Write-Host "Install completed" -ForegroundColor Green
Write-Host "You can now enjoy Star Citizen in ""$language""" -ForegroundColor Green
Read-Host "Press Enter to exit"

########################################
# !SECTION #############################
########################################