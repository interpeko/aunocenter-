import sharp from 'sharp';

const jobs = [
  {
    input: 'public/images/auno-crest.png',
    output: 'public/images/auno-crest.webp',
    options: { lossless: true, effort: 6 }
  },
  {
    input: 'src/assets/source/global-research-hero.png',
    output: 'public/images/global-research-hero.webp',
    options: { quality: 82, smartSubsample: true, effort: 6 }
  },
  {
    input: 'src/assets/source/social-poster-background.png',
    output: 'public/images/social-poster-background.webp',
    options: { quality: 84, smartSubsample: true, effort: 6 }
  },
  {
    input: 'src/assets/source/mustafa-saadabi-founder-portrait.png',
    output: 'public/images/mustafa-saadabi-founder-portrait.webp',
    resize: { width: 720, height: 1280, fit: 'inside', withoutEnlargement: true },
    options: { quality: 88, smartSubsample: true, effort: 6 }
  },
  {
    input: 'src/assets/source/mustafa-saadabi-founder-portrait.png',
    output: 'public/images/mustafa-saadabi-founder-portrait-360.webp',
    resize: { width: 360, height: 640, fit: 'inside', withoutEnlargement: true },
    options: { quality: 84, smartSubsample: true, effort: 6 }
  }
];

for (const job of jobs) {
  let pipeline = sharp(job.input).rotate();
  if (job.resize) pipeline = pipeline.resize(job.resize);
  await pipeline.webp(job.options).toFile(job.output);
  console.log(`Optimized ${job.output}`);
}
