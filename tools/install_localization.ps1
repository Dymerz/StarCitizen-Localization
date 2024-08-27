# Description: Install the localization files for Star Citizen
# GitHub: https://github.com/Dymerz/StarCitizen-Localization

########################################
# SECTION Helpers ######################
########################################
Write-Debug Start

$global:LOCALES = $null

function Get-Locales() {
  # $global:LOCALES = Get-Content -Path "./install_localization.i18n.json" -Raw | ConvertFrom-Json
  # return

  try {
    $raw = [Text.Encoding]::UTF8.GetString((Invoke-WebRequest -Uri "https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.i18n.json").RawContentStream.ToArray())
    $global:LOCALES = $raw | ConvertFrom-Json
  }
  catch {
    Write-Host "Unable to get the locales file from GitHub" -ForegroundColor Red
    Write-Host "If the problem persists, please report the bug here:" -ForegroundColor Red
    Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
    exit 0
  }
}

function Get-Translate {
  param (
    [string]$key,
    [string[]]$variableValues = @()
  )
  $locales = $global:LOCALES

  $userCulture = (Get-Culture).TwoLetterISOLanguageName
  if (-not $localesPSobject.Properties.name -match $userCulture) {
    $userCulture = 'en'
  }

  $userLocales = $locales.$userCulture

  try {
    $keyParts = $Key -split '\.'
    $value = $userLocales

    # Get the value from the key
    foreach ($Part in $keyParts) {
      $value = $value.$Part
    }

    # Replace the variables in the string
    for ($i = 0; $i -lt $variableValues.Count; $i++) {
      $variablePlaceholder = ('$' + ($i + 0))
      $value = $value -replace [regex]::Escape($variablePlaceholder), $variableValues[$i]
    }

    return $value
  }
  catch {
    return "KEY NOT FOUND: $Key"
  }
}

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
    Try to guess the game folder from the "RSI Launcher" logs, the default installation path, or the "RSI Launcher" shortcut
#>
Function Find-StarCitizenFolder() {
    # Try to find the game folder from the "RSI Launcher" logs using the new regex method (RSI Launcher 2.0)
    $logPath = Join-Path $env:APPDATA "\rsilauncher\logs\log.log"
    if (Test-Path -Path $logPath -PathType Leaf) {
        $logContent = Get-Content -Path $logPath -Raw

        # Regex pattern to match the line where the game is launched
        $regexPattern = "Installing Star Citizen (.*?) at ([^`")]+)"

        # Try to find the path using the regular expression
        $pathMatches = [regex]::Matches($logContent, $regexPattern)

        if ($pathMatches.Count -gt 0) {
            $lastMatch = $pathMatches[$pathMatches.Count - 1]
            $starCitizenPath = $lastMatch.Groups[2].Value
            if (Test-Path -Path $starCitizenPath -PathType Container) {
                Write-Debug "Found the game folder from the log file using regex: $starCitizenPath"
                return $starCitizenPath
            }
        }
    }

    # Existing method: Try to find the game folder from the "RSI Launcher" logs with JSON parsing
    $jsonLogPath = Join-Path $env:APPDATA "\rsilauncher\logs\log.log"
    if (Test-Path -Path $jsonLogPath -PathType Leaf) {
        $content = Get-Content -Path $jsonLogPath -Raw
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

    # Fallback 1: Try to find the game folder from the default installation path
    $defaultPath = "C:\Program Files\Roberts Space Industries\StarCitizen"
    if (Test-Path -Path "$defaultPath\LIVE\StarCitizen_Launcher.exe" -PathType Leaf) {
        Write-Debug "Found the game folder from the default installation path: $defaultPath"
        return $defaultPath
    }

    # Fallback 2: Try to find the game folder from the "RSI Launcher" shortcut
    $shortcutPath = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Roberts Space Industries\RSI Launcher.lnk"
    if (Test-Path -Path $shortcutPath -PathType Leaf) {
        $wshShell = New-Object -ComObject WScript.Shell
        $shortcut = $wshShell.CreateShortcut($shortcutPath)
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
    [string]$title = "Menu Title",
    [string]$hint = (Get-Translate "INTERACTIVE_MENU.HINT"),
    [ValidateSet("green", "yellow", "red", "black", "white")] # you might add more colors allowed by console
    [string]$titleColor = 'green'                             # color of the title
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
      [System.Console]::WriteLine((Get-Translate "ERRORS.MENU_INVALID_BUTTON"))
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
    [Console]::WriteLine((Get-Translate "INTERACTIVE_MENU.SELECTION" $menuItems[$selectIndex]))
    return $menuItems[$selectIndex]
  }

  if ($outChar.Key -eq [System.ConsoleKey]::Escape) {
    [Console]::WriteLine((Get-Translate "INTERACTIVE_MENU.EXITING"))
    return $null
  }
}

function New-YesNoMenu {
  param(
    [string]$message = (Get-Translate "YES_NO_MENU.TITLE")
  )

  $yes = New-Object System.Management.Automation.Host.ChoiceDescription ('&' + (Get-Translate "YES_NO_MENU.YES.SHORT")), (Get-Translate "YES_NO_MENU.YES.SHORT")
  $no = New-Object System.Management.Automation.Host.ChoiceDescription ('&' + (Get-Translate "YES_NO_MENU.NO.SHORT")), (Get-Translate "YES_NO_MENU.NO.SHORT")
  $options = [System.Management.Automation.Host.ChoiceDescription[]]($yes, $no)

  $result = $host.ui.PromptForChoice("", $message, $options, 0)

  switch ($result)
  {
    0 { return $true }
    1 { return $false }
  }
}

<#
  .SYNOPSIS
    Create a menu to select the game version
#>
Function Select-LanguageMenu() {
  $remove = (Get-Translate "REMOVE")
  $lang_list = @(
    "english / $remove"
    "french_(france)"
    "german_(germany)"
    "italian_(italy)"
    "portuguese_(brazil)"
    "spanish_(latin_america)"
    "spanish_(spain)"
  )

  $result = New-Menu -title "Select the language to install" -menuItems $lang_list
  if ($result -eq $lang_list[0]) { return $null }
  return $result
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
    Write-Host (Get-Translate "ERRORS.LANGUAGE_NOT_EXIST")
    Write-Host ""
    Write-Host (Get-Translate "ERRORS.LANGUAGE_NOT_AVAILABLE")
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
Get-Locales

Write-Host @"
-------------------------------------------------------------
$(Get-Translate "DESCRIPTION")
GitHub: https://github.com/Dymerz/StarCitizen-Localization
-------------------------------------------------------------

"@

Start-Sleep -s 2

# Detect or ask the game folder
$gameFolder = ""
$findStarCitizenFolder = Find-StarCitizenFolder
#  go up one folder
$findStarCitizenFolder = Split-Path -Path $findStarCitizenFolder -Parent
if ($findStarCitizenFolder) {
  Write-Host (Get-Translate "FOUND_FOLDER" $findStarCitizenFolder) -ForegroundColor Yellow
  Write-Host (Get-Translate "GET_VERSIONS") -ForegroundColor Yellow
  Write-Host ""

  $environments = @{}
  $menuItems = [System.Collections.Generic.List[string]]::new()

  # Get all sub folders (e.g. LIVE, PTU, ...)
  $subFolders = Get-ChildItem -Path $findStarCitizenFolder -Directory | Select-Object -ExpandProperty Name
  foreach ($subFolder in $subFolders) {
    # Check if the sub folder contains the "StarCitizen_Launcher.exe" file
    if (Test-Path -Path "$findStarCitizenFolder\$subFolder\StarCitizen_Launcher.exe" -PathType Leaf) {
      $version = Get-GameVersion -gamePath "$findStarCitizenFolder" -environment $subFolder
      $index = "$subFolder (version: $version)" #TODO

      $menuItems.Add($index)
      $environments.Add($index, $subfolder)
    }
  }

  $choice = New-Menu -title  (Get-Translate "SELECT_GAME_VERSION") $menuItems
  if ($null -eq $choice) { exit 0 }

  $result = $environments[$choice]
  $gameFolder = "$findStarCitizenFolder\$result"
}
else {
  Write-Host (Get-Translate "SELECT_EXE") -ForegroundColor Yellow
  $selectedFile = Open-FileDialog -filter "Star Citizen Launcher | StarCitizen_Launcher.exe"

  if (-not $selectedFile) {
    Write-Host ""
    Write-Host (Get-Translate "ERRORS.NO_GAME_FOLDER_SELECTED") -ForegroundColor Red
    Write-Host (Get-Translate "ERRORS.REPORT_BUG") -ForegroundColor Red
    Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
    return
  }

  $gameFolder = Split-Path -Path $selectedFile -Parent
}

# Check if the selected folder is not "LIVE", if so, change the branch to "ptu"
$branch = "main"
if ($gameFolder -notlike "*LIVE*") {
  $branch = "ptu"
}

$language = Select-LanguageMenu

Write-Host ""
Write-Host (Get-Translate "OVERVIEW") -ForegroundColor Yellow
Write-Host (Get-Translate "GAME_FOLDER" $gameFolder) -ForegroundColor Yellow
if ($null -eq $language) { Write-Host (Get-Translate "REMOVE_LANGUAGE") -ForegroundColor Yellow }
else                     { Write-Host (Get-Translate "INSTALL_LANGUAGE" $language) -ForegroundColor Yellow }
Write-Host (Get-Translate "BRANCH" $branch) -ForegroundColor Yellow
Write-Host ""

$continue = New-YesNoMenu -message (Get-Translate "CONTINUE_PROMPT")
if (-not $continue) { exit 0 }

if ($null -eq $language) {
  Write-Host (Get-Translate "REMOVE_FILES") -ForegroundColor Yellow
  Clear-Language -rootFolder $gameFolder

  Write-Host ""
  Write-Host (Get-Translate "UNINSTALL_COMPLETE") -ForegroundColor Green
  Read-Host (Get-Translate "EXIT_PROMPT")
  exit 0
}

Write-Host (Get-Translate "DOWNLOAD_FILES") -ForegroundColor Yellow

$success = Invoke-DownloadLanguage -rootFolder $gameFolder -language $language -branch $branch
if (-not $success) {
  Write-Host (Get-Translate "ERRORS.LANGUAGE_DOWNLOAD_FAILED") -ForegroundColor Red
  Write-Host (Get-Translate "ERRORS.INSTALL_ERROR") -ForegroundColor Red
  Write-Host (Get-Translate "ERRORS.REPORT_BUG") -ForegroundColor Red
  Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
  exit 0
}

Write-Host (Get-Translate "CONFIGURE_GAME") -ForegroundColor Yellow
Start-Sleep -s 2

$success = Set-UserCfg -rootFolder $gameFolder -language $language
if (-not $success) {
  Write-Host (Get-Translate "ERRORS.USER_CFG_UPDATE_FAILED") -ForegroundColor Red
  Write-Host (Get-Translate "ERRORS.USER_CFG_UPDATE_ERROR") -ForegroundColor Red
  Write-Host (Get-Translate "ERRORS.REPORT_BUG") -ForegroundColor Red
  Write-Host "https://github.com/Dymerz/StarCitizen-Localization/issues/new" -ForegroundColor Red
  exit 0
}

Write-Host ""
Write-Host (Get-Translate "INSTALL_COMPLETE") -ForegroundColor Green
Write-Host (Get-Translate "ENJOY_GAME" $language) -ForegroundColor Green
Read-Host (Get-Translate "ENTER_TO_CONTINUE")

########################################
# !SECTION #############################
########################################