import fs from 'fs';
import path from 'path';

// Usage: node scripts/submit-indexnow.js <apiKey>
const apiKey = process.argv[2];
if (!apiKey) {
  console.error("Error: Please provide the IndexNow API key as an argument.");
  process.exit(1);
}

const sitemapPath = path.resolve(__dirname, '../dist/sitemap-0.xml'); // Verify correct sitemap name
if (!fs.existsSync(sitemapPath)) {
  console.error("Error: Sitemap not found at " + sitemapPath);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const urlRegex = /<loc>(.*?)<\/loc>/g;
let match;
const urls = [];
while ((match = urlRegex.exec(sitemapContent)) !== null) {
  urls.push(match[1]);
}

if (urls.length === 0) {
  console.error("Error: No URLs found in sitemap.");
  process.exit(1);
}

const payload = {
  host: "tuijianjichang.blog",
  key: apiKey,
  keyLocation: `https://tuijianjichang.blog/${apiKey}.txt`,
  urlList: urls
};

console.log("Prepared IndexNow Payload (Not actually submitting):");
console.log(JSON.stringify(payload, null, 2));
