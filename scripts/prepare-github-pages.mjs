import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const base = '/aunocenter-/';
const primary = 'https://aunocenter.netlify.app';

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else files.push(target);
  }
  return files;
}

for (const file of await walk(root)) {
  const extension = path.extname(file);
  if (!['.html', '.js', '.css', '.json', '.webmanifest'].includes(extension)) continue;
  let content = await readFile(file, 'utf8');
  content = content
    .replaceAll('action="/', `action="${primary}/`)
    .replace(/\bsrcset="([^"]+)"/g, (_match, value) => {
      const rewritten = value.replace(/(^|,\s*)\//g, (_candidate, prefix) => `${prefix}${base}`);
      return `srcset="${rewritten}"`;
    })
    .replaceAll('href="/', `href="${base}`)
    .replaceAll('src="/', `src="${base}`)
    .replaceAll('url(/', `url(${base}`)
    .replaceAll('"src":"/', `"src":"${base}`)
    .replaceAll('"src": "/', `"src": "${base}`);
  for (const match of content.matchAll(/\bsrcset="([^"]+)"/g)) {
    const unprefixed = match[1].split(',').map(candidate => candidate.trim().split(/\s+/)[0]).filter(url => url.startsWith('/') && !url.startsWith(base));
    if (unprefixed.length) throw new Error(`Unprefixed srcset URL in ${path.relative(root, file)}: ${unprefixed.join(', ')}`);
  }
  await writeFile(file, content);
}

await writeFile(path.join(root, '.nojekyll'), '');
console.log('Prepared dist for https://interpeko.github.io/aunocenter-/');
