# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Versions :**
- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_fr.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_fr.md)

**Langues :**
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

| Langue                  | Pris en charge | Source |
|--------------------------|----------------|--------|
| Anglais                 | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Importé des fichiers du jeu |
| Français - France       | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Généré depuis [circuspes.fr](https://traduction.circuspes.fr) |
| Allemand - Allemagne    | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Ici |
| Portugais - Brésil      | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Ici |
| Italien - Italie        | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) et [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Espagnol - Espagne      | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Ici |
| Espagnol - Amérique latine | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | En attente de contribution |
| Chinois - Simplifié     | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | En attente de contribution |
| Chinois - Traditionnel  | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | En attente de contribution |
| Japonais - Japon        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | En attente de contribution |
| Coréen - Corée du Sud   | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | En attente de contribution |
| Polonais - Pologne      | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | En attente de contribution |

---
## Guide d'Installation

### Méthode d'Installation la Plus Simple (PowerShell)

Copiez et collez simplement cette **commande unique** dans PowerShell pour installer automatiquement les traductions de Star Citizen :

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Étapes Simples :**
> 1. Appuyez sur `Win+X` et sélectionnez "Windows PowerShell" ou "Terminal"
> 2. Copiez la commande ci-dessus
> 3. Collez-la dans PowerShell et appuyez sur Entrée
> 4. Suivez les instructions à l'écran pour sélectionner votre langue

### Installation Automatique (Alternative)

1. Téléchargez le script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. **Cliquez droit** sur le fichier téléchargé (**install_localization.ps1**) et sélectionnez `Exécuter avec PowerShell`.
3. Suivez les instructions ; le script téléchargera et installera les fichiers de traduction dans le dossier `Localization` et configurera `user.cfg`.
4. Lancez le jeu et profitez de la traduction !

> **Remarque :** Si vous rencontrez une erreur de stratégie d'exécution :
> - Cliquez droit dans le dossier où est enregistré **install_localization.ps1** et sélectionnez **Ouvrir dans PowerShell**.
> - Exécutez :
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
>   Cela est nécessaire car Windows peut bloquer l’exécution des scripts en raison de paramètres de sécurité.

> **Option alternative :** Utilisez le script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) :
> - Assurez-vous que le dossier `data` existe dans votre répertoire de jeu (par exemple, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Placez **install_localization.cmd** dans le dossier `data` et double-cliquez pour l'exécuter.

### Installation manuelle

1. Téléchargez [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Extrayez les fichiers dans `\StarCitizen\LIVE\data\` (par exemple, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Créez/modifiez `\StarCitizen\LIVE\user.cfg`.
4. Ajoutez les lignes suivantes pour configurer la langue et la langue audio :
   ```plaintext
   g_language = french_(france)
   g_languageAudio = english
   ```
   > La langue audio doit être l'anglais.
5. Enregistrez le fichier `user.cfg` et lancez le jeu. 🚀

#### Exemple de fichier `user.cfg` :
```plaintext
g_language = french_(france)
g_languageAudio = english
```

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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/danidomen"><img src="https://avatars.githubusercontent.com/u/5998908?v=4?s=100" width="100px;" alt="Daniel Martin (dmartin-webimpacto)"/><br /><sub><b>Daniel Martin (dmartin-webimpacto)</b></sub></a><br /><a href="#translation-danidomen" title="Translation">🌍</a></td>
	  <td align="center" valign="top" width="14.28%"><a href="https://github.com/xGattoMattox"><img src="https://avatars.githubusercontent.com/u/149336969?v=4?s=100" width="100px;" alt="xGattoMattox"/><br /><sub><b>xGattoMattox</b></sub></a><br /><a href="#translation-xGattoMattox" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Analytique
![Alt](https://repobeats.axiom.co/api/embed/771a52550a3333c3934d1fb5a03fffa14119471a.svg "Repobeats analytics image")

---
## Avis de non-responsabilité
Il s'agit d'un site de fans non officiel de Star Citizen, sans affiliation avec le groupe de sociétés Cloud Imperium. Tout le contenu de ce site qui n'a pas été rédigé par son hôte ou ses utilisateurs est la propriété de leurs propriétaires respectifs. Star Citizen®, Roberts Space Industries® et Cloud Imperium® sont des marques déposées de Cloud Imperium Rights LLC.
