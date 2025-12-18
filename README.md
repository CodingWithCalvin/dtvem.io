# dtvem.io

The website for [dtvem](https://github.com/dtvem/dtvem), a cross-platform runtime version manager.

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
