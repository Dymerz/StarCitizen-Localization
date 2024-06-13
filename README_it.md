# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)


- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).

**Tabella dei contenuti:**
  - [Lingue supportate](#lingue-supportate)
  - [Installazione](#installazione)
  - [Aggiornare i file di localizzazione](#aggiornamenti)
  - [Come contribuire alla localizzazione](#contribuire)
  - [Contributori](#contributors)
  - [Disclaimer](#Disclaimer)

---
## Lingue Supportate

| Lingua | Supportato | Fonte |
|---|---|---|
| Inglese | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-brightgreen) | Importato dai file di gioco |
| Francese - Francia | ![Static Badge](https://img.shields.io/badge/3.22.1-LIVE-brightgreen) | Generato da [circuspes.fr](https://traduction.circuspes.fr) e [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| Tedesco - Germania | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-brightgreen) | Qui |
| Italiano - Italia | ![Static Badge](https://img.shields.io/badge/3.23.0-LIVE-brightgreen) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) e [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Portoghese - Brasile | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-brightgreen)| Qui |
| Spagnolo - America Latina | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) |
| Spagnolo - Spagna | ![Static Badge](https://img.shields.io/badge/3.21.0-LIVE-orange) | Qui |

---
## Installazione

### Installazione Automatica (Italiano non supportato al momento in quanto la traduzione deve ancora iniziare)
1. Scarica lo script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) (Premi `CTRL + S` per scaricare)
2. Inserisci il file scaricato nella cartella `\StarCitizen\LIVE\data\` . (e.g. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data`)
3. Esegui `install_localization.cmd` e segui le istruzioni.
    > ℹ️ Questo script scaricherà automaticamente l'ultima versione dei file di localizzazione, li installerà nella cartella "Localization" e configurerà il file "user.cfg"
4. Avvia il gioco!!

### Installazione Manuale (Italiano non supportato al momento in quanto la traduzione deve ancora iniziare)
1. Scarica il file [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Estrai il file scaricato in `\StarCitizen\LIVE\data\`. (e.g. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`)
3. Crea o modifica il file seguente: `\StarCitizen\LIVE\user.cfg`. (e.g. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`)
4. In base alla lingua che vuoi utilizzare, aggiungi la seguente riga al file:

    | Lingue |   |
    |---|---|
    | Inglese | `g_language = english` |
    | Francese - Francia | `g_language = french_(france)` |
    | Tedesco - Germania | `g_language = german_(germany)` |
    | Italiano - Italia | `g_language = italian_(italy)` |
    | Portoghese (Brasile) - Brasile | `g_language = portuguese_(brazil)` |
    | Spagnolo - America Latina | `g_language = spanish_(latin_america)` |
    | Spagnolo - Spagna | `g_language = spanish_(spain) ` |

5. Salva il file e lancia il gioco. 🚀

---
## Aggiornamenti
Per aggiornare i file di localizzazione, segui nuovamente la guida [Installazione](#installazione).

---
## Contribuire
[Guarda CONTRIBUTING_it.md](CONTRIBUTING_it.md)

---
## Contributori
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
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Disclaimer
This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners. Star Citizen®, Roberts Space Industries® and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC
