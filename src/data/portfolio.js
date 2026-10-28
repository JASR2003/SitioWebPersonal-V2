export const profile = {
  name: 'Jorge Suárez',
  role: 'Desarrollador Frontend, WordPress y Mobile',
  location: 'Venezuela',
  availability: 'Disponible para nuevas oportunidades',
  intro:
    'Creo sitios web y aplicaciones móviles modernos, responsivos y funcionales, combinando desarrollo frontend, WordPress, React Native y una mirada práctica al diseño de interfaces.',
  shortIntro:
    'Transformo ideas en experiencias web claras, rápidas y fáciles de usar.',
};

export const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos realizados' },
  { value: '3', label: 'Empresas y equipos' },
];

export const skills = [
  { name: 'HTML5', level: 'Avanzado', detail: 'Semántica y accesibilidad' },
  { name: 'CSS', level: 'Avanzado', detail: 'Flexbox, Grid y animación' },
  { name: 'JavaScript', level: 'Intermedio', detail: 'ES6+, closures y scope' },
  { name: 'TypeScript', level: 'Intermedio', detail: 'Tipado y mantenimiento de aplicaciones' },
  { name: 'React Native', level: 'Intermedio', detail: 'Aplicaciones móviles multiplataforma' },
  { name: 'Expo', level: 'Intermedio', detail: 'Desarrollo, pruebas y publicación Android' },
  { name: 'WordPress', level: 'Avanzado', detail: 'CMS y desarrollo web' },
  { name: 'Elementor', level: 'Avanzado', detail: 'Construcción visual profesional' },
  { name: 'Tailwind CSS', level: 'Intermedio', detail: 'Diseño utility-first' },
  { name: 'Bootstrap', level: 'Intermedio', detail: 'Interfaces responsivas' },
  { name: 'Git', level: 'Intermedio', detail: 'Control de versiones' },
  { name: 'Hostinger', level: 'Avanzado', detail: 'Hosting, dominios y DNS' },
  { name: 'NPM', level: 'Intermedio', detail: 'Gestión de paquetes' },
  { name: 'React', level: 'Básico', detail: 'Componentes e interfaces' },
  { name: 'Vite', level: 'Básico', detail: 'Entorno de desarrollo moderno' },
];

export const experiences = [
  {
    title: 'Desarrollador Mobile',
    company: 'moniX · Proyecto independiente',
    period: 'Agosto 2026 — Actualidad',
    description:
      'Diseño, desarrollo, publicación y mantenimiento continuo de una aplicación Android para consultar tasas de cambio, convertir monedas y realizar cálculos multidivisa.',
    achievements: [
      'React Native, Expo y TypeScript',
      'APIs regionales, tasas de referencia del BCV y comparación de tasas',
      'Gráficos históricos, historial local y funcionamiento sin conexión',
      'Localización ES/EN/PT-BR, privacidad de AdMob y publicación en Google Play',
    ],
  },
  {
    title: 'Desarrollador WordPress',
    company: 'Academy Producciones & Academy Pro Marketing',
    period: 'Julio 2024 — Mayo 2026',
    description:
      'Desarrollo y mantenimiento de sitios WordPress para proyectos de marketing y producción audiovisual, con gestión integral del entorno web.',
    achievements: [
      'WordPress y Elementor',
      'Hosting, dominios y DNS',
      'FTP y gestión de archivos',
      'Soluciones con PHP básico',
    ],
  },
  {
    title: 'Desarrollador Frontend Freelance',
    company: 'Proyecto independiente',
    period: 'Diciembre 2024 — Enero 2025',
    description:
      'Desarrollo completo de un sitio web con tecnologías modernas, desde la maquetación responsiva hasta la configuración del dominio.',
    achievements: ['HTML5 y JavaScript', 'Tailwind CSS', 'NPM', 'Configuración DNS'],
  },
  {
    title: 'Desarrollador Frontend',
    company: 'Kinlazo',
    period: 'Noviembre 2023 — Enero 2024',
    description:
      'Desarrollo de la interfaz de una aplicación web con chatbot e inteligencia artificial, colaborando de forma remota con el equipo.',
    achievements: ['Interfaces web', 'JavaScript', 'UI/UX', 'Maquetación responsiva'],
  },
];

export const projects = [
  {
    slug: 'monix',
    title: 'moniX',
      iconAlt: 'Icono de la aplicación moniX',
    category: 'Aplicación móvil · Google Play',
    badge: 'Mi primera app publicada',
    tagline: 'Donde el valor importa',
    description:
      'Mi primera aplicación publicada en Google Play: una herramienta gratuita para consultar tasas de cambio, convertir monedas y realizar cálculos con varias divisas, pensada especialmente para las necesidades cotidianas de usuarios en Venezuela.',
    features: [
      'Calculadora con equivalencias en varias monedas',
      'Conversor rápido',
      'Tasas regionales, referencia del BCV, comparación y gráficos históricos',
      'Tasa manual para cálculos personales',
      'Historial de operaciones',
      'Últimas tasas guardadas disponibles sin conexión',
      'Disponible en español, inglés y portugués de Brasil',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript'],
    storeLabel: 'Ver en Google Play',
    galleryLabel: 'Capturas de moniX',
    screenshotAlts: [
      'Calculadora multidivisa de moniX',
      'Conversor rápido de moniX',
      'Listado de tasas de cambio en moniX',
      'Gráfico histórico de tasas en moniX',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.jorgesuarezdevs.monix',
    isSpotlight: true,
  },
  {
    title: 'Asdrúbal Suárez',
    category: 'Portafolio profesional',
    description:
      'Portafolio moderno y minimalista para un Senior Backend Engineer, centrado en trayectoria, experiencia técnica y proyectos de alto impacto.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    url: 'https://asdrubalivan.com/',
  },
  {
    title: 'Academy Productions Marketing',
    category: 'Sitio corporativo',
    description:
      'Sitio oficial que comunica servicios, clientes e identidad de una agencia de marketing y producción audiovisual.',
    technologies: ['WordPress', 'Elementor', 'Hostinger'],
    url: 'https://academypm.net/',
  },
  {
    title: 'DentPrax',
    category: 'Salud y servicios',
    description:
      'Sitio de odontología integral con servicios especializados, información del equipo médico y canales de contacto para pacientes.',
    technologies: ['WordPress', 'Elementor', 'Hostinger'],
    url: 'https://dentprax.com/',
  },
  {
    title: 'Friendship Latte',
    category: 'Blog y newsletter',
    description:
      'Blog semanal con newsletter, preparado para publicar contenidos y acompañar el crecimiento de su audiencia.',
    technologies: ['WordPress', 'Elementor', 'Mailchimp', 'DNS'],
    url: 'https://friendshiplatte.com/',
  },
  {
    title: 'Portafolio personal — V1',
    category: 'Identidad personal',
    description:
      'Primera versión de mi portafolio, creada para presentar mis proyectos iniciales y mi evolución como desarrollador frontend.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    url: 'https://jorgesuarez-first-v.netlify.app/',
  },
  {
    title: 'Pokédex API',
    category: 'Experimento con API',
    description:
      'Carta Pokémon dinámica que consulta la PokéAPI y presenta un personaje aleatorio cada vez que se carga la página.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    url: 'https://jasr2003.github.io/pokedex-card/',
  },
  {
    title: 'Calculadora',
    category: 'Aplicación web',
    description:
      'Calculadora con las cuatro operaciones básicas y opciones para personalizar su apariencia.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://jorgesuarez-calculadora.netlify.app/',
  },
  {
    title: 'Piedra, Papel o Tijera',
    category: 'Juego web',
    description:
      'Versión web del juego clásico con partidas al mejor de cinco contra la máquina.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://jorgesuarez-piedra-papel-tijera.netlify.app/',
  },
];

export const education = {
  title: 'Desarrollo Web Frontend',
  institution: 'Platzi',
  period: 'Agosto 2020 — Agosto 2024',
  description:
    'Formación en desarrollo frontend, diseño de interfaces, responsive design, metodologías y tecnologías web modernas.',
  certificateCount: 21,
};

export const socialLinks = [
  { name: 'GitHub', label: '@JASR2003', url: 'https://github.com/JASR2003' },
  {
    name: 'LinkedIn',
    label: 'jorge-alejandro-suarez-rivera',
    url: 'https://www.linkedin.com/in/jorge-alejandro-suarez-rivera/',
  },
  { name: 'X', label: '@JorgeSuarezDev', url: 'https://x.com/JorgeSuarezDev' },
];
