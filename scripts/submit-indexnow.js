import fs from 'fs';
import path from 'path';

// Usage: node scripts/submit-indexnow.js [apiKey] [--dry-run]
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const apiKeyArg = args.find(a => !a.startsWith('--'));

let apiKey = apiKeyArg;
if (!apiKey) {
  // try to find the key in public/
  const publicFiles = fs.readdirSync(path.join(process.cwd(), 'public'));
  const keyFile = publicFiles.find(f => /^[0-9a-f]{32}\.txt$/.test(f));
  if (keyFile) {
    apiKey = keyFile.replace('.txt', '');
  } else {
    console.error("Error: Please provide the IndexNow API key as an argument or have it in public/.");
    process.exit(1);
  }
}

const sitemapIndexPath = path.join(process.cwd(), 'dist/sitemap-index.xml');
if (!fs.existsSync(sitemapIndexPath)) {
  console.error("Error: Sitemap index not found at " + sitemapIndexPath);
  process.exit(1);
}

const indexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
const sitemapMatch = indexContent.match(/<loc>(.*?)<\/loc>/);
if (!sitemapMatch) {
  console.error("Error: No child sitemap found in index.");
  process.exit(1);
}

const childUrl = sitemapMatch[1];
const childName = childUrl.split('/').pop();
const childPath = path.join(process.cwd(), 'dist', childName);

if (!fs.existsSync(childPath)) {
  console.error("Error: Child sitemap not found at " + childPath);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(childPath, 'utf8');
const urlRegex = /<loc>(.*?)<\/loc>/g;
let match;
const urls = [];
let oldOrg = 0, pagesDev = 0, fourOhFour = 0, external = 0;

while ((match = urlRegex.exec(sitemapContent)) !== null) {
  const url = match[1];
  urls.push(url);
  if (url.includes('.org')) oldOrg++;
  if (url.includes('pages.dev')) pagesDev++;
  if (url.includes('404')) fourOhFour++;
  if (!url.startsWith('https://tuijianjichang.blog')) external++;
}

const uniqueUrls = new Set(urls);
const duplicates = urls.length - uniqueUrls.size;

const payload = {
  host: "tuijianjichang.blog",
  key: apiKey,
  keyLocation: `https://tuijianjichang.blog/${apiKey}.txt`,
  urlList: Array.from(uniqueUrls)
};

if (isDryRun) {
  console.log("Host = tuijianjichang.blog");
  console.log("KeyLocation = " + payload.keyLocation);
  console.log("URL Count = " + urls.length);
  console.log("Old .org URLs = " + oldOrg);
  console.log("pages.dev URLs = " + pagesDev);
  console.log("404 URLs = " + fourOhFour);
  console.log("External URLs = " + external);
  console.log("Duplicate URLs = " + duplicates);
  console.log("Dry-run complete. No network request made.");
} else {
  console.log("Performing actual submission...");
  fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload)
  }).then(res => {
    console.log("Status:", res.status);
  }).catch(err => {
    console.error("Submission failed:", err);
  });
}
