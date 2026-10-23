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
      "I see technology as a tool to transform and uplift people. My approach combines active listening, clarity when communicating and building digital solutions that are simple to use, always oriented towards teamwork and continuous improvement.",
    experience: {
      title: "Experience",
      items: [
        {
          role: "Technical Support",
          company: "Pulsed Calls",
          period: "Jul 2026 – present",
          location: "Venezuela",
          bullets: [
            "Joined the support team to handle and resolve real-time operational incidents for heavy transport drivers.",
            "Guided users step by step to the technical solution, ensuring strict compliance with protocols and service continuity.",
            "Kept a formal, cordial tone under high pressure, with operational discipline, self-management and the ability to follow directives and work in a team.",
          ],
        },
        {
          role: "Software developer",
          company: "U. E. Instituto San José",
          period: "Jul – Aug 2026",
          location: "Ciudad Ojeda, Lagunillas",
          bullets: [
            "Contributed to an educational study app for the institute's robotics classroom. We centralised all the subject's information in the app.",
            "Gathered requirements from teachers and the institute and turned them into a technological solution built around their needs, with study plans and interactive mini-games for students.",
            "We made the software meet its goal, and it is currently used at the institute by a wide range of students in class.",
          ],
        },
        {
          role: "Front-end developer",
          company: "Yariz Eats",
          period: "Jul – Aug 2025",
          location: "Ciudad Ojeda, Venezuela",
          bullets: [
            "Joined an UberEats-style delivery startup three weeks before the final delivery and closed the store section.",
            "Solved how merchants read sales, deliveries, cancellations and commercial activity: circular indicators with a loading bar, so the operation is understood at a glance.",
            "Delivered the store profile, product management, active orders and in-progress deliveries views, tested with the client on real devices and ready for the pilot launch.",
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
      "Entiendo la tecnología como una herramienta para transformar e impulsar a las personas. Mi enfoque combina la escucha activa, la claridad al comunicar y el desarrollo de soluciones digitales sencillas de usar, siempre orientadas al trabajo en equipo y a la mejora continua.",
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Soporte técnico",
          company: "Pulsed Calls",
          period: "jul 2026 – presente",
          location: "Venezuela",
          bullets: [
            "Me integré al equipo de soporte para atender y resolver, en tiempo real, incidencias operativas de conductores de transporte pesado.",
            "Guíé a los usuarios paso a paso hacia la solución técnica de sus problemas, garantizando el cumplimiento estricto de los protocolos y la continuidad del servicio.",
            "Mantuve un trato formal y cordial en situaciones de alta presión, con disciplina operacional, autogestión y capacidad para acatar directrices y trabajar en equipo.",
          ],
        },
        {
          role: "Desarrollador de software",
          company: "U. E. Instituto San José",
          period: "jul – ago 2026",
          location: "Ciudad Ojeda, Lagunillas",
          bullets: [
            "Contribuí al desarrollo de una aplicación de estudio didáctica para el salón de robótica del instituto. Centralizamos toda la información de la materia en dicha aplicación.",
            "Levantamos los requerimientos de los docentes y del instituto y los convertimos en una solución tecnológica ajustada a sus necesidades, con planes de estudio y minijuegos interactivos para los estudiantes.",
            "Logramos que el software cumpliera su objetivo y actualmente es utilizado en el instituto por una gran variedad de estudiantes en clases.",
          ],
        },
        {
          role: "Desarrollador front-end",
          company: "Yariz Eats",
          period: "jul – ago 2025",
          location: "Ciudad Ojeda, Venezuela",
          bullets: [
            "Entré a una startup de delivery tipo UberEats tres semanas antes de la entrega final y cerré la sección de la tienda.",
            "Resolví cómo el comercio lee sus ventas, entregas, cancelaciones y actividad comercial: indicadores circulares con barra de carga, para entender la operación de un vistazo.",
            "Entregué las vistas de perfil de tienda, gestión de productos, pedidos activos y entregas en curso, probadas con el cliente en dispositivos reales y listas para el lanzamiento piloto.",
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
