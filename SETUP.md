# Boilerplate Setup

### 🚀 Neues Projekt aus dem Template starten

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

---

## Startstruktur

Diese Struktur ist auf eine **Multipage-Website mit Landingpage, Portfolio, Kontaktseite und Shop** ausgelegt und eignet sich hervorragend als Basis.

### 📁 Projektstruktur (Startstruktur)

```plaintext
die-sattler/
├── public/
│   └── assets/             # Statische Dateien (z. B. Bilder, Logos, Favicon)
│
├── src/
│   ├── assets/             # Importierbare Assets (z. B. Bilder, Fonts)
│   ├── components/         # Wiederverwendbare UI-Komponenten (z. B. Header, Button)
│   ├── pages/              # Einzelne Seiten (Landing, Portfolio, Kontakt, Shop)
│   ├── layout/             # Seitenübergreifende Layouts (z. B. mit Header/Footer)
│   ├── routes/             # Routing-Konfiguration
│   ├── styles/             # Globale CSS/SCSS-Dateien
│   ├── utils/              # Hilfsfunktionen (z. B. Formatierungen, API-Wrapper)
│   ├── hooks/              # Custom React Hooks
│   ├── App.jsx             # Haupt-Komponente
│   └── main.jsx            # Einstiegspunkt für Vite/ReactDOM
│
├── .gitignore
├── index.html              # Haupt-HTML-Datei (Vite spezifisch)
├── package.json
├── README.md
└── vite.config.js
```

---

### 🔍 Details und Beispiele

#### `src/pages/`

- `LandingPage.jsx`
- `PortfolioPage.jsx`
- `ContactPage.jsx`
- `ShopPage.jsx`

#### `src/components/`

- `Header.jsx`
- `Footer.jsx`
- `HeroSection.jsx`
- `ProductCard.jsx`
- `ImageGallery.jsx`

#### `src/layout/`

- `MainLayout.jsx`  
  → z. B. `<Header />`, `<Outlet />`, `<Footer />`

#### `src/App.jsx`

Wird in dieser Struktur meist nicht benötigt, da die Route den Einstieg übernimmt – optional nutzbar, wenn du globale Logik brauchst.

---

### ✅ Vorteile dieser Struktur

- **Modular**: Klar getrennte Seiten, Komponenten, Layouts
- **Erweiterbar**: Leicht skalierbar für z. B. Authentifizierung, Zustandverwaltung (z. B. Redux, Zustand)
- **Flexibel**: Du kannst z. B. einen Shop separat als eigenes Modul einfügen (mit eigener Struktur unter `/shop/`)

---
