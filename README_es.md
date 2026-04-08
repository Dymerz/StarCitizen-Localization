# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord\&label=discord)](https://discord.gg/Gbvz9fTmZU)
![Descargas totales](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![Estado del flujo de trabajo](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push\&label=Validación%20INI\&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Versiones:**

- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README.md)

**Idiomas:**

- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).
- 🇹🇷 [Türkçe Talimatlar](README_tr.md).

**Tabla de Contenido:**

- [Idiomas Soportados](#supported-languages)
- [Guía de Instalación](#installation-guide)
- [Actualización de Archivos de Localización](#contributing)
- [Contribuir](#contributing)
- [Descargo de Responsabilidad](#Disclaimer)

---

## Idiomas Soportados

| Idioma                  | Soporte                                                            | Fuente                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Inglés                  | ![Static Badge](https://img.shields.io/badge/4.7.1-LIVE-brightgreen)   | Importado de archivos del juego                                                                                                     |
| Francés - Francia       | ![Static Badge](https://img.shields.io/badge/4.7.0-LIVE-brightgreen) | Generado desde [circuspes.fr](https://traduction.circuspes.fr) |
| Alemán (Alemania)       | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-orange)   | Aquí                                                                                                                                |
| Portugués (Brasil)      | ![Static Badge](https://img.shields.io/badge/4.7.1-LIVE-brightgreen)   | Aquí                                                                                                                                |
| Italiano (Italia)       | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow)    | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) y [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Español (España)        | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange)  | Aquí                                                                                                                                |
| Turco (Turquía)         | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-yellow) | Aquí                                                                                                                                |
| Español (Latinoamérica) | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred)   | Esperando contribución                                                                                                              |
| Chino (Simplificado)    | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred)   | Esperando contribución                                                                                                              |
| Chino (Tradicional)     | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred)   | Esperando contribución                                                                                                              |
| Japonés (Japón)         | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred)   | Esperando contribución                                                                                                              |
| Coreano (Corea del Sur) | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred)   | Esperando contribución                                                                                                              |
| Polaco (Polonia)        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred)   | Esperando contribución

---

## Guía de Instalación

### Método Más Fácil (PowerShell)

Simplemente copia y pega este **comando único** en PowerShell para instalar automáticamente las traducciones de Star Citizen:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Pasos Simples:**
> 1. Presiona `Win+X` y selecciona "Windows PowerShell" o "Terminal"
> 2. Copia el comando anterior
> 3. Pégalo en PowerShell y presiona Enter
> 4. Sigue las instrucciones en pantalla para elegir tu idioma

### Instalación Automática (Alternativa)

1. Descarga el script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. **Haz clic derecho** en el archivo descargado (**install_localization.ps1**) y selecciona `Ejecutar con PowerShell`.
3. Sigue las instrucciones y el script descargará automáticamente los archivos de localización más recientes, los instalará en la carpeta `Localization` y configurará el archivo `user.cfg`.
4. Inicia el juego y disfruta la traducción.

> **Nota:** Si ves un error de política de ejecución:
> - Abre la carpeta donde está el script **install_localization.ps1**, haz clic derecho en un espacio vacío y selecciona **Abrir en PowerShell**.
> - Ejecuta el siguiente comando:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```

> **Opción Alternativa:** Usa el script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd):
> - Asegúrate de que exista una carpeta `data` en tu directorio del juego (ej. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Coloca **install_localization.cmd** en la carpeta `data` y haz doble clic para ejecutarlo.

---

### Instalación Manual

1. Descarga el archivo [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Extrae los archivos en `\StarCitizen\LIVE\data\` (ej. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Crea/edita el archivo `\StarCitizen\LIVE\user.cfg` (ej. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. Agrega la línea del idioma al `user.cfg`:

| Idioma                  | Configuración                          |
| ----------------------- | -------------------------------------- |
| Inglés                  | `g_language = english`                 |
| Francés (Francia)       | `g_language = french_(france)`         |
| Alemán (Alemania)       | `g_language = german_(germany)`        |
| Portugués (Brasil)      | `g_language = portuguese_(brazil)`     |
| Italiano (Italia)       | `g_language = italian_(italy)`         |
| Español (España)        | `g_language = spanish_(spain)`         |
| Turco (Turquía)         | `g_language = german_(germany)`        |
| Español (Latinoamérica) | `g_language = spanish_(latin_america)` |
| Chino (Simplificado)    | `g_language = chinese_(simplified)`    |
| Chino (Tradicional)     | `g_language = chinese_(traditional)`   |
| Japonés (Japón)         | `g_language = japanese_(japan)`        |
| Coreano (Corea del Sur) | `g_language = korean_(south_korea)`    |
| Polaco (Polonia)        | `g_language = polish_(poland)`         |

5. Agrega siempre el idioma de audio en inglés:

   ```plaintext
   g_languageAudio = english
   ```
6. Guarda el archivo `user.cfg` y lanza el juego. 🚀

#### Ejemplo de archivo `user.cfg`:

```plaintext
g_language = french_(france)
g_languageAudio = english
```

---

## Actualización de Archivos de Localización

Para actualizar los archivos, sigue nuevamente la [Guía de Instalación](#installation-guide).

---

## Contribuir

[Ver CONTRIBUTING.md](CONTRIBUTING.md)

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
## Analítica
![Alt](https://repobeats.axiom.co/api/embed/771a52550a3333c3934d1fb5a03fffa14119471a.svg "Repobeats analytics image")

---
## Descargo de Responsabilidad
Este es un sitio de fans no oficial de Star Citizen, sin afiliación con el grupo de compañías Cloud Imperium. Todo el contenido no creado por los administradores o usuarios es propiedad de sus respectivos dueños. Star Citizen®, Roberts Space Industries® y Cloud Imperium® son marcas registradas de Cloud Imperium Rights LLC.
