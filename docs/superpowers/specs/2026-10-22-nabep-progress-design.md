# NABEP Progress — Design & Build Plan

**Date:** 2026-10-22
**Status:** approved ("sigamos por favor") — implementation authorized, gate waived by requester.

## Goal

A small, front-end-only Next.js app that turns NABEP's public narrative into an interactive
progress tracker, built as the candidate's job application to the company. It must demonstrate
the capability NABEP publicly says it wants: data-driven operational visibility, financial
transparency and numeric precision.

## Non-goals

- No backend, no API, no database, no auth. All data is static and typed.
- No scraping at runtime. Data is curated from public statements and shipped in the bundle.
- No CMS, no multi-page marketing site. One focused dashboard page.

## Constraints

- 2 hour budget for the whole build.
- Deploy target: Vercel (requester handles the final push).
- Must not fabricate internal operational data. Every figure carries provenance.

## Approach (chosen)

Single-page "NABEP Progress" dashboard, English UI (NABEP's corporate language; ES is a
one-file change), built on Next.js App Router + TypeScript + Tailwind v4 + shadcn/ui + Recharts.
shadcn's `chart` component wraps Recharts and gives the design-system-consistent chart styling.

Rejected alternatives:

- *Next.js API routes + DB*: violates "no backend" constraint.
- *Multiple pages (home / fields / about)*: 2h budget, the value is density on one screen.
- *Fetching live oil prices (EIA/OPEC)*: adds external dependency + unverifiable numbers; the
  differentiation is NABEP-specific, not market-generic.

## Data model

Every datum carries a `Provenance` tag:

| Tag | Meaning |
|---|---|
| `reported` | NABEP stated it publicly (with a source link) |
| `derived` | Arithmetic on reported figures (formula shown in the UI) |
| `modeled` | Candidate interpolation / illustrative path — never presented as fact |
| `target` | Company-stated goal |

This is the core differentiator: their own Feb-2026 article "The Digital Oilfield" calls for
real-time monitoring, consolidated board reporting and unit precision (they explicitly complain
about "millardo" vs "billon" confusion). The app proves it can hold that line.

## Content sections (in order)

1. **Hero + KPI row** — production today, target, reserves, fields, people, investment.
2. **Production ramp** — area chart, reported anchors (18k bpd 2024 → 200k bpd 2026) plus a
   dashed modeled path toward the 1M bpd target line. Labeled as illustrative.
3. **Capital efficiency** — derived: $/bpd of added capacity ($1B → 200k bpd vs $100B → 1M bpd),
   showing marginal capex intensity rising. Derivation shown inline.
4. **Basins & fields** — West (Lake Maracaibo, 3 operating) vs East (Orinoco Belt, 9 named),
   with the note that 17 fields are contracted and 12 are publicly named.
5. **Value split** — $100B planned investment vs $209B Venezuela royalties over 25 years, shown
   as separate bases with an explicit "not additive" note (their unit-precision complaint).
6. **Partnership structure** — US Government 35% stake in parent + right to buy 20% of output at cost.
7. **Workforce** — 5,000 employees + 10,000 contractors, 100% Venezuelan.
8. **Fleet** — 60 rigs, 30 steam boilers, 70 heavy machines + new arrivals (11 workover @550hp,
   2 drilling @1500hp, GP-28 barge back in service).
9. **Reserves runway** — derived: years of production left at 200k vs 1M bpd → reserves are not
   the constraint, execution and capital are.
10. **Methodology & sources** — every source linked, every derivation explained.
11. **About me** — candidate profile from a single editable file (`src/data/profile.ts`).

## Layout

Dark, technical, "control room" aesthetic — matches the oil & gas operations domain and makes
the charts the hero. 12-column grid, section rhythm of KPI row → chart pair → wide chart →
two-up → sources → profile.

## Deliverables

- `src/data/nabep.ts` — typed dataset with provenance + sources.
- `src/data/profile.ts` — candidate info (placeholder, one place to edit).
- `src/components/` — chart + section components.
- `app/page.tsx` — dashboard composition.
- `README.md` — deploy steps for Vercel.
- `npm run build` must pass.

## Status

- [x] Research public NABEP data
- [x] Design decision
- [x] Scaffold Next.js + shadcn
- [x] Data layer
- [x] Components + page
- [x] Build passes
- [x] README + deploy notes
- [x] Bilingual EN/ES (see addendum)

## Addendum — bilingual mode (2026-10-22)

Requested after the first build: Spanish and English, plus a public repo for
Vercel.

**Approaches considered**

1. **Two static routes** (`/`, `/es`) sharing one component — chosen.
2. Client context + `localStorage` toggle — rejected: language not in the URL,
   flash on load, hydration mismatch risk.

English stays at `/` because NABEP publishes in English and the parent company
is US-based; `/es` is one click away and can be shared directly.

**Shape of the implementation**

- `src/i18n/en.ts` defines the copy and `Copy = typeof en`; `es.ts` is typed as
  `Copy`, so parity is enforced by the compiler, not by review.
- Sentences with emphasis are `Part[]` arrays rendered by `<Rich>`; computed
  numbers arrive as `{{placeholders}}`, so no figure is duplicated in prose.
- The dataset keeps numbers and provenance once (`nabep.ts`); `nabep.es.ts`
  overrides only strings; `getDataset(lang)` merges them.
- Each route has its own root layout, so `<html lang>` is correct in the first
  byte and there is no client-side language state at all.
- Number formatting follows the language (`es-VE`): `200,000` vs `200.000`.

**Gotchas found**

- Recharts renders nothing in SSR HTML; visual checks must screenshot the
  hydrated page, not grep the markup.
- `es-419` and `es-MX` fall back to `en-US` formatting in the default Node ICU
  used here, which silently prints English group separators on the Spanish
  page. `es-VE` works on both server and client.

