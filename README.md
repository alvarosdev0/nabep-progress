# NABEP Progress

An independent job-application project: NABEP's published production, capital,
fleet and workforce figures turned into an interactive, bilingual operations
tracker.

Every figure on the page is tagged with where it came from:

| Tag | Meaning |
| --- | --- |
| **Reported** | NABEP stated it publicly. The source is linked. |
| **Derived** | Arithmetic on reported figures. The formula is on screen. |
| **Modeled** | Candidate interpolation. Illustrative, never a company figure. |
| **Target** | A company goal, not a result. |

## Stack

- Next.js 16 (App Router, static)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui (radix-nova preset)
- Recharts 3

No backend, no database, no API calls at runtime. The dataset is typed and
committed in `src/data/`.

## Languages

Two static routes, one component:

| Route | Language | `<html lang>` |
| --- | --- | --- |
| `/` | English | `en` |
| `/es` | Spanish | `es` |

Each route has its own root layout (`src/app/(site)/` and `src/app/(es)/`), so
the language is in the HTML from the first byte: no client toggle, no flash, no
hydration mismatch. The header switch is a plain link.

How the text is organised:

- `src/i18n/en.ts` — the canonical copy. `Copy` is derived from it, so Spanish
  cannot drift: a missing key is a build error.
- `src/i18n/es.ts` — the Spanish dictionary, typed as `Copy`.
- `src/data/nabep.es.ts` — Spanish strings for the published dataset only.
  Numbers, provenance and source URLs live once, in `src/data/nabep.ts`.
- `src/data/dataset.ts` — `getDataset(lang)` merges the two, so switching
  language can never change a figure.

Sentences with inline emphasis use `parts` arrays (`src/components/rich.tsx`)
instead of being split into fragments, and computed values arrive through
`{{placeholders}}` — so `22.7x` is never written twice.

Number formatting follows the language: `200,000` on `/`, `200.000` on `/es`
(`es-VE` locale).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (English) or http://localhost:3000/es (Spanish).

## Edit your profile (the only file you need to touch)

`src/data/profile.ts` — shared contact fields plus an `en` and an `es` block
(headline, summary, highlights, "why NABEP", next step). TypeScript requires
both blocks, so the page can never ship half translated.

Also update `metadata.authors` in `src/app/(site)/layout.tsx` and
`src/app/(es)/layout.tsx`.

## Where the numbers live

`src/data/nabep.ts` — every figure, its provenance and its source. If NABEP
publishes new numbers, edit here and the charts follow. Nothing is hard-coded in
the components.

To add a source, add it to `SOURCES`, reference its key from the data item, and
add the Spanish label in `src/data/nabep.es.ts`.

## Deploy to Vercel

**Option A — CLI (fastest)**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

**Option B — GitHub**

1. This folder sits inside a larger git repo, so `git init` here creates an
   independent nested repo — that is what you want for Vercel.
2. `git add . && git commit -m "feat: bilingual NABEP progress tracker"`
3. `gh repo create nabep-progress --public --source=. --remote=origin --push`
4. In Vercel → Add New → Project → import the repo. No env vars, no config
   needed; Next.js is detected automatically.

## Notes

- **Charts have `isAnimationActive={false}`.** Recharts 3.8 with React 19 does
  not complete the initial animation and leaves the rectangles at 0px, so bars
  never appear. Disabling the entry animation is the fix. Keep it off unless you
  verify otherwise.
- **Charts read the language from props, not from a context.** They are leaf
  client components; the route decides the language once, at the top.
- **`es-419` is not safe for number formatting.** The default Node ICU in this
  project formats `es-419` and `es-MX` like `en-US`, which would print `200,000`
  on the Spanish page. `es-VE` (in `src/i18n/index.ts`) is used instead and
  formats correctly on both server and client.
- **npm 11.17 `allow-scripts`:** this project was built after removing an
  `allow-scripts=opencode-ai` entry from the global `.npmrc`. If installs start
  failing with `EALLOWSCRIPTS`, that setting is the cause.
- Data was accessed on 2026-10-22. Company figures move; re-check the sources
  before presenting.
- This is a candidate project, not affiliated with NABEP. All company figures
  remain the property of their owners.
