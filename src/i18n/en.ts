/**
 * Source of truth for the page copy.
 *
 * `es.ts` is typed against this file, so a missing or extra key in Spanish is a
 * compile error rather than a silent fallback to English.
 *
 * `parts` arrays let a sentence carry emphasis without splitting it into a dozen
 * keys: plain strings are rendered as text, `{ em }` and `{ strong }` as spans.
 * Placeholders like `{{ratio}}` are filled at render time from live values, so
 * computed numbers can never drift from the copy.
 */

export type Part = string | { em: string } | { strong: string };

export const en = {
  meta: {
    title: "NABEP Progress — an operations tracker built from public data",
    description:
      "An independent job-application project: NABEP's published production, capital, fleet and workforce figures, charted with every figure labelled reported, derived, modeled or target.",
    ogDescription:
      "NABEP's published numbers, charted with provenance for every figure.",
  },

  nav: {
    tagline: "Operations tracker built from public statements",
    contact: "Contact",
    source: "Source",
    switchShort: "ES",
    switchLabel: "Ver en español",
    switchHref: "/es",
  },

  hero: {
    eyebrow: "Job application",
    eyebrowAccent: "NABEP operations",
    titleLead: "From 18,000 to 200,000 barrels a day.",
    titleSub: "Now the hard part: 1,000,000.",
    body: [
      "NABEP’s own brief — in ",
      { em: "“The Digital Oilfield”" },
      " — asks for real-time operational visibility, consolidated reporting for the board and precision about units. Its site says it will ",
      { em: "“use this site to report our progress openly”" },
      ". This page does exactly that with the numbers the company has already published, and marks every one of them by where it came from.",
    ] as Part[],
    card: {
      title: "About the company",
      description: "North American Blue Energy Partners · founded {{founded}}",
      headquarters: "Headquarters",
      offices: "Offices",
      ceo: "Chief Executive",
      agreement: "Government agreement",
      accessed: "Sources accessed",
    },
  },

  kpi: {
    production: {
      label: "Production today",
      value: "200,000",
      unit: "bbl/day",
      detail: "≈11x the 18,000 bbl/day the company started with in 2024.",
    },
    target: {
      label: "Near-term goal",
      value: "1,000,000",
      unit: "bbl/day",
      detail: "Five times today’s output. No public schedule attached to it.",
    },
    reserves: {
      label: "P1 proven reserves",
      value: "65",
      unit: "billion bbl",
      detail: "Development rights across 17 contracted fields.",
    },
    capital: {
      label: "Capital deployed to date",
      value: "$1",
      unit: "billion",
      detail:
        "Company-funded investment that took production from 18k to 200k bbl/day.",
    },
    people: {
      label: "People employed",
      value: "5,000",
      unit: "+ 10,000 contractors",
      detail: "100% Venezuelan workforce, 15,000 people in total.",
    },
    royalties: {
      label: "For Venezuela, 25 years",
      value: "$209",
      unit: "billion",
      detail:
        "Projected royalties and taxes collected by the Venezuelan government.",
    },
  },

  production: {
    eyebrow: "Production",
    title: "The ramp happened. The next one has to be bigger.",
    description:
      "Production moved tenfold in two years on about a billion dollars of company capital. The stated goal is five times today’s volume, on a hundred billion dollars. Those two facts do not fit the same curve, and that is the most interesting thing in the public record.",
    trajectory: {
      title: "Production trajectory",
      description:
        "Barrels per day, as published. The third bar is a goal, not a result.",
    },
    capital: {
      title: "Capital per barrel of daily capacity",
      description:
        "What each increment of production cost, divided by the barrels per day it added.",
    },
    insight: {
      eyebrow: "Derived insight",
      parts: [
        "The last 182,000 barrels a day cost about $1 billion, roughly $5,500 per barrel of daily capacity. The next 800,000 are budgeted at $100 billion, about $125,000 each, or ",
        { strong: "{{ratio}}x" },
        " more capital per barrel. Caveat: the $100B also covers infrastructure, so this is an upper bound on unit cost. Either way, the marginal barrel is a different business than the last one.",
      ] as Part[],
    },
    gap: {
      eyebrow: "Transparency gap",
      parts: [
        "NABEP publishes where it started and where it is going, but not the path between them: no quarterly production series, ",
        "{{unnamed}} of the {{contracts}} contracted fields are unnamed, and no schedule attaches to the 1M bbl/day goal. A tracker can show that gap honestly, which is more useful than filling it with numbers nobody can trace.",
      ] as Part[],
    },
  },

  assets: {
    eyebrow: "Asset base",
    title: "Two basins, seventeen contracts, one very large fleet",
    description:
      "NABEP bought capacity in both basins and the equipment to run it. Reserves are not the binding constraint here: equipment, capital and crews are.",
    fields: {
      title: "Fields by basin",
      description: "{{named}} of {{contracts}} contracted fields are publicly named.",
    },
    reserves: {
      title: "Reserves runway",
      description: "65 billion P1 barrels divided by each production rate.",
      footnote:
        "At the target rate the 65 billion barrels last roughly 178 years. The constraint on growth is capital and execution, not geology.",
    },
    fleet: {
      title: "Equipment fleet",
      description:
        "Announced purchases and the rigs that arrived in October 2026.",
      footnote:
        "NABEP calls it the largest heavy-equipment fleet in the country. Batches as announced, not a single point-in-time snapshot.",
    },
    crewBase: "Crew base",
  },

  value: {
    eyebrow: "Value and governance",
    title: "Who gets what, and who signs off",
    description:
      "The August 2026 agreement split the company three ways and put board approval in Washington. Two numbers matter for anyone modelling this company: the capital programme and the government take.",
    flow: {
      title: "Capital vs. government revenue",
      description:
        "Announced programme and projected royalties, over their stated horizons.",
    },
    accountability: {
      title: "Built-in accountability",
      description: "Governance terms the agreement sets out.",
    },
  },

  people: {
    eyebrow: "People",
    title: "15,000 people, and the company is hiring Venezuelans home",
    description:
      "The CEO’s letter asks Venezuelan engineers and operators who built their careers abroad to come back. The workforce numbers are the clearest statement of intent in the public record.",
    workforce: {
      title: "Direct and contract workforce",
      description: "{{total}} people in Venezuela.",
    },
    asks: {
      title: "What the CEO is asking for",
      description: "From the letter to the field.",
      quote:
        "“Rebuilding Venezuela’s oil industry will take many more hands. Many of the engineers, technicians and operators it needs are Venezuelans who built their careers abroad. I want them to know that there is a place for them here, at home.”",
      stats: [
        { value: "100%", label: "of the workforce is Venezuelan" },
        { value: "10,000", label: "contract jobs supported across Venezuela" },
      ],
      analysis:
        "A workforce dashboard is usually an HR dashboard. For an operator it is also the constraint: every rig that arrives needs certified crews, and the CEO is explicit that the crews are the bottleneck he wants to solve.",
    },
  },

  chain: {
    eyebrow: "How it works",
    title: "One barrel, six steps, and NABEP owns all six",
    description:
      "From reservoir study to delivery. Owning the whole chain is the company’s stated reason for producing more, faster than a newcomer could.",
  },

  method: {
    eyebrow: "Methodology",
    title: "Where every number comes from",
    description:
      "This dashboard has no backend, no database and no live feeds. It has the public record, and a rule about what may be done with it.",
    sources: {
      title: "Sources",
      description: "All public statements, accessed {{date}}.",
      download: "Download dataset",
    },
    rules: {
      title: "Rules applied",
      description: "What this page is allowed to claim.",
      items: [
        [
          { strong: "Reported" },
          " figures are quoted, never reworded into a different unit. Barrels stay barrels, dollars stay dollars.",
        ],
        [
          { strong: "Derived" },
          " figures show their formula on screen. Every number I computed can be recomputed from the linked source.",
        ],
        [
          { strong: "Modeled" },
          " values would be labelled as mine. Only the scenario planner uses one, and it says so.",
        ],
        [
          { strong: "Targets" },
          " are drawn in a different colour from results and are never counted as production.",
        ],
        [
          "Figures on different bases are never summed. The $100B programme and the $209B royalty projection live in the same chart, on the same axis, with a note saying why they are not comparable.",
        ],
      ] as Part[][],
    },
  },

  about: {
    eyebrow: "About me",
    whyTitle: "Why NABEP",
    stack: {
      title: "Stack",
      description: "Everything here was built with these.",
      note: [
        "No backend, no database, no API. Static typed data in ",
        { strong: "src/data/nabep.ts" },
        ", rendered with Next.js and Recharts, deployed on Vercel.",
      ] as Part[],
    },
  },

  footer: {
    disclaimer:
      "Independent candidate project. Not affiliated with, or endorsed by, North American Blue Energy Partners. All company figures are taken from public statements and remain the property of their owners.",
    line: "Sources accessed {{date}} · {{name}}",
  },

  charts: {
    trajectory: {
      seriesProduction: "Production",
      seriesTarget: "Target",
      unit: "bbl/day",
      tooltipName: "Production",
    },
    capital: {
      series: "Capital per bbl/day of added capacity",
      tooltipName: "Capital intensity",
      perUnit: "per bbl/day",
      unit: "bbl/day",
      footnote:
        "The next increment of capacity costs about {{ratio}}x more capital per barrel of daily capacity than the last one.",
    },
    fields: {
      series: "Fields",
      rows: {
        maracaibo: { label: "Lake Maracaibo", note: "Operating since 2024" },
        orinoco: { label: "Orinoco Belt", note: "Publicly named fields" },
        unnamed: {
          label: "Not named yet",
          note: "Contracted after the August 2026 agreement",
        },
      },
      tooltipName: "Fields",
      tooltip: "{{count}} fields — {{note}}",
    },
    reserves: {
      series: "Years of P1 reserves",
      tooltipName: "Reserves runway",
      tooltip: "{{count}} years at this rate",
      tickSuffix: "y",
      labelSuffix: "yrs",
    },
    fleet: {
      groups: { purchase: "Fleet purchase", arrivals: "New arrivals" },
      tooltipName: "Equipment",
      tooltip: "{{count}} — {{group}}",
    },
    flows: {
      series: "US dollars",
      tooltipName: "Amount",
    },
    workforce: {
      series: "People",
      totalLabel: "people",
      direct: "Direct employees",
      contract: "Contract employees",
      tooltipName: "Workforce",
      tooltip: "{{count}} people",
    },
  },

  planner: {
    eyebrow: "Scenario · ramp planner",
    title: "What would it take to reach 1M by {{year}}?",
    description:
      "Move the slider. This is your assumption, not a NABEP forecast — the company has not published a schedule.",
    perMonth: "bbl/day per month",
    months: "{{months}} months from October 2026.",
    perDay: "That is roughly {{perDay}} barrels a day of new capacity every day.",
    sliderLabel: "Target year",
    capexLabel: "Implied capital at the programme’s rate",
    capexPerMonth: "{{amount}} per month",
    capexFormula: "{{growth}} bbl/day × ${{perBpd}}/bbl/day",
    series: "Modelled production",
    targetLabel: "1M target",
  },

  provenance: {
    reported: {
      label: "Reported",
      description:
        "Stated publicly by NABEP. The original source is linked next to the figure.",
    },
    derived: {
      label: "Derived",
      description:
        "Arithmetic on reported figures only. The formula is shown next to the figure.",
    },
    modeled: {
      label: "Modeled",
      description:
        "Interpolated by the candidate. Illustrative only — never presented as a company figure.",
    },
    target: {
      label: "Target",
      description:
        "A company-stated goal. A goal is not a result, and is never treated as one here.",
    },
  },
};

export type Copy = typeof en;
