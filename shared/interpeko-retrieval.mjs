import { PUBLIC_CONTENT_REVISION, publicContentRegistry } from './public-content-registry.mjs';

const stopWords = new Set([
  'a', 'about', 'an', 'and', 'are', 'can', 'do', 'for', 'from', 'help', 'how', 'i', 'in',
  'is', 'it', 'me', 'my', 'of', 'on', 'or', 'please', 'the', 'to', 'what', 'which', 'with'
]);

const synonymGroups = [
  ['biostatistics', 'statistics', 'statistical', 'analysis'],
  ['enrol', 'enroll', 'enrollment', 'course', 'application'],
  ['scholarship', 'financial', 'funding', 'course'],
  ['job', 'career', 'vacancy', 'join', 'volunteer', 'cv'],
  ['paper', 'papers', 'article', 'articles', 'literature', 'pubmed', 'citation'],
  ['survey', 'questionnaire', 'instrument', 'items'],
  ['ethic', 'ethics', 'integrity', 'consent'],
  ['clinic', 'clinical', 'health', 'healthcare', 'patient'],
  ['collaborate', 'collaboration', 'partner', 'international'],
  ['write', 'writing', 'manuscript', 'publication'],
  ['support', 'service', 'consultancy', 'request']
];

function normalize(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function queryTokens(query) {
  const base = normalize(query).split(/\s+/).filter(token => token.length > 1 && !stopWords.has(token));
  const expanded = new Set(base);
  for (const group of synonymGroups) {
    if (group.some(term => base.includes(term))) group.forEach(term => expanded.add(term));
  }
  return [...expanded];
}

function includesTerm(haystack, term) {
  return haystack === term || haystack.startsWith(`${term} `) || haystack.endsWith(` ${term}`) || haystack.includes(` ${term} `);
}

function scoreRecord(record, normalizedQuery, tokens) {
  const title = normalize(record.title);
  const type = normalize(record.type);
  const excerpt = normalize(record.excerpt);
  const keywords = record.keywords.map(normalize);
  let score = 0;

  if (normalizedQuery && title === normalizedQuery) score += 36;
  if (normalizedQuery.length >= 4 && title.includes(normalizedQuery)) score += 18;
  if (normalizedQuery.length >= 4 && keywords.some(keyword => keyword.includes(normalizedQuery))) score += 14;

  for (const token of tokens) {
    if (includesTerm(title, token)) score += 8;
    if (includesTerm(type, token)) score += 3;
    if (keywords.some(keyword => includesTerm(keyword, token))) score += 6;
    if (includesTerm(excerpt, token)) score += 2;
  }

  const matchedTokens = tokens.filter(token => includesTerm(`${title} ${keywords.join(' ')} ${excerpt}`, token)).length;
  if (tokens.length > 1 && matchedTokens === tokens.length) score += 10;
  return score;
}

export function retrieveApprovedContent(query, options = {}) {
  const limit = Math.min(Math.max(Number(options.limit) || 6, 1), 10);
  const normalizedQuery = normalize(query);
  const tokens = queryTokens(query);
  if (!normalizedQuery || !tokens.length) return [];

  return publicContentRegistry
    .map(record => ({ record, score: scoreRecord(record, normalizedQuery, tokens) }))
    .filter(item => item.score > 0)
    .sort((left, right) => right.score - left.score || left.record.title.localeCompare(right.record.title))
    .slice(0, limit)
    .map(({ record, score }) => ({
      id: record.id,
      label: record.title,
      title: record.title,
      type: record.type,
      href: record.href,
      excerpt: record.excerpt,
      summary: record.excerpt,
      score
    }));
}

export function formatApprovedContext(records) {
  const content = records.map(record => [
    `<source id="${record.id}">`,
    `Title: ${record.title || record.label}`,
    `Type: ${record.type}`,
    `Path: ${record.href}`,
    `Approved excerpt: ${record.excerpt}`,
    '</source>'
  ].join('\n')).join('\n');

  return [
    `Registry revision: ${PUBLIC_CONTENT_REVISION}`,
    '<approved-public-content>',
    content || 'No matching approved public content was found.',
    '</approved-public-content>'
  ].join('\n');
}
