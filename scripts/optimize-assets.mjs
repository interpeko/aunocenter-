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
  }
];

for (const job of jobs) {
  await sharp(job.input).webp(job.options).toFile(job.output);
  console.log(`Optimized ${job.output}`);
}
