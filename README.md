# Daisy's Dailies website

Marketing and legal site for Daisy's Dailies, a family planner app for iOS and Android
where errands are "petals" on a "flower". It has a homepage, a download redirect page,
and the Privacy Policy, Terms of Service, Data Deletion and Contact pages that the app
stores link to. Live at https://daisysdailies.com.

## Stack

- [Astro](https://astro.build) 7 (static output) with `@astrojs/sitemap`
- Tailwind CSS 4 via `@tailwindcss/vite`, plus `@tailwindcss/typography` for legal pages
- Plus Jakarta Sans through Astro's Google fonts provider
- Node 22.12 or newer
- Firebase Hosting (project `daisysdailies`)

## Run it locally

```
npm ci
astro dev --background     # project convention: dev server in the background
astro dev status
astro dev logs
astro dev stop
npm run build              # static site into dist/
npm run preview            # serve the built site
```

## Deployment

Pushing to `master` runs `.github/workflows/firebase-hosting-merge.yml`, which runs
`npm ci`, `npm run build` and deploys `dist/` to Firebase Hosting. There is no staging
step, so do not push copy for unreleased app features to `master`. The workflow can also
be started by hand (`workflow_dispatch`).

## Lockfile rule

`package-lock.json` must list the optional dependencies for every platform. CI installs
on Linux, and a lockfile last written on Windows (for example by `npm install`) breaks
`npm ci` there. After changing any dependency, regenerate it in a Linux container, and
check `npm ci` on both platforms. See [CLAUDE.md](CLAUDE.md) for the exact command and
the full explanation.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/pages/` | One file per route: `index`, `download`, `privacy-policy`, `terms-of-service`, `data-deletion`, `contact-us`, `404` |
| `src/components/` | Shared Astro components (`SiteHeader`, `SiteFooter`, `Callout`, `StoreButtons`, `DownloadQr`, `FlowerGraphic`) and homepage sections in `home/` |
| `src/layouts/` | `Layout.astro` (base page) and `LegalLayout.astro` (legal and support pages) |
| `src/consts.ts` | Site name, support email (`SITE.email`), store URLs, nav and footer links |
| `src/styles/global.css` | Tailwind setup, design tokens, and the `.btn` button classes |
| `firebase.json` | Hosting config: clean URLs, no trailing slash, redirects, and security headers including the Content Security Policy |
| `astro.config.mjs` | Site URL, `trailingSlash: 'never'`, sitemap, fonts |

The Content Security Policy in `firebase.json` blocks form submission (`form-action 'none'`),
so contact links use `mailto:` rather than web forms.
