import { providers } from './providers';

let providerCount = providers.length;
let planCount = providers.reduce((acc, p) => acc + p.plans.length, 0);

if (providerCount !== 22) throw new Error(`Expected 22 providers, found ${providerCount}`);
if (planCount < 155) throw new Error(`Expected at least 155 plans, found ${planCount}`);

let editorialCount = providers.filter(p => p.editorialPick).length;
if (editorialCount !== 8) throw new Error(`Expected 8 editorial picks, found ${editorialCount}`);

const exactTop8 = ['sogo-yun', 'weifeng', 'feimaoyun', 'wuyou', 'firefly', 'kuajieyun', 'shanyue', 'lingmao'];
const sortedPicks = providers.filter(p => p.editorialPick).sort((a, b) => (a.editorialRank || 0) - (b.editorialRank || 0));

sortedPicks.forEach((p, i) => {
    if (p.slug !== exactTop8[i]) throw new Error(`Top 8 mismatch at rank ${i+1}: expected ${exactTop8[i]}, got ${p.slug}`);
});

let missingAffUrl = providers.filter(p => p.affiliateUrlStatus !== 'source-missing-protocol' && !p.affiliateUrl);
if (missingAffUrl.length > 0) throw new Error('Missing affiliate URL for non-missing protocol provider');

const invalidClaims = providers.filter(p => typeof p.streamingClaim === 'undefined' || typeof p.aiClaim === 'undefined');
if (invalidClaims.length > 0) throw new Error('Invalid claim format detected');

const slugs = providers.map(p => p.slug);
if (new Set(slugs).size !== 22) throw new Error('Duplicate slugs found');

console.log('Build validation passed!');
