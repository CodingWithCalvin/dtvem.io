# dtvem.io

[![Build](https://img.shields.io/github/actions/workflow/status/CodingWithCalvin/dtvem.io/build.yml?style=for-the-badge)](https://github.com/CodingWithCalvin/dtvem.io/actions)
[![License](https://img.shields.io/github/license/CodingWithCalvin/dtvem.io?style=for-the-badge)](LICENSE)

The website for [dtvem](https://github.com/CodingWithCalvin/dtvem.cli), a cross-platform runtime version manager.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Cloudflare Workers](https://workers.cloudflare.com/) - Hosting

## Development

```bash
cd website
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
website/
├── src/
│   ├── components/    # Reusable Astro components
│   ├── content/docs/  # Documentation markdown files
│   ├── layouts/       # Page layouts
│   └── pages/         # Site pages
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```
