# React Migration & Project Updates

## Migration Overview

This project has been migrated from a static HTML/CSS/JavaScript website to a **React + Vite + TypeScript** application. The migration focuses on improving maintainability, modularity, development workflow, and deployment compatibility with GitHub Pages.

---

# Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Swiper.js
- React YouTube
- GitHub Pages (Deployment)

---

# Installed Dependencies

## Production Dependencies

| Package         | Purpose                           |
| --------------- | --------------------------------- |
| `react`         | Frontend UI library               |
| `react-dom`     | React DOM rendering               |
| `swiper`        | Responsive sliders and carousels  |
| `react-youtube` | Embedded YouTube player component |

Install:

```bash
npm install react react-dom swiper react-youtube
```

---

## Development Dependencies

| Package                | Purpose                           |
| ---------------------- | --------------------------------- |
| `vite`                 | Development server and bundler    |
| `typescript`           | TypeScript support                |
| `@vitejs/plugin-react` | React integration for Vite        |
| `tailwindcss`          | Utility-first CSS framework       |
| `@tailwindcss/vite`    | Tailwind CSS integration for Vite |
| `@types/react`         | React TypeScript definitions      |
| `@types/react-dom`     | React DOM TypeScript definitions  |
| `gh-pages`             | GitHub Pages deployment           |

Install:

```bash
npm install -D vite typescript @vitejs/plugin-react tailwindcss @tailwindcss/vite @types/react @types/react-dom gh-pages
```

---

# Major Project Changes

## React Component Migration

The website was separated into reusable React components.

Examples include:

- Navbar
- Hero Section
- About
- Services
- Featured Programs
- Our Partners
- Team
- Testimonials
- Office Gallery
- Footer

---

## Image Asset Migration

All hardcoded image URLs were replaced with ES module imports.

### Before

```tsx
<img src="/assets/logo.ico" />
```

### After

```tsx
import logo from "../../../assets/logo.ico";

<img src={logo} />;
```

This improves:

- Type safety
- Build optimization
- Asset bundling
- GitHub Pages compatibility

---

## Global Smooth Scrolling

Smooth scrolling has been enabled globally for all in-page navigation.

```html
<html lang="en" class="scroll-smooth"></html>
```

### Benefits

- Smooth navigation from Navbar links
- Smooth scrolling to section anchors
- Smooth Back-to-Top animation
- Improved user experience across the entire website

---

## Data Refactoring

The following datasets were converted to use imported assets instead of string paths:

- Featured Programs
- Our Office Gallery
- Leadership & Team
- Testimonials
- Our Partners

---

## Tailwind CSS

The project now uses Tailwind CSS v4 through the official Vite plugin.

```ts
plugins: [react(), tailwindcss()];
```

---

## GitHub Pages Deployment

Deployment support was added using **gh-pages**.

### package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy the application:

```bash
npm run deploy
```

---

# Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files are located in:

```
dist/
```

---

# Deployment

Deploy the application to GitHub Pages:

```bash
npm run deploy
```

---

# Project Improvements

- Migrated from static HTML to React
- Adopted TypeScript
- Introduced reusable React components
- Added Tailwind CSS v4
- Improved project organization
- Replaced static image paths with module imports
- Added GitHub Pages deployment support
- Improved maintainability and scalability

---

# Future Improvements

- Create centralized asset export files (`assets/index.ts`)
- Lazy-load large image galleries
- Optimize images for faster loading
- Add ESLint and Prettier
- Improve accessibility (ARIA labels, keyboard navigation)
- Add unit and component testing
- Implement route-based code splitting

## Changes Made

- Renamed `Office.tsx` to `MainOffice.tsx`.
- Created a new `CebuOffice.tsx` component.
- Separated the office descriptions into their respective components:
  - **Main Office** description is now in `MainOffice.tsx`.
  - **Cebu Office** description is now in `CebuOffice.tsx`.

- Removed the **Organizational Chart** section by deleting `OrgChart.tsx`.
- Updated one of the images in the **Team** section.
- Updated the image in the **Payment Channel** section.

### Updated Structure

```text
components/
├── MainOffice.tsx
└── CebuOffice.tsx
```

## 🆕 Latest Update

- 📍 Added an **Office Location Guide** with a YouTube video to help users find our office more easily.
- 🎥 https://www.youtube.com/watch?v=NhSijB4gMGw
