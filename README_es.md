# StarCitizen-Localization 馃寧

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

- **Versiones:**
  - [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_es.md)
  - [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_es.md)

- **Idiomas:**
- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).

**Tabla de contenidos:**
- [Idiomas soportados](#idiomas-soportados)
- [Gu铆a de instalaci贸n](#gu铆a-de-instalaci贸n)
- [Actualizar archivos de localizaci贸n](#actualizar-archivos-de-localizaci贸n)
- [Contribuir](#contribuir)
- [Descargo de responsabilidad](#descargo-de-responsabilidad)

---

## Idiomas soportados

| Idioma                  | Soportado   | Fuente |
|--------------------------|-------------|--------|
| Ingl茅s                  | ![Static Badge](https://img.shields.io/badge/4.1.1-PTU-brightgreen) | Importado de archivos del juego |
| Franc茅s - Francia       | ![Static Badge](https://img.shields.io/badge/4.1.0-LIVE-brightgreen) | Generado desde [circuspes.fr](https://traduction.circuspes.fr) y [SPEED0U/Scefra](https://github.com/SPEED0U/Scefra) |
| Alem谩n - Alemania       | ![Static Badge](https://img.shields.io/badge/4.1.0-LIVE-brightgreen) | Aqu铆 |
| Portugu茅s - Brasil      | ![Static Badge](https://img.shields.io/badge/4.1.0-LIVE-brightgreen) | Aqu铆 |
| Italiano - Italia       | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) y [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Espa帽ol - Espa帽a        | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Aqu铆 |
| Espa帽ol - Latinoam茅rica | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribuci贸n |
| Chino - Simplificado    | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribuci贸n |
| Chino - Tradicional     | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribuci贸n |
| Japon茅s - Jap贸n         | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribuci贸n |
| Coreano - Corea del Sur | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribuci贸n |
| Polaco - Polonia        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribuci贸n |

---

## Gu铆a de instalaci贸n

### M茅todo de Instalaci贸n M谩s Sencillo (PowerShell)

Simplemente copia y pega este **煤nico comando** en PowerShell para instalar autom谩ticamente las traducciones de Star Citizen:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Pasos Simples:**
> 1. Presiona `Win+X` y selecciona "Windows PowerShell" o "Terminal"
> 2. Copia el comando de arriba
> 3. P茅galo en PowerShell y presiona Enter
> 4. Sigue las instrucciones en pantalla para seleccionar tu idioma

### Instalaci贸n Autom谩tica (Alternativa)

1. Descarga el script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. **Haz clic derecho** en el archivo descargado (**install_localization.ps1**) y selecciona `Ejecutar con PowerShell`.
3. Sigue las instrucciones.
4. Inicia el juego y disfruta de la traducci贸n.

> **Nota:** Si encuentras un error de pol铆tica de ejecuci贸n:
> - Abre PowerShell en la carpeta donde guardaste **install_localization.ps1** y ejecuta:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
> Esto es necesario porque Windows puede bloquear scripts debido a configuraciones de seguridad.

> **Opci贸n alternativa:** Usa el script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd):
> - Aseg煤rate de que exista una carpeta `data` en el directorio del juego (por ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Coloca **install_localization.cmd** en la carpeta `data` y haz doble clic para ejecutarlo.

### Instalaci贸n manual

1. Descarga el archivo [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Extrae los archivos en `\StarCitizen\LIVE\data\` (por ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Crea o edita `\StarCitizen\LIVE\user.cfg` (por ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. A帽ade las siguientes l铆neas para configurar el idioma y el idioma de audio:
   ```plaintext
   g_language = spanish_(spain)
   g_languageAudio = english
   ```
   > El idioma de audio debe ser ingl茅s.
5. Guarda el archivo `user.cfg` e inicia el juego. 馃殌

#### Ejemplo de archivo `user.cfg`:
```plaintext
g_language = spanish_(spain)
g_languageAudio = english
```

---

## Actualizar archivos de localizaci贸n

Para actualizar los archivos de localizaci贸n, sigue nuevamente la [Gu铆a de instalaci贸n](#gu铆a-de-instalaci贸n).

---

## Contribuir

[Consulta CONTRIBUTING.md](CONTRIBUTING.md)

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

## Descargo de responsabilidad

Este es un sitio web de fans no oficial de Star Citizen, no afiliado al grupo de empresas Cloud Imperium. Todo el contenido en este sitio que no haya sido creado por su anfitri贸n o sus usuarios es propiedad de sus respectivos propietarios. Star Citizen庐, Roberts Space Industries庐 y Cloud Imperium庐 son marcas registradas de Cloud Imperium Rights LLC.
