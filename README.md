# AUNO Center institutional website

A complete, static, production-ready institutional research platform for AUNO Center, built with Astro and configured for Netlify. It contains 60 generated pages, eleven research services, ten courses, a verified resource library, institutional programs, legal and accessibility pages, eight Netlify forms, an NCBI PubMed integration, and the Interpeko public-information assistant.

## Local development

```bash
npm install
npm run dev
```

## Production verification

```bash
npm run build
npm run test:site
npm test
```

The generated site is written to `dist/`.

## Netlify deployment

The repository includes `netlify.toml`. Netlify should use:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Node.js: `24`

The production fallback URL is `https://aunocenter.netlify.app`. Netlify's production `URL` environment variable overrides it for canonical URLs and the sitemap.

Forms included in the site are:

- `research-support-request`
- `general-contact`
- `training-inquiry`
- `collaboration-inquiry`
- `newsletter-subscription`
- `course-enrollment-application`
- `course-scholarship-request`
- `join-auno-application`

Configure form notification delivery to `aunocenter@gmail.com` in the Netlify dashboard after the repository is connected.

The PubMed proxy is implemented at `netlify/functions/pubmed-search.mjs` and exposed through `/api/pubmed-search`. It queries the official NCBI E-utilities service and does not scrape PubMed pages.

## Content, privacy, and safety

- Public forms intentionally prohibit sensitive patient, participant, credential, payment, and confidential dataset submissions.
- Optional CVs submitted through the Join portal are private Netlify form submissions and are never committed to the website repository.
- Interpeko uses an approved browser-side knowledge map; it does not transmit questions to an external AI provider.
- No accreditations, named partners, staff, instructors, dates, impact metrics, completed projects, or guaranteed outcomes are claimed without verified source information.
- The three supplied educational PDFs retain their document attribution and are not misattributed to the founder.

Official contact destinations are centralised in `src/data/site.ts` so the header, footer, contact page, structured data, and social poster stay consistent.
