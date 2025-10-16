# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Versioni:**
- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_it.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_it.md)

**Lingue:**
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

| Lingua                  | Supportato | Fonte |
|--------------------------|------------|-------|
| Inglese                 | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Importato dai file di gioco |
| Francese - Francia      | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Generato da [circuspes.fr](https://traduction.circuspes.fr) |
| Tedesco - Germania      | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Qui |
| Portoghese - Brasile    | ![Static Badge](https://img.shields.io/badge/4.3.2-LIVE-brightgreen) | Qui |
| Italiano - Italia       | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) e [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Spagnolo - Spagna       | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Qui |
| Spagnolo - America Latina | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | In attesa di contributo |
| Cinese - Semplificato   | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | In attesa di contributo |
| Cinese - Tradizionale   | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | In attesa di contributo |
| Giapponese - Giappone   | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | In attesa di contributo |
| Coreano - Corea del Sud | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | In attesa di contributo |
| Polacco - Polonia       | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | In attesa di contributo |

---
## Installazione

### Metodo di Installazione Più Semplice (PowerShell)

Basta copiare e incollare questo **singolo comando** in PowerShell per installare automaticamente le traduzioni di Star Citizen:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Passaggi Semplici:**
> 1. Premi `Win+X` e seleziona "Windows PowerShell" o "Terminal"
> 2. Copia il comando qui sopra
> 3. Incollalo in PowerShell e premi Invio
> 4. Segui le istruzioni a schermo per selezionare la tua lingua

### Installazione Automatica (Alternativa)

1. Scarica lo script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. **Clicca con il tasto destro** sul file scaricato (**install_localization.ps1**) e seleziona `Esegui con PowerShell`.
3. Segui le istruzioni; lo script scaricherà automaticamente i file di localizzazione più recenti, li installerà nella cartella `Localization` e configurerà il file `user.cfg`.
4. Avvia il gioco e goditi la traduzione!

> **Nota:** Se riscontri un errore relativo alla policy di esecuzione:
> - Vai alla cartella dove è salvato **install_localization.ps1**, clicca con il tasto destro e seleziona **Apri in PowerShell**.
> - Esegui il seguente comando per ignorare la policy di esecuzione:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
>   Questo è necessario perché Windows potrebbe impedire l'esecuzione degli script a causa delle impostazioni di sicurezza.

> **Opzione alternativa:** Usa lo script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd):
> - Assicurati che esista una cartella `data` nella directory del gioco (es., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Posiziona **install_localization.cmd** nella cartella `data` e fai doppio clic per eseguirlo.

### Installazione Manuale

1. Scarica il file [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Estrai i file nella cartella `\StarCitizen\LIVE\data\` (es., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Crea o modifica `\StarCitizen\LIVE\user.cfg` (es., `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. Aggiungi le seguenti righe per impostare la lingua e la lingua audio:
   ```plaintext
   g_language = italian_(italy)
   g_languageAudio = english
   ```
   > La lingua audio deve essere inglese.
5. Salva il file `user.cfg` e avvia il gioco. 🚀

#### Esempio di file `user.cfg`:
```plaintext
g_language = italian_(italy)
g_languageAudio = english
```

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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/danidomen"><img src="https://avatars.githubusercontent.com/u/5998908?v=4?s=100" width="100px;" alt="Daniel Martin (dmartin-webimpacto)"/><br /><sub><b>Daniel Martin (dmartin-webimpacto)</b></sub></a><br /><a href="#translation-danidomen" title="Translation">🌍</a></td>
	  <td align="center" valign="top" width="14.28%"><a href="https://github.com/xGattoMattox"><img src="https://avatars.githubusercontent.com/u/149336969?v=4?s=100" width="100px;" alt="xGattoMattox"/><br /><sub><b>xGattoMattox</b></sub></a><br /><a href="#translation-xGattoMattox" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Analisi
![Alt](https://repobeats.axiom.co/api/embed/771a52550a3333c3934d1fb5a03fffa14119471a.svg "Repobeats analytics image")

---
## Disclaimer
This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of companies. All content on this site not authored by its host or users are property of their respective owners. Star Citizen®, Roberts Space Industries® and Cloud Imperium® are registered trademarks of Cloud Imperium Rights LLC
