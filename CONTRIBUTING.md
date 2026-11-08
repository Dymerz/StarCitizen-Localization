# Contributing

## Add a new language

1. Create a folder under `data/Localization` with the name of the language you want to add, for example `french_(france)`.
2. Copy the `english` folder and rename it to the language you want to add.
3. Translate the strings in the `global.ini` file.
4. Create a translated README for your language:
   1. Copy `README.md` and name the copy `README_<code>.md`, using a short language code, for example `README_fr.md`, `README_de.md` or `README_ptbr.md`.
   2. Translate its content into your language.
   3. In the **Versions** section, point the `LIVE` and `PTU` links to your new file, for example:
      ```markdown
      - [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_fr.md)
      - [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_fr.md)
      ```
5. Link your new README in **every** README file (`README.md`, `README_fr.md`, `README_de.md`, ...), including your own. Add a line at the end of the **Languages** list, following the existing format: the country flag, then the link text written in your language.
   ```markdown
   - 🇬🇧 [Instructions in English.](README.md).
   - 🇫🇷 [Instruction en Français](README_fr.md).
   ...
   - 🇹🇷 [Türkçe Talimatlar](README_tr.md).
   - 🇵🇱 [Instrukcje po polsku](README_pl.md).
   ```
   Keep the list in the same order in all READMEs.

## How to contribute

1. Fork this repository
2. Create a new branch
3. Make your changes
4. Commit your changes

## How to validate your language file

see [ini-utils](tools/ini-utils/README.md) for more information.