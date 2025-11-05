# AI/ML Portfolio

A production-ready, single-page portfolio built with React and Vite to showcase AI/ML projects, research notes, and professional experience. This repository contains a fast development setup with hot module replacement (HMR), common UI libraries, client-side routing, and animation utilities.

---

## Table of contents

- [Overview](#overview)  
- [Highlights](#highlights)  
- [Tech stack](#tech-stack)  
- [Project layout](#project-layout)  
- [Prerequisites](#prerequisites)  
- [Getting started](#getting-started)  
- [Available scripts](#available-scripts)  
- [Build & deploy](#build--deploy)  
- [Notes & recommendations](#notes--recommendations)  
- [Contributing](#contributing)  
- [Contact](#contact)

---

## Overview

This project is a responsive single-page application intended to serve as a personal portfolio for SYED IMRAN. It focuses on clarity, performance, and an engaging presentation of machine learning and AI-related work.

The application mounts at `#root` (see `index.html`) and the client entry point is `/src/main.jsx`.

---

## Highlights

- Fast dev iteration with Vite (HMR)
- Responsive layout using Bootstrap and React-Bootstrap
- Smooth UI animations via Framer Motion
- Client-side routing with react-router-dom
- Predictable state management with Redux Toolkit
- Modern form handling with react-hook-form
- Animated text and type effects to enrich the UX

---

## Tech stack

Core technologies used in the project:

- React 19
- Vite (note: overridden to rolldown-vite in package.json)
- Redux Toolkit, react-redux
- react-router-dom
- bootstrap, react-bootstrap
- framer-motion
- react-hook-form
- react-icons, @heroicons/react
- react-text-loop-ts, react-text-transition, react-type-animation

Refer to package.json for the full dependency list and versions.

---

## Project layout (high level)

- public/             — Static assets served as-is  
- src/                — React source: components, pages, assets, styles  
- index.html          — App HTML (mount point: `#root`)  
- package.json        — Dependency and script definitions  
- vite.config.js      — Vite configuration  
- eslint.config.js    — Linting rules and configuration

---

## Prerequisites

- Node.js (recommended >= 18.x)
- npm (or yarn/pnpm — adjust commands accordingly)

---

## Getting started

Clone the repository, install dependencies and run the local dev server:

```bash
git clone https://github.com/alymehroz512/AIML-PORTFOLIO-2.git
cd AIML-PORTFOLIO-2
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) to view the site.

---

## Available scripts

Defined in package.json:

- `npm run dev` — Start the Vite development server (HMR)
- `npm run build` — Create a production build in `dist/`
- `npm run preview` — Locally preview the production build
- `npm run lint` — Run ESLint across the codebase

---

## Build & deploy

Create a production build:

```bash
npm run build
```

Deploy the contents of the generated `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

Suggested settings for Vercel/Netlify:
- Build command: `npm run build`
- Publish directory: `dist`

---

## Notes & recommendations

- Vite is overridden to `rolldown-vite` in package.json. If you plan to upgrade Vite or change plugins, verify compatibility with that override.
- Consider adopting TypeScript for improved developer ergonomics and stronger linting rules (the project already includes @types/react dev dependency).
- Add a LICENSE file to clarify usage rights if you want to publish the code publicly.
- Add CI (GitHub Actions) to run lint and build checks on PRs for higher quality control.
- Add automated tests (Jest + React Testing Library) if you intend to expand functionality.

---

## Contributing

Contributions are welcome. A recommended workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes with clear messages
4. Push your branch and open a pull request describing the work

Please run `npm run lint` and ensure `npm run build` succeeds before opening a PR.

---

## Contact

Repository: https://github.com/alymehroz512/AIML-PORTFOLIO-2  
Owner: alymehroz512

---
