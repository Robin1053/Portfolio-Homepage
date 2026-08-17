# robineb.de · Portfolio & Homepage

[![CI](https://github.com/Robin1053/Portfolio-Homepage/actions/workflows/ci.yaml/badge.svg)](https://github.com/Robin1053/Portfolio-Homepage/actions/workflows/ci.yaml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-087ea4?logo=react&logoColor=white)](https://react.dev/)
[![MUI](https://img.shields.io/badge/MUI-9-007fff?logo=mui&logoColor=white)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Live-robineb.de-047857)](https://www.robineb.de)

Persönliche Portfolio-Seite mit Fokus auf **Embedded Software Development**: Firmware und Steuerungssoftware in C und C++, von der Schaltung bis zum getesteten Release.

## Features

- **Embedded-Fokus**: Hero mit echtem C-Code-Panel (ISR + Superloop), gruppierte Skills (Sprachen, Hardware & Steuerung, Werkzeuge)
- **Dark Mode**: CSS-Variablen-Theme mit Light/Dark-Scheme und Toggle im Header
- **Responsive**: Asymmetrisches Layout auf Desktop, sauberer Single-Column-Collapse auf Mobile
- **Rechtliches**: Impressum und Datenschutz als eigene Routen
- **Versionierung**: App-Version aus der `package.json` im Footer

## Tech-Stack

| Bereich    | Technologie                                  |
| ---------- | -------------------------------------------- |
| Framework  | Next.js 16 (App Router, Server Components)   |
| UI         | MUI v9 mit CSS-Variablen-Theming             |
| Sprache    | TypeScript                                   |
| Fonts      | Roboto, Roboto Mono & Baloo 2 (Akzent) über `next/font` |
| CI/CD      | GitHub Actions (Lint + Build bei jedem Push) |

## Entwicklung

```bash
npm install       # Abhängigkeiten installieren
npm run dev       # Dev-Server auf http://localhost:3000
npm run dev:https # Dev-Server mit HTTPS (experimentell)
npm run lint      # ESLint
npm run build     # Produktions-Build
npm start         # Produktions-Server
```

## Projektstruktur

```
src/
├── app/
│   ├── (legal)/        # Impressum & Datenschutz
│   ├── layout.tsx      # Root-Layout (Theme, Fonts, Header/Footer)
│   ├── page.tsx        # Startseite (Hero, Projekte, Skills, Kontakt)
│   └── globals.css     # Basis-Styles
├── components/         # SiteHeader, SiteFooter, ColorModeToggle
├── lib/                # Konfiguration (z. B. legal.ts)
└── theme.ts            # MUI-Theme (Light/Dark, Farben, Typografie)
```

## CI/CD

Jeder Push löst die [CI-Pipeline](.github/workflows/ci.yaml) aus: `npm ci`, ESLint und Produktions-Build auf Node 22.

## Lizenz

[MIT](LICENSE)
