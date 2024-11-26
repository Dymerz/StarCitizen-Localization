# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

- **Versiones:**  
  - [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_es.md)  
  - [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_es.md)

- **Idiomas:**  
  - 🇬🇧 [Instructions in English.](README.md)  
  - 🇫🇷 [Instruction en Français](README_fr.md)  
  - 🇩🇪 [Anleitung auf Deutsch](README_de.md)  
  - 🇪🇸 [Instrucciones en Español](README_es.md)  
  - 🇮🇹 [Istruzioni in Italiano](README_it.md)  
  - 🇧🇷 [Instrução em Português](README_ptbr.md)  

**Tabla de contenidos:**
- [Idiomas soportados](#idiomas-soportados)
- [Guía de instalación](#guía-de-instalación)
- [Actualizar archivos de localización](#actualizar-archivos-de-localización)
- [Contribuir](#contribuir)
- [Descargo de responsabilidad](#descargo-de-responsabilidad)

---

## Idiomas soportados

| Idioma                  | Soportado   | Fuente |
|--------------------------|-------------|--------|
| Inglés                  | ![Static Badge](https://img.shields.io/badge/3.24.3-LIVE-brightgreen) | Importado de archivos del juego |
| Francés - Francia       | ![Static Badge](https://img.shields.io/badge/3.24.3-LIVE-brightgreen) | Generado desde [circuspes.fr](https://traduction.circuspes.fr) y [SPEED0U/StarCitizenFrenchTranslation](https://github.com/SPEED0U/StarCitizenFrenchTranslation) |
| Alemán - Alemania       | ![Static Badge](https://img.shields.io/badge/3.24.3-LIVE-brightgreen) | Aquí |
| Portugués - Brasil      | ![Static Badge](https://img.shields.io/badge/3.24.3-LIVE-brightgreen) | Aquí |
| Italiano - Italia       | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) y [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Español - España        | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Aquí |
| Español - Latinoamérica | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribución |
| Chino - Simplificado    | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribución |
| Chino - Tradicional     | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribución |
| Japonés - Japón         | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribución |
| Coreano - Corea del Sur | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribución |
| Polaco - Polonia        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | A la espera de contribución |

---

## Guía de instalación

### Instalación automática

1. Descarga el script [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1).
2. **Haz clic derecho** en el archivo descargado (**install_localization.ps1**) y selecciona `Ejecutar con PowerShell`.
3. Sigue las instrucciones.
4. Inicia el juego y disfruta de la traducción.

> **Nota:** Si encuentras un error de política de ejecución:  
> - Abre PowerShell en la carpeta donde guardaste **install_localization.ps1** y ejecuta:  
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
> Esto es necesario porque Windows puede bloquear scripts debido a configuraciones de seguridad.

> **Opción alternativa:** Usa el script [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd):  
> - Asegúrate de que exista una carpeta `data` en el directorio del juego (por ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - Coloca **install_localization.cmd** en la carpeta `data` y haz doble clic para ejecutarlo.

### Instalación manual

1. Descarga el archivo [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip).
2. Extrae los archivos en `\StarCitizen\LIVE\data\` (por ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. Crea o edita `\StarCitizen\LIVE\user.cfg` (por ejemplo, `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. Añade las siguientes líneas para configurar el idioma y el idioma de audio:
   ```plaintext
   g_language = spanish_(spain)
   g_languageAudio = english
   ```
   > El idioma de audio debe ser inglés.
5. Guarda el archivo `user.cfg` e inicia el juego. 🚀

#### Ejemplo de archivo `user.cfg`:
```plaintext
g_language = spanish_(spain)
g_languageAudio = english
```

---

## Actualizar archivos de localización

Para actualizar los archivos de localización, sigue nuevamente la [Guía de instalación](#guía-de-instalación).

---

## Contribuir

[Consulta CONTRIBUTING.md](CONTRIBUTING.md)

---

## Contribuidores

(Sección de tabla de contribuyentes igual al original)

---

## Descargo de responsabilidad

Este es un sitio web de fans no oficial de Star Citizen, no afiliado al grupo de empresas Cloud Imperium. Todo el contenido en este sitio que no haya sido creado por su anfitrión o sus usuarios es propiedad de sus respectivos propietarios. Star Citizen®, Roberts Space Industries® y Cloud Imperium® son marcas registradas de Cloud Imperium Rights LLC.