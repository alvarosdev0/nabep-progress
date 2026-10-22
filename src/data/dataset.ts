import { copy, type Lang } from "@/i18n";

import {
  ACCOUNTABILITY,
  BASINS,
  CAPITAL_PHASES,
  COMPANY,
  FIELDS_CONTRACTED,
  FIELDS_PUBLICLY_NAMED,
  FLEET,
  KPIS,
  PRODUCTION_TRAJECTORY,
  PROVENANCE_META,
  RESERVES_BILLIONS,
  RESERVES_RUNWAY,
  SOURCES,
  STAKEHOLDERS,
  VALUE_CHAIN,
  VALUE_FLOWS,
  VALUE_FLOW_NOTE,
  WORKFORCE,
  WORKFORCE_TOTAL,
  type Basin,
  type FleetItem,
  type Provenance,
  type SourceKey,
  type Stakeholder,
  type TrajectoryPoint,
  type ValueFlow,
} from "./nabep";
import { ES } from "./nabep.es";

/**
 * Builds the dataset for one language.
 *
 * Numbers and provenance live once, in `nabep.ts`. This function only decides
 * which strings wrap them, so switching language can never change a figure.
 * Arrays are merged positionally against the English dataset.
 */
export function getDataset(lang: Lang) {
  const es = lang === "es";

  const byIndex = <T>(base: T[], over: readonly Partial<T>[] | undefined): T[] =>
    base.map((item, index) => ({ ...item, ...(over?.[index] ?? {}) }));

  const sources = Object.fromEntries(
    (Object.keys(SOURCES) as SourceKey[]).map((key) => [
      key,
      {
        ...SOURCES[key],
        ...(es ? ES.sources[key] : {}),
      },
    ]),
  ) as Record<SourceKey, (typeof SOURCES)[SourceKey]>;

  const provenance = Object.fromEntries(
    (Object.keys(PROVENANCE_META) as Provenance[]).map((key) => [
      key,
      {
        ...PROVENANCE_META[key],
        label: copy[lang].provenance[key].label,
        description: copy[lang].provenance[key].description,
      },
    ]),
  ) as Record<
    Provenance,
    (typeof PROVENANCE_META)[Provenance]
  >;

  return {
    sources,
    provenance,
    kpis: KPIS,
    trajectory: byIndex<TrajectoryPoint>(
      PRODUCTION_TRAJECTORY,
      es ? ES.trajectory : undefined,
    ),
    capitalPhases: byIndex(
      CAPITAL_PHASES,
      es ? ES.capitalPhases : undefined,
    ),
    runway: byIndex(RESERVES_RUNWAY, es ? ES.runway : undefined),
    basins: byIndex<Basin>(BASINS, es ? ES.basins : undefined),
    fleet: byIndex<FleetItem>(FLEET, es ? ES.fleet : undefined),
    flows: byIndex<ValueFlow>(VALUE_FLOWS, es ? ES.flows : undefined),
    valueFlowNote: es ? ES.valueFlowNote : VALUE_FLOW_NOTE,
    workforce: byIndex(WORKFORCE, es ? ES.workforce : undefined),
    workforceTotal: WORKFORCE_TOTAL,
    stakeholders: byIndex<Stakeholder>(
      STAKEHOLDERS,
      es ? ES.stakeholders : undefined,
    ),
    accountability: es ? ES.accountability : ACCOUNTABILITY,
    valueChain: byIndex(VALUE_CHAIN, es ? ES.valueChain : undefined),
    company: {
      ...COMPANY,
      ...(es ? ES.company : {}),
    },
    counts: {
      contracted: FIELDS_CONTRACTED,
      named: FIELDS_PUBLICLY_NAMED,
      unnamed: FIELDS_CONTRACTED - FIELDS_PUBLICLY_NAMED,
      reservesBillions: RESERVES_BILLIONS,
    },
  };
}

export type Dataset = ReturnType<typeof getDataset>;
