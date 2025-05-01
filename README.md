# React + Vite (JS + SWC) Boilerplate

https://chatgpt.com/c/681357bb-deac-800d-ad9f-de16c0647847

## Setup

[SETUP.md](./SETUP.md)

## To Do's

[TODO.md](./TODO.md)

## Lessons learned

[NOTES.md](./NOTES.md)

---

## ✅ Ziel: Projekt als **Template-Repository** auf GitHub speichern

### 🔧 1. Lokales Git-Repository initialisieren

Falls du noch kein Git im Projekt verwendet hast:

```bash
git init
git add .
git commit -m "Initial commit – React Starter Template"
```

---

### 🌐 2. Neues Repository auf GitHub erstellen

1. Gehe auf [https://github.com/new](https://github.com/new)
2. Wähle:
   - **Name:** z. B. `react-starter-template`
   - **Beschreibung:** Starter Template mit Vite + React + React Router
   - **🔲** Kein Haken bei "Initialize this repository with a README" (da du schon lokal einen Commit hast)
   - **Optional:** Haken bei „Template repository“ – dann kannst du es später direkt als Vorlage benutzen

---

### 🔗 3. Remote-URL verbinden

Wenn dein Repo z. B. `https://github.com/TomUlrich/react-starter-template` heißt:

```bash
git remote add origin https://github.com/TomUlrich/react-starter-template.git
git branch -M main
git push -u origin main
```

---

### 📁 4. `.gitignore` sicherstellen

Wenn noch nicht vorhanden, leg eine Datei `.gitignore` an mit:

```bash
node_modules
dist
.env
```

Damit diese Ordner/Dateien **nicht** mit hochgeladen werden.

---

### ♻️ 5. In Zukunft daraus neue Projekte erstellen

Wenn du es als **Template-Repo** markiert hast:

- Klicke in GitHub auf `Use this template` → `Create a new repository`
- So wird dein Starter-Code kopiert, **ohne den alten Git-Verlauf**

Oder:

```bash
npx degit TomUlrich/react-starter-template mein-neues-projekt
```

_(Voraussetzung: **`degit`** ist installiert → **`npm install -g degit`**)_

---

### 🚀 6. Neues Projekt aus dem Template starten

#### A) Über GitHub (GUI)

1. Gehe auf: [https://github.com/TomUlrich/react-starter-template](https://github.com/TomUlrich/react-starter-template)
2. Klicke oben rechts auf **"Use this template"** → **"Create a new repository"**
3. Klone dein neues Repository lokal:
   ```bash
   git clone https://github.com/DEINNAME/NEUES-REPO.git
   cd NEUES-REPO
   npm install
   npm run dev
   ```

#### B) Alternativ über die Konsole mit `degit`

```bash
npx degit TomUlrich/react-starter-template mein-neues-projekt
cd mein-neues-projekt
npm install
npm run dev
```

➡️ Damit wird dein neues Projekt auf Basis deines Templates angelegt – **ohne Git-Verlauf**, aber mit allen Konfigurationen und Abhängigkeiten startbereit.
