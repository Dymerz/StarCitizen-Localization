# StarCitizen-Übersetzung 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Versionen:**
- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_de.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_de.md)

**Sprachen:**
- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).

**Inhaltsverzeichnis:**
- [Unterstützte Sprachen](#unterstützte-sprachen)
- [Installationsanleitung](#installationsanleitung)
- [Aktualisieren der Lokalisierungsdateien](#aktualisieren-der-lokalisierungsdateien)
- [Beitragen](#beitragen)
- [Haftungsausschluss](#haftungsausschluss)

---
## Unterstützte Sprachen

| Sprache                 | Unterstützt | Quelle |
|--------------------------|-------------|--------|
| Englisch                | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Aus Spieldateien importiert |
| Französisch - Frankreich | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Generiert von [circuspes.fr](https://traduction.circuspes.fr) |
| Deutsch - Deutschland   | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Hier |
| Portugiesisch - Brasilien| ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Hier |
| Italienisch - Italien   | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) und [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Spanisch - Spanien      | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Hier |
| Spanisch - Lateinamerika| ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Warten auf Beitrag |
| Chinesisch - Vereinfacht| ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Warten auf Beitrag |
| Chinesisch - Traditionell| ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Warten auf Beitrag |
| Japanisch - Japan       | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Warten auf Beitrag |
| Koreanisch - Südkorea   | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Warten auf Beitrag |
| Polnisch - Polen        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Warten auf Beitrag |

---
## Installationsanleitung

### Einfachste Installationsmethode (PowerShell)

Kopieren und fügen Sie einfach diesen **einzelnen Befehl** in PowerShell ein, um die Star Citizen Übersetzungen automatisch zu installieren:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Einfache Schritte:**
> 1. Drücken Sie `Win+X` und wählen Sie "Windows PowerShell" oder "Terminal"
> 2. Kopieren Sie den obigen Befehl
> 3. Fügen Sie ihn in PowerShell ein und drücken Sie Enter
> 4. Folgen Sie den Anweisungen auf dem Bildschirm, um Ihre Sprache auszuwählen

### Automatische Installation (Alternative)

1. Laden Sie das Script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1) herunter.
2. **Rechtsklicken** Sie auf die Datei und wählen `Mit PowerShell ausführen`.
3. Folgen Sie den Anweisungen.
4. Starten Sie das Spiel und genießen Sie die Übersetzung!

> **Hinweis:** Bei einer Fehlermeldung:
> - Öffnen Sie PowerShell im Ordner mit **install_localization.ps1** und führen Sie:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
>   Dies ist erforderlich, da Windows das Ausführen von Skripten aufgrund von Sicherheitseinstellungen verhindern kann.

> **Alternative:** Verwenden Sie [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd):
> - Stellen Sie sicher, dass ein `data`-Ordner in Ihrem Spielverzeichnis existiert (z. B. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Legen Sie **install_localization.cmd** in diesem `data`-Ordner ab und doppelklicken Sie, um es auszuführen.

### Manuelle Installation

1. Laden Sie [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) herunter.
2. Extrahieren Sie die Dateien nach `\StarCitizen\LIVE\data\` (z. B., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Erstellen/bearbeiten Sie `\StarCitizen\LIVE\user.cfg`.
4. Fügen Sie die folgenden Zeilen hinzu, um Sprache und Audiosprache einzustellen:
   ```plaintext
   g_language = german_(germany)
   g_languageAudio = english
   ```
   > Audiosprache muss English sein
5. Speichern Sie die Datei `user.cfg` und starten Sie das Spiel. 🚀

#### Beispiel `user.cfg` Datei:
```plaintext
g_language = german_(germany)
g_languageAudio = english
```

---
## Aktualisieren der Lokalisierungsdateien
Um die Lokalisierungsdateien zu aktualisieren, folgen Sie bitte erneut der [Installationsanleitung](#installationsanleitung).

---
## Beitragen
[Siehe CONTRIBUTING.md](CONTRIBUTING.md)

---
## Mitwirkende
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
## Statistik
![Alt](https://repobeats.axiom.co/api/embed/771a52550a3333c3934d1fb5a03fffa14119471a.svg "Repobeats analytics image")

---
## Haftungsausschluss
Dies ist eine inoffizielle Star Citizen Fanseite und steht in keiner Verbindung zur Cloud Imperium Unternehmensgruppe. Alle Inhalte auf dieser Seite, die nicht vom Host oder den Benutzern erstellt wurden, sind Eigentum ihrer jeweiligen Besitzer. Star Citizen®, Roberts Space Industries® und Cloud Imperium® sind eingetragene Marken von Cloud Imperium Rights LLC.
