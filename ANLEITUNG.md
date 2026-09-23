# Deine erste App: Schritt für Schritt

Diese Anleitung bringt den **Blütenzupfer** vom Code bis auf dein Handy – und später in den Play Store.
Du brauchst keine Vorkenntnisse.

**Du brauchst:** einen Windows-PC oder Mac, ein Android-Handy mit USB-Kabel und etwa eine Stunde Zeit
(das meiste davon sind Downloads). Für iPhone-Apps brauchst du zwingend einen Mac – siehe ganz unten.

---

## Teil 1: Vorbereitung (einmalig)

### Schritt 1: Code herunterladen
1. Geh auf GitHub zu deinem Projekt **Silver-System-**.
2. Oben links steht ein Knopf mit **„main“**. Klick drauf und wähle den Zweig
   **`claude/flower-petal-picker-app-akk7dy`** – nur dort liegt die App.
3. Klick auf den grünen Knopf **„Code“** → **„Download ZIP“**.
4. Entpacke die ZIP-Datei, z. B. in deinen Ordner „Dokumente“.

### Schritt 2: Node.js installieren
Node.js ist das Werkzeug, das die App baut.
1. Geh auf **https://nodejs.org** und lade die Version mit **„LTS“** herunter.
2. Installieren – einfach immer „Weiter“ klicken.

### Schritt 3: Android Studio installieren
Daraus wird die echte Android-App.
1. Geh auf **https://developer.android.com/studio** und lade es herunter.
2. Installieren und einmal starten.
3. Beim ersten Start **„Standard“** wählen und durchklicken.
   Es lädt einiges herunter – das kann 10–20 Minuten dauern.

### Schritt 4: Terminal öffnen
Das Terminal ist ein Fenster, in das man Befehle tippt. Es muss **im Projektordner** geöffnet werden:

- **Windows:** Öffne den entpackten Ordner (der, in dem die Datei `package.json` liegt).
  Klick oben in die Adressleiste, tippe `cmd` und drück Enter.
- **Mac:** Rechtsklick auf den Ordner im Finder → **„Dienste“ → „Neues Terminal beim Ordner“**.

Tipp zum Testen ein:

```
node -v
```

Erscheint eine Zahl wie `v22.…`? Super! Wenn nicht: Terminal schließen, neu öffnen, nochmal probieren.

### Schritt 5: Bausteine installieren
Tipp ins Terminal:

```
npm install
```

Warten, bis wieder eine leere Zeile zum Tippen erscheint. Warnungen kannst du ignorieren.

---

## Teil 2: App ausprobieren

### Schritt 6: Im Browser testen

```
npm start
```

Öffne im Browser **http://localhost:5173** – du kannst schon Blumen zupfen!
Zum Beenden: ins Terminal klicken und **Strg + C** drücken.

### Schritt 7: Handy vorbereiten
1. Am Handy: **Einstellungen → Über das Telefon**.
2. **7-mal** auf **„Build-Nummer“** tippen, bis dort „Sie sind jetzt Entwickler“ steht.
3. Zurück in den Einstellungen **„Entwickleroptionen“** suchen (meist unter „System“).
4. **„USB-Debugging“** einschalten.
5. Handy per Kabel an den Computer anschließen. Fragt das Handy
   „USB-Debugging zulassen?“ → **„Zulassen“**.

### Schritt 8: App aufs Handy bringen
Tipp ins Terminal:

```
npm run android
```

1. Android Studio öffnet sich. **Warten**, bis unten rechts keine Ladebalken mehr laufen
   (beim ersten Mal 5–10 Minuten).
2. Oben in der Leiste dein Handy auswählen.
3. Den **grünen ▶-Knopf** drücken.
4. Nach etwa einer Minute ist **Blütenzupfer auf deinem Handy**. 🌼

**Kein Handy zur Hand?** In Android Studio über **„Device Manager“** ein virtuelles Handy anlegen
und das statt deines Handys auswählen.

**Später etwas am Code geändert?** Einfach wieder `npm run android` und ▶ drücken.

---

## Teil 3: Im Play Store veröffentlichen

### Schritt 9: Deine App-ID festlegen (wichtig!)
Die App-ID ist der eindeutige Name deiner App im Store und kann **später nie mehr geändert werden**.

1. Öffne die Datei **`capacitor.config.json`** mit einem Texteditor.
2. Ändere `de.bluetenzupfer.app` z. B. in `de.deinname.bluetenzupfer`
   (nur Kleinbuchstaben und Punkte, keine Umlaute).
3. Lösche den Ordner **`android`** und tipp nacheinander:

   ```
   npx cap add android
   npm run assets
   ```

### Schritt 10: Google-Play-Konto anlegen
1. Auf **https://play.google.com/console** registrieren – kostet einmalig **25 $**.
2. Google prüft deinen Ausweis. Das dauert ein paar Tage.

### Schritt 11: Die fertige App-Datei erstellen
1. In Android Studio: **Build → Generate Signed App Bundle / APK → Android App Bundle**.
2. Bei „Key store“ auf **„Create new…“** – das ist ein **Schlüssel** (eine Datei + Passwort).
3. ⚠️ **Diese Schlüsseldatei und das Passwort gut aufbewahren** (z. B. zusätzlich auf einem USB-Stick)!
   Ohne sie kannst du deine App **nie wieder aktualisieren**.
4. **„release“** wählen → **„Create“**. Heraus kommt eine Datei mit der Endung **`.aab`**.

### Schritt 12: Hochladen
In der Play Console eine neue App anlegen und die Formulare ausfüllen
(Beschreibung, Bilder, Altersfreigabe).

- Du brauchst eine **Datenschutzerklärung** als Link. Die App sammelt keine Daten, das macht sie einfach.
- **Neue private Konten** müssen die App zuerst **14 Tage lang mit mindestens 12 Testern**
  testen lassen, bevor sie öffentlich erscheinen darf. Frag also schon mal Freunde und Familie!

---

## Extra: Die schnellste Art, die App zu teilen
Ganz ohne Play Store:

1. `npm run build` eintippen – danach gibt es einen Ordner **`www`**.
2. Auf **https://app.netlify.com/drop** den Ordner `www` auf die Seite ziehen.
3. Du bekommst einen Link, den du jedem schicken kannst. Am Handy kann man die App über
   **„Zum Startbildschirm hinzufügen“** wie eine echte App installieren.

## Extra: iPhone
Dafür brauchst du einen **Mac** mit **Xcode** (kostenlos im App Store) und das
Apple-Entwicklerprogramm (**99 $ im Jahr**). Dann im Terminal:

```
npx cap add ios
npm run assets
npm run ios
```

In Xcode oben dein iPhone auswählen und ▶ drücken. Am besten erst angehen, wenn Android läuft.

---

## Wenn etwas nicht klappt

| Problem | Lösung |
|---|---|
| „npm“ oder „node“ wird nicht erkannt | Terminal schließen und neu öffnen. Notfalls Computer neu starten. |
| Android Studio öffnet sich nicht von selbst | Android Studio selbst starten → **File → Open** → den Ordner **`android`** im Projekt öffnen. |
| Rote Fehler in Android Studio | **File → Sync Project with Gradle Files** klicken und warten. |
| Handy taucht nicht auf | Anderes USB-Kabel probieren (manche können nur laden) und am Handy „Zulassen“ tippen. |
| Änderungen erscheinen nicht in der App | Nochmal `npm run android` ausführen, dann ▶ drücken. |

Hängst du irgendwo? Schick einen Screenshot oder die Fehlermeldung an Claude.
