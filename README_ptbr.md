# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

- **Versões:** 
  - [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_ptbr.md) 
  - [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_ptbr.md)

- **Idiomas:**
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
## Idiomas Suportados

| Língua | Suportado | Fonte |
|---|---|---|
| Inglês | ![Static Badge](https://img.shields.io/badge/3.24.2-LIVE-brightgreen) | Importado dos arquivos do jogo |
| Francês - França | ![Static Badge](https://img.shields.io/badge/3.24.2-LIVE-brightgreen) | Gerado a partir de [circuspes.fr](https://traduction.circuspes.fr) e [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| Alemão - Alemanha | ![Static Badge](https://img.shields.io/badge/3.24.2-LIVE-brightgreen) | Aqui |
| Italiano - Itália | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) e [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Português - Brasil | ![Static Badge](https://img.shields.io/badge/3.24.2-LIVE-brightgreen)| Aqui |
| Espanhol - América Latina | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) |
| Espanhol - Espanha | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Aqui |

---
## Guia de Instalação

### Instalação Automática
1. Baixe o script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. Clique com o botão direito no arquivo baixado (**install_localization.ps1**) e selecione `Executar com PowerShell`.
   > ℹ️ Este script baixará automaticamente a versão mais recente dos arquivos de localização, os instalará na pasta `Localization` e configurará o arquivo `user.cfg`.
3. Inicie o jogo e aproveite a tradução!
> **Nota:** Alternativamente, você pode usar o script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd). Coloque o arquivo baixado na pasta `\StarCitizen\LIVE\data\` (por exemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data`).

### Instalação Manual
1. Baixe o arquivo [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Extraia o arquivo baixado para a pasta `\StarCitizen\LIVE\data\`. (por exemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`)
3. Crie ou edite o seguinte arquivo: `\StarCitizen\LIVE\user.cfg`. (por exemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`)
4. Dependendo do idioma que você deseja usar, adicione uma das seguintes linhas ao arquivo:

    | idioma |   |
    |---|---|
    | English | `g_language = english` |
    | French - France | `g_language = french_(france)` |
    | German - Germany | `g_language = german_(germany)` |
    | Italian - Italy | `g_language = italian_(italy)` |
    | Portuguese - Brazil | `g_language = portuguese_(brazil)` |
    | Spanish - Latin America | `g_language = spanish_(latin_america)` |
    | Spanish - Spain | `g_language = spanish_(spain) ` |

5. Salve o arquivo e inicie o jogo. 🚀

---
## Atualizando os Arquivos de Localização
Para atualizar os arquivos de localização, siga novamente o [Guia de Instalação](#guia-de-instalação).

---
## Contribuir
[See CONTRIBUTING.md](CONTRIBUTING.md)

---
## Contribuidores
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
## Disclaimer
Este é um site não oficial de fãs de Star Citizen, não afiliado ao grupo de empresas Cloud Imperium. Todo o conteúdo deste site que não seja de autoria de seu anfitrião ou de seus usuários é de propriedade de seus respectivos donos. Star Citizen®, Roberts Space Industries® e Cloud Imperium® são marcas registradas da Cloud Imperium Rights LLC
