# Bridgeway Visa Travel Corporation — Official Website

## ⚠️ Proprietary Notice

All information, source code, assets, and intellectual property contained in this repository are **exclusively owned by the Bridgeway Visa Travel Corporation IT Team**.

**Unauthorized access, copying, modification, distribution, or any form of tampering with this codebase is strictly prohibited and will be met with legal action** in accordance with applicable intellectual property and cybercrime laws.

---

## Tech Stack

- **React 19** — Component-based UI
- **TypeScript** — Type-safe development
- **Vite 8** — Fast build tooling
- **Tailwind CSS 4** — Utility-first styling
- **Swiper** — Touch-enabled carousels
- **React YouTube** — Embedded video testimonials

## Project Structure

```
bridgewayvisa-main/
├── assets/                  # Images, logos, and media files
├── bridgewayvisa-react/     # React application source
│   ├── public/              # Static public assets
│   ├── src/
│   │   ├── components/      # All page section components
│   │   ├── App.tsx          # Main application layout
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles & animations
│   ├── index.html           # HTML entry point
│   ├── vite.config.ts       # Vite build configuration
│   ├── tsconfig.json        # TypeScript configuration
│   └── package.json         # Dependencies & scripts
├── CNAME                    # Custom domain configuration
├── LICENSE                  # Apache 2.0 License
└── README.md                # This file
```

## Development

```bash
cd bridgewayvisa-react
npm install
npm run dev
```

## Build for Production

```bash
cd bridgewayvisa-react
npm run build
```

Output is generated in `bridgewayvisa-react/dist/`.

## Deployment

The production build is deployed via the custom domain configured in `CNAME`:

```
bridgeway.info.org
```

---

© 2026 Bridgeway Visa Travel Corporation. All Rights Reserved.
