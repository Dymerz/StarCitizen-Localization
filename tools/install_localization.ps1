# Description: Install the localization files for Star Citizen
# GitHub: https://github.com/Dymerz/StarCitizen-Localization

########################################
# SECTION Helpers ######################
########################################
Write-Debug Start

<#
  .SYNOPSIS
    Open a file dialog to select "StarCitizen_Launcher.exe" file
#>
Function Open-FileDialog($filter) {
  [System.Reflection.Assembly]::LoadWithPartialName("System.windows.forms") | Out-Null

  $fileDialog = New-Object System.Windows.Forms.OpenFileDialog

  $fileDialog.Filter = $filter
  $fileDialog.ShowHelp = $true

  if ($fileDialog.ShowDialog() -eq "OK") {
    return $fileDialog.FileName
  }
  return $null
}

Function Find-RSILauncherFolder() {
  # Try to find the game folder from the default installation path
  $path = "C:\Program Files\Roberts Space Industries\"
  if (Test-Path -Path "$path\RSI Launcher\RSI Launcher.exe" -PathType Leaf) {
    Write-Debug "Found the RSI Launcher folder from the default installation path: $path"
    return "$path\RSI Launcher"
  }

  # Try to find the game folder from the "RSI Launcher" shortcut
  $path = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Roberts Space Industries\RSI Launcher.lnk"
  if (Test-Path -Path $path -PathType Leaf) {
    $wshShell = New-Object -ComObject WScript.Shell
    $shortcut = $wshShell.CreateShortcut($path)
    $targetPath = $shortcut.TargetPath

    # get resolve the "RSI Launcher" folder
    $rsiLauncherFolder = Split-Path -Path $targetPath -Parent

    if (Test-Path -Path "$rsiLauncherFolder\RSI Launcher.exe" -PathType Leaf) {
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
Function Find-StarCitizenFolder() {
  # Try to find the game folder from the "RSI Launcher" logs
  $path = Join-Path $env:APPDATA "\rsilauncher\logs\log.log"
  if (Test-Path -Path $path -PathType Leaf) {
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

    if (Test-Path -Path $lastLibraryFolder -PathType Container) {
      Write-Debug "Found the game folder from the 'RSI Launcher' logs: $lastLibraryFolder"
      return "$lastLibraryFolder\StarCitizen"
    }
  }

  # Try to find the game folder from the default installation path
  $path = "C:\Program Files\Roberts Space Industries\StarCitizen"
  if (Test-Path -Path "$path\LIVE\StarCitizen_Launcher.exe" -PathType Leaf) {
    Write-Debug "Found the game folder from the default installation path: $path"
    return $path
  }

  # Try to find the game folder from the "RSI Launcher" shortcut
  $path = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Roberts Space Industries\RSI Launcher.lnk"
  if (Test-Path -Path $path -PathType Leaf) {
    $wshShell = New-Object -ComObject WScript.Shell
    $shortcut = $wshShell.CreateShortcut($path)
    $targetPath = $shortcut.TargetPath

    # get resolve the "Roberts Space Industries" grand parent folder
    $rsiLauncherPath = Split-Path -Path $targetPath -Parent
    $rsiPath = Split-Path -Path $rsiLauncherPath -Parent

    if (Test-Path -Path "$rsiPath\StarCitizen\LIVE\StarCitizen_Launcher.exe" -PathType Leaf) {
      Write-Debug "Found the game folder from the 'RSI Launcher' shortcut: $rsiPath"
      return "$rsiPath\StarCitizen"
    }
  }

  Write-Warning "Unable to find the game folder"
  return $null
}

<#
  .SYNOPSIS
    Reverse the colors of the console
#>
function Reverse-Colors {
  $bColor = [System.Console]::BackgroundColor
  $fColor = [System.Console]::ForegroundColor
  [System.Console]::BackgroundColor = $fColor
  [System.Console]::ForegroundColor = $bColor
}

<#
  .SYNOPSIS
    Create a menu to select an item from a list
#>
function New-Menu {
  param(
    [parameter(Mandatory = $true)][System.Collections.Generic.List[string]]$menuItems, # contains all menu items
    [string]$title = "Menu Title", # the title for the menu
    [string]$hint = "Use arrows (↑ and ↓) to move then, 'Enter' to validate, 'ESC' to Exit`n", # hint to be displayed above menu entries
    [ValidateSet("green", "yellow", "red", "black", "white")]                                   # you might add more colors allowed by console
    [string]$titleColor = 'green'                                                          # color of the title
  )

  # prepare variables with function wide scope
  $invalidChoice = $false # initialize the flag indicating whether an ivalid key was pressed
  $selectIndex = 0 # initialize the variable storing the selection index (by default the first entry)
  $outChar = 'a' # initialize the variable storing the Enter or Esc value

  # prepare the cosnole
  [System.Console]::CursorVisible = $false    # hide the cursor, we don't need it
  [Console]::Clear()                          # clear everything before showing the menu

  # main loop showing all the entries and handling the interaction with user
  # end the loop only when Enter or Escape is pressed
  while (([System.Int16]$inputChar.Key -ne [System.ConsoleKey]::Enter) -and ([System.Int16]$inputChar.Key -ne [System.ConsoleKey]::Escape)) {
    # show title and hint
    [System.Console]::CursorTop = 0                     # start from top and then overwrite all lines; it's used instead of Clear to avoid blinking
    $tempColor = [System.Console]::ForegroundColor      # keep the default font color
    [System.Console]::ForegroundColor = $titleColor     # set the color for title according to value of parameter
    [System.Console]::WriteLine("$title`n")
    [System.Console]::ForegroundColor = $tempColor      # revert back to default font color

    [System.Console]::WriteLine($hint)

    # show all entries
    for ($i = 0; $i -lt $menuItems.Count; $i++) {
      [System.Console]::Write("[$i] ") # add identity number to each entry, it's not highlighted for selection but it's in the same line
      if ($selectIndex -eq $i) {
        Reverse-Colors # in case this is the selected entry, reverse color just for it to make the selection visible
        [System.Console]::WriteLine($menuItems[$i])
        Reverse-Colors
      }
      else {
        [System.Console]::WriteLine($menuItems[$i]) # in case this is not-selected entry, just show it
      }
    }

    # in case of invalid key, show the message
    if ($invalidChoice) {
      [System.Console]::WriteLine("Invalid button! Try again...")
    }
    else {
      [System.Console]::Write([System.String]::new(' ', [System.Console]::WindowWidth)) # in case the valid key was used after invalid, clean-up this line
      [System.Console]::SetCursorPosition(0, [System.Console]::CursorTop)               # set the cursor back to first column so it's properly back to 1st column, 1st row in next iteration of the loop
    }

    # reset the invalid key flag
    $invalidChoice = $false

    # read the key from user
    $inputChar = [System.Console]::ReadKey($true)

    # handle arrows
    if ([System.Int16]$inputChar.Key -eq [System.ConsoleKey]::DownArrow) {
      # avoid selection out of range
      if ($selectIndex -lt $menuItems.Count - 1) {
        $selectIndex++
      }
    }
    elseif ([System.Int16]$inputChar.Key -eq [System.ConsoleKey]::UpArrow) {
      # avoid selection out of range
      if ($selectIndex -gt 0) {
        $selectIndex--
      }
    }
    else {
      $invalidChoice = $true # key not recognized, raise the flag
    }

    # assign the key value to variable with scope outside the loop
    $outChar = $inputChar
  }

  # handle the result, just show the selected entry if Enter was pressed; do nothing if Escape was pressed
  if ($outChar.Key -eq [System.ConsoleKey]::Enter) {
    [Console]::WriteLine("You selected $($menuItems[$selectIndex])")
    return $menuItems[$selectIndex]
  }

  if ($outChar.Key -eq [System.ConsoleKey]::Escape) {
    [Console]::WriteLine("You pressed Esc, exiting...")
    return $null
  }
}

function New-YesNoMenu {
  param(
    [string]$message = "Do you want to continue?"
  )

  $yes = New-Object System.Management.Automation.Host.ChoiceDescription '&Yes', 'Yes: continue'
  $no = New-Object System.Management.Automation.Host.ChoiceDescription '&No', 'No: exit'
  $options = [System.Management.Automation.Host.ChoiceDescription[]]($yes, $no)

  $result = $host.ui.PromptForChoice("", $message, $options, 0)

  switch ($result)
  {
    0 { return "Yes" }
    1 { return "No" }
  }
}

<#
  .SYNOPSIS
    Create a menu to select the game version
#>
Function Select-LanguageMenu() {
  $lang_list = @(
    "Remove"
    "english"
    "french_(france)"
    "german_(germany)"
    "italian_(italy)"
    "portuguese_(brazil)"
    "spanish_(latin_america)"
    "spanish_(spain)"
  )

  return New-Menu -title "Select the language to install" -menuItems $lang_list
}

<#
  .SYNOPSIS
    Download the latest version of the localization files
#>
Function Invoke-DownloadLanguage($rootFolder, $language, $branch = "main") {
  # Create the language folder if it does not exist
  $languagePath = "$rootFolder\data\Localization\$language"
  if (-not (Test-Path -Path "$languagePath" -PathType Container)) {
    New-Item -ItemType Directory -Path "$languagePath"
  }

  # Download the latest version of the localization files
  try {
    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/$branch/data/Localization/$language/global.ini" -OutFile "$languagePath\global.ini"
  }
  catch {
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
Function Set-UserCfg($rootFolder, $language) {
  # Check if the 'user.cfg' file exists, if not, create it
  if (-not (Test-Path -Path "$rootFolder\user.cfg")) {
    New-Item -ItemType File -Path "$rootFolder\user.cfg"
  }

  # Get the content of the 'user.cfg' file
  $userCfgContent = Get-Content -Path "$rootFolder\user.cfg"

  # Update the language settings or add if it does not exist
  if ($userCfgContent -match "^g_language\s*=" ) {
    $userCfgContent = $userCfgContent -replace "^g_language\s*=.*", "g_language = $language"
  }
  else {
    $userCfgContent += "g_language = $language`n"
  }

  # Fix the audio language settings (see: https://issue-council.robertsspaceindustries.com/projects/STAR-CITIZEN/issues/STARC-86490)
  if ($userCfgContent -match "^g_languageAudio\s*=" ) {
    $userCfgContent = $userCfgContent -replace "^g_languageAudio\s*=.*", "g_languageAudio = english"
  }
  else {
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
Function Clear-Language($rootFolder) {
  # Remove the Localization folder
  if (Test-Path -Path "$rootFolder\data\Localization" -PathType Container) {
    Remove-Item -Path "$rootFolder\data\Localization" -Recurse -Force
  }

  # Check if the 'user.cfg' file exists, if not, return
  if (-not (Test-Path -Path "$rootFolder\user.cfg")) {
    return
  }

  # Get the content of the 'user.cfg' file
  $userCfgContent = Get-Content -Path "$rootFolder\user.cfg"

  # Clear the language settings
  if ($userCfgContent -match "^g_language\s*=" ) {
    $userCfgContent = $userCfgContent | Where-Object { $_ -notmatch '^g_language\s*=.*' }
  }

  # Clear the audio fix settings
  if ($userCfgContent -match "^g_languageAudio\s*=" ) {
    $userCfgContent = $userCfgContent | Where-Object { $_ -notmatch '^g_languageAudio\s*=.*' }
  }

  Set-Content -Path "$rootFolder\user.cfg" -Value $userCfgContent
}

<#
  .SYNOPSIS
    Get the game version from the "build_manifest.id" file
#>
Function Get-GameVersion($gamePath, $environment) {
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

"@

Start-Sleep -s 2

# Detect or ask the game folder
$gameFolder = ""
$findStarCitizenFolder = Find-StarCitizenFolder
if ($findStarCitizenFolder) {
  Write-Host "Found the game folder: $findStarCitizenFolder" -ForegroundColor Yellow
  Write-Host "Getting available game versions..." -ForegroundColor Yellow
  Write-Host ""

  $environments = @{}
  $menuItems = [System.Collections.Generic.List[string]]::new()

  # Get all sub folders (e.g. LIVE, PTU, ...)
  $subFolders = Get-ChildItem -Path $findStarCitizenFolder -Directory | Select-Object -ExpandProperty Name
  foreach ($subFolder in $subFolders) {
    # Check if the sub folder contains the "StarCitizen_Launcher.exe" file
    if (Test-Path -Path "$findStarCitizenFolder\$subFolder\StarCitizen_Launcher.exe" -PathType Leaf) {
      $version = Get-GameVersion -gamePath "$findStarCitizenFolder" -environment $subFolder
      $index = "$subFolder (version: $version)"

      $menuItems.Add($index)
      $environments.Add($index, $subfolder)
    }
  }

  $choice = New-Menu -title "Select the game version to use" $menuItems
  if ($null -eq $choice) { exit 0 }

  $result = $environments[$choice]
  $gameFolder = "$findStarCitizenFolder\$result"
}
else {
  Write-Host "Select the StarCitizen_Launcher.exe in the game folder" -ForegroundColor Yellow
  $selectedFile = Open-FileDialog -filter "Star Citizen Launcher | StarCitizen_Launcher.exe"

  if (-not $selectedFile) {
    Write-Host ""
    Write-Host "An error occurred while selecting the game folder." -ForegroundColor Red
    Write-Host "If you think this is a bug, please report it here:" -ForegroundColor Red
    Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
    return
  }

  $gameFolder = Split-Path -Path $selectedFile -Parent
}

$language = Select-LanguageMenu
if ($null -eq $language) { exit 0 }

Write-Host ""
Write-Host " Overview:" -ForegroundColor Yellow
Write-Host "  - Game folder: $gameFolder" -ForegroundColor Yellow
if ($language -eq "Remove") { Write-Host "  - Remove the language files" -ForegroundColor Yellow }
else                        { Write-Host "  - Install the language $language" -ForegroundColor Yellow }
Write-Host ""

$continue = New-YesNoMenu -message "Do you want to continue?"
if ($continue -eq "No" ) { exit 0 }

Write-Host "Downloading the language files..." -ForegroundColor Yellow

if ($language -eq "Remove") {
  Write-Host "Removing the language files..." -ForegroundColor Yellow
  Clear-Language -rootFolder $gameFolder

  Write-Host ""
  Write-Host "Uninstall completed" -ForegroundColor Green
  Read-Host "Press Enter to exit"
  exit 0
}

$success = Invoke-DownloadLanguage -rootFolder $gameFolder -language $language -branch "main"
if (-not $success) {
  Write-Host "Invoke-DownloadLanguage failed" -ForegroundColor Red
  Write-Host "An error occurred while installing the language files." -ForegroundColor Red
  Write-Host "If you think this is a bug, please report it here:" -ForegroundColor Red
  Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
  exit 0
}

Write-Host "Configuring the game..." -ForegroundColor Yellow
Start-Sleep -s 2

$success = Set-UserCfg -rootFolder $gameFolder -language $language
if (-not $success) {
  Write-Host "Update 'user.cfg' failed" -ForegroundColor Red
  Write-Host "An error occurred while updating the 'user.cfg' file." -ForegroundColor Red
  Write-Host "If you think this is a bug, please report it here:" -ForegroundColor Red
  Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
  exit 0
}

Write-Host ""
Write-Host "Install completed" -ForegroundColor Green
Write-Host "You can now enjoy Star Citizen in ""$language""" -ForegroundColor Green
Read-Host "Press Enter to exit"

########################################
# !SECTION #############################
########################################