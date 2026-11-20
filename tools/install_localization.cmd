@echo off
setlocal enabledelayedexpansion

:: Define the languages
set "lang_list[1]=english"
set "lang_list[2]=french_(france)"
set "lang_list[3]=german_(germany)"
set "lang_list[4]=italian_(italy)"
set "lang_list[5]=korean_(south_korea)"
set "lang_list[6]=portuguese_(brazil)"
set "lang_list[7]=spanish_(spain)"
set "lang_list[8]=turkish_(turkey)"

:: Check the directory: accept the script's own folder (double-click) or the current folder (terminal),
:: then work from it since every path below is relative.
echo Checking directory...
set "BATCH_PATH=%~dp0"
set "BATCH_PATH=%BATCH_PATH:~0,-1%"
call :IsDataFolder "%BATCH_PATH%"
if errorlevel 1 (
    set "BATCH_PATH=%CD%"
    call :IsDataFolder "%CD%"
)
if errorlevel 1 (
    echo This script must be executed from the "\StarCitizen\[LIVE or PTU]\data" folder.
    pause
    exit /b
)
cd /d "%BATCH_PATH%"

:: Detect the environment and the installed game version
set "environment=LIVE"
echo %BATCH_PATH% | findstr /I /C:"\StarCitizen\PTU\data" >nul
if not errorlevel 1 set "environment=PTU"
call :GetGameVersion
echo Detected: !environment! (version: !game_version!)

:: Display language options
echo.
echo Select the language you want to install:
echo 1. English / Remove "g_language"
echo 2. French - France
echo 3. German - Germany
echo 4. Italian - Italy
echo 5. Korean - South Korea
echo 6. Portuguese - Brazil
echo 7. Spanish - Spain
echo 8. Turkish - Turkey

echo Enter the number of the language you want to select.
:LanguageInput
set /p lang_choice="Language number: "
if not defined lang_list[%lang_choice%] (
    echo Invalid choice. Please enter a number from 1 to 8.
    goto LanguageInput
)
set "language=!lang_list[%lang_choice%]!"

:: Language-specific operations
if "!language!"=="english" (
    echo Removing translation...
    goto RemoveLanguage
)

:: Turkish workaround: download from turkish_(turkey) but install to german_(germany)
set "download_language=!language!"
set "install_language=!language!"
if "!language!"=="turkish_(turkey)" (
    set "download_language=turkish_(turkey)"
    set "install_language=german_(germany)"
    echo Note: Turkish is installed via the german_^(germany^) folder ^(game engine limitation^).
)

:: Create language folder
IF NOT EXIST ".\Localization\!install_language!" mkdir .\Localization\!install_language!

:: Set branch on repository
set "reference=main"
if "!environment!"=="PTU" set "reference=ptu"

:: Download language file
echo.
echo Downloading language file for !download_language!...
if exist "global.ini" del /F "global.ini"
curl -f -L -s -o "global.ini" "https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/!reference!/data/Localization/!download_language!/global.ini"
if errorlevel 1 (
    if exist "global.ini" del /F "global.ini"
)
if not exist "global.ini" (
    echo The language "!download_language!" does not exist. Check the status of translations at: 
    echo https://github.com/Dymerz/StarCitizen-Localization#supported-languages
    pause
    exit /b
)
move /y global.ini ".\Localization\!install_language!\global.ini" > nul

:: Update user.cfg
echo Updating user.cfg...
if exist user.cfg.new del /F user.cfg.new

set "language_line=g_language = !install_language!"
set "language_line_audio=g_languageAudio = english"

if not exist "../user.cfg" (
    echo !language_line! > ../user.cfg
    echo !language_line_audio! >> ../user.cfg
) else (
    set "foundLanguage=0"
    set "foundLanguageAudio=0"

    for /f "delims=" %%a in (../user.cfg) do (
        set "line=%%a"
        if /i "!line:~0,10!" == "g_language" (
            if "!foundLanguage!" == "0" (
              echo !language_line!>> user.cfg.new
              set "foundLanguage=1"
            )
        ) else (
            if /i "!line:~0,15!" == "g_languageAudio" (
                if "!foundLanguageAudio!" == "0" (
                  echo !language_line_audio!>> user.cfg.new
                  set "foundLanguageAudio=1"
                )
            ) else (
                echo !line!>> user.cfg.new
            )
        )
    )
    if "!foundLanguage!"=="0" (
        echo !language_line!>> user.cfg.new
    )
    if "!foundLanguageAudio!"=="0" (
        echo !language_line_audio!>> user.cfg.new
    )
    move /y user.cfg.new ..\user.cfg > nul
)

:: Finished Instatlation
echo.
echo Script completed successfully.
echo You can now enjoy Star Citizen in !language!.
pause
goto :eof

:: Remove g_language from user.cfg to use default language (english). Also delete Localization folder
:RemoveLanguage
for /f "delims=" %%a in (../user.cfg) do (
    set "line=%%a"
    if /i not "!line:~0,10!" == "g_language" (
        echo !line!>> user.cfg.new
    )
)
IF EXIST ".\Localization\" RD /S /Q .\Localization\
move /y user.cfg.new ..\user.cfg > nul
echo g_language entry has been removed.
echo You can now enjoy Star Citizen in english!
pause
goto :eof

:: Set errorlevel 0 if the given path ends with \StarCitizen\LIVE\data or \StarCitizen\PTU\data
:IsDataFolder
echo %~1\| findstr /I /R /C:"\\StarCitizen\\LIVE\\data\\$" /C:"\\StarCitizen\\PTU\\data\\$" >nul
goto :eof

:: Get the installed game version (e.g. 4.10.3) into "game_version".
:: "build_manifest.id" only holds the major branch (e.g. "sc-alpha-4.10.0"), so the patch version
:: is resolved by matching the manifest change number against the RSI Launcher log, then the game
:: log. Falls back to the manifest branch.
:GetGameVersion
set "game_version=unknown"
set "manifest=..\build_manifest.id"
if not exist "%manifest%" goto :eof

set "change_num="
set "manifest_branch="
for /f "tokens=1,* delims=:" %%a in ('findstr /L /C:"RequestedP4ChangeNum" "%manifest%"') do set "change_num=%%b"
for /f "tokens=1,* delims=:" %%a in ('findstr /L /C:"Branch" "%manifest%"') do set "manifest_branch=%%b"
if defined change_num set "change_num=!change_num:"=!"
if defined change_num set "change_num=!change_num:,=!"
if defined change_num set "change_num=!change_num: =!"
if defined manifest_branch set "manifest_branch=!manifest_branch:"=!"
if defined manifest_branch set "manifest_branch=!manifest_branch:,=!"
if defined manifest_branch set "manifest_branch=!manifest_branch: =!"
if defined manifest_branch set "game_version=!manifest_branch!"
if not defined change_num goto :eof

:: RSI Launcher log: "Delta update completed (SC LIVE 4.10.3-live.13220821) in ..."
set "log_line="
set "launcher_log=%APPDATA%\rsilauncher\logs\log.log"
if exist "%launcher_log%" (
    for /f "delims=" %%l in ('findstr /L /C:"SC %environment% " "%launcher_log%" ^| findstr /L /C:".%change_num%)"') do set "log_line=%%l"
)
if defined log_line (
    set "log_rest=!log_line:*SC %environment% =!"
    for /f "delims=-" %%v in ("!log_rest!") do set "game_version=%%v"
    goto :eof
)

:: Game log (only written when the game runs): "Branch: sc-alpha-4.10.2" + "build_version[12913470]"
if not exist "..\Game.log" goto :eof
findstr /L /C:"build_version[%change_num%]" "..\Game.log" >nul || goto :eof
set "game_branch="
for /f "delims=" %%l in ('findstr /L /C:"> Branch: " "..\Game.log"') do if not defined game_branch set "game_branch=%%l"
if not defined game_branch goto :eof
set "game_branch=!game_branch:*Branch: =!"
:StripBranchPrefix
if not "!game_branch:-=!"=="!game_branch!" (
    set "game_branch=!game_branch:*-=!"
    goto StripBranchPrefix
)
set "game_version=!game_branch!"
goto :eof

endlocal