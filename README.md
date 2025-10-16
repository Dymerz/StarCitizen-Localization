# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Versions:**
- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README.md)

**Languages:**
- 🇬🇧 [Instructions in English.](README.md).
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

| Language                 | Supported | Source |
|--------------------------|-----------|--------|
| English                  | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Imported from game files |
| French - France          | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Generated from [circuspes.fr](https://traduction.circuspes.fr) |
| German - Germany         | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Here |
| Portuguese - Brazil      | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Here |
| Italian - Italy          | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) and [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Spanish - Spain          | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Here |
| Spanish - Latin America  | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Awaiting contribution |
| Chinese - Simplified     | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Awaiting contribution |
| Chinese - Traditional    | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Awaiting contribution |
| Japanese - Japan         | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Awaiting contribution |
| Korean - South Korea     | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Awaiting contribution |
| Polish - Poland          | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Awaiting contribution |

---
## Installation Guide

### Easiest Installation Method (PowerShell)

Just copy and paste this **single command** into PowerShell to automatically install Star Citizen translations:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Simple Steps:**
> 1. Press `Win+X` and select "Windows PowerShell" or "Terminal"
> 2. Copy the command above
> 3. Paste into PowerShell and press Enter
> 4. Follow the on-screen prompts to select your language

### Automatic Installation (Alternative)

1. Download the [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1) script.
2. **Right-click on the downloaded file** (**install_localization.ps1**) and select `Run with PowerShell`.
3. Follow the instructions, and the script will automatically download the latest localization files, install them in the `Localization` folder, and configure the `user.cfg` file.
4. Launch the game and enjoy the translation!

> **Note:** If you encounter an execution policy error:
> - Open the folder where the **install_localization.ps1** script is saved, right-click in the folder, and select **Open in PowerShell**.
> - Run the following command to bypass the execution policy:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
>   This is needed because Windows may prevent scripts from running due to security settings.

> **Alternative Option:** Use the [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) script:
> - Ensure a `data` folder exists in your game directory (e.g., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Place **install_localization.cmd** into the `data` folder and double-click to run it.

---
### Manual Installation

1. Download the [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) file.
2. Extract the files to `\StarCitizen\LIVE\data\` (e.g., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Create/edit `\StarCitizen\LIVE\user.cfg` (e.g., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. Add the language line to `user.cfg`:

| Language                  | Configuration                 |
|---------------------------|-------------------------------|
| English                   | `g_language = english`        |
| French - France           | `g_language = french_(france)`|
| German - Germany          | `g_language = german_(germany)`|
| Portuguese - Brazil       | `g_language = portuguese_(brazil)` |
| Italian - Italy           | `g_language = italian_(italy)` |
| Spanish - Spain           | `g_language = spanish_(spain)` |
| Spanish - Latin America   | `g_language = spanish_(latin_america)` |
| Chinese - Simplified      | `g_language = chinese_(simplified)` |
| Chinese - Traditional     | `g_language = chinese_(traditional)` |
| Japanese - Japan          | `g_language = japanese_(japan)` |
| Korean - South Korea      | `g_language = korean_(south_korea)` |
| Polish - Poland           | `g_language = polish_(poland)` |

5. Always add audio language english:
   ```plaintext
   g_languageAudio = english
   ```
6. Save the `user.cfg` file, and launch the game. 🚀

#### Example `user.cfg` File:
```plaintext
g_language = french_(france)
g_languageAudio = english
```

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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ROBdk97"><img src="https://avatars.githubusercontent.com/u/9892024?v=4?s=100" width="100px;" alt="ROBdk97"/><br /><sub><b>ROBdk97</b></sub></a><br /><a href="#translation-ROBdk97" title="Translation">🌍</a> <a href="#projectManagement-ROBdk97" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Autovot"><img src="https://avatars.githubusercontent.com/u/87210193?v=4?s=100" width="100px;" alt="Autovot"/><br /><sub><b>Autovot</b></sub></a><br /><a href="#translation-Autovot" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/electronicfreak"><img src="https://avatars.githubusercontent.com/u/11193801?v=4?s=100" width="100px;" alt="electronicfreak"/><br /><sub><b>electronicfreak</b></sub></a><br /><a href="#translation-electronicfreak" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jack-mk"><img src="https://avatars.githubusercontent.com/u/22667101?v=4?s=100" width="100px;" alt="Jack"/><br /><sub><b>Jack</b></sub></a><br /><a href="#translation-Jack-mk" title="Translation">🌍</a> <a href="#projectManagement-Jack-mk" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Auhrus"><img src="https://avatars.githubusercontent.com/u/57270834?v=4?s=100" width="100px;" alt="Auhrus"/><br /><sub><b>Auhrus</b></sub></a><br /><a href="#translation-Auhrus" title="Translation">🌍</a> <a href="#projectManagement-Auhrus" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Nxzzin"><img src="https://avatars.githubusercontent.com/u/148262077?v=4?s=100" width="100px;" alt="Nxzzin"/><br /><sub><b>Nxzzin</b></sub></a><br /><a href="#translation-Nxzzin" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/InterPlay02"><img src="https://avatars.githubusercontent.com/u/23037423?v=4?s=100" width="100px;" alt="InterPlay"/><br /><sub><b>InterPlay</b></sub></a><br /><a href="#translation-InterPlay02" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Brill65"><img src="https://avatars.githubusercontent.com/u/8363399?v=4?s=100" width="100px;" alt="Manu"/><br /><sub><b>Manu</b></sub></a><br /><a href="#review-Brill65" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/danidomen"><img src="https://avatars.githubusercontent.com/u/5998908?v=4?s=100" width="100px;" alt="Daniel Martin (dmartin-webimpacto)"/><br /><sub><b>Daniel Martin (dmartin-webimpacto)</b></sub></a><br /><a href="#translation-danidomen" title="Translation">🌍</a></td>
	  <td align="center" valign="top" width="14.28%"><a href="https://github.com/xGattoMattox"><img src="https://avatars.githubusercontent.com/u/149336969?v=4?s=100" width="100px;" alt="xGattoMattox"/><br /><sub><b>xGattoMattox</b></sub></a><br /><a href="#translation-xGattoMattox" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Analytics
![Alt](https://repobeats.axiom.co/api/embed/771a52550a3333c3934d1fb5a03fffa14119471a.svg "Repobeats analytics image")

---
## Disclaimer
This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners. Star Citizen®, Roberts Space Industries® and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC
