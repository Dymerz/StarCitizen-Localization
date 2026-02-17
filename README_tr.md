# StarCitizen-Localization 🌍

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Surumler:**
- [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_tr.md)
- [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_tr.md)

**Diller:**
- 🇬🇧 [Instructions in English.](README.md)
- 🇫🇷 [Instruction en Français](README_fr.md)
- 🇩🇪 [Anleitung auf Deutsch](README_de.md)
- 🇪🇸 [Instrucciones en Español](README_es.md)
- 🇮🇹 [Istruzioni in Italiano](README_it.md)
- 🇧🇷 [Instrução em Português](README_ptbr.md)
- 🇹🇷 [Türkçe Talimatlar](README_tr.md)

**Içindekiler:**
- [Desteklenen Diller](#desteklenen-diller)
- [Kurulum Rehberi](#kurulum-rehberi)
- [Yerellestirme Dosyalarini Güncelleme](#yerellestirme-dosyalarini-güncelleme)
- [Katkida Bulunma](#katkida-bulunma)
- [Sorumluluk Reddi](#sorumluluk-reddi)

---
## Desteklenen Diller

| Dil                      | Durum | Kaynak |
|--------------------------|-------|--------|
| Ingilizce                | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-brightgreen) | Oyun dosyalarindan içe aktarildi |
| Fransizca - Fransa       | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | [circuspes.fr](https://traduction.circuspes.fr) üzerinden olusturuldu |
| Almanca - Almanya        | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Burada |
| Portekizce - Brezilya    | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-brightgreen) | Burada |
| Italyanca - Italya       | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) ve [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| Ispanyolca - Ispanya     | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Burada |
| Türkçe - Türkiye         | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-yellow) | Burada |
| Ispanyolca - Latin Amerika| ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katki bekleniyor |
| Çince - Basitlestirilmis | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katki bekleniyor |
| Çince - Geleneksel       | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katki bekleniyor |
| Japonca - Japonya         | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katki bekleniyor |
| Korece - Güney Kore       | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katki bekleniyor |
| Lehçe - Polonya           | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katki bekleniyor |

---
## Kurulum Rehberi

### En Kolay Kurulum Yöntemi (PowerShell)

Star Citizen çevirilerini otomatik olarak kurmak için bu **tek komutu** PowerShell'e kopyalayip yapistirin:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Basit Adimlar:**
> 1. `Win+X` tuslarina basin ve "Windows PowerShell" veya "Terminal" seçin
> 2. Yukaridaki komutu kopyalayin
> 3. PowerShell'e yapistirin ve Enter'a basin
> 4. Dilinizi seçmek için ekrandaki yönergeleri takip edin

### Otomatik Kurulum (Alternatif)

1. [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1) betigini indirin.
2. Indirilen dosyaya (**install_localization.ps1**) **sag tiklayin** ve `PowerShell ile Çalistir` seçenegini seçin.
3. Talimatlari takip edin; betik otomatik olarak en son yerellestirme dosyalarini indirecek, `Localization` klasörüne kuracak ve `user.cfg` dosyasini yapilandiracaktir.
4. Oyunu baslatin ve çevirinin keyfini çikarin!

> **Not:** Yürütme ilkesi hatasi alirsiniz:
> - **install_localization.ps1** betiginin kayitli oldugu klasörü açin, klasörde sag tiklayin ve **PowerShell'de Aç** seçenegini seçin.
> - Yürütme ilkesini atlamak için asagidaki komutu çalistirin:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```

> **Alternatif Seçenek:** [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) betigini kullanin:
> - Oyun dizininizde bir `data` klasörünün bulundugundan emin olun (örn. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - **install_localization.cmd** dosyasini `data` klasörüne yerlestirin ve çift tiklayarak çalistirin.

---
### Manuel Kurulum

> ⚠️ **Önemli Not:** Star Citizen su anda `turkish_(turkey)` dilini yerel olarak desteklememektedir. Türkçe çeviriyi kullanmak için dosyalari `german_(germany)` klasörüne yerlestirmeniz gerekmektedir. Bu sayede Ingilizce'ye geri dönmek istediginizde sadece `user.cfg` dosyasini degistirmeniz yeterlidir.

1. [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) dosyasini indirin.
2. `turkish_(turkey)` klasöründeki `global.ini` dosyasini `german_(germany)` klasörüne kopyalayin.
3. Dosyalari `\StarCitizen\LIVE\data\Localization\german_(germany)\` dizinine yerlestirin (örn. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\Localization\german_(germany)\global.ini`).
4. `\StarCitizen\LIVE\user.cfg` dosyasini olusturun/düzenleyin ve asagidaki satirlari ekleyin:

```plaintext
g_language = german_(germany)
g_languageAudio = english
```

5. `user.cfg` dosyasini kaydedin ve oyunu baslatin. 🎮

> **Ingilizce'ye geri dönmek için:** `user.cfg` dosyasindaki `g_language` satirini `english` olarak degistirin:
> ```plaintext
> g_language = english
> g_languageAudio = english
> ```

#### Diger Diller Için Yapilandirma

| Dil                       | Yapilandirma                  |
|---------------------------|-------------------------------|
| Ingilizce                 | `g_language = english`        |
| Fransizca - Fransa        | `g_language = french_(france)`|
| Almanca - Almanya         | `g_language = german_(germany)`|
| Portekizce - Brezilya     | `g_language = portuguese_(brazil)` |
| Italyanca - Italya        | `g_language = italian_(italy)` |
| Ispanyolca - Ispanya      | `g_language = spanish_(spain)` |
| **Türkçe - Türkiye**      | **`g_language = german_(germany)`** |

---
## Yerellestirme Dosyalarini Güncelleme
Yerellestirme dosyalarini güncellemek için lütfen [Kurulum Rehberi](#kurulum-rehberi)'ni tekrar takip edin.

---
## Katkida Bulunma
[CONTRIBUTING.md dosyasina bakin](CONTRIBUTING.md)

---
## Sorumluluk Reddi
Bu, Cloud Imperium sirketler grubuyla baglantili olmayan, resmi olmayan bir Star Citizen hayran sitesidir. Bu sitedeki, ev sahibi veya kullanicilar tarafindan yazilmamis tüm içerikler, ilgili sahiplerinin mülkiyetindedir. Star Citizen®, Roberts Space Industries® ve Cloud Imperium®, Cloud Imperium Rights LLC'nin tescilli ticari markalaridir.
