import type {
  Basin,
  CapitalPhase,
  FleetItem,
  RunwayPoint,
  SourceKey,
  Stakeholder,
  TrajectoryPoint,
  ValueFlow,
} from "./nabep";

/**
 * Spanish strings for the published dataset.
 *
 * Only the text is here — numbers, provenance tags and source URLs stay in
 * `nabep.ts`, so there is exactly one place where a figure can change. Arrays
 * are matched by position against the English dataset; keys are matched by name.
 */
export const ES = {
  sources: {
    home: {
      label: "NABEP — Trayectoria / resumen de la alianza",
      short: "nabep.net",
    },
    about: {
      label:
        "NABEP — Quiénes somos: historia de la empresa y términos de la alianza",
      short: "Quiénes somos",
    },
    whatWeDo: {
      label: "NABEP — Qué hacemos: cadena de valor, cuencas y campos",
      short: "Qué hacemos",
    },
    ceo: {
      label: "NABEP — Del CEO: Alejandro Betancourt",
      short: "Del CEO",
    },
    digitalOilfield: {
      label:
        "NABEP Newsroom — The Digital Oilfield: eficiencia a través de datos e innovación (27 feb 2026)",
      short: "The Digital Oilfield",
    },
    rigs: {
      label:
        "NABEP Newsroom — NABEP refuerza operaciones con nuevos equipos de workover y perforación (13 oct 2026)",
      short: "Nuevos equipos (oct 2026)",
    },
  } satisfies Record<SourceKey, { label: string; short: string }>,

  trajectory: [
    {
      label: "2024 · Fundación",
      note: "Petrozamora, Junín Sur y Petrocedeño, al arranque.",
    },
    {
      label: "2026 · Hoy",
      note: "«Más de 200.000 barriles por día» entre ambas cuencas.",
    },
    {
      label: "Meta",
      note: "Objetivo de la empresa. NABEP no publicó un cronograma.",
    },
  ] satisfies Pick<TrajectoryPoint, "label" | "note">[],

  capitalPhases: [
    { label: "2024 → 2026" },
    { label: "2026 → Meta" },
  ] satisfies Pick<CapitalPhase, "label">[],

  runway: [
    { label: "A la tasa actual de 200k bbl/día" },
    { label: "A la meta de 1M bbl/día" },
  ] satisfies Pick<RunwayPoint, "label">[],

  basins: [
    {
      name: "Lago de Maracaibo",
      crewBase: "Maracaibo, Zulia",
      characterization:
        "Donde empezó la industria petrolera venezolana. Estos campos no hay que descubrirlos: hay que reconstruirlos.",
    },
    {
      name: "Faja del Orinoco",
      crewBase: "Lechería, Anzoátegui",
      characterization:
        "El mayor depósito de crudo pesado del mundo. Crudo espeso que necesita vapor, oficio y paciencia para salir.",
    },
  ] satisfies Pick<Basin, "name" | "crewBase" | "characterization">[],

  fleet: [
    {
      label: "Maquinaria pesada",
      detail: "La mayor flota de equipo pesado del país, según NABEP.",
    },
    {
      label: "Taladros",
      detail: "Taladros comprados junto con las calderas de vapor.",
    },
    {
      label: "Calderas de vapor",
      detail: "La inyección de vapor es cómo se extrae el crudo extrapesado.",
    },
    {
      label: "Equipos de workover",
      detail:
        "550 hp cada uno. Los primeros sistemas móviles de reparación y mantenimiento nuevos en campos venezolanos en más de 15 años.",
    },
    {
      label: "Equipos de perforación",
      detail:
        "1.500 hp cada uno. Llegaron el 7 de octubre de 2026; se esperan más.",
    },
  ] satisfies Pick<FleetItem, "label" | "detail">[],

  flows: [
    {
      label: "Inversión planeada por NABEP",
      detail: "Capacidad de producción e infraestructura de petróleo y gas.",
    },
    {
      label: "Regalías + impuestos para Venezuela",
      detail:
        "Proyectados a los primeros 25 años bajo los contratos de producción.",
    },
  ] satisfies Pick<ValueFlow, "label" | "detail">[],

  valueFlowNote:
    "Bases distintas: una es capital invertido, la otra es ingreso fiscal a 25 años. No son sumables y en ningún lugar de este tablero se suman.",

  workforce: [{ label: "Empleados directos" }, { label: "Contratistas" }],

  stakeholders: [
    {
      party: "NABEP",
      role: "Operador",
      points: [
        "Opera los campos y controla los derechos para desarrollar más de 65 mil millones de barriles de reservas P1.",
        "Lidera una inversión cercana a los 100.000 millones de dólares en producción e infraestructura.",
        "Compra la mayor parte de su equipo de campo a proveedores estadounidenses.",
      ],
    },
    {
      party: "Estados Unidos",
      role: "35% de participación · 20% de offtake",
      points: [
        "Tiene derechos sobre el 35% de la empresa matriz de NABEP.",
        "Puede comprar el 20% de la producción a costo, después de que PDVSA reciba su parte.",
        "Tiene derecho de preferencia sobre el resto a precio de mercado.",
      ],
    },
    {
      party: "Venezuela",
      role: "Anfitrión y dueño del recurso",
      points: [
        "Recibe regalías e impuestos proyectados en más de 209.000 millones de dólares a 25 años.",
        "PDVSA recibe un porcentaje del offtake para comercializarlo directamente a través de los contratos CPP.",
        "Miles de empleos directos para cuadrillas venezolanas.",
      ],
    },
  ] satisfies Stakeholder[],

  accountability: [
    "El Gobierno de EE.UU. debe aprobar todos los nombramientos del directorio.",
    "La mayoría de los directores debe ser ciudadana estadounidense.",
    "NABEP usa auditores, abogados y asesores estadounidenses.",
  ],

  valueChain: [
    {
      step: "Explorar",
      detail:
        "Estudios de yacimiento y sísmica para decidir dónde va cada pozo.",
    },
    {
      step: "Perforar",
      detail:
        "Taladros propios en tierra y en el agua, incluida la barcaza GP-28 en el Lago de Maracaibo.",
    },
    {
      step: "Producir",
      detail:
        "Reactivar campos agotados con nueva compresión y tubería flexible; inyección de vapor para crudo extrapesado.",
    },
    {
      step: "Procesar",
      detail: "Tratamiento y mejoramiento del crudo pesado a grado de exportación.",
    },
    {
      step: "Transportar",
      detail: "Terminales, tanques y buques propios mueven el crudo al mercado.",
    },
    {
      step: "Entregar",
      detail:
        "A compradores como Trafigura y Vitol, que abastecen a refinerías de la costa del Golfo de EE.UU.",
    },
  ],

  company: {
    agreement:
      "31 de agosto de 2026 — Departamentos de Estado y de Guerra de EE.UU.",
  },
};
