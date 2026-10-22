"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import {
  FieldsByBasinChart,
  FleetChart,
  ReservesRunwayChart,
} from "@/components/charts/asset-charts";
import {
  CapitalIntensityChart,
  ProductionTrajectoryChart,
} from "@/components/charts/production-charts";
import { RampPlanner } from "@/components/charts/ramp-planner";
import { ValueFlowChart, WorkforceChart } from "@/components/charts/value-charts";
import {
  ProvenanceLegend,
  ProvenanceTag,
  SourceChips,
} from "@/components/provenance";
import { Rich } from "@/components/rich";
import { SectionHeader } from "@/components/section";
import { StackIcon } from "@/components/stack-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDataset } from "@/data/dataset";
import {
  ACCESSED_ON,
  CAPITAL_INTENSITY_RATIO,
  type SourceKey,
} from "@/data/nabep";
import { profile } from "@/data/profile";
import { copy, fill, locales, type Copy, type Lang } from "@/i18n";
import { formatNumber } from "@/lib/format";

type KpiId = keyof Copy["kpi"];

function StatInsight({
  eyebrow,
  value,
  label,
  note,
}: {
  eyebrow: string;
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div className="rounded-lg border border-primary/25 bg-primary/[0.06] p-5">
      <p className="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
        {eyebrow}
      </p>
      <p className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground/90">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p>
    </div>
  );
}

export function Dashboard({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const d = getDataset(lang);
  const p = profile[lang];
  const locale = locales[lang];

  return (
    <div className="min-h-screen bg-background">
      {/* ------------------------------------------------ header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <span className="font-mono text-sm font-semibold tracking-tight">
            NABEP<span className="text-primary">.</span>progress
          </span>

          <nav
            aria-label={t.nav.sectionsLabel}
            className="hidden items-center gap-1 lg:flex"
          >
            {t.nav.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-md px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                aria-label={t.nav.contact}
                title={t.nav.contact}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            )}
            {profile.github && (
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t.nav.source}
                title={t.nav.source}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Code2 className="size-4" />
              </a>
            )}
            <Link
              href={t.nav.switchHref}
              hrefLang={lang === "en" ? "es" : "en"}
              aria-label={t.nav.switchLabel}
              title={t.nav.switchLabel}
              className="rounded-md border border-border/60 px-2 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {t.nav.switchShort}
            </Link>
          </div>
        </div>

        <nav
          aria-label={t.nav.sectionsLabel}
          className="flex gap-1 overflow-x-auto border-t border-border/40 px-4 py-2 lg:hidden"
        >
          {t.nav.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase transition-colors hover:bg-muted/50 hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        {/* ------------------------------------------------ hero */}
        <section className="grid gap-10 pt-14 pb-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
              {t.hero.titleLead}
              <span className="text-muted-foreground"> {t.hero.titleSub}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/90">
              {t.hero.subtitle}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <Rich parts={t.hero.body} />
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#production">{t.hero.ctaPrimary}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#about">
                  {t.hero.ctaSecondary}
                  <ArrowDown data-icon="inline-end" />
                </a>
              </Button>
            </div>

            <p className="mt-4 max-w-xl text-[11px] leading-relaxed text-muted-foreground/80">
              {t.hero.independent}
            </p>
          </div>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="text-sm">{t.hero.card.title}</CardTitle>
              <CardDescription>
                {fill(t.hero.card.description, { founded: d.company.founded })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">
                  {t.hero.card.headquarters}
                </span>
                <span className="text-right font-medium">
                  {d.company.headquarters}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">{t.hero.card.offices}</span>
                <span className="text-right font-medium">
                  {d.company.offices.join(" · ")}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">{t.hero.card.ceo}</span>
                <span className="text-right font-medium">{d.company.ceo}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">
                  {t.hero.card.agreement}
                </span>
                <span className="text-right font-medium">
                  {d.company.agreement}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">
                  {t.hero.card.accessed}
                </span>
                <span className="text-right font-mono text-xs">{ACCESSED_ON}</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ------------------------------------------------ KPI row */}
        <section className="mb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.kpis.map((kpi) => {
              const kpiCopy = t.kpi[kpi.id as KpiId];

              return (
                <Card key={kpi.id} className="relative overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardDescription className="text-[11px] tracking-[0.14em] uppercase">
                      {kpiCopy.label}
                    </CardDescription>
                    <CardTitle className="flex items-baseline gap-2 text-3xl font-semibold tracking-tight">
                      {kpiCopy.value}
                      <span className="text-sm font-normal text-muted-foreground">
                        {kpiCopy.unit}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {kpiCopy.detail}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <ProvenanceTag provenance={kpi.provenance} lang={lang} />
                      <SourceChips sources={kpi.sources} lang={lang} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ------------------------------------------------ production */}
        <section id="production" className="mb-20 scroll-mt-24 lg:scroll-mt-20">
          <SectionHeader
            eyebrow={`01 · ${t.production.eyebrow}`}
            title={t.production.title}
            description={t.production.description}
            aside={<SourceChips sources={["ceo", "rigs", "about"]} lang={lang} />}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.production.trajectory.title}</CardTitle>
                <CardDescription>
                  {t.production.trajectory.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProductionTrajectoryChart lang={lang} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.production.capital.title}</CardTitle>
                <CardDescription>
                  {t.production.capital.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CapitalIntensityChart lang={lang} />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <StatInsight
              eyebrow={t.production.insight.eyebrow}
              value={fill(t.production.insight.value, {
                ratio: formatNumber(CAPITAL_INTENSITY_RATIO, locale),
              })}
              label={t.production.insight.label}
              note={t.production.insight.note}
            />
          </div>

          <div className="mt-6">
            <RampPlanner lang={lang} />
          </div>
        </section>

        {/* ------------------------------------------------ asset base */}
        <section id="assets" className="mb-20 scroll-mt-24 lg:scroll-mt-20">
          <SectionHeader
            eyebrow={`02 · ${t.assets.eyebrow}`}
            title={t.assets.title}
            description={t.assets.description}
            aside={
              <SourceChips sources={["whatWeDo", "about", "rigs"]} lang={lang} />
            }
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t.assets.fields.title}</CardTitle>
                <CardDescription>
                  {fill(t.assets.fields.description, {
                    named: formatNumber(d.counts.named, locale),
                    contracts: formatNumber(d.counts.contracted, locale),
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FieldsByBasinChart lang={lang} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.assets.reserves.title}</CardTitle>
                <CardDescription>
                  {t.assets.reserves.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ReservesRunwayChart lang={lang} />
                <p className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  {t.assets.reserves.footnote}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.assets.fleet.title}</CardTitle>
                <CardDescription>{t.assets.fleet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <FleetChart lang={lang} />
                <p className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                  {t.assets.fleet.footnote}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {d.basins.map((basin) => (
              <Card key={basin.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle>{basin.name}</CardTitle>
                    <Badge
                      variant="outline"
                      className="font-mono text-[10px] uppercase"
                    >
                      {basin.region}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1.5">
                    <MapPin className="size-3" /> {t.assets.crewBase}:{" "}
                    {basin.crewBase}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {basin.characterization}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {basin.namedFields.map((field) => (
                      <Badge
                        key={field}
                        variant="secondary"
                        className="font-mono text-[10px] font-normal"
                      >
                        {field}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ value */}
        <section id="value" className="mb-20 scroll-mt-24 lg:scroll-mt-20">
          <SectionHeader
            eyebrow={`03 · ${t.value.eyebrow}`}
            title={t.value.title}
            description={t.value.description}
            aside={<SourceChips sources={["about", "home"]} lang={lang} />}
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <Card>
              <CardHeader>
                <CardTitle>{t.value.flow.title}</CardTitle>
                <CardDescription>{t.value.flow.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ValueFlowChart lang={lang} />
                <p className="mt-4 border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
                  {d.valueFlowNote}
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {d.stakeholders.map((stakeholder) => (
                <Card key={stakeholder.party}>
                  <CardHeader>
                    <CardTitle className="text-base">
                      {stakeholder.party}
                    </CardTitle>
                    <CardDescription className="font-mono text-[10px] tracking-wider uppercase">
                      {stakeholder.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {stakeholder.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t.value.accountability.title}</CardTitle>
              <CardDescription>
                {t.value.accountability.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 sm:grid-cols-3">
                {d.accountability.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 rounded-md border border-border/60 bg-muted/30 p-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* ------------------------------------------------ people */}
        <section id="people" className="mb-20 scroll-mt-24 lg:scroll-mt-20">
          <SectionHeader
            eyebrow={`04 · ${t.people.eyebrow}`}
            title={t.people.title}
            description={t.people.description}
            aside={<SourceChips sources={["ceo", "rigs", "home"]} lang={lang} />}
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <Card>
              <CardHeader>
                <CardTitle>{t.people.workforce.title}</CardTitle>
                <CardDescription>
                  {fill(t.people.workforce.description, {
                    total: formatNumber(d.workforceTotal, locale),
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WorkforceChart lang={lang} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.people.asks.title}</CardTitle>
                <CardDescription>{t.people.asks.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <blockquote className="border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground/90 italic">
                  {t.people.asks.quote}
                </blockquote>
                <div className="grid gap-3 sm:grid-cols-2">
                  {t.people.asks.stats.map((stat) => (
                    <div
                      key={stat.value}
                      className="rounded-md border border-border/60 bg-muted/30 p-4"
                    >
                      <p className="text-2xl font-semibold tracking-tight">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.people.asks.analysis}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ------------------------------------------------ methodology */}
        <section id="methodology" className="mb-20 scroll-mt-24 lg:scroll-mt-20">
          <SectionHeader
            eyebrow={`05 · ${t.method.eyebrow}`}
            title={t.method.title}
            description={t.method.description}
          />
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>{t.method.sources.title}</CardTitle>
                <CardDescription>
                  {fill(t.method.sources.description, { date: ACCESSED_ON })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {(Object.keys(d.sources) as SourceKey[]).map((key) => (
                    <li key={key}>
                      <a
                        href={d.sources[key].url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex h-full items-start justify-between gap-4 rounded-md border border-border/60 p-3 transition-colors hover:border-primary/35 hover:bg-muted/30"
                      >
                        <span className="text-sm text-foreground/90">
                          {d.sources[key].label}
                        </span>
                        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.method.legend.title}</CardTitle>
                <CardDescription>{t.method.legend.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ProvenanceLegend lang={lang} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ------------------------------------------------ about me */}
        <section id="about" className="scroll-mt-24 lg:scroll-mt-20">
          <SectionHeader
            eyebrow={`06 · ${t.about.eyebrow}`}
            title={profile.name}
            description={p.headline}
            aside={
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                {profile.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" /> {profile.location}
                  </span>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-foreground"
                  >
                    <Mail className="size-3.5" /> {profile.email}
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={`https://${profile.linkedin}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 hover:text-foreground"
                  >
                    <Briefcase className="size-3.5" /> LinkedIn
                  </a>
                )}
                {profile.github && (
                  <a
                    href={`https://${profile.github}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 hover:text-foreground"
                  >
                    <Code2 className="size-3.5" /> GitHub
                  </a>
                )}
              </div>
            }
          />

          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <Card>
              <CardContent className="pt-6">
                <p className="text-base leading-relaxed text-foreground/90">
                  {p.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {profile.cv && (
                    <Button asChild size="sm">
                      <a href={profile.cv} download>
                        <Download data-icon="inline-start" />
                        {t.about.cv}
                      </a>
                    </Button>
                  )}
                  {profile.linkedin && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={`https://${profile.linkedin}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Briefcase data-icon="inline-start" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  {profile.email && (
                    <Button asChild variant="outline" size="sm">
                      <a href={`mailto:${profile.email}`}>
                        <Mail data-icon="inline-start" />
                        {t.about.contact}
                      </a>
                    </Button>
                  )}
                  {profile.github && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={`https://${profile.github}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Code2 data-icon="inline-start" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.about.stack.title}</CardTitle>
                <CardDescription>{t.about.stack.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {p.stack.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <StackIcon
                        name={item.icon}
                        className="mt-0.5 size-4 shrink-0 text-foreground/80"
                      />
                      <span>
                        <span className="block text-sm text-foreground">
                          {item.name}
                        </span>
                        <span className="block text-xs leading-snug text-muted-foreground">
                          {item.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
            <Card>
              <CardHeader>
                <CardTitle>{p.experience.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {p.experience.items.map((job, index) => (
                  <div
                    key={job.company}
                    className={
                      index > 0 ? "border-t border-border/60 pt-6" : undefined
                    }
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {job.role} · {job.company}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {job.location}
                        </p>
                      </div>
                      {job.period && (
                        <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                          {job.period}
                        </span>
                      )}
                    </div>
                    <ul className="mt-3 grid gap-2">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{p.education.title}</CardTitle>
                <CardDescription>
                  {p.education.items[0].degree} · {p.education.items[0].school}
                </CardDescription>
                <CardAction>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {p.education.items[0].period}
                  </span>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-xs text-muted-foreground">
                  {p.education.items[0].location}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.education.items[0].detail}
                </p>
                <a
                  href={p.education.certification.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-4 flex items-start justify-between gap-3 border-t border-border/60 pt-3"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">
                      {p.education.certification.label}
                    </span>
                    <span className="block text-sm text-foreground">
                      {p.education.certification.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {p.education.certification.issuer} ·{" "}
                      {p.education.certification.year}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    {p.education.certification.action}
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.disclaimer}</p>
          <p className="font-mono">
            {fill(t.footer.line, { date: ACCESSED_ON, name: profile.name })}
          </p>
        </div>
      </footer>
    </div>
  );
}
