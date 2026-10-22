/**
 * YOUR PROFILE — the only file you need to edit before deploying.
 *
 * Name, contact links and stack are shared. The prose is per language: the
 * English page reads `profile.en`, the Spanish page reads `profile.es`.
 * TypeScript requires both, so the page can never ship half translated.
 */

type ProfileExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

type ProfileContent = {
  headline: string;
  summary: string;
  experience: { title: string; items: ProfileExperience[] };
};

/** Every link is optional: a null value is not rendered, so nothing 404s. */
type ProfileLink = string | null;

type Profile = {
  name: string;
  location: ProfileLink;
  email: ProfileLink;
  linkedin: ProfileLink;
  github: ProfileLink;
  cv: ProfileLink;
  stack: string[];
  en: ProfileContent;
  es: ProfileContent;
};

export const profile: Profile = {
  name: "Álvaro Sandrea",
  location: "Zulia, Venezuela",
  email: "alvarosdev@gmail.com",
  linkedin: "linkedin.com/in/alvarosdev",
  github: "github.com/alvarosdev0",

  /**
   * Path to your CV inside `public/`. Drop the file at `public/cv.pdf` and set
   * this to "/cv.pdf". While it is null, the page shows a contact button
   * instead, so it never ships a dead link.
   */
  cv: "/cv.pdf",

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
    headline: "Front-end developer · Data visualization",
    summary:
      "I build dashboards and data products that turn public numbers into decisions. This page is itself the argument: every figure on it is sourced, and every number I computed says how it was computed.",
    experience: {
      title: "Experience",
      items: [
        {
          role: "Front-end developer",
          company: "Yariz Eats",
          period: "Jul – Aug 2025",
          location: "Remote · Zulia, Venezuela",
          bullets: [
            "Joined a delivery startup three weeks before launch and took ownership of the store area of a React Native app.",
            "Built the store dashboard — sales, deliveries, cancellations and commercial activity — plus the product, order and delivery views.",
            "Connected the interface to the internal API and shipped a modular, maintainable section by the client’s deadline.",
          ],
        },
      ],
    },
  } satisfies ProfileContent,

  es: {
    headline: "Desarrollador front-end · Visualización de datos",
    summary:
      "Construyo tableros y productos de datos que convierten números públicos en decisiones. Esta página es el argumento en sí misma: cada cifra está referenciada y cada número que calculé dice cómo lo calculé.",
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Desarrollador front-end",
          company: "Yariz Eats",
          period: "jul – ago 2025",
          location: "Remoto · Zulia, Venezuela",
          bullets: [
            "Me sumé a una startup de delivery tres semanas antes del lanzamiento y quedé a cargo del área de tiendas de una app en React Native.",
            "Construí el tablero de la tienda —ventas, entregas, cancelaciones y actividad comercial— además de las vistas de productos, pedidos y entregas.",
            "Conecté la interfaz con la API interna y entregué una sección modular y mantenible en la fecha que pidió el cliente.",
          ],
        },
      ],
    },
  } satisfies ProfileContent,
};
