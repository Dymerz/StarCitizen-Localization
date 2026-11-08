# StarCitizen-Localization 🌎<!-- omit in toc -->

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**버전:**
- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_ko.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_ko.md)

**언어:**
- 🇬🇧 [Instructions in English.](README.md).
- 🇫🇷 [Instruction en Français](README_fr.md).
- 🇩🇪 [Anleitung auf Deutsch](README_de.md).
- 🇪🇸 [Instrucciones en Español](README_es.md).
- 🇮🇹 [Istruzioni in Italiano](README_it.md).
- 🇧🇷 [Instrução em Português](README_ptbr.md).
- 🇹🇷 [Türkçe Talimatlar](README_tr.md).
- 🇰🇷 [한국어 설명서](README_ko.md).

**목차:**
- [지원 언어](#지원-언어)
- [설치 방법](#설치-방법)
  - [가장 쉬운 설치 (PowerShell)](#가장-쉬운-설치-powershell)
  - [자동 설치 (다른 방법)](#자동-설치-다른-방법)
  - [직접 설치](#직접-설치)
    - [`user.cfg` 파일 예시](#usercfg-파일-예시)
- [번역 파일 업데이트](#번역-파일-업데이트)
- [기여하기](#기여하기)
- [기여자](#기여자)
- [통계](#통계)
- [면책 조항](#면책-조항)

---
## 지원 언어

| 언어                     | 지원 버전 | 출처 |
|--------------------------|-----------|------|
| 영어                     | ![Static Badge](https://img.shields.io/badge/4.10.2-LIVE-brightgreen) | 게임 파일에서 가져옴 |
| 프랑스어 - 프랑스        | ![Static Badge](https://img.shields.io/badge/4.10.2-LIVE-brightgreen) | [circuspes.fr](https://traduction.circuspes.fr) 에서 생성 |
| 독일어 - 독일            | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-orange) | 이 저장소 |
| 포르투갈어 - 브라질      | ![Static Badge](https://img.shields.io/badge/4.10.2-LIVE-brightgreen) | 이 저장소 |
| 이탈리아어 - 이탈리아    | ![Static Badge](https://img.shields.io/badge/4.10.1-LIVE-orange) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto), [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| 스페인어 - 스페인        | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | 이 저장소 |
| 튀르키예어 - 튀르키예    | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-yellow) | 이 저장소 |
| 스페인어 - 중남미        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | 기여 기다리는 중 |
| 중국어 - 간체            | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | 기여 기다리는 중 |
| 중국어 - 번체            | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | 기여 기다리는 중 |
| 일본어 - 일본            | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | 기여 기다리는 중 |
| 한국어 - 대한민국        | ![Static Badge](https://img.shields.io/badge/4.10.2-LIVE-brightgreen) | 이 저장소 |
| 폴란드어 - 폴란드        | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | 기여 기다리는 중 |

---
## 설치 방법

### 가장 쉬운 설치 (PowerShell)

아래 **명령 한 줄**을 PowerShell 에 붙여 넣으면 번역이 자동으로 설치됩니다.

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **순서:**
> 1. `Win+X` 를 눌러 「Windows PowerShell」 또는 「터미널」을 엽니다.
> 2. 위 명령을 복사합니다.
> 3. PowerShell 에 붙여 넣고 Enter 를 누릅니다.
> 4. 화면 안내에 따라 언어를 고릅니다.

### 자동 설치 (다른 방법)

1. [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1) 스크립트를 받습니다.
2. **받은 파일**(**install_localization.ps1**)을 **오른쪽 클릭**하고 `PowerShell에서 실행` 을 고릅니다.
3. 안내를 따르면 스크립트가 최신 번역 파일을 받아 `Localization` 폴더에 설치하고 `user.cfg` 파일도 설정합니다.
4. 게임을 켜면 번역이 적용됩니다.

> **참고:** 실행 정책 오류가 나면
> - **install_localization.ps1** 이 있는 폴더를 열고, 폴더 안에서 오른쪽 클릭해 **PowerShell 에서 열기**를 고릅니다.
> - 아래 명령으로 실행 정책을 우회해 실행합니다.
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
>   Windows 보안 설정이 스크립트 실행을 막을 수 있어서 필요한 단계입니다.

> **다른 방법:** [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) 스크립트를 써도 됩니다.
> - 게임 폴더에 `data` 폴더가 있는지 확인합니다(예: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - **install_localization.cmd** 를 `data` 폴더에 넣고 두 번 눌러 실행합니다.

---
### 직접 설치

1. [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) 파일을 받습니다.
2. `\StarCitizen\LIVE\data\` 에 압축을 풉니다(예: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. `\StarCitizen\LIVE\user.cfg` 파일을 만들거나 엽니다(예: `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. `user.cfg` 에 언어 줄을 넣습니다. 한국어는 `g_language = korean_(south_korea)` 입니다.

| 언어                      | 설정                          |
|---------------------------|-------------------------------|
| 영어                      | `g_language = english`        |
| 프랑스어 - 프랑스         | `g_language = french_(france)`|
| 독일어 - 독일             | `g_language = german_(germany)`|
| 포르투갈어 - 브라질       | `g_language = portuguese_(brazil)` |
| 이탈리아어 - 이탈리아     | `g_language = italian_(italy)` |
| 스페인어 - 스페인         | `g_language = spanish_(spain)` |
| 튀르키예어 - 튀르키예     | `g_language = german_(germany)` |
| 스페인어 - 중남미         | `g_language = spanish_(latin_america)` |
| 중국어 - 간체             | `g_language = chinese_(simplified)` |
| 중국어 - 번체             | `g_language = chinese_(traditional)` |
| 일본어 - 일본             | `g_language = japanese_(japan)` |
| 한국어 - 대한민국         | `g_language = korean_(south_korea)` |
| 폴란드어 - 폴란드         | `g_language = polish_(poland)` |

5. 음성 언어는 늘 영어로 넣습니다.
   ```plaintext
   g_languageAudio = english
   ```
6. `user.cfg` 를 저장하고 게임을 켭니다. 🚀

#### `user.cfg` 파일 예시
```plaintext
g_language = korean_(south_korea)
g_languageAudio = english
```

---
## 번역 파일 업데이트
번역 파일을 업데이트하려면 [설치 방법](#설치-방법)을 다시 따라 하면 됩니다.

---
## 기여하기
[CONTRIBUTING.md 를 보세요](CONTRIBUTING.md)

---
## 기여자
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
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/uglywolf-lee"><img src="https://avatars.githubusercontent.com/u/142315814?v=4?s=100" width="100px;" alt="uglywolf-lee"/><br /><sub><b>uglywolf-lee</b></sub></a><br /><a href="#translation-uglywolf-lee" title="Translation">🌍</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---
## 통계
![Alt](https://repobeats.axiom.co/api/embed/771a52550a3333c3934d1fb5a03fffa14119471a.svg "Repobeats analytics image")

---
## 면책 조항
이곳은 비공식 Star Citizen 팬 사이트이며 Cloud Imperium 그룹과 관계가 없습니다. 이 사이트의 운영자나 사용자가 만들지 않은 모든 콘텐츠는 각 소유자의 재산입니다. Star Citizen®, Roberts Space Industries®, Cloud Imperium® 은 Cloud Imperium Rights LLC 의 등록 상표입니다.
