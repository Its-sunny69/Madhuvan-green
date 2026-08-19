# Madhuvan Greens

Website for Madhuvan Greens, a family restaurant in Badlapur, Maharashtra. It showcases the restaurant menu, ambience, desserts, beverages, team and location.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## SEO and sharing

The site includes search metadata, canonical URLs, Open Graph and X/Twitter sharing cards, a branded share-preview image at `/opengraph-image`, restaurant structured data (JSON-LD), and crawl files at `/robots.txt` and `/sitemap.xml`.

The branded files in `src/assets/icons` are used for browser-tab and Apple touch icons.

Before production deployment, set the public site URL so canonical links, sitemap URLs and sharing previews use the live domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

Replace the placeholder WhatsApp/telephone contact information and social links with verified business details before adding them to the website or structured data. Do not add hours, pricing, ratings, or social profiles to the schema unless they are accurate and kept current.

## Useful commands

```bash
npm run dev    # start local development
npm run lint   # run lint checks
npm run build  # create the production build
```

## Deploy

Deploy to your preferred Next.js host, configure `NEXT_PUBLIC_SITE_URL`, then submit `https://your-live-domain.com/sitemap.xml` in Google Search Console.
