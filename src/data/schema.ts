
export interface SourceRecord {
  type: 'official' | 'user' | 'third_party';
  urlOrFile: string;
  sourceDate: string | null;
  recordedDate: string | null;
  verifiedDate: string | null;
  supportedFacts: string[];
}
export interface Plan {
  name: string;
  price: number;
  priceConflict?: boolean; // explicitly marks price as conflicting/unverified
  paymentCycleConflict?: boolean; // explicitly marks payment cycle as conflicting or unverified
  currency: string;
  billingType: 'Monthly' | 'Quarterly' | 'Yearly' | 'One-Time' | 'Other';
  validity: string;
  traffic: number | null; // in GB, null if unspecified
  trafficDisplay: string;
  deviceLimit: string | null;
  speedLimit: string | null;
  lineType: string | null;
  nodes: string | null;
  streaming: boolean | null;
  ai: boolean | null;
  features: string[];
  sourceNotes: string | null;
}

export interface Provider {
  id: string;
  name: string;
  canonicalName: string;
  aliases: string[];
  slug: string;
  logo: string | null;
  promoCode?: string | null;
  editorialRank: number | null;
  editorialPick: boolean;

  entryPrice: number;
  monthlyEntryPrice: number;
  currency: string;

  trafficMin: number;
  trafficMax: number;
  trafficDisplay: string;

  lineClaims: string[];

  hasNoExpiry: boolean;
  streamingClaim: boolean | null;
  aiClaim: boolean | null;

  affiliateUrl: string | null;
  affiliateCode: string | null;
  affiliateUrlStatus: 'ok' | 'source-missing-protocol' | 'protocol-normalized-verified' | 'error';

  sourceFile: string;
  affiliateSourceFile: string;
  lastVerified: string;
  sourceNotes?: string | null;

  plans: Plan[];
  sources?: SourceRecord[];
}
