@echo off
setlocal enabledelayedexpansion

set "releases_url=https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/"

rem List of languages
set "lang_list[1]=chinese_(simplified)"
set "lang_list[2]=chinese_(traditional)"
set "lang_list[3]=english"
set "lang_list[4]=french_(france)"
set "lang_list[5]=german_(germany)"
set "lang_list[6]=italian_(italy)"
set "lang_list[7]=japanese_(japan)"
set "lang_list[8]=korean_(south_korea)"
set "lang_list[9]=polish_(poland)"
set "lang_list[10]=portuguese_(brazil)"
set "lang_list[11]=spanish_(latin_america)"
set "lang_list[12]=spanish_(spain)"

rem Get the current directory
set "current_directory=%CD%"
set BATCH_PATH=%~dp0
set BATCH_PATH=%BATCH_PATH:~0,-1%

rem Check if the script is executed from the "\StarCitizen\[Live or PTU]\Data" folder
echo %BATCH_PATH% | findstr /I /C:"\StarCitizen\LIVE\data" >nul
if errorlevel 1 (
    echo %BATCH_PATH% | findstr /I /C:"\StarCitizen\PTU\data" >nul
    if errorlevel 1 (
        echo:
        echo This script must be executed from the "\StarCitizen\[LIVE or PTU]\data" folder.
        pause
        exit /b
    )
)

rem Ask the user to select the language to install
echo Select the language you want to install:
echo 1. Chinese - Simplified
echo 2. Chinese - Traditional
echo 3. English
echo 4. French - France
echo 5. German - Germany
echo 6. Italian - Italy
echo 7. Japanese - Japan
echo 8. Korean - South
echo 9. Polish - Poland
echo 10. Portuguese - Brazil
echo 11. Spanish - Latin
echo 12. Spanish - Spain

echo:
echo Enter the number of the language you want to install, e.g. 3 for English.
set /p lang_choice="Language number: "

if "!lang_list[%lang_choice%]!" == "" (
  echo:
  echo "The number you entered is not valid."
  pause
  exit /b
)

@REM Get the language name from the list
set "language=!lang_list[%lang_choice%]!"

@REM Create the language folder if it does not exist
IF NOT EXIST ".\Localization\!language!" mkdir .\Localization\!language!

@REM echo Downloading the latest version of the localization files...
set "reference=main"
curl -L -s -o "global.ini" "https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/!reference!/data/Localization/!language!/global.ini"

rem Check if the selected language exists
IF NOT EXIST "global.ini" (
  echo:
  echo The language "!language!" does not exist.
  echo:
  echo Maybe the language is not available yet, you can check the status of the translations here:
  echo https://github.com/Dymerz/StarCitizen-Localization#supported-languages
  pause
  exit /b
)

move /y global.ini ".\Localization\!language!\global.ini" > nul

rem Delete the user.cfg.new file if it exists
IF EXIST user.cfg.new DEL /F user.cfg.new

@REM Prepare the language line to add to the user.cfg file
set "language_line=g_language = !language!"

rem Check if the ..\user.cfg file exists, if not, create it
if not exist "../user.cfg" (
  echo !language_line! > ../user.cfg
) else (
  rem Replace the language or add it if it does not exist
  for /f "delims=" %%a in (../user.cfg) do (
    set "line=%%a"
    if /i "!line:~0,10!" == "g_language" (
      echo !language_line!>> user.cfg.new
    ) else (
      echo !line!>> user.cfg.new
    )
  )
  move /y user.cfg.new ..\user.cfg > nul
)

echo:
echo You can now enjoy Star Citizen in !language!
pause
endlocal