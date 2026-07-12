import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const failures = [];
const requiredFiles = [
  'index.html', '404.html', 'about/index.html', 'about/vision-mission/index.html',
  'services/index.html', 'services/research-design-methodology/index.html',
  'services/statistical-analysis/index.html', 'services/questionnaire-development/index.html',
  'services/results-interpretation/index.html', 'services/pre-submission-review/index.html',
  'services/literature-review-support/index.html', 'request-support/index.html',
  'services/scientific-writing/index.html', 'services/manuscript-development/index.html',
  'services/research-proposal-support/index.html', 'services/healthcare-research-consultancy/index.html',
  'services/institutional-research-support/index.html', 'training/index.html', 'resources/index.html',
  'courses/index.html', 'courses/enroll/index.html', 'courses/scholarship/index.html',
  'future-development-program/index.html', 'projects-publications/index.html', 'media/index.html',
  'pubmed-search/index.html', 'interpeko/index.html', 'academic-standards/index.html',
  'editorial-policy/index.html', 'join/index.html', 'research-ethics-integrity/index.html',
  'international-collaboration/index.html', 'healthcare-research/index.html',
  'institutional-research-support/index.html', 'news-events/index.html', 'faq/index.html',
  'contact/index.html', 'privacy/index.html', 'terms/index.html',
  'research-consultancy-disclaimer/index.html', 'accessibility/index.html',
  'thank-you/index.html', 'search/index.html', 'sitemap-index.xml', 'robots.txt',
  'images/auno-social-poster.png', 'images/auno-whatsapp-qr.svg', 'images/auno-whatsapp-qr.png',
  'images/mustafa-saadabi-founder-portrait.webp', 'images/mustafa-saadabi-founder-portrait-360.webp',
  'images/auno-introduction-thumbnail.svg', 'media/auno-center-introduction-production-brief.md',
  'media/auno-center-introduction-transcript.txt', 'media/auno-center-introduction-captions.vtt',
  'resources/research-question-canvas.md', 'resources/analysis-plan-checklist.md', 'resources/manuscript-readiness-checklist.md'
];

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(target));
    else output.push(target);
  }
  return output;
}

for (const file of requiredFiles) {
  try { await access(path.join(root, file)); }
  catch { failures.push(`Missing required build artifact: ${file}`); }
}

for (const file of ['netlify/functions/interpeko.mjs', 'shared/interpeko-knowledge.mjs']) {
  try { await access(path.resolve(file)); }
  catch { failures.push(`Missing Interpeko implementation file: ${file}`); }
}

const files = await walk(root);
const htmlFiles = files.filter(file => file.endsWith('.html'));
const htmlByFile = new Map();
for (const file of htmlFiles) htmlByFile.set(file, await readFile(file, 'utf8'));

for (const [file, html] of htmlByFile) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const isPoster = relative === 'social-poster/index.html';
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) failures.push(`${relative}: expected one H1, found ${h1Count}`);
  const mainCount = (html.match(/<main(?:\s|>)/g) || []).length;
  if (!isPoster && mainCount !== 1) failures.push(`${relative}: expected one main landmark, found ${mainCount}`);
  if (!isPoster && !/<main\s[^>]*id="main-content"/.test(html)) failures.push(`${relative}: missing main landmark`);
  if (!isPoster && !/<meta\s+name="description"\s+content="[^"]+"/.test(html)) failures.push(`${relative}: missing meta description`);
  if (!isPoster && !/<link\s+rel="canonical"\s+href="[^"]+"/.test(html)) failures.push(`${relative}: missing canonical URL`);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${relative}: missing document title`);
  if (/href="#"/.test(html)) failures.push(`${relative}: contains an empty hash link`);
  if (/\b(lorem ipsum|TODO|FIXME)\b/i.test(html)) failures.push(`${relative}: contains draft placeholder text`);
}

const normalizedHtml = [...htmlByFile.values()].join('\n').replaceAll('&amp;', '&');
const homepageHtml = htmlByFile.get(path.join(root, 'index.html')) ?? '';
for (const phrase of ['Founder and Director', 'Mustafa Saadabi', 'Faculty of Medicine', 'Founder’s Word', 'Read More']) {
  if (!homepageHtml.includes(phrase)) failures.push(`Homepage founder section is missing: ${phrase}`);
}
if (!homepageHtml.includes('mustafa-saadabi-founder-portrait-360.webp 360w') || !homepageHtml.includes('mustafa-saadabi-founder-portrait.webp 720w')) {
  failures.push('Homepage founder portrait is missing its responsive WebP source set');
}
if (/President Message|Founder of AUNO Center|Founder and Director of AUNO Center/i.test(normalizedHtml)) {
  failures.push('Website contains a prohibited founder title');
}
const headerHtml = homepageHtml.match(/<header class="site-header"[\s\S]*?<\/header>/)?.[0] ?? '';
if (!headerHtml.includes('<em>One World. One Research. One Center of Excellence.</em>')) {
  failures.push('Header brand is missing the institutional slogan beneath the AUNO name');
}
const institutionBarHtml = headerHtml.match(/<div class="institution-bar">[\s\S]*?<\/div>\s*<div class="shell header-main">/)?.[0] ?? '';
if (institutionBarHtml.includes('One World. One Research. One Center of Excellence.')) {
  failures.push('Institutional slogan remains in the upper utility strip');
}
const officialDestinations = [
  'https://whatsapp.com/channel/0029Vb8MkN93wtb5LNUftx0r',
  'https://www.instagram.com/aunocenter?igsh=a3dzeHVvY2Fpem82&utm_source=qr',
  'https://www.facebook.com/share/1BWnxuKcHu/?mibextid=wwXIfr',
  'https://www.linkedin.com/company/auno-center/',
  'https://vt.tiktok.com/ZSX8c6aS2/', 'https://t.me/aunocenter',
  'https://x.com/aunocenter?s=11', 'https://youtube.com/@aunocenter?si=NYiGhr3svcKLw2qM', 'mailto:aunocenter@gmail.com'
];
for (const destination of officialDestinations) {
  if (!normalizedHtml.includes(destination)) failures.push(`Official destination is missing: ${destination}`);
}

const requiredForms = ['research-support-request', 'general-contact', 'training-inquiry', 'collaboration-inquiry', 'newsletter-subscription', 'course-enrollment-application', 'course-scholarship-request', 'join-auno-application'];
for (const formName of requiredForms) {
  const pattern = new RegExp(`<form[^>]+name="${formName}"[^>]+method="POST"[^>]+data-netlify="true"`, 'i');
  if (!pattern.test(normalizedHtml)) failures.push(`Netlify form not detected in build: ${formName}`);
}

const referencePattern = /(?:href|src)="([^"]+)"/g;
for (const [file, html] of htmlByFile) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  for (const match of html.matchAll(referencePattern)) {
    const raw = match[1].replaceAll('&amp;', '&');
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;
    const pathname = raw.split(/[?#]/)[0];
    if (!pathname) continue;
    const decoded = decodeURIComponent(pathname);
    let target;
    if (decoded === '/') target = path.join(root, 'index.html');
    else if (decoded.endsWith('/')) target = path.join(root, decoded.slice(1), 'index.html');
    else target = path.join(root, decoded.slice(1));
    try { await access(target); }
    catch { failures.push(`${relative}: broken internal reference ${raw}`); }
  }
}

const resourcePages = htmlFiles.filter(file => {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  return relative.startsWith('resources/') && relative !== 'resources/index.html';
});
if (resourcePages.length < 8) failures.push(`Expected at least 8 detailed resources, found ${resourcePages.length}`);

if (!normalizedHtml.includes('One World. One Research.')) failures.push('Institutional tagline is missing');
if (/planned programme concepts|Schedule to be announced/i.test(normalizedHtml)) failures.push('Unverified programme concepts are present');
if (/social[- ]links website|link hub|linktree homepage/i.test((htmlByFile.get(path.join(root, 'index.html')) ?? ''))) failures.push('Homepage contains old link-hub language');

const interpekoHtml = htmlByFile.get(path.join(root, 'interpeko', 'index.html')) ?? '';
for (const phrase of ['AI-generated', 'Guided academic mode', 'Human review required', 'Academic guidance in four moves']) {
  if (!interpekoHtml.includes(phrase)) failures.push(`Interpeko page is missing: ${phrase}`);
}
const privacyHtml = htmlByFile.get(path.join(root, 'privacy', 'index.html')) ?? '';
if (!privacyHtml.includes('OpenAI') || !privacyHtml.includes('up to 30 days')) failures.push('Privacy policy is missing the Interpeko AI processing and retention disclosure');
if (/does not send questions to an external artificial-intelligence provider/i.test(privacyHtml)) failures.push('Privacy policy contains the obsolete browser-only Interpeko claim');
const standardsHtml = htmlByFile.get(path.join(root, 'academic-standards', 'index.html')) ?? '';
for (const standard of ['EQUATOR Network', 'ICMJE Recommendations', 'WHO ICTRP', 'FAIR Principles', 'CRediT taxonomy']) {
  if (!standardsHtml.includes(standard)) failures.push(`Academic standards page is missing: ${standard}`);
}
const servicesHtml = htmlByFile.get(path.join(root, 'services', 'index.html')) ?? '';
if (!servicesHtml.includes('Eleven detailed services')) failures.push('Service architecture does not state all eleven services');

const interpekoFunction = await readFile(path.resolve('netlify/functions/interpeko.mjs'), 'utf8');
for (const control of ['OPENAI_API_KEY', 'store: false', 'max_output_tokens: 700', 'safety_identifier', 'no-store, private']) {
  if (!interpekoFunction.includes(control)) failures.push(`Interpeko function is missing security control: ${control}`);
}
const netlifyConfig = await readFile(path.resolve('netlify.toml'), 'utf8');
if (!netlifyConfig.includes('from = "/api/interpeko"') || !netlifyConfig.includes('to = "/.netlify/functions/interpeko"')) failures.push('Netlify Interpeko redirect is missing');
const publicReleaseText = `${normalizedHtml}\n${interpekoFunction}\n${await readFile(path.resolve('shared/interpeko-knowledge.mjs'), 'utf8')}`;
if (/\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/.test(publicReleaseText)) failures.push('A secret-like API key appears in public release content');

if (failures.length) {
  console.error(`Site QA failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Site QA passed: ${htmlFiles.length} HTML pages, ${resourcePages.length} detailed resources, ${requiredForms.length} Netlify forms, all required routes and internal references present.`);
