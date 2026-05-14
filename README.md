# Portfolio

Source for [shaynejg.github.io/Portfolio](https://shaynejg.github.io/Portfolio/).

Built with [Astro](https://astro.build), deployed to GitHub Pages via Actions.

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview the production build
npm run typecheck  # astro check
```

The design spec lives at `docs/superpowers/specs/2026-05-02-portfolio-overhaul-design.md`.

## Optional: analytics

Analytics are off by default. To enable [GoatCounter](https://goatcounter.com)
(privacy-respecting, no cookies, no consent banner needed):

1. Sign up at goatcounter.com and pick a subdomain (e.g. `shaynejg`).
2. In the GitHub repo, go to **Settings → Secrets and variables → Actions
   → Variables** and add a new repo variable:
   - Name: `PUBLIC_GOATCOUNTER_URL`
   - Value: `https://<your-subdomain>.goatcounter.com/count`
3. Trigger a redeploy. The site picks the value up at build time and
   renders the GoatCounter script tag in `<head>`.

For local development, copy `.env.example` to `.env` and set the same
variable if you want to test locally.
