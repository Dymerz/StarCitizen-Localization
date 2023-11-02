# StarCitizen-Localization 🌎

![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)


- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).

**Table of Contents:**
  - [Supported Languages](#supported-languages)
  - [Installation Guide](#installation-guide)
  - [Updating the Localization Files](#contributing)
  - [Contributing](#contributing)
  - [Disclaimer](#Disclaimer)

---
## Supported Languages

| Langue | Supported | Source |
|---|---|---|
| English | ✅ 3.21.0 | Imported from game files |
| French - France | ✅ 3.21.0 | Generated from [circuspes.fr](https://traduction.circuspes.fr) and [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| German - Germany | ✅ 3.21.0 | Here |
| Italian - Italy | ✅ 3.21.0 |
| Portuguese - Brazil | ✅ 3.21.0 | Here |
| Spanish - Latin America | ❌ |
| Spanish - Spain | ✅ 3.21.0 | Here |

---
## Installation Guide

### Automatic Installation
1. Download the [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) script (Press `CTRL + S` to download)
2. Place the downloaded file in the `\StarCitizen\LIVE\data\` folder. (e.g. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data`)
3. Execute the `install_localization.cmd` and follow the instructions.
    > ℹ️ This script will automatically download the latest version of the localization files, install them in the `Localization` folder for you, configure the `user.cfg` file.
4. Launch the game and enjoy the translation!

### Manual Installation
1. Download the [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) file.
2. Extract the downloaded file to `\StarCitizen\LIVE\data\`. (e.g. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`)
3. Create or edit the following file: `\StarCitizen\LIVE\user.cfg`. (e.g. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`)
4. Depending on the language you want to use, add one of the following lines to the file:

    | Language |   |
    |---|---|
    | English | `g_language = english` |
    | French - France | `g_language = french_(france)` |
    | German - Germany | `g_language = german_(germany)` |
    | Italian - Italy | `g_language = italian_(italy)` |
    | Portuguese - Brazil | `g_language = portuguese_(brazil)` |
    | Spanish - Latin America | `g_language = spanish_(latin_america)` |
    | Spanish - Spain | `g_language = spanish_(spain) ` |

5. Save the file and launch the game. 🚀

---
## Updating the Localization Files
To update the localization files, please follow the [Installation Guide](#installation-guide) again.

---
## Contributing
[See CONTRIBUTING.md](CONTRIBUTING.md)

---
## Contributors
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://rob-games.zapto.org/"><img src="https://avatars.githubusercontent.com/u/9892024?v=4?s=100" width="100px;" alt="ROBdk97"/><br /><sub><b>ROBdk97</b></sub></a><br /><a href="#translation-ROBdk97" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Autovot"><img src="https://avatars.githubusercontent.com/u/87210193?v=4?s=100" width="100px;" alt="Autovot"/><br /><sub><b>Autovot</b></sub></a><br /><a href="#translation-Autovot" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/electronicfreak"><img src="https://avatars.githubusercontent.com/u/11193801?v=4?s=100" width="100px;" alt="electronicfreak"/><br /><sub><b>electronicfreak</b></sub></a><br /><a href="#translation-electronicfreak" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jack-mk"><img src="https://avatars.githubusercontent.com/u/22667101?v=4?s=100" width="100px;" alt="Jack"/><br /><sub><b>Jack</b></sub></a><br /><a href="#translation-Jack-mk" title="Translation">🌍</a> <a href="#projectManagement-Jack-mk" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Auhrus"><img src="https://avatars.githubusercontent.com/u/57270834?v=4?s=100" width="100px;" alt="Auhrus"/><br /><sub><b>Auhrus</b></sub></a><br /><a href="#translation-Auhrus" title="Translation">🌍</a> <a href="#projectManagement-Auhrus" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Nxzzin"><img src="https://avatars.githubusercontent.com/u/148262077?v=4?s=100" width="100px;" alt="Nxzzin"/><br /><sub><b>Nxzzin</b></sub></a><br /><a href="#translation-Nxzzin" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Disclaimer
This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners. Star Citizen®, Roberts Space Industries® and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC
