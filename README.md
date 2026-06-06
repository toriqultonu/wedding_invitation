# Toriqul & Lamyea — Wedding Invitation

An elegant, mobile-first single-page wedding invitation built with **React + Vite + Tailwind CSS + Framer Motion**, with a watercolour-floral aesthetic. Designed to be shared via messaging apps and hosted for free on **GitHub Pages**.

## Tech & design

- **React 18 + Vite 5** — fast SPA, single-page scroll layout (no client router, so refreshes never 404 on GitHub Pages).
- **Tailwind CSS** — custom palette (cream `#FAF8F5`, gold `#D4AF37`, dusty rose, sage, warm brown) and fonts (Great Vibes / Cormorant Garamond / Montserrat).
- **Framer Motion** — scroll-triggered upward fades (`initial → whileInView`, `viewport={{ once: true }}`) and the hero's sliding florals + gold ring.
- All florals are inline SVG — **no external image assets** to break on deploy.

## Run locally

```bash
npm install      # install dependencies
npm run dev      # start the dev server (Vite prints a localhost URL)
npm run build    # production build into ./dist
npm run preview  # serve the production build locally to verify
```

## Deploy to GitHub Pages

The project is preconfigured for Pages:

- `vite.config.js` sets `base: './'` so all asset URLs are **relative** — works from a repo subpath (`username.github.io/<repo>/`) or a custom domain root with no 404s.
- `gh-pages` is installed and `predeploy` / `deploy` scripts are in `package.json`.

**Steps:**

1. Create a GitHub repo and push this project to it.
   ```bash
   git init
   git add .
   git commit -m "Wedding invitation"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Deploy — this builds and publishes `dist/` to a `gh-pages` branch:
   ```bash
   npm run deploy
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source = "Deploy from a branch"**, branch = **`gh-pages`** / root. Save.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

> Because `base` is `'./'`, you do **not** need to change the config to match the repo name. If you prefer the explicit form instead, set `base: '/<repo-name>/'` in `vite.config.js`.

## Editing content

All wording lives in the components under `src/components/`:

| Section | File |
| --- | --- |
| Hero / names | `Hero.jsx` |
| Families | `Family.jsx` |
| Date & time | `EventDetails.jsx` |
| Venue & map | `Venue.jsx` (update `LAT` / `LNG` to move the map) |
| Closing quote | `App.jsx` |
