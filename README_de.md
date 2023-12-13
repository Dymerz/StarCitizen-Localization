# StarCitizen-Übersetzung 🌎

![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)


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

| Sprache | Unterstützt | Quelle |
|---|---|---|
| Englisch | ✅ 3.21.1 | Importiert aus den Spieldateien |
| Französisch - Frankreich | ✅ 3.21.1 | Generiert von [circuspes.fr](https://traduction.circuspes.fr) und [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| Deutsch - Deutschland | ✅ 3.21.1 | Hier |
| Italienisch - Italien | ✅ 3.21.0 | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) und [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Portugiesisch - Brasilien | ✅ 3.21.1 | Hier |
| Spanisch - Lateinamerika | ❌ |
| Spanisch - Spanien | ✅ 3.21.0 | Hier |

---
## Installationsanleitung

### Automatische Installation
1. Laden Sie das [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) Skript herunter (Drücken Sie `CTRL + S` zum Herunterladen)
2. Legen Sie die heruntergeladene Datei im Ordner `\StarCitizen\LIVE\data\` ab. (z.B. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data`)
3. Führen Sie das `install_localization.cmd` aus und folgen Sie den Anweisungen.
    > ℹ️ Dieses Skript wird automatisch die neueste Version der Übersetzungsdateien herunterladen, sie im Ordner `Localization` für Sie installieren und die Datei `user.cfg` konfigurieren.
4. Starten Sie das Spiel und genießen Sie die Übersetzung! 🚀

### Manuelle Installation
1. Laden Sie die Datei [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) herunter.
2. Entpacken Sie die heruntergeladene Datei nach `\StarCitizen\LIVE\data\`. (z.B. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`)
3. Erstellen oder bearbeiten Sie die folgende Datei: `\StarCitizen\LIVE\user.cfg`. (z.B. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`)
4. Fügen Sie, je nachdem welche Sprache Sie verwenden möchten, eine der folgenden Zeilen zur Datei hinzu:

    | Sprache |   |
    |---|---|
    | Englisch | `g_language = english` |
    | Französisch - Frankreich | `g_language = french_(france)` |
    | Deutsch - Deutschland | `g_language = german_(germany)` |
    | Italienisch - Italien | `g_language = italian_(italy)` |
    | Portugiesisch - Brasilien | `g_language = portuguese_(brazil)` |
    | Spanisch - Lateinamerika | `g_language = spanish_(latin_america)` |
    | Spanisch - Spanien | `g_language = spanish_(spain) ` |

5. Speichern Sie die Datei und starten Sie das Spiel. 🚀

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
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Haftungsausschluss
Dies ist eine inoffizielle Star Citizen Fanseite und steht in keiner Verbindung zur Cloud Imperium Unternehmensgruppe. Alle Inhalte auf dieser Seite, die nicht vom Host oder den Benutzern erstellt wurden, sind Eigentum ihrer jeweiligen Besitzer. Star Citizen®, Roberts Space Industries® und Cloud Imperium® sind eingetragene Marken von Cloud Imperium Rights LLC.
