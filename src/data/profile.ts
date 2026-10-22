/**
 * YOUR PROFILE — the only file you need to edit before deploying.
 *
 * Name, contact links and stack are shared. The prose is per language: the
 * English page reads `profile.en`, the Spanish page reads `profile.es`.
 * TypeScript requires both, so the page can never ship half translated.
 */

type ProfileContent = {
  headline: string;
  summary: string;
  highlights: { title: string; detail: string }[];
  whyNabep: string;
  nextStep: string;
};

export const profile = {
  name: "Your Name",
  location: "Argentina",
  email: "you@example.com",
  linkedin: "linkedin.com/in/your-profile",
  github: "github.com/your-handle",

  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind v4",
    "shadcn/ui",
    "Recharts",
    "Vercel",
  ],

  en: {
    headline: "Full-stack engineer · Data-minded problem solver",
    summary:
      "I build dashboards and data products that turn public numbers into decisions. This page is itself the argument: every figure on it is sourced, and every number I computed says how it was computed.",
    highlights: [
      {
        title: "I work with the whole stack, end to end",
        detail:
          "Next.js, TypeScript, React, Tailwind, shadcn/ui, Recharts. This app was built in a single session with no backend at all.",
      },
      {
        title: "I label my data before I visualize it",
        detail:
          "Reported, derived, modeled, target. A chart that hides where its numbers came from is a chart nobody should act on.",
      },
      {
        title: "I look for the insight under the headline",
        detail:
          "The interesting finding here is not 'production grew 10x' — it is that the next increment costs ~23x more capital per barrel of capacity.",
      },
    ],
    whyNabep:
      "NABEP publicly says it wants real-time operational visibility, consolidated reporting for the board, and precision about units — and it says it will use its own site to report progress openly. There is no public progress dashboard yet. Building one for the data the company already publishes is the smallest, fastest way to show I work the way the Digital Oilfield article asks for.",
    nextStep:
      "If you give me access to production and cost data, this page becomes the internal version: real time-series instead of published anchors, and a drill-down from basin to well.",
  } satisfies ProfileContent,

  es: {
    headline: "Ingeniero full-stack · Resolución de problemas con datos",
    summary:
      "Construyo tableros y productos de datos que convierten números públicos en decisiones. Esta página es el argumento en sí misma: cada cifra está referenciada y cada número que calculé dice cómo lo calculé.",
    highlights: [
      {
        title: "Trabajo con todo el stack, de punta a punta",
        detail:
          "Next.js, TypeScript, React, Tailwind, shadcn/ui, Recharts. Esta app se construyó en una sola sesión y sin backend.",
      },
      {
        title: "Etiqueto los datos antes de visualizarlos",
        detail:
          "Reportado, derivado, modelado, meta. Un gráfico que esconde de dónde salen sus números es un gráfico sobre el que nadie debería decidir.",
      },
      {
        title: "Busco el hallazgo debajo del titular",
        detail:
          "Lo interesante acá no es que la producción creció 10x: es que el próximo incremento cuesta ~23x más capital por barril de capacidad.",
      },
    ],
    whyNabep:
      "NABEP dice públicamente que quiere visibilidad operativa en tiempo real, reportes consolidados para el directorio y precisión con las unidades, y que va a usar su propio sitio para reportar el progreso abiertamente. Todavía no existe un tablero público de progreso. Construir uno con los datos que la empresa ya publica es la forma más rápida de mostrar que trabajo como pide el artículo del Digital Oilfield.",
    nextStep:
      "Si me dan acceso a datos de producción y costos, esta página se vuelve la versión interna: series de tiempo reales en lugar de anclas publicadas, y drill-down de cuenca a pozo.",
  } satisfies ProfileContent,
} as const;
