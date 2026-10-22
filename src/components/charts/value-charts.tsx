"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Pie,
  PieChart,
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
import { copy, fill, locales, type Lang } from "@/i18n";
import { formatNumber, formatUsdCompact } from "@/lib/format";

export function ValueFlowChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.flows;
  const locale = locales[lang];

  const data = getDataset(lang).flows.map((flow) => ({
    label: flow.label,
    billions: flow.amountUsd / 1e9,
  }));

  const config = {
    amount: { label: t.series, color: "var(--chart-1)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-auto h-[220px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 56, left: 8, bottom: 8 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 11 }}
          tickFormatter={(value: number) => `$${value}B`}
        />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={170}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value) => [
                formatUsdCompact(Number(value) * 1e9, locale),
                t.tooltipName,
              ]}
            />
          }
        />
        <Bar dataKey="billions" radius={[0, 6, 6, 0]} isAnimationActive={false}>
          {data.map((entry, index) => (
            <Cell
              key={entry.label}
              fill={index === 0 ? "var(--chart-4)" : "var(--chart-1)"}
            />
          ))}
          <LabelList
            dataKey="billions"
            position="right"
            className="fill-foreground text-[11px] font-medium"
            formatter={(value) => `$${formatNumber(Number(value), locale)}B`}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export function WorkforceChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.workforce;
  const locale = locales[lang];
  const dataset = getDataset(lang);

  const labels = [t.direct, t.contract];
  const data = dataset.workforce.map((entry, index) => ({
    label: labels[index] ?? entry.label,
    value: entry.value,
    fill: index === 0 ? "var(--chart-1)" : "var(--chart-4)",
  }));

  const config = {
    value: { label: t.series },
    direct: { label: t.direct, color: "var(--chart-1)" },
    contract: { label: t.contract, color: "var(--chart-4)" },
  } satisfies ChartConfig;

  return (
    <div className="relative">
      <ChartContainer
        config={config}
        className="mx-auto aspect-square max-h-[260px] w-full"
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                nameKey="label"
                hideLabel
                formatter={(value) => [
                  fill(t.tooltip, {
                    count: formatNumber(Number(value), locale),
                  }),
                  t.tooltipName,
                ]}
              />
            }
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            innerRadius={58}
            outerRadius={92}
            strokeWidth={0}
            paddingAngle={2}
            isAnimationActive={false}
          >
            {data.map((entry) => (
              <Cell key={entry.label} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-semibold tracking-tight tabular-nums">
          {formatNumber(dataset.workforceTotal, locale)}
        </span>
        <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
          {t.totalLabel}
        </span>
      </div>
    </div>
  );
}
