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
    headline: "Systems engineering student · Front-end developer",
    summary:
      "I build dashboards and data products that turn public numbers into decisions. This page is itself the argument: every figure on it is sourced, and every number I computed says how it was computed.",
    experience: {
      title: "Experience",
      items: [
        {
          role: "Front-end developer",
          company: "Yariz Eats",
          period: "Jul – Aug 2025",
          location: "Ciudad Ojeda, Venezuela",
          bullets: [
            "Joined an UberEats-style delivery startup working in React Native with Expo, three weeks before the final delivery.",
            "Owned the store section: donut charts with a built-in loading bar for sales, deliveries, cancellations and commercial activity, rebuilt to match the Figma designs.",
            "Built the store profile, product management, active orders and in-progress deliveries views, wired to the internal API.",
            "Worked on GitHub, tested with the client across devices and left the section ready for the pilot launch.",
          ],
        },
      ],
    },
  } satisfies ProfileContent,

  es: {
    headline: "Estudiante de ingeniería en sistemas · Desarrollador front-end",
    summary:
      "Construyo tableros y productos de datos que convierten números públicos en decisiones. Esta página es el argumento en sí misma: cada cifra está referenciada y cada número que calculé dice cómo lo calculé.",
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Desarrollador front-end",
          company: "Yariz Eats",
          period: "jul – ago 2025",
          location: "Ciudad Ojeda, Venezuela",
          bullets: [
            "Me integré a una startup de delivery tipo UberEats, en React Native con Expo, tres semanas antes de la entrega final.",
            "Quedé a cargo de la sección de la tienda: gráficos circulares con barra de carga para ventas, entregas, cancelaciones y actividad comercial, recreados a partir de los diseños de Figma.",
            "Implementé las vistas de perfil de tienda, gestión de productos, pedidos activos y entregas en curso, conectadas a la API interna.",
            "Trabajé con GitHub, hice pruebas con el cliente en varios dispositivos y dejé la sección lista para el lanzamiento piloto.",
          ],
        },
      ],
    },
  } satisfies ProfileContent,
};
