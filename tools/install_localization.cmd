@echo off
setlocal enabledelayedexpansion

:: Define the languages
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

:: Check the directory
set BATCH_PATH=%~dp0
set BATCH_PATH=%BATCH_PATH:~0,-1%
echo %BATCH_PATH% | findstr /I /C:"\StarCitizen\LIVE\data" >nul || echo %BATCH_PATH% | findstr /I /C:"\StarCitizen\PTU\data" >nul
if errorlevel 1 (
    echo This script must be executed from the "\StarCitizen\[LIVE or PTU]\data" folder.
    pause
    exit /b
)

:: Display language options
echo Select the language you want to install or choose 13 to remove g_language:
echo 1. Chinese - Simplified
echo 2. Chinese - Traditional
echo 3. English / Remove "g_language"
echo 4. French - France
echo 5. German - Germany
echo 6. Italian - Italy
echo 7. Japanese - Japan
echo 8. Korean - South Korea
echo 9. Polish - Poland
echo 10. Portuguese - Brazil
echo 11. Spanish - Latin America
echo 12. Spanish - Spain

echo Enter the number of the language you want to select.
set /p lang_choice="Language number: "

:: Check for valid choice
if not defined lang_list[%lang_choice%] (
    echo Invalid choice.
    pause
    exit /b
)
set "language=!lang_list[%lang_choice%]!"

:: Option to remove g_language if english is chosen
if "!language!"=="english" goto RemoveLanguage

:: Download language file
IF NOT EXIST ".\Localization\!language!" mkdir .\Localization\!language!
set "reference=main"
curl -L -s -o "global.ini" "https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/!reference!/data/Localization/!language!/global.ini"
if not exist "global.ini" (
    echo The language "!language!" does not exist. Check the status of translations at: 
    echo https://github.com/Dymerz/StarCitizen-Localization#supported-languages
    pause
    exit /b
)
move /y global.ini ".\Localization\!language!\global.ini" > nul

:: Update user.cfg
if exist user.cfg.new del /F user.cfg.new

set "language_line=g_language = !language!"
set "language_line_audio=g_languageAudio = english"

if not exist "../user.cfg" (
    echo !language_line! > ../user.cfg
    echo !language_line_audio! > ../user.cfg
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
echo Script completed successfully.
if "!language!" neq "english" echo You can now enjoy Star Citizen in !language!.
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

endlocal