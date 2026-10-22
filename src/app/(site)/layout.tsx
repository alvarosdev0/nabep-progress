import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootShell } from "@/components/root-shell";
import { copy } from "@/i18n";

import "../globals.css";

export const metadata: Metadata = {
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  authors: [{ name: "Your Name" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es" },
  },
  openGraph: {
    title: "NABEP Progress",
    description: copy.en.meta.ogDescription,
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
