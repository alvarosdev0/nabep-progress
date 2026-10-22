"use client";

import { FileJson } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getDataset } from "@/data/dataset";
import { copy, type Lang } from "@/i18n";

export function ExportDatasetButton({ lang }: { lang: Lang }) {
  const t = copy[lang].method.sources;

  function handleExport() {
    const dataset = getDataset(lang);

    const payload = {
      generatedAt: new Date().toISOString(),
      locale: lang,
      ...dataset,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `nabep-public-dataset.${lang}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleExport}
      className="gap-2 font-mono text-[11px]"
    >
      <FileJson className="size-3.5" />
      {t.download}
    </Button>
  );
}
