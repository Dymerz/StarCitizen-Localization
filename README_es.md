# StarCitizen-Localization 🌎

![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)


- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).

**Tabla de contenidos:**
  - [Idiomas soportados](#idiomas-soportados)
  - [Guía de instalación](#guía-de-instalación)
  - [Actualizar archivos localización](#actualizar-archivos-localización)
  - [Contribuir](#contribuir)
  - [Descargo de responsabilidad](#descargo-de-responsabilidad)

---
## Idiomas soportados

| Idioma                  | Soportado  | Fuente |
| ----------------------- | ---------- | ------ |
| Inglés                  | ✅ 3.21.1  | Importado de los archivos del juego |
| Francés - Francia       | ✅ 3.21.1  | Generado a partir de [circuspes.fr](https://traduction.circuspes.fr) y [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| Alemán - Alemania       | ✅ 3.21.1  | Aquí |
| Italiano - Italia       | ✅ 3.21.0  | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) y [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Portugués - Brasil      | ✅ 3.21.1  | Aquí |
| Español - Latinoamérica | ❌         |
| Español - España        | ✅ 3.21.1  | Aquí |

---
## Guía de instalación

### Instalación automática
1. Descarga el script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) (Presiona `CTRL + S` para descargar)
2. Coloca el archivo descargado en la carpeta `\StarCitizen\LIVE\data\` (Ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data`)
3. Ejecuta `install_localization.cmd` y sigue las instrucciones.
    > ℹ️ Este script descargará automáticamente la última versión de los archivos de localización, los instalará en la carpeta `Localization` por ti y configurará el archivo `user.cfg`.
4. ¡Inicia el juego y disfruta de la traducción!

### Instalación manual
1. Descarga el archivo [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Descomprime el archivo en `\StarCitizen\LIVE\data\`. (Ejemplo: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`)
3. Crear o editar el siguiente archivo: `\StarCitizen\LIVE\user.cfg`. (Ejemplo: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`)
4. Según el idioma que desees utilizar, agrega una de las siguientes líneas al archivo:

    | Idioma                |                                        |
    | ----------------------- | -------------------------------------- |
    | Inglés                  | `g_language = english`                 |
    | Francés - Francia       | `g_language = french_(france)`         |
    | Alemán - Alemania       | `g_language = german_(germany)`        |
    | Italiano - Italia       | `g_language = italian_(italy)`         |
    | Portugués - Brasil      | `g_language = portuguese_(brazil)`     |
    | Español - Latinoamérica | `g_language = spanish_(latin_america)` |
    | Español - España        | `g_language = spanish_(spain)`         |

5. Guarda el archivo e inicia el juego. 🚀

---
## Actualizar archivos localización
Para actualizar los archivos de localización, por favor sigue nuevamente la [Guía de Instalación](#guía-de-instalación).

---
## Contribuir
[Mira CONTRIBUTING.md](CONTRIBUTING.md)

---
## Contribuidores
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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/InterPlay02"><img src="https://avatars.githubusercontent.com/u/23037423?v=4?s=100" width="100px;" alt="InterPlay"/><br /><sub><b>InterPlay</b></sub></a><br /><a href="#translation-InterPlay02" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## Descargo de responsabilidad
Este es un sitio web de fans no oficial de Star Citizen, no afiliado al grupo de empresas Cloud Imperium. Todo el contenido en este sitio que no haya sido creado por su anfitrión o sus usuarios es propiedad de sus respectivos propietarios. Star Citizen®, Roberts Space Industries® y Cloud Imperium® son marcas registradas de Cloud Imperium Rights LLC.
