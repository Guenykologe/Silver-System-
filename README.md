# Blütenzupfer

Blütenblätter zupfen – ganz klassisch: *Er liebt mich … er liebt mich nicht.*
Läuft im Browser (auch offline, installierbar als Web-App) und als App für Android und iOS (mit Capacitor).

## Funktionen

- **Zupfen:** Blatt antippen oder mit dem Finger abziehen und werfen. Tastatur: Enter/Leertaste.
- **6 Blumen:** Gänseblümchen, Sonnenblume, Mohn, Kirschblüte, Kornblume, Rose – jede mit zufälliger Blätterzahl.
- **Name:** Oben „Wer?“ ausfüllen, dann heißt es „Max liebt mich … Max liebt mich nicht“.
- **Orakel:** Er/Sie liebt mich (nicht), der alte Reim „von Herzen, mit Schmerzen, ein wenig, gar nicht“, Ja/Nein, Ich trau mich (nicht).
- **Teilen:** Das Ergebnis als Bild (1080 × 1350) mit Text – in der App über das Teilen-Menü des Handys.
- **Ton & Vibration:** Zupf-Geräusch, kleine Melodie am Ende, Vibration. Oben mit dem Lautsprecher-Knopf abschaltbar.
- **Offline:** Schriften sind lokal eingebunden (keine Anfragen an Google), die Web-Version cached sich selbst.

## Projektaufbau

| Pfad | Inhalt |
| --- | --- |
| `web/` | Die App: `index.html`, Schriften, Icons, Manifest, Service Worker |
| `scripts/build.mjs` | Kopiert `web/` nach `www/` und legt Capacitors Laufzeit dazu |
| `scripts/serve.mjs` | Kleiner Entwicklungs-Server |
| `android/` | Android-Studio-Projekt (von Capacitor erzeugt) |
| `assets/` | Quellbilder für App-Icon und Startbildschirm |
| `capacitor.config.json` | App-Name und App-ID (`de.bluetenzupfer.app`) |

## Loslegen

Voraussetzung: [Node.js](https://nodejs.org) 22 oder neuer.

```bash
npm install
npm start            # Browser-Version auf http://localhost:5173
```

`web/index.html` lässt sich auch direkt per Doppelklick öffnen.

### Android

Voraussetzung: [Android Studio](https://developer.android.com/studio).

```bash
npm run android      # baut, synchronisiert und öffnet Android Studio
```

In Android Studio auf ▶ drücken – die App startet im Emulator oder auf dem angeschlossenen Handy.

### iOS

Voraussetzung: ein Mac mit Xcode.

```bash
npx cap add ios      # nur beim ersten Mal
npm run assets       # Icons & Startbildschirm für iOS erzeugen
npm run ios          # baut, synchronisiert und öffnet Xcode
```

### Icons und Startbildschirm ändern

Bilder in `assets/` ersetzen (`icon-only.png` 1024 × 1024, `splash.png` und `splash-dark.png` 2732 × 2732),
dann `npm run assets`.

### Vor der Veröffentlichung

- **App-ID** in `capacitor.config.json` festlegen (z. B. `de.deinname.bluetenzupfer`). Sie ist im Store
  endgültig. Nach einer Änderung `android/` löschen und mit `npx cap add android` neu erzeugen.
- Für Google Play wird ein Entwicklerkonto (einmalig 25 $) benötigt, für den App Store das
  Apple Developer Program (99 $/Jahr).
