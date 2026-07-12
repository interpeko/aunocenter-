# AUNO Center institutional website

A complete, production-ready institutional research platform for AUNO Center, built with Astro and configured for Netlify. It contains more than 60 generated pages, eleven research services, ten courses, a verified resource library, an Academic Practice Framework, an Editorial & Corrections Policy, institutional programs, legal and accessibility pages, eight Netlify forms, an NCBI PubMed integration, and the Interpeko academic research assistant.

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

The primary production URL is `https://aunocenter.netlify.app`. Netlify's production `URL` environment variable overrides it for canonical URLs and the sitemap.

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

Interpeko uses a server-side OpenAI Responses API function at `netlify/functions/interpeko.mjs`, exposed through `/api/interpeko`. The API key remains server-only. The function pins the academic instructions and model, disables application storage, limits payload size and output, applies best-effort rate limits, moderates input, sanitises provider errors, and returns only allowlisted AUNO Center source routes. The browser automatically switches to an approved on-device academic guide when AI mode is unavailable.

Required production environment variables:

- `OPENAI_API_KEY` — server-only OpenAI project key
- `INTERPEKO_MODEL` — optional; defaults to `gpt-5.6-terra`
- `RATE_LIMIT_SALT` — optional independent secret for pseudonymous rate-limit identifiers

## GitHub Pages access fallback

An independent static mirror is published at `https://interpeko.github.io/aunocenter-/`. The Pages workflow builds the same 60-page source from `main`, prepares repository-prefixed asset and navigation paths, and deploys the result automatically.

The mirror provides complete public content and navigation if regional Netlify routing is unavailable. Its forms submit to the primary Netlify form service, and the server-backed PubMed search remains a Netlify feature; visitors can always continue a PubMed query on the official PubMed website if that service is unavailable.

## Content, privacy, and safety

- Public forms intentionally prohibit sensitive patient, participant, credential, payment, and confidential dataset submissions.
- Optional CVs submitted through the Join portal are private Netlify form submissions and are never committed to the website repository.
- Interpeko labels AI-generated and on-device guided responses separately, does not accept sensitive research data, and links answers to approved institutional sources.
- No accreditations, named partners, staff, instructors, dates, impact metrics, completed projects, or guaranteed outcomes are claimed without verified source information.
- The three supplied educational PDFs retain their document attribution and are not misattributed to the founder.

Official contact destinations are centralised in `src/data/site.ts` so the header, footer, contact page, structured data, and social poster stay consistent.
