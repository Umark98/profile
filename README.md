# Umar Orakzai Portfolio

Personal portfolio for full-stack development, AI SaaS and Web3 work.

[View the live portfolio](https://umar-khitabportfolio.netlify.app/)

## Development

Use Node.js 22, as specified in `.nvmrc`.

```sh
npm ci
npm run dev
```

The local site runs at `http://localhost:4000`.

## Production

```sh
npm run build
npm start
```

Netlify builds from `main` using `netlify.toml` and the Next.js adapter. Production builds include lint and TypeScript checks. The homepage renders its content in the initial HTML without a timed introduction.

## Content

- Biography, experience and project contributions: `components/Home/`
- Search metadata and profile structured data: `components/Seo/PortfolioSeo.tsx`
- Social preview source and published image: `assets/social-card.svg` and `public/og-image.png`
- Public résumé: `public/umar-orakzai-resume.pdf`
- Crawling controls: `public/robots.txt`, `public/sitemap.xml` and route headers in `next.config.js`

The retained demo pages are marked `noindex`. The portfolio publishes the résumé as a PDF only.
