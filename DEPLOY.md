# Deploying AUTH AI to Hostinger

## Build
```bash
npm install
npm run build
```
The `dist/` folder contains the production site.

## Hostinger Upload Steps
1. Log in to Hostinger hPanel
2. Go to **File Manager** → `public_html`
3. Delete existing files (keep `public_html` folder itself)
4. Upload everything inside `dist/` to `public_html/`
5. Also upload `public/.htaccess` to `public_html/.htaccess`

## Alternatively — Hostinger Git Deploy
1. Push this repo to GitHub
2. In hPanel → **Git** → connect your GitHub repo
3. Set deploy path to `public_html`, build command `npm run build`, output dir `dist`

## Updating Content
All text, services, industries, FAQs etc. live in:
```
src/data/site.js
```
Edit that file, rebuild and re-upload `dist/`.

## Adding a New Section
1. Create `src/components/sections/YourSection.jsx`
2. Add it to `src/App.jsx`
3. Add nav link in `src/data/site.js` → `NAV_LINKS`
