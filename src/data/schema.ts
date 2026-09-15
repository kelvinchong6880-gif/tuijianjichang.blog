export interface Plan {
  name: string;
  price: number;
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

  plans: Plan[];
}
