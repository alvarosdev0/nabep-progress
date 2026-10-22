import type { Copy, Part } from "./en";

/**
 * Spanish copy. Typed as `Copy`, so this file cannot drift from the English
 * structure: a missing key or a renamed section fails the build.
 */
export const es: Copy = {
  meta: {
    title: "NABEP Progress - un tablero operativo construido con datos públicos",
    description:
      "Proyecto independiente de postulación: producción, capital, flota y personal publicados por NABEP, graficados con cada cifra etiquetada como reportada, derivada, modelada o meta.",
    ogDescription:
      "Los números publicados por NABEP, graficados con la procedencia de cada cifra.",
  },

  nav: {
    tagline: "Tablero operativo construido con declaraciones públicas",
    contact: "Contacto",
    source: "Código",
    sectionsLabel: "Secciones",
    sections: [
      { id: "production", label: "Producción" },
      { id: "assets", label: "Activos" },
      { id: "value", label: "Valor" },
      { id: "people", label: "Personas" },
      { id: "methodology", label: "Método" },
      { id: "about", label: "Sobre el autor" },
    ],
    switchShort: "EN",
    switchLabel: "View in English",
    switchHref: "/",
  },

  hero: {
    titleLead: "De 18.000 a 1.000.000",
    titleSub: "de barriles diarios",
    subtitle:
      "Un tablero de progreso construido con lo que NABEP ya publicó — producción, capital, flota y personas — y con cada cifra etiquetada según su origen.",
    body: [
      "El newsroom de NABEP pide visibilidad operativa en tiempo real y reportes consolidados. Su sitio dice que ",
      { em: "«reportará nuestro progreso abiertamente»" },
      ". Esta página lo hace con los números que la empresa ya publicó.",
    ] as Part[],
    independent:
      "Proyecto independiente. Sin afiliación ni aval de North American Blue Energy Partners.",
    ctaPrimary: "Explorar las métricas",
    ctaSecondary: "Sobre el autor",
    card: {
      title: "Sobre la empresa",
      description: "North American Blue Energy Partners · fundada en {{founded}}",
      headquarters: "Casa matriz",
      offices: "Oficinas",
      ceo: "CEO",
      agreement: "Acuerdo con el Gobierno",
      accessed: "Fuentes consultadas",
    },
  },

  kpi: {
    production: {
      label: "Producción hoy",
      value: "200.000",
      unit: "bbl/día",
      detail: "≈11x los 18.000 bbl/día con los que la empresa arrancó en 2024.",
    },
    target: {
      label: "Meta de corto plazo",
      value: "1.000.000",
      unit: "bbl/día",
      detail: "Cinco veces la producción actual. Sin cronograma público asociado.",
    },
    reserves: {
      label: "Reservas probadas P1",
      value: "65",
      unit: "millardos de bbl",
      detail: "Derechos de desarrollo sobre 17 campos contratados.",
    },
    capital: {
      label: "Capital invertido a la fecha",
      value: "$1",
      unit: "millardo",
      detail:
        "Inversión con fondos propios que llevó la producción de 18k a 200k bbl/día.",
    },
    people: {
      label: "Personas empleadas",
      value: "5.000",
      unit: "+ 10.000 contratistas",
      detail: "100% de la fuerza laboral es venezolana: 15.000 personas en total.",
    },
    royalties: {
      label: "Para Venezuela, 25 años",
      value: "$209",
      unit: "millardos",
      detail:
        "Regalías e impuestos proyectados que cobraría el Estado venezolano.",
    },
  },

  production: {
    eyebrow: "Producción",
    title: "Crecimiento operativo y escalamiento a gran escala",
    description:
      "La producción se multiplicó por diez en dos años con alrededor de mil millones de dólares de capital propio. La meta declarada es cinco veces el volumen actual, con cien mil millones de dólares. Esos dos datos no se acomodan a la misma curva, y eso es lo más interesante que hay en el registro público.",
    trajectory: {
      title: "Trayectoria de producción",
      description:
        "Barriles por día, según lo publicado. La tercera barra es una meta, no un resultado.",
    },
    capital: {
      title: "Capital por barril de capacidad diaria",
      description:
        "Cuánto costó cada incremento de producción, dividido por los barriles por día que agregó.",
    },
    insight: {
      eyebrow: "Hallazgo derivado",
      value: "{{ratio}}x",
      label: "más capital por barril de capacidad diaria que el tramo anterior",
      note: "Los próximos 800.000 bbl/día están presupuestados en $100B, que también cubren infraestructura: el costo unitario es un techo, no un promedio.",
    },
    gap: {
      eyebrow: "Brecha de transparencia",
      value: "{{unnamed}}/{{contracts}}",
      label: "campos contratados no tienen nombre público",
      note: "Sin serie trimestral de producción y sin cronograma para la meta de 1M. El tablero muestra la brecha en lugar de rellenarla.",
    },
  },

  assets: {
    eyebrow: "Base de activos",
    title: "Dos cuencas, diecisiete contratos, una flota enorme",
    description:
      "NABEP compró capacidad en ambas cuencas y el equipo para operarla. El límite no son las reservas: son los equipos, el capital y las cuadrillas.",
    fields: {
      title: "Campos por cuenca",
      description: "{{named}} de los {{contracts}} campos contratados tienen nombre público.",
    },
    reserves: {
      title: "Vida de las reservas",
      description: "65 mil millones de barriles P1 divididos por cada tasa de producción.",
      footnote:
        "A la tasa meta, los 65 mil millones de barriles duran unos 178 años. El límite al crecimiento es capital y ejecución, no geología.",
    },
    fleet: {
      title: "Flota de equipos",
      description:
        "Compras anunciadas y los equipos que llegaron en octubre de 2026.",
      footnote:
        "NABEP la describe como la mayor flota de equipo pesado del país. Lotes según lo anunciado, no una foto de un momento dado.",
    },
    crewBase: "Base de cuadrillas",
  },

  value: {
    eyebrow: "Valor y gobernanza",
    title: "Estructura de participación y alianzas estratégicas",
    description:
      "El acuerdo de agosto de 2026 dividió la compañía en tres partes y puso la aprobación del directorio en Washington. Dos números importan para cualquiera que modele esta empresa: el programa de capital y la participación del Estado.",
    flow: {
      title: "Capital vs. ingresos del Estado",
      description:
        "Programa anunciado y regalías proyectadas, cada uno en su horizonte declarado.",
    },
    accountability: {
      title: "Rendición de cuentas incorporada",
      description: "Condiciones de gobierno que fija el acuerdo.",
    },
  },

  people: {
    eyebrow: "Personas",
    title: "Fuerza laboral y repatriación de talento nacional",
    description:
      "La carta del CEO les pide a los ingenieros y operadores venezolanos que hicieron carrera afuera que vuelvan. Los números de personal son la declaración de intención más clara del registro público.",
    workforce: {
      title: "Personal directo y contratado",
      description: "{{total}} personas en Venezuela.",
    },
    asks: {
      title: "Qué está pidiendo el CEO",
      description: "De la carta al campo.",
      quote:
        "«Reconstruir la industria petrolera de Venezuela va a requerir muchas más manos. Muchos de los ingenieros, técnicos y operadores que necesita son venezolanos que construyeron su carrera afuera. Quiero que sepan que hay un lugar para ellos acá, en casa.»",
      stats: [
        { value: "100%", label: "de la fuerza laboral es venezolana" },
        { value: "10.000", label: "empleos contratados en toda Venezuela" },
      ],
      analysis:
        "Un tablero de personal suele ser un tablero de RR.HH. Para un operador también es la restricción: cada taladro que llega necesita cuadrillas certificadas, y el CEO dice explícitamente que las cuadrillas son el cuello de botella que quiere resolver.",
    },
  },

  method: {
    eyebrow: "Metodología",
    title: "De dónde sale cada número",
    description:
      "Esta página tiene el registro público, y una regla sobre qué se puede hacer con él.",
    legend: {
      title: "Cómo leer las etiquetas",
      description: "Cuatro etiquetas, usadas en cada cifra de esta página.",
    },
    sources: {
      title: "Fuentes",
      description: "Todas declaraciones públicas, consultadas el {{date}}.",
    },
  },

  about: {
    eyebrow: "Sobre el autor",
    cv: "Descargar CV",
    contact: "Correo",
    stack: {
      title: "Stack",
      description: "Herramientas con las que trabajo.",
    },
  },

  footer: {
    disclaimer:
      "Proyecto independiente de postulación. Sin afiliación ni aval de North American Blue Energy Partners. Todas las cifras de la empresa provienen de declaraciones públicas y siguen siendo propiedad de sus dueños.",
    line: "Fuentes consultadas el {{date}} · {{name}}",
  },

  charts: {
    trajectory: {
      seriesProduction: "Producción",
      seriesTarget: "Meta",
      unit: "bbl/día",
      tooltipName: "Producción",
    },
    capital: {
      series: "Capital por bbl/día de capacidad agregada",
      tooltipName: "Intensidad de capital",
      perUnit: "por bbl/día",
      unit: "bbl/día",
      footnote:
        "El próximo incremento de capacidad cuesta unas {{ratio}}x más capital por barril de capacidad diaria que el anterior.",
    },
    fields: {
      series: "Campos",
      rows: {
        maracaibo: { label: "Lago de Maracaibo", note: "Operando desde 2024" },
        orinoco: {
          label: "Faja del Orinoco",
          note: "Campos con nombre público",
        },
        unnamed: {
          label: "Sin nombre aún",
          note: "Contratados después del acuerdo de agosto de 2026",
        },
      },
      tooltipName: "Campos",
      tooltip: "{{count}} campos — {{note}}",
    },
    reserves: {
      series: "Años de reservas P1",
      tooltipName: "Vida de las reservas",
      tooltip: "{{count}} años a esta tasa",
      tickSuffix: "",
      labelSuffix: "años",
    },
    fleet: {
      groups: { purchase: "Compra de flota", arrivals: "Nuevos equipos" },
      tooltipName: "Equipos",
      tooltip: "{{count}} — {{group}}",
    },
    flows: {
      series: "Dólares",
      tooltipName: "Monto",
    },
    workforce: {
      series: "Personas",
      totalLabel: "personas",
      direct: "Empleados directos",
      contract: "Contratistas",
      tooltipName: "Personal",
      tooltip: "{{count}} personas",
    },
  },

  planner: {
    eyebrow: "Escenario · planificador",
    title: "¿Qué haría falta para llegar a 1M en {{year}}?",
    description:
      "Movés el slider. Este es tu supuesto, no un pronóstico de NABEP: la empresa no publicó un cronograma.",
    perMonth: "bbl/día por mes",
    months: "{{months}} meses desde octubre de 2026.",
    perDay:
      "Eso es aproximadamente {{perDay}} barriles por día de capacidad nueva cada día.",
    sliderLabel: "Año objetivo",
    capexLabel: "Capital implícito al ritmo del programa",
    capexPerMonth: "{{amount}} por mes",
    capexFormula: "{{growth}} bbl/día × ${{perBpd}}/bbl/día",
    series: "Producción modelada",
    targetLabel: "Meta 1M",
  },

  provenance: {
    reported: {
      label: "Reportado",
      description:
        "Declarado públicamente por NABEP. La fuente original está enlazada junto a la cifra.",
    },
    derived: {
      label: "Derivado",
      description:
        "Aritmética sobre cifras reportadas solamente. La fórmula se muestra junto a la cifra.",
    },
    modeled: {
      label: "Modelado",
      description:
        "Interpolado por el candidato. Solo ilustrativo: nunca se presenta como una cifra de la empresa.",
    },
    target: {
      label: "Meta",
      description:
        "Un objetivo declarado por la empresa. Una meta no es un resultado, y acá nunca se trata como uno.",
    },
  },
};
