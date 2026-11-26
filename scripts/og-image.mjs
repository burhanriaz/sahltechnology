// Generates the social share (Open Graph) image from the Sahl Technology logo.
// Favicons/app icons come from the brand favicon pack in public/icons (not generated here).
import sharp from 'sharp';
import { mkdirSync, readFileSync } from 'node:fs';

mkdirSync('public/og', { recursive: true });
const logo = readFileSync('public/icons/favicon-256.png').toString('base64');

const og = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="12" fill="#007f80"/>
  <rect x="0" y="560" width="1200" height="70" fill="#06183b"/>
  <image x="96" y="92" width="96" height="96" xlink:href="data:image/png;base64,${logo}"/>
  <text x="212" y="152" font-family="Segoe UI, Arial, sans-serif" font-size="44" font-weight="700" fill="#06183b">Sahl <tspan fill="#007f80" font-weight="600">Technology</tspan></text>
  <text x="96" y="318" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="700" fill="#06183b">Web Development</text>
  <text x="96" y="398" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="700" fill="#007f80">&amp; Automation</text>
  <text x="96" y="470" font-family="Segoe UI, Arial, sans-serif" font-size="27" fill="#5a6779">Websites · Custom Software · QA Automation · SEO · Dedicated Developers</text>
  <text x="96" y="604" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#ffffff">Technology made easy</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og/default.png');
console.log('✓ OG image generated');
