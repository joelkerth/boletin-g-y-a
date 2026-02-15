import { Reflection, Event, ServiceDate, Book, Birthday, PrayerRequest } from './types';

export const APP_DATA = {
  month: "Febrero 2026",
  issue: 2,
  mainReflection: {
    title: "La resurrección como la espina dorsal de la fe",
    author: "José María Grueso Sandoval",
    scripture: "1 Corintios 15:14",
    mainQuote: "Si Cristo no resucitó, vana es entonces nuestra predicación, vana es también vuestra fe.",
    excerpt: "La doctrina de la resurrección de Jesucristo es vital y esencial para todo aquel que se confiesa cristiano.",
    content: [
      "Una iglesia que no cree en la resurrección de Jesucristo es, en sentido espiritual, una iglesia muerta. Esta verdad garantiza una futura resurrección física para los creyentes, en una condición perfecta, glorificada y eterna.",
      "Sin la resurrección, toda la estructura de la fe cristiana carecería de validez y propósito. La resurrección de Jesucristo es el eje central de la fe cristiana; sin ella, la fe es vana o estéril y la salvación imposible.",
      "La resurrección es el fundamento del evangelio y el cumplimiento de las promesas anunciadas por los profetas en el Antiguo Testamento. Después de la resurrección, los apóstoles fueron llamados a ser testigos de estos acontecimientos, desde Jerusalén hasta lo último de la tierra.",
      "Finalmente, la resurrección de Jesucristo es la base firme de la esperanza cristiana: la promesa segura de la futura resurrección de todos los fieles, quienes participarán de la vida eterna en comunión plena con Dios."
    ]
  } as Reflection,
  
  sundaySchool: {
    title: "La doctrina reformada del discipulado",
    author: "Luke Walker",
    content: [
      "Cuando hablamos del discipulado desde una perspectiva reformada, debemos entender que ocurre principalmente dentro de la vida de la iglesia local, bajo la soberanía de Dios.",
      "Dios no solo nos salva por gracia, sino que continúa formándonos como discípulos por esa misma gracia. Esta obra de formación no depende de métodos humanos, sino de los medios ordinarios de gracia: la predicación fiel de la Palabra, los sacramentos, el cuidado pastoral y la comunión de los santos."
    ]
  },

  events: [
    {
      id: '1',
      title: "Varones en Formación",
      date: "Todos los Domingos",
      time: "7:00 a.m.",
      location: "Virtual",
      description: "Se invita a todos los varones a prepararse y crecer espiritualmente.",
      type: "virtual"
    },
    {
      id: '2',
      title: "Cursos: Semillas de Fe & Anclados",
      date: "Desde el 8 de Febrero",
      time: "10:00 a.m.",
      location: "Iglesia",
      description: "Para nuevos creyentes o quienes deseen repasar doctrinas básicas.",
      type: "presencial"
    },
    {
      id: '3',
      title: "Reunión Congregacional",
      date: "15 de Febrero",
      time: "2:30 p.m.",
      location: "Capilla",
      description: "Convocatoria a todos los miembros para toma de decisiones relevantes.",
      type: "presencial"
    },
    {
      id: '4',
      title: "Reunión de Damas y Hombres",
      date: "23 de Febrero",
      time: "1:45 p.m.",
      location: "Capilla",
      description: "Damas: Diseño divino de Dios. Varones: La verdadera vida cristiana.",
      type: "presencial"
    }
  ] as Event[],

  assignments: [
    {
      date: "Feb 1",
      roles: [
        { role: "Director", people: ["Adrian Matallana"] },
        { role: "Alabanza", people: ["Ana Ojeda"] },
        { role: "Onces Niños", people: ["Alexandra Camargo"] }
      ]
    },
    {
      date: "Feb 8",
      roles: [
        { role: "Director", people: ["Francisco Orjuela"] },
        { role: "Alabanza", people: ["Alejandra Sastre"] },
        { role: "Onces Niños", people: ["Amira Collante"] }
      ]
    },
    {
      date: "Feb 15",
      roles: [
        { role: "Director", people: ["Gerson Osorio"] },
        { role: "Alabanza", people: ["Gloria León"] },
        { role: "Onces Niños", people: ["Claudia Jiménez"] }
      ]
    },
    {
      date: "Feb 22",
      roles: [
        { role: "Director", people: ["Luis Enrique Flores"] },
        { role: "Alabanza", people: ["Cecilia Godoy"] },
        { role: "Onces Niños", people: ["Julieta Torres"] }
      ]
    }
  ] as ServiceDate[],

  permanentRoles: [
    { role: "Ujieres", people: ["Gregorio Duarte", "Jose Urrego", "Fredy Cerpa", "Gerson Osorio"] },
    { role: "Café", people: ["Cecilia Cano", "Elisabeth Gallo"] },
    { role: "Santa Cena", people: ["Rebeca Pinzón", "Rose Mary Díaz"] }
  ],

  books: [
    {
      title: "Mujer Verdadera 101: Diseño Divino",
      author: "Varios Autores",
      description: "Estudio bíblico de ocho semanas que invita a las mujeres a descubrir y abrazar el diseño que Dios tiene para su identidad.",
      coverColor: "bg-pink-100 text-pink-800"
    },
    {
      title: "Libro De Oro De La Verdadera Vida Cristiana",
      author: "Juan Calvino",
      description: "Un clásico devocional de la literatura protestante centrado en los aspectos prácticos de la vida cristiana.",
      coverColor: "bg-amber-100 text-amber-800"
    }
  ] as Book[],

  birthdays: [
    { date: "2 Feb", names: ["Ana Ojeda"] },
    { date: "4 Feb", names: ["Sebastián López"] },
    { date: "5 Feb", names: ["Aurora Osorio"] },
    { date: "15 Feb", names: ["Pilar Villegas"] },
    { date: "18 Feb", names: ["Amanda Orjuela"] },
    { date: "19 Feb", names: ["Miguel Escobar"] },
    { date: "25 Feb", names: ["Janah Trujillo"] },
  ] as Birthday[],

  prayerRequests: [
    { category: "Salud", items: ["Paula Antolínez", "Héctor Garzón", "Andrés Romero", "María Eugenia Méndez", "Ps. Roberto Rodríguez"] },
    { category: "Iglesia", items: ["Provisión de pastores - La Alborada", "Personería jurídica (aprobación)"] },
    { category: "Colegio", items: ["Provisión de alumnos para autosostenibilidad", "Sabiduría para los servidores"] },
    { category: "Consuelo", items: ["Confianza en medio de la tristeza (Juan 16:20)"] }
  ] as PrayerRequest[]
};