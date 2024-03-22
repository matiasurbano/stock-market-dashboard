export type Workspace = {
  name: string;
  version: string;
};

export type CountryOption = {
  id: string;
  name: string;
};

export type Score = {
  value: number;
  future: number;
  past: number;
  health: number;
  income: number;
  total: number;
  sentence: string;
};

export type CompanyData = {
  id: number;
  name: string;
  slug: string;
  unique_symbol: string;
  canonical_url: string;
  score: {
    data: Score;
  };
};
