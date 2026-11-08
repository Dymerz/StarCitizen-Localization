# Contribuire alla localizzazione

## Aggiungi una nuova lingua (file lingua italiana già presente)

1. Crea una cartella in `data/Localization` con il nome della lingua che desideri aggiungere, ad esempio `italian_(italy)`.
2. Copia la cartella `english` e rinominala nella lingua che vuoi tradurre.
3. Traduci le stringhe nel file `global.ini`.
4. Crea un README tradotto per la tua lingua:
   1. Copia `README.md` e rinomina la copia in `README_<codice>.md`, usando un codice breve della lingua, ad esempio `README_fr.md`, `README_de.md` o `README_ptbr.md`.
   2. Traduci il contenuto nella tua lingua.
   3. Nella sezione **Versions**, fai puntare i link `LIVE` e `PTU` al tuo nuovo file, ad esempio:
      ```markdown
      - [LIVE](https://github.com/Dymerz/StarCitizen-Localization/blob/main/README_fr.md)
      - [PTU](https://github.com/Dymerz/StarCitizen-Localization/blob/ptu/README_fr.md)
      ```
5. Aggiungi il link al tuo nuovo README in **tutti** i file README (`README.md`, `README_fr.md`, `README_de.md`, ...), compreso il tuo. Aggiungi una riga alla fine dell'elenco **Languages**, seguendo il formato esistente: la bandiera del paese, poi il testo del link scritto nella tua lingua.
   ```markdown
   - 🇬🇧 [Instructions in English.](README.md).
   - 🇫🇷 [Instruction en Français](README_fr.md).
   ...
   - 🇹🇷 [Türkçe Talimatlar](README_tr.md).
   - 🇵🇱 [Instrukcje po polsku](README_pl.md).
   ```
   Mantieni l'elenco nello stesso ordine in tutti i README.

## Come contribuire

1. Fai un fork a questa repository
2. Crea un nuovo ramo (branch)
3. Fai i cambiamenti
4. Fai una richiesta di commit

## Indicazioni

**_IMPORTANTE:_** Prima di fare una richiesta di commit controllate che il vostro file global.ini non faccia crashare il gioco e che non ci siano placeholders. Verificate sempre che la codifica del vostro file global.ini sia **UTF8 BOM**

### Forma

I **Verbi** vengono coniugati con la forma del tu. Ad esempio:

- "Please enter your name" diventa "Per favore, inserisci il tuo nome".

Il termine **Please** è variabile. Es:

* _In caso di divieto non si applica_. Es: "Please don't forget to enter your name" diventa "Non dimenticare di inserire il tuo nome"
* _In caso di invito si applica_. Es: "Please enter your name" diventa "Per favore, inserisci il tuo nome"

### Termini

Questa parte verra aggiornata frequentemente.

I seguenti termini **NON** dovranno essere tradotti:

* **Nomi dei veicoli**
* **Nomi dei luoghi**
* **Nomi propri**
* **Nomi delle missioni**
* **Nomi degli oggetti**
* Marine
