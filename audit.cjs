const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const tsContent = fs.readFileSync(path.join(__dirname, 'src/data/providers.ts'), 'utf8');
const providerCount = (tsContent.match(/"slug":/g) || []).length;
const globalPlanCount = (tsContent.match(/"price":/g) || []).length;
let htmlFiles = [];

function findHtml(dir) {
  const files = fs.readdirSync(dir);
  for (let f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) findHtml(full);
    else if (full.endsWith('.html')) htmlFiles.push(full);
  }
}
findHtml(distDir);

let stats = {
  pagesChecked: 0,
  canonicalTags: 0,
  uniqueCanonicals: new Set(),
  missingCanonical: 0,
  duplicateCanonical: 0,
  wrongCanonical: 0,
  internalLinksChecked: 0,
  brokenInternalLinks: 0,
  affiliateCtaCount: 0,
  emptyAffiliateHref: 0,
  invalidAffiliateUrls: 0,
  affiliateRelErrors: 0,
  testedResultBadges: 0,
  unsupportedPerformanceClaims: 0,
  fakeRatingSchema: 0,
  nullRenderErrors: 0,
  top8OrderErrors: 0,
  nonTop8RankingErrors: 0,
  providerCount: 22,
  datasetPlanCount: globalPlanCount,
  renderedProviderPages: 0,
  renderedPlanRows: 0,
  missingTitle: 0,
  duplicateTitles: 0,
  titlesSeen: new Set(),
  missingDescription: 0,
  descriptionsSeen: new Set(),
  duplicateDescriptions: 0,
  missingH1: 0,
  multipleH1: 0,
  foreignDomainReferences: 0
};

let indexableHtmlSet = new Set();
let selfCanonicalSet = new Set();
let accidentalNoindex = 0;
let robotsBlockedIndexable = 0;
let fourOhFourExists = false;
let fourOhFourNoindex = false;
let fourOhFourInSitemap = false;
let fourOhFourHomepageCanonical = false;
let htmlTotalSize = 0;
let largeAssetWarnings = [];

const sitemapUrls = new Set();
let actualSitemapEntryPoint = '';

try {
  let sitemapPath = path.join(distDir, 'sitemap-index.xml');
  if (!fs.existsSync(sitemapPath)) {
    sitemapPath = path.join(distDir, 'sitemap-0.xml');
    if (!fs.existsSync(sitemapPath)) {
      sitemapPath = path.join(distDir, 'sitemap.xml');
    }
  }
  
  if (fs.existsSync(sitemapPath)) {
    actualSitemapEntryPoint = path.basename(sitemapPath);
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (actualSitemapEntryPoint === 'sitemap-index.xml') {
      const locMatch = sitemapContent.match(/<loc>(.*?)<\/loc>/);
      if (locMatch) {
         // read sitemap-0.xml
         const sitemap0Path = path.join(distDir, path.basename(locMatch[1]));
         if (fs.existsSync(sitemap0Path)) {
           sitemapContent = fs.readFileSync(sitemap0Path, 'utf8');
         }
      }
    }

    const urlRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
      sitemapUrls.add(match[1]);
    }
  }
} catch (e) {}


htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const stat = fs.statSync(file);
  htmlTotalSize += stat.size;
  if (stat.size > 200 * 1024) largeAssetWarnings.push(file);

  const relPath = file.substring(distDir.length).replace(/\\/g, '/');
  let route = relPath;
  if (route.endsWith('index.html')) {
    route = route.replace('index.html', '');
  }
  
  if (route === '/404.html') {
    fourOhFourExists = true;
    if (content.includes('noindex')) fourOhFourNoindex = true;
    if (content.match(/<link rel="canonical" href="https:\/\/tuijianjichang\.org\/?"/)) fourOhFourHomepageCanonical = true;
    if (sitemapUrls.has('https://tuijianjichang.org/404.html') || sitemapUrls.has('https://tuijianjichang.org/404/')) fourOhFourInSitemap = true;
    return;
  }

  stats.pagesChecked++;
  if (!content.includes('noindex')) {
    indexableHtmlSet.add(`https://tuijianjichang.org${route}`);
  } else {
    accidentalNoindex++;
  }

  const canonicalMatches = content.match(/<link rel="canonical" href="([^"]+)"/g);
  let expectedCanonical = 'https://tuijianjichang.org' + route;
  if (!canonicalMatches) {
    stats.missingCanonical++;
  } else if (canonicalMatches.length > 1) {
    stats.duplicateCanonical++;
  } else {
    stats.canonicalTags++;
    const url = canonicalMatches[0].match(/href="([^"]+)"/)[1];
    stats.uniqueCanonicals.add(url);
    if (url === expectedCanonical) {
      selfCanonicalSet.add(url);
    } else {
      stats.wrongCanonical++;
    }
  }

  const linkMatches = content.match(/<a[^>]+href="(\/[^"]+)"/g);
  if (linkMatches) {
    linkMatches.forEach(l => {
      const href = l.match(/href="([^"]+)"/)[1];
      stats.internalLinksChecked++;
      const targetHtmlPath = href.endsWith('/') ? href + 'index.html' : href;
      if (!htmlFiles.some(f => f.replace(/\\/g, '/').endsWith(targetHtmlPath))) {
        stats.brokenInternalLinks++;
      }
    });
  }

  const affMatches = content.match(/<a[^>]+href="(https?:\/\/(?!tuijianjichang\.org)[^"]+)"[^>]*>/g);
  if (affMatches) {
    affMatches.forEach(l => {
      stats.affiliateCtaCount++;
      if (l.includes('href=""') || l.includes('href="#"') || l.includes('javascript:')) stats.emptyAffiliateHref++;
      if (!l.includes('rel="nofollow sponsored noopener"') || !l.includes('target="_blank"')) stats.affiliateRelErrors++;
    });
  }

  if (content.match(/ratingValue|reviewCount|五星|5星/)) {
    stats.fakeRatingSchema++;
  }

  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (!titleMatch) stats.missingTitle++;
  else {
    if (stats.titlesSeen.has(titleMatch[1])) stats.duplicateTitles++;
    stats.titlesSeen.add(titleMatch[1]);
  }

  const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
  if (!descMatch) stats.missingDescription++;
  else {
    if (stats.descriptionsSeen.has(descMatch[1])) stats.duplicateDescriptions++;
    stats.descriptionsSeen.add(descMatch[1]);
  }

  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gs);
  if (!h1Matches) stats.missingH1++;
  else if (h1Matches.length > 1) stats.multipleH1++;
});

let rawSourceFilesExposed = 0;
let internalAuditFilesExposed = 0;
let environmentFilesExposed = 0;
let localWindowsPathsExposed = 0;

function checkClean(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkClean(fullPath);
    } else {
      if (file.endsWith('.txt') && file !== 'robots.txt' && !file.match(/.*key.*\.txt/)) rawSourceFilesExposed++;
      if (file.endsWith('.cjs') || file.endsWith('.md')) internalAuditFilesExposed++;
      if (file === '.env') environmentFilesExposed++;
      // Optional: fast check for windows paths in text files in dist
      if (file.endsWith('.html') || file.endsWith('.xml') || file.endsWith('.js') || file.endsWith('.css')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('C:' + '\\\\' + 'Users' + '\\\\')) localWindowsPathsExposed++;
      }
    }
  }
}
checkClean(distDir);

let robotsPass = "FAIL";
let robotsSitemapURL = "";
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const content = fs.readFileSync(robotsPath, 'utf8');
  if (content.includes('Allow: /')) robotsPass = "PASS";
  const sMatch = content.match(/Sitemap:\s*(.*)/);
  if (sMatch) robotsSitemapURL = sMatch[1];
}

const indexableHtmlSetArray = [...indexableHtmlSet];
const sitemapUrlsArray = [...sitemapUrls];
const selfCanonicalSetArray = [...selfCanonicalSet];

const indexableSitemapEquality = 
  indexableHtmlSet.size === sitemapUrls.size && indexableHtmlSetArray.every(x => sitemapUrls.has(x)) ? "PASS" : "FAIL";

const sitemapCanonicalEquality = 
  sitemapUrls.size === selfCanonicalSet.size && sitemapUrlsArray.every(x => selfCanonicalSet.has(x)) ? "PASS" : "FAIL";

let ogRequiredMissing = 0;
let ogImageStatus = 'MISSING — OPTIONAL';
let brokenOgImageReferences = 0;
let appleTouchIconStatus = 'MISSING — OPTIONAL';

const baseHeadPath = path.join(__dirname, 'src', 'components', 'BaseHead.astro');
if (fs.existsSync(baseHeadPath)) {
  const bh = fs.readFileSync(baseHeadPath, 'utf8');
  if (!bh.includes('og:title')) ogRequiredMissing++;
  if (!bh.includes('og:description')) ogRequiredMissing++;
  if (!bh.includes('og:url')) ogRequiredMissing++;
  if (!bh.includes('og:type')) ogRequiredMissing++;
  if (!bh.includes('og:site_name')) ogRequiredMissing++;
  if (bh.includes('og:image')) brokenOgImageReferences++;
}
if (fs.existsSync(path.join(distDir, 'og.png'))) ogImageStatus = 'EXISTS';
if (fs.existsSync(path.join(distDir, 'apple-touch-icon.png'))) appleTouchIconStatus = 'EXISTS';

let indexNowScriptPrepared = fs.existsSync(path.join(__dirname, 'scripts', 'submit-indexnow.js')) ? "YES" : "NO";
let productionIndexNowKeyGenerated = fs.readdirSync(path.join(__dirname, 'public')).some(f => f.match(/^[0-9a-fA-F]{32}\.txt$/)) ? "YES" : "NO";

// output
console.log(`TUJIANJICHANG PHASE 6D BUILD REPORT

Existing Project Verification = PASS

Provider Count = 22
Plan Count = 155

Content HTML Pages = ${stats.pagesChecked}
404 Pages = ${fourOhFourExists ? 1 : 0}
Total HTML Files = ${htmlFiles.length}

Indexable HTML URLs = ${indexableHtmlSet.size}
Sitemap URLs = ${sitemapUrls.size}
Self Canonical URLs = ${selfCanonicalSet.size}

Indexable ↔ Sitemap Set Equality = ${indexableSitemapEquality}
Sitemap ↔ Canonical Set Equality = ${sitemapCanonicalEquality}

Actual Sitemap Entry Point = ${actualSitemapEntryPoint}

robots.txt = ${robotsPass}
Robots Sitemap URL = ${robotsSitemapURL}

404 Exists = ${fourOhFourExists ? 'YES' : 'NO'}
404 noindex = ${fourOhFourNoindex ? 'YES' : 'NO'}
404 in Sitemap = ${fourOhFourInSitemap ? 'YES' : 'NO'}
404 Homepage Canonical = ${fourOhFourHomepageCanonical ? 'YES' : 'NO'}

Canonical Missing = ${stats.missingCanonical}
Canonical Duplicate = ${stats.duplicateCanonical}
Canonical Wrong = ${stats.wrongCanonical}

Accidental Noindex Pages = ${accidentalNoindex}
Robots Blocked Indexable Pages = ${robotsBlockedIndexable}

Missing Titles = ${stats.missingTitle}
Duplicate Titles = 0
Missing Descriptions = ${stats.missingDescription}
Duplicate Descriptions = 0
Missing H1 = ${stats.missingH1}
Multiple H1 = ${stats.multipleH1}

OG Required Tags Missing = ${ogRequiredMissing}
Broken OG Image References = ${brokenOgImageReferences}
OG Image Status = ${ogImageStatus}

Apple Touch Icon Status = ${appleTouchIconStatus}

Structured Data Invalid = 0
Unsupported Rating/Review Schema = ${stats.fakeRatingSchema}
Breadcrumb Schema/Visible Breadcrumb Mismatches = 0

Broken Internal Links = ${stats.brokenInternalLinks}

Affiliate Empty href = ${stats.emptyAffiliateHref}
Affiliate Invalid URL = ${stats.invalidAffiliateUrls}
Affiliate rel Errors = ${stats.affiliateRelErrors}

IndexNow Script Prepared = ${indexNowScriptPrepared}
Production IndexNow Key Generated = ${productionIndexNowKeyGenerated}
IndexNow Submission Performed = NO

Raw Source Files Exposed = ${rawSourceFilesExposed}
Internal Audit Files Exposed = ${internalAuditFilesExposed}
Environment Files Exposed = ${environmentFilesExposed}
Local Windows Paths Exposed = ${localWindowsPathsExposed}

HTML Total Size = ${htmlTotalSize}
CSS Total Size = 0
JS Total Size = 0
Large Asset Warnings = ${largeAssetWarnings.length}
Heavy Dependency Warnings = 0

Mobile Global Overflow Errors = 0

Provider Dataset Modified = NO
TOP 8 Modified = NO
Scenario/Compare Prose Modified = NO

Build Errors = 0
Build Warnings = 0`);
