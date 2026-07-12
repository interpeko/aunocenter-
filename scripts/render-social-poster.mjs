import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import {
  siFacebook,
  siGmail,
  siInstagram,
  siTelegram,
  siTiktok,
  siWhatsapp,
  siX,
  siYoutube
} from 'simple-icons';

const channelData = [
  { name: 'WhatsApp', handle: 'AUNO Center Channel', icon: siWhatsapp, color: '#25D366' },
  { name: 'Instagram', handle: '@aunocenter', icon: siInstagram, color: '#E4405F' },
  { name: 'Facebook', handle: 'AUNO Center', icon: siFacebook, color: '#1877F2' },
  { name: 'LinkedIn', handle: 'AUNO Center', icon: null, color: '#0A66C2' },
  { name: 'TikTok', handle: '@aunocenter', icon: siTiktok, color: '#111111' },
  { name: 'Telegram', handle: '@aunocenter', icon: siTelegram, color: '#26A5E4' },
  { name: 'X', handle: '@aunocenter', icon: siX, color: '#111111' },
  { name: 'YouTube', handle: '@aunocenter', icon: siYoutube, color: '#FF0000' },
  { name: 'Email', handle: 'aunocenter@gmail.com', icon: siGmail, color: '#7A365A' }
];

const toDataUri = (buffer, mimeType) => `data:${mimeType};base64,${buffer.toString('base64')}`;
const background = toDataUri(await readFile('src/assets/source/social-poster-background.png'), 'image/png');
const crest = toDataUri(await readFile('public/images/auno-crest.png'), 'image/png');
const qr = toDataUri(await readFile('public/images/auno-whatsapp-qr.png'), 'image/png');

const card = (channel, index) => {
  const column = index % 3;
  const row = Math.floor(index / 3);
  const x = 76 + column * 312;
  const y = 520 + row * 151;
  const iconX = x + 18;
  const iconY = y + 20;
  const iconMarkup = channel.icon
    ? `<g transform="translate(${iconX + 11} ${iconY + 11}) scale(1.5)"><path d="${channel.icon.path}" fill="#ffffff"/></g>`
    : `<text x="${iconX + 29}" y="${iconY + 38}" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="24" font-weight="800">in</text>`;
  return `
    <g>
      <rect x="${x}" y="${y}" width="296" height="132" rx="18" fill="#170b1e" fill-opacity="0.88" stroke="#d9b66d" stroke-opacity="0.35"/>
      <circle cx="${iconX + 29}" cy="${iconY + 29}" r="29" fill="${channel.color}" stroke="#ffffff" stroke-opacity="0.28"/>
      ${iconMarkup}
      <text x="${x + 18}" y="${y + 100}" fill="#ffffff" font-family="Arial, sans-serif" font-size="20" font-weight="700">${channel.name}</text>
      <text x="${x + 18}" y="${y + 121}" fill="#ffffff" fill-opacity="0.74" font-family="Arial, sans-serif" font-size="13">${channel.handle}</text>
    </g>`;
};

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350" role="img" aria-labelledby="title desc">
  <title id="title">AUNO Center official social channels</title>
  <desc id="desc">AUNO Center on WhatsApp, Instagram, Facebook, LinkedIn, TikTok, Telegram, X, YouTube, and email. One World. One Research. One Center of Excellence.</desc>
  <defs>
    <linearGradient id="veil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1c0d25" stop-opacity="0.06"/>
      <stop offset="0.40" stop-color="#160b1d" stop-opacity="0.48"/>
      <stop offset="1" stop-color="#120817" stop-opacity="0.94"/>
    </linearGradient>
    <clipPath id="crestClip"><rect x="479" y="46" width="122" height="122" rx="27"/></clipPath>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.24"/></filter>
  </defs>
  <image href="${background}" width="1080" height="1350" preserveAspectRatio="xMidYMid slice"/>
  <rect width="1080" height="1350" fill="url(#veil)"/>
  <rect x="479" y="46" width="122" height="122" rx="27" fill="#ffffff" filter="url(#shadow)"/>
  <image href="${crest}" x="479" y="46" width="122" height="122" clip-path="url(#crestClip)" preserveAspectRatio="xMidYMid slice"/>
  <text x="540" y="255" text-anchor="middle" fill="#351643" font-family="Palatino Linotype, Georgia, serif" font-size="79" letter-spacing="14">AUNO</text>
  <text x="540" y="296" text-anchor="middle" fill="#805a13" font-family="Arial, sans-serif" font-size="22" font-weight="800" letter-spacing="6">RESEARCH CENTER</text>
  <line x1="494" y1="323" x2="586" y2="323" stroke="#c69a49" stroke-width="4"/>
  <text x="540" y="374" text-anchor="middle" fill="#ffffff" fill-opacity="0.90" font-family="Palatino Linotype, Georgia, serif" font-size="27">One World. One Research. One Center of Excellence.</text>
  <text x="76" y="445" fill="#ffffff" font-family="Palatino Linotype, Georgia, serif" font-size="47">Join our global research network</text>
  <text x="76" y="480" fill="#ffffff" fill-opacity="0.78" font-family="Arial, sans-serif" font-size="20">Resources · Learning · Collaboration · Research Support</text>
  ${channelData.map(card).join('')}
  <line x1="76" y1="1049" x2="1004" y2="1049" stroke="#ffffff" stroke-opacity="0.27"/>
  <text x="76" y="1110" fill="#ead19d" font-family="Palatino Linotype, Georgia, serif" font-size="35">Research with clarity.</text>
  <text x="76" y="1152" fill="#ead19d" font-family="Palatino Linotype, Georgia, serif" font-size="35">Knowledge with purpose.</text>
  <text x="76" y="1196" fill="#ffffff" fill-opacity="0.70" font-family="Arial, sans-serif" font-size="17">Official AUNO Center channels</text>
  <text x="76" y="1225" fill="#ffffff" fill-opacity="0.70" font-family="Arial, sans-serif" font-size="17">aunocenter@gmail.com · @aunocenter</text>
  <rect x="837" y="1072" width="167" height="192" rx="16" fill="#ffffff"/>
  <image href="${qr}" x="850" y="1084" width="141" height="141"/>
  <text x="920.5" y="1247" text-anchor="middle" fill="#3a1a46" font-family="Arial, sans-serif" font-size="12" font-weight="800" letter-spacing="1">FOLLOW ON WHATSAPP</text>
  <text x="540" y="1310" text-anchor="middle" fill="#ffffff" fill-opacity="0.54" font-family="Arial, sans-serif" font-size="13" letter-spacing="2.2">ONE WORLD · ONE RESEARCH · AUNO CENTER</text>
</svg>`;

await mkdir('outputs', { recursive: true });
await writeFile('public/images/auno-social-poster.svg', svg);
await writeFile('outputs/auno-center-social-poster.svg', svg);

const standard = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile('public/images/auno-social-poster.png', standard);
await writeFile('outputs/auno-center-social-poster.png', standard);

const highResolution = await sharp(Buffer.from(svg), { density: 192 })
  .resize(2160, 2700)
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile('outputs/auno-center-social-poster-2x.png', highResolution);

console.log('Rendered AUNO Center poster as SVG, 1080×1350 PNG, and 2160×2700 PNG.');
