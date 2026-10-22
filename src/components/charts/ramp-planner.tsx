"use client";

import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import { ProvenanceTag } from "@/components/provenance";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { CAPITAL_PHASES } from "@/data/nabep";
import { copy, fill, locales, type Lang } from "@/i18n";
import { formatNumber, formatUsdCompact } from "@/lib/format";

const START_BPD = 200_000;
const TARGET_BPD = 1_000_000;
const START = new Date(2026, 9, 1); // October 2026
const CAPEX_PER_BPD =
  CAPITAL_PHASES[1].capexUsd / CAPITAL_PHASES[1].bpdAdded; // $125,000

export function RampPlanner({ lang }: { lang: Lang }) {
  const t = copy[lang].planner;
  const locale = locales[lang];
  const [year, setYear] = useState(2030);

  const { points, months, monthlyGrowth, monthlyCapex } = useMemo(() => {
    const monthCount = (year - START.getFullYear()) * 12 + 2; // through December
    const growth = Math.round((TARGET_BPD - START_BPD) / monthCount);
    const series = Array.from({ length: monthCount + 1 }, (_, i) => {
      const date = new Date(START.getFullYear(), START.getMonth() + i, 1);
      return {
        date,
        label: date.toLocaleDateString(locale, {
          month: "short",
          year: "numeric",
        }),
        bpd: Math.round(START_BPD + (TARGET_BPD - START_BPD) * (i / monthCount)),
      };
    });

    return {
      points: series,
      months: monthCount,
      monthlyGrowth: growth,
      monthlyCapex: growth * CAPEX_PER_BPD,
    };
  }, [year, locale]);

  const config = {
    bpd: { label: t.series, color: "var(--chart-1)" },
  } satisfies ChartConfig;

  return (
    <div className="rounded-lg border border-primary/25 bg-card/50 p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
            {t.eyebrow}
          </p>
          <h3 className="mt-1 text-sm font-semibold">
            {fill(t.title, { year })}
          </h3>
          <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
            {t.description}
          </p>
        </div>
        <ProvenanceTag provenance="modeled" lang={lang} />
      </div>

      <div className="grid gap-5 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tracking-tight tabular-nums">
              +{formatNumber(monthlyGrowth, locale)}
            </span>
            <span className="text-xs text-muted-foreground">{t.perMonth}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {fill(t.months, { months })} {fill(t.perDay, {
              perDay: formatNumber(Math.round(monthlyGrowth / 30), locale),
            })}
          </p>

          <div className="mt-4">
            <label
              htmlFor="ramp-year"
              className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              <span>{t.sliderLabel}</span>
              <span className="text-foreground">{year}</span>
            </label>
            <input
              id="ramp-year"
              type="range"
              min={2027}
              max={2035}
              step={1}
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted accent-[var(--chart-1)]"
            />
            <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
              <span>2027</span>
              <span>2035</span>
            </div>
          </div>

          <div className="mt-4 rounded-md border border-border/60 bg-muted/20 p-3">
            <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
              {t.capexLabel}
            </p>
            <p className="mt-1 text-sm font-medium">
              {fill(t.capexPerMonth, {
                amount: formatUsdCompact(monthlyCapex, locale),
              })}
            </p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">
              {fill(t.capexFormula, {
                growth: formatNumber(monthlyGrowth, locale),
                perBpd: formatNumber(CAPEX_PER_BPD, locale),
              })}
            </p>
          </div>
        </div>

        <ChartContainer config={config} className="aspect-auto h-[230px] w-full">
          <AreaChart
            data={points}
            margin={{ top: 12, right: 12, left: 4, bottom: 4 }}
          >
            <defs>
              <linearGradient id="ramp-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.45} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={28}
              tick={{ fontSize: 10 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              width={44}
              tick={{ fontSize: 10 }}
              tickFormatter={(value: number) =>
                value >= 1_000_000
                  ? `${formatNumber(value / 1_000_000, locale)}M`
                  : `${formatNumber(Math.round(value / 1000), locale)}k`
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => [
                    `${formatNumber(Number(value), locale)} ${copy[lang].charts.trajectory.unit}`,
                    t.series,
                  ]}
                />
              }
            />
            <ReferenceLine
              y={TARGET_BPD}
              stroke="var(--chart-2)"
              strokeDasharray="4 4"
              label={{
                value: t.targetLabel,
                position: "insideTopLeft",
                dy: -8,
                fill: "var(--chart-2)",
                fontSize: 10,
              }}
            />
            <Area
              type="monotone"
              dataKey="bpd"
              stroke="var(--chart-1)"
              strokeWidth={2}
              fill="url(#ramp-fill)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}
