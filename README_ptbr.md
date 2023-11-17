# StarCitizen-Localization 🌎

![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)


- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).

**Table of Contents:**
  - [Supported Languages](#supported-languages)
  - [Installation Guide](#installation-guide)
  - [Updating the Localization Files](#contributing)
  - [Contributing](#contributing)
  - [Disclaimer](#Disclaimer)

---
## Idiomas Suportados

| Idioma | Suportado | Fonte |
|---|---|---|
| English | ✅ 3.21.1 | Importado dos arquivos do jogo |
| French - France | ✅ 3.21.0 | Gerado a partir de [circuspes.fr](https://traduction.circuspes.fr) e [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| German - Germany | ✅ 3.21.1 | Aqui |
| Italian - Italy | ✅ 3.21.0 | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) e [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Portuguese - Brazil | ✅ 3.21.1 | Aqui |
| Spanish - Latin America | ❌ |
| Spanish - Spain | ✅ 3.21.0 | Aqui |

---
## Guia de Instalação

### Instalação Automática
1. Baixe o script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) (Pressione `CTRL + S` para baixar)
2. Coloque o arquivo baixado na pasta `\StarCitizen\LIVE\data\`. (por exemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data`)
3. Execute o `install_localization.cmd` e siga as instruções.
    > ℹ️ Este script fará o download automático da versão mais recente dos arquivos de localização, os instalará na pasta `Localization` para você e configurará o arquivo `user.cfg`.
4. Inicie o jogo e desfrute da tradução!

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
      <td align="center" valign="top" width="14.28%"><a href="https://rob-games.zapto.org/"><img src="https://avatars.githubusercontent.com/u/9892024?v=4?s=100" width="100px;" alt="ROBdk97"/><br /><sub><b>ROBdk97</b></sub></a><br /><a href="#translation-ROBdk97" title="Translation">🌍</a> <a href="#projectManagement-ROBdk97" title="Project Management">📆</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Autovot"><img src="https://avatars.githubusercontent.com/u/87210193?v=4?s=100" width="100px;" alt="Autovot"/><br /><sub><b>Autovot</b></sub></a><br /><a href="#translation-Autovot" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/electronicfreak"><img src="https://avatars.githubusercontent.com/u/11193801?v=4?s=100" width="100px;" alt="electronicfreak"/><br /><sub><b>electronicfreak</b></sub></a><br /><a href="#translation-electronicfreak" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jack-mk"><img src="https://avatars.githubusercontent.com/u/22667101?v=4?s=100" width="100px;" alt="Jack"/><br /><sub><b>Jack</b></sub></a><br /><a href="#translation-Jack-mk" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Auhrus"><img src="https://avatars.githubusercontent.com/u/57270834?v=4?s=100" width="100px;" alt="Auhrus"/><br /><sub><b>Auhrus</b></sub></a><br /><a href="#translation-Auhrus" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Disclaimer
Este é um site não oficial de fãs de Star Citizen, não afiliado ao grupo de empresas Cloud Imperium. Todo o conteúdo deste site que não seja de autoria de seu anfitrião ou de seus usuários é de propriedade de seus respectivos donos. Star Citizen®, Roberts Space Industries® e Cloud Imperium® são marcas registradas da Cloud Imperium Rights LLC
