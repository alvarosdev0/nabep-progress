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
import { copy, fill, locales, type Lang } from "@/i18n";
import { formatNumber } from "@/lib/format";

export function FieldsByBasinChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.fields;
  const locale = locales[lang];
  const dataset = getDataset(lang);

  const data = [
    {
      label: t.rows.maracaibo.label,
      value: dataset.basins[0]?.namedFields.length ?? 0,
      note: t.rows.maracaibo.note,
    },
    {
      label: t.rows.orinoco.label,
      value: dataset.basins[1]?.namedFields.length ?? 0,
      note: t.rows.orinoco.note,
    },
    {
      label: t.rows.unnamed.label,
      value: dataset.counts.unnamed,
      note: t.rows.unnamed.note,
    },
  ];

  const config = {
    fields: { label: t.series, color: "var(--chart-4)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-auto h-[220px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 40, left: 8, bottom: 8 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          allowDecimals={false}
          tick={{ fontSize: 11 }}
        />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={132}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, _name, item) => [
                fill(t.tooltip, {
                  count: formatNumber(Number(value), locale),
                  note: item?.payload?.note ?? "",
                }),
                t.tooltipName,
              ]}
            />
          }
        />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} isAnimationActive={false}>
          {data.map((entry, index) => (
            <Cell
              key={entry.label}
              fill={index === data.length - 1 ? "var(--chart-5)" : "var(--chart-4)"}
            />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            className="fill-foreground text-[11px] font-medium"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export function ReservesRunwayChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.reserves;
  const locale = locales[lang];

  const data = getDataset(lang).runway.map((point) => ({
    label: point.label,
    years: point.years,
  }));

  const config = {
    years: { label: t.series, color: "var(--chart-5)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-auto h-[220px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 84, left: 8, bottom: 8 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 11 }}
          tickFormatter={(value: number) =>
            `${formatNumber(value, locale)}${t.tickSuffix}`
          }
        />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={165}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value) => [
                fill(t.tooltip, {
                  count: formatNumber(Number(value), locale),
                }),
                t.tooltipName,
              ]}
            />
          }
        />
        <Bar
          dataKey="years"
          fill="var(--chart-5)"
          radius={[0, 6, 6, 0]}
          isAnimationActive={false}
        >
          <LabelList
            dataKey="years"
            position="right"
            className="fill-foreground text-[11px] font-medium"
            formatter={(value) =>
              `${formatNumber(Number(value), locale)} ${t.labelSuffix}`
            }
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

export function FleetChart({ lang }: { lang: Lang }) {
  const t = copy[lang].charts.fleet;
  const locale = locales[lang];

  const data = getDataset(lang).fleet.map((item) => ({
    label: item.label,
    count: item.count,
    group: item.group,
    groupLabel:
      item.group === "New arrivals" ? t.groups.arrivals : t.groups.purchase,
  }));

  const config = {
    purchase: { label: t.groups.purchase, color: "var(--chart-1)" },
    arrivals: { label: t.groups.arrivals, color: "var(--chart-2)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-auto h-[260px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 40, left: 8, bottom: 8 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis
          type="number"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          allowDecimals={false}
          tick={{ fontSize: 11 }}
        />
        <YAxis
          type="category"
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={130}
          tick={{ fontSize: 11 }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, _name, item) => [
                fill(t.tooltip, {
                  count: formatNumber(Number(value), locale),
                  group: item?.payload?.groupLabel ?? "",
                }),
                t.tooltipName,
              ]}
            />
          }
        />
        <Bar dataKey="count" radius={[0, 6, 6, 0]} isAnimationActive={false}>
          {data.map((entry) => (
            <Cell
              key={entry.label}
              fill={
                entry.group === "New arrivals"
                  ? "var(--chart-2)"
                  : "var(--chart-1)"
              }
            />
          ))}
          <LabelList
            dataKey="count"
            position="right"
            className="fill-foreground text-[11px] font-medium"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
