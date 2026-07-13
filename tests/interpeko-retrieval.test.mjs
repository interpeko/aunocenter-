import test from 'node:test';
import assert from 'node:assert/strict';
import { publicContentRegistry, publicContentById } from '../shared/public-content-registry.mjs';
import { formatApprovedContext, retrieveApprovedContent } from '../shared/interpeko-retrieval.mjs';

test('public registry contains unique approved local routes and exact excerpts', () => {
  assert.ok(publicContentRegistry.length >= 50);
  assert.equal(new Set(publicContentRegistry.map(record => record.id)).size, publicContentRegistry.length);
  for (const record of publicContentRegistry) {
    assert.match(record.href, /^\/(?!\/)/);
    assert.ok(record.title.length > 2);
    assert.ok(record.excerpt.length > 20);
    assert.equal(publicContentById(record.id), record);
  }
});

test('retrieval recommends the verified biostatistics course and service', () => {
  const results = retrieveApprovedContent('Which biostatistics course can help with health data analysis?', { limit: 8 });
  assert.ok(results.some(result => result.id === 'course-biostatistics-health-research'));
  assert.ok(results.some(result => result.id === 'service-statistical-analysis'));
  assert.ok(results.every(result => result.href.startsWith('/')));
  assert.ok(results.every(result => result.excerpt === result.summary));
});

test('retrieval routes applications and official literature without inventing capabilities', () => {
  const enrollment = retrieveApprovedContent('How do I enroll in a course?', { limit: 4 });
  assert.ok(enrollment.some(result => result.id === 'course-enrollment'));

  const literature = retrieveApprovedContent('Search PubMed for biomedical papers and citations', { limit: 4 });
  assert.ok(literature.some(result => result.id === 'pubmed'));

  const unknown = retrieveApprovedContent('quantum banana telescope', { limit: 4 });
  assert.deepEqual(unknown, []);
});

test('formatted grounding includes only supplied records with source ids and paths', () => {
  const records = retrieveApprovedContent('privacy policy', { limit: 2 });
  const context = formatApprovedContext(records);
  assert.match(context, /<approved-public-content>/);
  assert.match(context, /<source id="privacy">/);
  assert.match(context, /Path: \/privacy\//);
  assert.match(context, /Approved excerpt:/);
  assert.doesNotMatch(context, /OPENAI_API_KEY|sk-proj-/);
});
