"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDataset } from "@/data/dataset";
import type { Provenance, SourceKey } from "@/data/nabep";
import type { Lang } from "@/i18n";

export function ProvenanceTag({
  provenance,
  lang,
  className,
}: {
  provenance: Provenance;
  lang: Lang;
  className?: string;
}) {
  const meta = getDataset(lang).provenance[provenance];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          variant="outline"
          className={`font-mono text-[10px] tracking-wider uppercase ${meta.className} ${className ?? ""}`}
        >
          {meta.label}
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-xs">{meta.description}</TooltipContent>
    </Tooltip>
  );
}

export function SourceChips({
  sources,
  lang,
  className,
}: {
  sources: SourceKey[];
  lang: Lang;
  className?: string;
}) {
  const { sources: registry } = getDataset(lang);

  return (
    <span className={`inline-flex flex-wrap items-center gap-1.5 ${className ?? ""}`}>
      {sources.map((key) => (
        <Tooltip key={key}>
          <TooltipTrigger asChild>
            <a
              href={registry[key].url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground"
            >
              {registry[key].short}
              <ExternalLink className="size-2.5" />
            </a>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm text-xs">
            {registry[key].label}
          </TooltipContent>
        </Tooltip>
      ))}
    </span>
  );
}

export function ProvenanceLegend({ lang }: { lang: Lang }) {
  const { provenance } = getDataset(lang);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {(Object.keys(provenance) as Provenance[]).map((key) => (
        <div key={key} className="flex items-center gap-2">
          <ProvenanceTag provenance={key} lang={lang} />
          <span className="max-w-[16rem] text-xs text-muted-foreground">
            {provenance[key].description}
          </span>
        </div>
      ))}
    </div>
  );
}
