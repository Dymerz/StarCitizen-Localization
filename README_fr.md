# StarCitizen-Localization

![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)


- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).


**Table des matières :**
1. [Langues Prises en Charge](#langues-prises-en-charge)
2. [Guide d'Installation](#guide-dinstallation)
3. [Mise à Jour des Fichiers de Localisation](#mise-à-jour-des-fichiers-de-localisation)
4. [Contribuer](#contribuer)
5. [Avis de non-responsabilité](#avis-de-non-responsabilité)

---
## Langues Prises en Charge

| Langue | Pris en Charge | Source |
|---|---|---|
| Anglais | ✅ 3.21.1 | Importé des fichiers du jeu |
| Français - France | ✅ 3.21.1 | Généré à partir de [circuspes.fr](https://traduction.circuspes.fr) et [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| Allemand - Allemagne | ✅ 3.21.1 | Ici |
| Italien - Italie | ✅ 3.21.0 | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) et [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Portugais - Brésil | ✅ 3.21.1 | Ici |
| Espagnol - Amérique latine | ❌ |
| Espagnol - Espagne | ✅ 3.21.0 | Ici |

---
## Guide d'Installation

### Installation Automatique
1. Téléchargez le script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. Faites un clic droit sur le fichier téléchargé (**install_localization.ps1**) et sélectionnez `Exécuter avec PowerShell`.
   > ℹ️ Ce script téléchargera automatiquement la dernière version des fichiers de localisation, les installera dans le dossier `Localization` pour vous, et configurera le fichier `user.cfg`.
3. Lancez le jeu et profitez de la traduction ! 🚀

### Installation Manuelle
1. Téléchargez le fichier [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Extrayez le fichier téléchargé dans `\StarCitizen\LIVE\data\`. (ex: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`)
3. Créez ou modifiez le fichier suivant : `\StarCitizen\LIVE\user.cfg`. (ex: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`)
4. Selon la langue que vous souhaitez utiliser, ajoutez l'une des lignes suivantes au fichier :

    | Language  |   |
    |---|---|
    | Anglais | `g_language = english` |
    | Français - France | `g_language = french_(france)` |
    | Allemand - Allemagne | `g_language = german_(germany)` |
    | Italien - Italie | `g_language = italian_(italy)` |
    | Portugais - Brésil | `g_language = portuguese_(brazil)` |
    | Espagnol - Amérique Latine | `g_language = spanish_(latin_america)` |
    | Espagnol - Espagne | `g_language = spanish_(spain) ` |

5. Lancez le jeu et profitez de la traduction ! 🚀

---
## Mise à Jour des Fichiers de Localisation
Pour mettre à jour les fichiers de localisation, veuillez suivre à nouveau le [Guide d'Installation](#guide-dinstallation).

---
## Contribuer
[Voir CONTRIBUTING.md](CONTRIBUTING.md)

---
## Contributeurs
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
## Avis de non-responsabilité
Il s'agit d'un site de fans non officiel de Star Citizen, sans affiliation avec le groupe de sociétés Cloud Imperium. Tout le contenu de ce site qui n'a pas été rédigé par son hôte ou ses utilisateurs est la propriété de leurs propriétaires respectifs. Star Citizen®, Roberts Space Industries® et Cloud Imperium® sont des marques déposées de Cloud Imperium Rights LLC.
