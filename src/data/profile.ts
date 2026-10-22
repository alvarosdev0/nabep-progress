/**
 * YOUR PROFILE — the only file you need to edit before deploying.
 *
 * Name and contact links are shared. The prose is per language: the English
 * page reads `profile.en`, the Spanish page reads `profile.es`. TypeScript
 * requires both, so the page can never ship half translated.
 */

import type { StackIconName } from "@/components/stack-icon";

type ProfileExperience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

type ProfileEducation = {
  degree: string;
  school: string;
  period: string;
  location: string;
  detail: string;
};

type ProfileStackItem = {
  name: string;
  detail: string;
  icon: StackIconName;
};

type ProfileContent = {
  headline: string;
  summary: string;
  experience: { title: string; items: ProfileExperience[] };
  education: {
    title: string;
    items: ProfileEducation[];
    certification: {
      label: string;
      title: string;
      issuer: string;
      year: string;
      url: string;
      action: string;
    };
  };
  stack: ProfileStackItem[];
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

  en: {
    headline: "Systems engineering student · Front-end developer",
    summary:
      "Hi! I'm Álvaro Sandrea, a self-taught front-end developer with 5 years of experience, focused on user-friendly digital experiences. I've been studying the magic of the web — how sites can do great things for people — and over time I've worked on quality UX, friendly communication with a team, accessibility for all, and useful, consistent interfaces across applications.",
    experience: {
      title: "Experience",
      items: [
        {
          role: "Front-end developer",
          company: "Yariz Eats",
          period: "Jul – Aug 2025",
          location: "Ciudad Ojeda, Venezuela",
          bullets: [
            "Joined an UberEats-style delivery startup three weeks before the final delivery, with the store section still unresolved.",
            "Solved how merchants read sales, deliveries, cancellations and commercial activity: circular indicators with a loading bar, so the operation is understood at a glance.",
            "Delivered the store profile, product management, active orders and in-progress deliveries views, end to end.",
            "Closed the section with testing on real devices alongside the client; it shipped ready for the pilot launch.",
          ],
        },
        {
          role: "Technical Support and Customer Service",
          company: "Pulsed Calls",
          period: "Jul 2026 – present",
          location: "Venezuela",
          bullets: [
            "Joined the support team to manage and resolve real-time operational incidents for heavy transport drivers.",
            "Assisted drivers under high pressure, keeping a formal, cordial tone focused on de-escalating conflicts on the road.",
            "Guided users step by step to the technical solution, ensuring strict compliance with protocols and service continuity.",
            "Showed operational discipline, self-management, the ability to follow directives precisely and adaptability to work in a team.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Software Engineering",
          school: "Instituto Universitario Politécnico Santiago Mariño",
          period: "2022 – present",
          location: "Ciudad Ojeda, Venezuela",
          detail:
            "Systems engineering, with training in cutting-edge technologies and user experience design, in search of solutions for every kind of user.",
        },
      ],
      certification: {
        label: "Certification",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        year: "2023",
        url: "https://www.freecodecamp.org/certification/alvaroxp/responsive-web-design",
        action: "View",
      },
    },
    stack: [
      {
        name: "React",
        detail: "JavaScript library for building interfaces.",
        icon: "react",
      },
      {
        name: "JavaScript",
        detail: "The programming language of the web.",
        icon: "javascript",
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first framework for styling.",
        icon: "tailwind",
      },
      {
        name: "Database",
        detail: "Data modelling and queries.",
        icon: "database",
      },
      {
        name: "GitHub",
        detail: "Platform for hosting and sharing code.",
        icon: "github",
      },
    ],
  } satisfies ProfileContent,

  es: {
    headline: "Estudiante de ingeniería en sistemas · Desarrollador front-end",
    summary:
      "¡Hola! Soy Álvaro Sandrea, desarrollador front-end autodidacta con 5 años de experiencia, enfocado en experiencias digitales fáciles de usar. He estado estudiando la magia de la web —cómo los sitios pueden hacer grandes cosas por las personas— y con el tiempo he trabajado en UX de calidad, comunicación cercana con el equipo, accesibilidad para todos e interfaces útiles y consistentes entre aplicaciones.",
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Desarrollador front-end",
          company: "Yariz Eats",
          period: "jul – ago 2025",
          location: "Ciudad Ojeda, Venezuela",
          bullets: [
            "Me integré a una startup de delivery tipo UberEats tres semanas antes de la entrega final, con la sección de la tienda todavía sin resolver.",
            "Resolví cómo el comercio lee sus ventas, entregas, cancelaciones y actividad comercial: indicadores circulares con barra de carga, para entender la operación de un vistazo.",
            "Entregué las vistas de perfil de tienda, gestión de productos, pedidos activos y entregas en curso, de principio a fin.",
            "Cerré la sección con pruebas en dispositivos reales junto al cliente; quedó lista para el lanzamiento piloto.",
          ],
        },
        {
          role: "Soporte técnico y atención al cliente",
          company: "Pulsed Calls",
          period: "jul 2026 – presente",
          location: "Venezuela",
          bullets: [
            "Me integré al equipo de soporte para gestionar la atención y resolución de incidencias operativas de conductores de transporte pesado en tiempo real.",
            "Atendí a los transportistas en situaciones de alta presión, manteniendo siempre un trato formal, cordial y enfocado en desescalar conflictos en ruta.",
            "Guíé a los usuarios paso a paso hacia la solución técnica de sus problemas, garantizando el cumplimiento estricto de los protocolos y la continuidad del servicio.",
            "Demostré disciplina operacional, autogestión, capacidad para acatar directrices de forma precisa y adaptabilidad para trabajar en equipo.",
          ],
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        {
          degree: "Ingeniería en Sistemas",
          school: "Instituto Universitario Politécnico Santiago Mariño",
          period: "2022 – presente",
          location: "Ciudad Ojeda, Venezuela",
          detail:
            "Ingeniería en sistemas, con formación en tecnologías de vanguardia y diseño de experiencia de usuario, en busca de soluciones para todo tipo de usuarios.",
        },
      ],
      certification: {
        label: "Certificación",
        title: "Diseño Web Responsivo",
        issuer: "freeCodeCamp",
        year: "2023",
        url: "https://www.freecodecamp.org/certification/alvaroxp/responsive-web-design",
        action: "Ver",
      },
    },
    stack: [
      {
        name: "React",
        detail: "Biblioteca de JavaScript para construir interfaces.",
        icon: "react",
      },
      {
        name: "JavaScript",
        detail: "El lenguaje de programación de la web.",
        icon: "javascript",
      },
      {
        name: "Tailwind CSS",
        detail: "Framework de utilidades para dar estilos.",
        icon: "tailwind",
      },
      {
        name: "Base de datos",
        detail: "Modelado y consulta de datos.",
        icon: "database",
      },
      {
        name: "GitHub",
        detail: "Plataforma para alojar y compartir código.",
        icon: "github",
      },
    ],
  } satisfies ProfileContent,
};
