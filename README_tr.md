# StarCitizen-Localization 🌎

[![Discord](https://img.shields.io/discord/1185135396112322620?logo=discord&label=discord)](https://discord.gg/Gbvz9fTmZU)
![GitHub all releases](https://img.shields.io/github/downloads/Dymerz/StarCitizen-Localization/total)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/Dymerz/StarCitizen-Localization/.github%2Fworkflows%2Fvalidate-global-ini.yaml?event=push&label=INI%20Validation&link=https%3A%2F%2Fgithub.com%2FDymerz%2FStarCitizen-Localization%2Factions%2Fworkflows%2Fvalidate-global-ini.yaml)

**Sürümler:**
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

**İçindekiler:**
- [Desteklenen Diller](#desteklenen-diller)
- [Kurulum Rehberi](#kurulum-rehberi)
- [Yerelleştirme Dosyalarını Güncelleme](#katkıda-bulunma)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Sorumluluk Reddi](#sorumluluk-reddi)

---
## Desteklenen Diller

| Dil                      | Durum | Kaynak |
|--------------------------|-------|--------|
| İngilizce                | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-brightgreen) | Oyun dosyalarından içe aktarıldı |
| Fransızca - Fransa       | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | [circuspes.fr](https://traduction.circuspes.fr) üzerinden oluşturuldu |
| Almanca - Almanya        | ![Static Badge](https://img.shields.io/badge/4.2.0-LIVE-yellow) | Burada |
| Portekizce - Brezilya    | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-brightgreen) | Burada |
| İtalyanca - İtalya       | ![Static Badge](https://img.shields.io/badge/3.24.1-LIVE-yellow) | [GattoMatto](https://robertsspaceindustries.com/citizens/GattoMatto) ve [MrRevo](https://robertsspaceindustries.com/citizens/MrRevo) |
| İspanyolca - İspanya     | ![Static Badge](https://img.shields.io/badge/3.23.1a-LIVE-orange) | Burada |
| Türkçe - Türkiye         | ![Static Badge](https://img.shields.io/badge/4.6.0-LIVE-yellow) | Burada |
| İspanyolca - Latin Amerika| ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katkı bekleniyor |
| Çince - Basitleştirilmiş | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katkı bekleniyor |
| Çince - Geleneksel       | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katkı bekleniyor |
| Japonca - Japonya         | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katkı bekleniyor |
| Korece - Güney Kore       | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katkı bekleniyor |
| Lehçe - Polonya           | ![Static Badge](https://img.shields.io/badge/x.xx.x-LIVE-darkred) | Katkı bekleniyor |

---
## Kurulum Rehberi

### En Kolay Kurulum Yöntemi (PowerShell)

Star Citizen çevirilerini otomatik olarak kurmak için bu **tek komutu** PowerShell'e kopyalayıp yapıştırın:

```powershell
powershell -ExecutionPolicy Bypass -Command "iex (irm https://raw.githubusercontent.com/Dymerz/StarCitizen-Localization/main/tools/install_localization.ps1)"
```

> **Basit Adımlar:**
> 1. `Win+X` tuşlarına basın ve "Windows PowerShell" veya "Terminal" seçin
> 2. Yukarıdaki komutu kopyalayın
> 3. PowerShell'e yapıştırın ve Enter'a basın
> 4. Dilinizi seçmek için ekrandaki yönergeleri takip edin

### Otomatik Kurulum (Alternatif)

1. [install_localization.ps1](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.ps1) betiğini indirin.
2. İndirilen dosyaya (**install_localization.ps1**) **sağ tıklayın** ve `PowerShell ile Çalıştır` seçeneğini seçin.
3. Talimatları takip edin; betik otomatik olarak en son yerelleştirme dosyalarını indirecek, `Localization` klasörüne kuracak ve `user.cfg` dosyasını yapılandıracaktır.
4. Oyunu başlatın ve çevirinin keyfini çıkarın!

> **Not:** Yürütme ilkesi hatası alırsanız:
> - **install_localization.ps1** betiğinin kayıtlı olduğu klasörü açın, klasörde sağ tıklayın ve **PowerShell'de Aç** seçeneğini seçin.
> - Yürütme ilkesini atlamak için aşağıdaki komutu çalıştırın:
>   ```powershell
>   PowerShell -ExecutionPolicy Bypass -File "./install_localization.ps1"
>   ```
>   Windows güvenlik ayarları nedeniyle betiklerin çalışmasını engelleyebileceği için bu gereklidir.

> **Alternatif Seçenek:** [install_localization.cmd](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/install_localization.cmd) betiğini kullanın:
> - Oyun dizininizde bir `data` klasörünün bulunduğundan emin olun (örn. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
> - **install_localization.cmd** dosyasını `data` klasörüne yerleştirin ve çift tıklayarak çalıştırın.

---
### Manuel Kurulum

1. [Localization.zip](https://github.com/Dymerz/StarCitizen-Localization/releases/latest/download/Localization.zip) dosyasını indirin.
2. Dosyaları `\StarCitizen\LIVE\data\` dizinine çıkarın (örn. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\data\`).
3. `\StarCitizen\LIVE\user.cfg` dosyasını oluşturun/düzenleyin (örn. `C:\Program Files\Roberts Space Industries\StarCitizen\LIVE\user.cfg`).
4. `user.cfg` dosyasına dil satırını ekleyin:

| Dil                       | Yapılandırma                  |
|---------------------------|-------------------------------|
| İngilizce                 | `g_language = english`        |
| Fransızca - Fransa        | `g_language = french_(france)`|
| Almanca - Almanya         | `g_language = german_(germany)`|
| Portekizce - Brezilya     | `g_language = portuguese_(brazil)` |
| İtalyanca - İtalya        | `g_language = italian_(italy)` |
| İspanyolca - İspanya      | `g_language = spanish_(spain)` |
| Türkçe - Türkiye          | `g_language = turkish_(turkey)` |
| İspanyolca - Latin Amerika| `g_language = spanish_(latin_america)` |
| Çince - Basitleştirilmiş  | `g_language = chinese_(simplified)` |
| Çince - Geleneksel        | `g_language = chinese_(traditional)` |
| Japonca - Japonya          | `g_language = japanese_(japan)` |
| Korece - Güney Kore        | `g_language = korean_(south_korea)` |
| Lehçe - Polonya            | `g_language = polish_(poland)` |

5. Her zaman ses dilini İngilizce olarak ekleyin:
   ```plaintext
   g_languageAudio = english
   ```
6. `user.cfg` dosyasını kaydedin ve oyunu başlatın. 🚀

#### Örnek `user.cfg` Dosyası:
```plaintext
g_language = turkish_(turkey)
g_languageAudio = english
```

---
## Yerelleştirme Dosyalarını Güncelleme
Yerelleştirme dosyalarını güncellemek için lütfen [Kurulum Rehberi](#kurulum-rehberi)'ni tekrar takip edin.

---
## Katkıda Bulunma
[CONTRIBUTING.md dosyasına bakın](CONTRIBUTING.md)

---
## Sorumluluk Reddi
Bu, Cloud Imperium şirketler grubuyla bağlantılı olmayan, resmi olmayan bir Star Citizen hayran sitesidir. Bu sitedeki, ev sahibi veya kullanıcılar tarafından yazılmamış tüm içerikler, ilgili sahiplerinin mülkiyetindedir. Star Citizen®, Roberts Space Industries® ve Cloud Imperium®, Cloud Imperium Rights LLC'nin tescilli ticari markalarıdır.
