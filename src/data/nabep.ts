/**
 * NABEP public dataset.
 *
 * Every figure carries a `Provenance` tag:
 *   reported -> stated publicly by NABEP (source linked)
 *   derived  -> arithmetic on reported figures (formula shown in the UI)
 *   modeled  -> candidate interpolation, illustrative only
 *   target   -> company-stated goal, not an achieved result
 *
 * Nothing in this file is operational data from inside the company.
 * It is everything NABEP has already published, plus transparent arithmetic.
 */

export type Provenance = "reported" | "derived" | "modeled" | "target";

export type SourceKey =
  | "home"
  | "about"
  | "whatWeDo"
  | "ceo"
  | "digitalOilfield"
  | "rigs";

export const SOURCES: Record<
  SourceKey,
  { label: string; short: string; url: string }
> = {
  home: {
    label: "NABEP — Track record / partnership overview",
    short: "nabep.net",
    url: "https://www.nabep.net/",
  },
  about: {
    label: "NABEP — About Us: company story and partnership terms",
    short: "About Us",
    url: "https://www.nabep.net/about-us",
  },
  whatWeDo: {
    label: "NABEP — What We Do: value chain, basins and fields",
    short: "What We Do",
    url: "https://www.nabep.net/what-we-do",
  },
  ceo: {
    label: "NABEP — From the CEO: Alejandro Betancourt",
    short: "From the CEO",
    url: "https://www.nabep.net/from-the-ceo",
  },
  digitalOilfield: {
    label:
      "NABEP Newsroom — The Digital Oilfield: Efficiency through Data and Innovation (Feb 27, 2026)",
    short: "The Digital Oilfield",
    url: "https://www.nabep.net/newsroom/the-digital-oilfield-efficiency-through-data-and-innovation",
  },
  rigs: {
    label:
      "NABEP Newsroom — NABEP Boosts Operations with New Workover and Drilling Rigs (Oct 13, 2026)",
    short: "New rigs (Oct 2026)",
    url: "https://www.nabep.net/newsroom/nabep-boosts-operations-with-new-workover-and-drilling-rigs-5xz25",
  },
};

export const ACCESSED_ON = "2026-10-22";

export const PROVENANCE_META: Record<
  Provenance,
  { label: string; description: string; className: string }
> = {
  reported: {
    label: "Reported",
    description:
      "Stated publicly by NABEP. The original source is linked next to the figure.",
    className:
      "border-emerald-400/25 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/15",
  },
  derived: {
    label: "Derived",
    description:
      "Arithmetic on reported figures only. The formula is shown next to the figure.",
    className: "border-sky-400/25 bg-sky-400/10 text-sky-300 hover:bg-sky-400/15",
  },
  modeled: {
    label: "Modeled",
    description:
      "Interpolated by the candidate. Illustrative only — never presented as a company figure.",
    className:
      "border-amber-400/25 bg-amber-400/10 text-amber-300 hover:bg-amber-400/15",
  },
  target: {
    label: "Target",
    description:
      "A company-stated goal. A goal is not a result, and is never treated as one here.",
    className:
      "border-violet-400/25 bg-violet-400/10 text-violet-300 hover:bg-violet-400/15",
  },
};

/* ------------------------------------------------------------------ */
/* Headline figures                                                    */
/* ------------------------------------------------------------------ */

export type Kpi = {
  id: string;
  label: string;
  value: string;
  unit?: string;
  detail: string;
  provenance: Provenance;
  sources: SourceKey[];
};

export const KPIS: Kpi[] = [
  {
    id: "production",
    label: "Production today",
    value: "200,000",
    unit: "bbl/day",
    detail: "≈11x the 18,000 bbl/day the company started with in 2024.",
    provenance: "reported",
    sources: ["ceo", "rigs"],
  },
  {
    id: "target",
    label: "Near-term goal",
    value: "1,000,000",
    unit: "bbl/day",
    detail: "Five times today's output. No public schedule attached to it.",
    provenance: "target",
    sources: ["about", "rigs"],
  },
  {
    id: "reserves",
    label: "P1 proven reserves",
    value: "65",
    unit: "billion bbl",
    detail: "Development rights across 17 contracted fields.",
    provenance: "reported",
    sources: ["about", "home"],
  },
  {
    id: "capital",
    label: "Capital deployed to date",
    value: "$1",
    unit: "billion",
    detail: "Company-funded investment that took production from 18k to 200k bbl/day.",
    provenance: "reported",
    sources: ["about", "rigs"],
  },
  {
    id: "people",
    label: "People employed",
    value: "5,000",
    unit: "+ 10,000 contractors",
    detail: "100% Venezuelan workforce, 15,000 people in total.",
    provenance: "reported",
    sources: ["rigs", "home"],
  },
  {
    id: "royalties",
    label: "For Venezuela, 25 years",
    value: "$209",
    unit: "billion",
    detail: "Projected royalties and taxes collected by the Venezuelan government.",
    provenance: "reported",
    sources: ["home", "about"],
  },
];

/* ------------------------------------------------------------------ */
/* Production trajectory                                               */
/* ------------------------------------------------------------------ */

export type TrajectoryPoint = {
  label: string;
  bpd: number;
  provenance: Provenance;
  note: string;
};

export const PRODUCTION_TRAJECTORY: TrajectoryPoint[] = [
  {
    label: "2024 · Founding",
    bpd: 18_000,
    provenance: "reported",
    note: "Petrozamora, Junín Sur and Petrocedeño, at start-up.",
  },
  {
    label: "2026 · Today",
    bpd: 200_000,
    provenance: "reported",
    note: "“More than 200,000 barrels a day” across both basins.",
  },
  {
    label: "Target",
    bpd: 1_000_000,
    provenance: "target",
    note: "Company goal. NABEP has not published a schedule for it.",
  },
];

/* ------------------------------------------------------------------ */
/* Capital efficiency                                                  */
/* ------------------------------------------------------------------ */

export type CapitalPhase = {
  label: string;
  bpdAdded: number;
  capexUsd: number;
  usdPerBpd: number;
  provenance: Provenance;
  /** Production endpoints, so the formula can be formatted per language. */
  fromBpd: number;
  toBpd: number;
};

export const CAPITAL_PHASES: CapitalPhase[] = [
  {
    label: "2024 → 2026",
    bpdAdded: 182_000,
    capexUsd: 1_000_000_000,
    usdPerBpd: 5_495,
    provenance: "derived",
    fromBpd: 18_000,
    toBpd: 200_000,
  },
  {
    label: "2026 → Target",
    bpdAdded: 800_000,
    capexUsd: 100_000_000_000,
    usdPerBpd: 125_000,
    provenance: "derived",
    fromBpd: 200_000,
    toBpd: 1_000_000,
  },
];

export const CAPITAL_INTENSITY_RATIO = 22.7;

/* ------------------------------------------------------------------ */
/* Reserves                                                            */
/* ------------------------------------------------------------------ */

export const RESERVES_BILLIONS = 65;

export type RunwayPoint = {
  label: string;
  bpd: number;
  years: number;
  provenance: Provenance;
};

export const RESERVES_RUNWAY: RunwayPoint[] = [
  { label: "At today's 200k bbl/day", bpd: 200_000, years: 890, provenance: "derived" },
  {
    label: "At the 1M bbl/day target",
    bpd: 1_000_000,
    years: 178,
    provenance: "derived",
  },
];

/* ------------------------------------------------------------------ */
/* Fields and basins                                                   */
/* ------------------------------------------------------------------ */

export type Basin = {
  name: string;
  region: "West" | "East";
  crewBase: string;
  characterization: string;
  namedFields: string[];
};

export const BASINS: Basin[] = [
  {
    name: "Lake Maracaibo",
    region: "West",
    crewBase: "Maracaibo, Zulia",
    characterization:
      "Where Venezuela's oil industry began. These fields do not need discovering — they need rebuilding.",
    namedFields: ["Petrozamora", "Junín Sur", "Petrocedeño"],
  },
  {
    name: "Orinoco Belt",
    region: "East",
    crewBase: "Lechería, Anzoátegui",
    characterization:
      "The world's largest deposit of heavy oil. Thick crude that takes steam, skill and patience to bring up.",
    namedFields: [
      "Zuata 2",
      "Junín 1",
      "Junín 3",
      "Junín 10",
      "Junín 11",
      "Boyacá 5",
      "Boyacá 8",
      "Ayacucho 6",
      "Ayacucho 7",
    ],
  },
];

export const FIELDS_CONTRACTED = 17;
export const FIELDS_PUBLICLY_NAMED = 12;

/* ------------------------------------------------------------------ */
/* Fleet                                                               */
/* ------------------------------------------------------------------ */

export type FleetItem = {
  label: string;
  count: number;
  group: "Fleet purchase" | "New arrivals";
  detail: string;
};

export const FLEET: FleetItem[] = [
  {
    label: "Heavy machinery",
    count: 70,
    group: "Fleet purchase",
    detail: "Largest heavy-equipment fleet in the country, per NABEP.",
  },
  {
    label: "Rigs",
    count: 60,
    group: "Fleet purchase",
    detail: "Rigs purchased alongside the steam boilers.",
  },
  {
    label: "Steam boilers",
    count: 30,
    group: "Fleet purchase",
    detail: "Steam injection is how extra-heavy crude is brought up.",
  },
  {
    label: "Workover rigs",
    count: 11,
    group: "New arrivals",
    detail: "550 hp each. First new mobile repair-and-maintenance systems in Venezuelan oil fields in 15+ years.",
  },
  {
    label: "Drilling rigs",
    count: 2,
    group: "New arrivals",
    detail: "1,500 hp each. Arrived October 7, 2026; more expected.",
  },
];

/* ------------------------------------------------------------------ */
/* Value                                                               */
/* ------------------------------------------------------------------ */

export type ValueFlow = {
  label: string;
  amountUsd: number;
  provenance: Provenance;
  detail: string;
};

export const VALUE_FLOWS: ValueFlow[] = [
  {
    label: "NABEP planned investment",
    amountUsd: 100_000_000_000,
    provenance: "target",
    detail: "Production capacity and oil-and-gas infrastructure.",
  },
  {
    label: "Venezuela royalties + taxes",
    amountUsd: 209_000_000_000,
    provenance: "reported",
    detail: "Projected over the first 25 years under the production contracts.",
  },
];

export const VALUE_FLOW_NOTE =
  "Different bases: one is capital deployed, the other is government revenue over 25 years. They are not additive and are never summed anywhere in this dashboard.";

/* ------------------------------------------------------------------ */
/* Workforce                                                           */
/* ------------------------------------------------------------------ */

export const WORKFORCE = [
  { label: "Direct employees", value: 5_000 },
  { label: "Contract employees", value: 10_000 },
];

export const WORKFORCE_TOTAL = 15_000;

/* ------------------------------------------------------------------ */
/* Partnership                                                         */
/* ------------------------------------------------------------------ */

export type Stakeholder = {
  party: string;
  role: string;
  points: string[];
};

export const STAKEHOLDERS: Stakeholder[] = [
  {
    party: "NABEP",
    role: "Operator",
    points: [
      "Operates the fields and controls the rights to develop more than 65 billion barrels of P1 reserves.",
      "Leads nearly $100 billion of investment in production and infrastructure.",
      "Buys most of its oilfield equipment from U.S. suppliers.",
    ],
  },
  {
    party: "United States",
    role: "35% stake · 20% offtake",
    points: [
      "Holds rights to a 35% stake in NABEP's parent company.",
      "May buy 20% of production at cost, after PDVSA receives its share.",
      "Holds a right of first refusal on the rest at market price.",
    ],
  },
  {
    party: "Venezuela",
    role: "Host and resource owner",
    points: [
      "Receives royalties and taxes projected at more than $209 billion over 25 years.",
      "PDVSA receives a percentage of the offtake to market directly through the CPP leases.",
      "Thousands of direct jobs for Venezuelan crews.",
    ],
  },
];

export const ACCOUNTABILITY = [
  "The U.S. Government must approve all board appointments.",
  "A majority of directors must be U.S. citizens.",
  "NABEP uses U.S. auditors, lawyers and advisors.",
];

/* ------------------------------------------------------------------ */
/* Value chain                                                         */
/* ------------------------------------------------------------------ */

export const VALUE_CHAIN = [
  { step: "Discover", detail: "Reservoir studies and seismic analysis to decide where each well goes." },
  { step: "Drill", detail: "Own rigs on land and on the water, including the GP-28 barge on Lake Maracaibo." },
  { step: "Produce", detail: "Reviving tired fields with new compression and flexible pipe; steam injection for extra-heavy crude." },
  { step: "Process", detail: "Treating and upgrading heavy crude to export grade." },
  { step: "Ship", detail: "Own terminals, tanks and tankers move crude to market." },
  { step: "Deliver", detail: "To buyers including Trafigura and Vitol, supplying U.S. Gulf Coast refiners." },
];

/* ------------------------------------------------------------------ */
/* Company profile                                                     */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "North American Blue Energy Partners",
  shortName: "NABEP",
  founded: 2024,
  headquarters: "Bridgetown, Barbados",
  offices: ["Caracas", "Maracaibo", "Lechería"],
  ceo: "Alejandro Betancourt López",
  agreement: "August 31, 2026 — U.S. Departments of State and War",
};
