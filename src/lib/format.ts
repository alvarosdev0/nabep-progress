/**
 * Number formatting is locale-aware on purpose: the Spanish page must show
 * 200.000 bbl/day, not 200,000. Every chart passes the active locale.
 */

const DEFAULT_LOCALE = "en-US";

export function formatNumber(value: number, locale = DEFAULT_LOCALE): string {
  return value.toLocaleString(locale);
}

export function formatUsdCompact(value: number, locale = DEFAULT_LOCALE): string {
  const units = [
    { limit: 1e12, suffix: "T" },
    { limit: 1e9, suffix: "B" },
    { limit: 1e6, suffix: "M" },
    { limit: 1e3, suffix: "K" },
  ];

  for (const { limit, suffix } of units) {
    if (Math.abs(value) >= limit) {
      const scaled = value / limit;
      const rounded =
        scaled >= 100
          ? Math.round(scaled)
          : Math.round(scaled * 10) / 10;
      return `$${rounded.toLocaleString(locale, {
        maximumFractionDigits: 1,
      })}${suffix}`;
    }
  }

  return `$${value.toLocaleString(locale)}`;
}

export function formatUsdExact(value: number, locale = DEFAULT_LOCALE): string {
  return `$${value.toLocaleString(locale)}`;
}
