"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { getDataset } from "@/data/dataset";
import { CAPITAL_INTENSITY_RATIO } from "@/data/nabep";
import { copy, fill, locales, type Lang } from "@/i18n";
import {
  formatNumber,
  formatUsdCompact,
  formatUsdExact,
} from "@/lib/format";

export function ProductionTrajectoryChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.trajectory;
  const locale = locales[lang];

  const data = getDataset(lang).trajectory.map((point) => ({
    label: point.label,
    bpd: point.bpd,
    fill: point.provenance === "target" ? "var(--chart-2)" : "var(--chart-1)",
  }));

  const config = {
    production: { label: t.seriesProduction, color: "var(--chart-1)" },
    target: { label: t.seriesTarget, color: "var(--chart-2)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-auto h-[300px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        margin={{ top: 24, right: 8, left: 8, bottom: 8 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tick={{ fontSize: 11 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={52}
          tick={{ fontSize: 11 }}
          tickFormatter={(value: number) =>
            value >= 1_000_000
              ? `${formatNumber(value / 1_000_000, locale)}M`
              : value >= 1000
                ? `${formatNumber(Math.round(value / 1000), locale)}k`
                : String(value)
          }
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value) => [
                `${formatNumber(Number(value), locale)} ${t.unit}`,
                t.tooltipName,
              ]}
            />
          }
        />
        <Bar dataKey="bpd" radius={[6, 6, 0, 0]} isAnimationActive={false}>
          {data.map((entry) => (
            <Cell key={entry.label} fill={entry.fill} />
          ))}
          <LabelList
            dataKey="bpd"
            position="top"
            className="fill-foreground text-[11px] font-medium"
            formatter={(value) => formatNumber(Number(value), locale)}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export function CapitalIntensityChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.capital;
  const locale = locales[lang];

  const data = getDataset(lang).capitalPhases.map((phase) => ({
    label: phase.label,
    usdPerBpd: phase.usdPerBpd,
  }));

  const config = {
    capital: { label: t.series, color: "var(--chart-3)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-auto h-[300px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{ top: 24, right: 48, left: 8, bottom: 8 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 11 }}
          tickFormatter={(value: number) =>
            `$${formatNumber(Math.round(value / 1000), locale)}k`
          }
        />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={110}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value) => [
                `$${formatNumber(Number(value), locale)} ${t.perUnit}`,
                t.tooltipName,
              ]}
            />
          }
        />
        <Bar
          dataKey="usdPerBpd"
          fill="var(--chart-3)"
          radius={[0, 6, 6, 0]}
          isAnimationActive={false}
        >
          <LabelList
            dataKey="usdPerBpd"
            position="right"
            className="fill-foreground text-[11px] font-medium"
            formatter={(value) => `$${formatNumber(Number(value), locale)}`}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export function CapitalFormulas({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.capital;
  const locale = locales[lang];

  return (
    <ul className="space-y-1.5">
      {getDataset(lang).capitalPhases.map((phase) => (
        <li
          key={phase.label}
          className="flex flex-wrap items-baseline justify-between gap-2 text-xs"
        >
          <span className="font-mono text-muted-foreground">
            {formatUsdCompact(phase.capexUsd, locale)} ÷ (
            {formatNumber(phase.toBpd, locale)} −{" "}
            {formatNumber(phase.fromBpd, locale)}) {t.unit}
          </span>
          <span className="font-mono text-foreground">
            {formatUsdExact(phase.capexUsd, locale)} → $
            {formatNumber(phase.usdPerBpd, locale)}
          </span>
        </li>
      ))}
      <li className="pt-1 text-xs font-medium text-foreground">
        {fill(t.footnote, {
          ratio: formatNumber(CAPITAL_INTENSITY_RATIO, locale),
        })}
      </li>
    </ul>
  );
}
