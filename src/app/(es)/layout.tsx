import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootShell } from "@/components/root-shell";
import { copy } from "@/i18n";
import { profile } from "@/data/profile";

import "../globals.css";

export const metadata: Metadata = {
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  authors: [{ name: profile.name }],
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es" },
  },
  openGraph: {
    title: "NABEP Progress",
    description: copy.es.meta.ogDescription,
    type: "website",
    locale: "es_VE",
  },
};

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
