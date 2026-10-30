import brasaThumbnail from '../assets/web-demos/brasa.jpg'
import fitnessThumbnail from '../assets/web-demos/fitness.jpg'
import clinicThumbnail from '../assets/web-demos/clinica.jpg'
import realEstateThumbnail from '../assets/web-demos/inmobiliaria.jpg'
import storeThumbnail from '../assets/web-demos/tienda.jpg'
import corporateThumbnail from '../assets/web-demos/corporativo.jpg'

export const webDemosCatalogUrl = 'https://jorge-suarez-web-demos.netlify.app/'

const demoDefinitions = [
  {
    id: 'restaurante', brand: 'BRASA', url: `${webDemosCatalogUrl}restaurante/`, featured: true,
    accent: '#9f3b24', soft: '#e7d6c4', thumbnail: brasaThumbnail,
    copy: {
      es: { title: 'Restaurante contemporáneo', clientType: 'Restaurantes y cafeterías', category: 'Hospitalidad', format: 'Landing + reservas', description: 'Carta, identidad del espacio y un flujo demostrativo de reservas por fecha, hora y cantidad de personas.', thumbnailAlt: 'Vista de la demostración web Brasa para restaurantes', availableSections: ['Carta', 'Espacio', 'Reservas'] },
      en: { title: 'Contemporary restaurant', clientType: 'Restaurants and cafés', category: 'Hospitality', format: 'Landing + booking', description: 'Menu, venue identity, and a booking flow by date, time, and number of guests.', thumbnailAlt: 'Preview of the Brasa restaurant website demo', availableSections: ['Menu', 'Venue', 'Booking'] },
    },
  },
  {
    id: 'fitness', brand: 'PULSO', url: `${webDemosCatalogUrl}fitness/`, featured: true,
    accent: '#e62b25', soft: '#111111', thumbnail: fitnessThumbnail,
    copy: {
      es: { title: 'Fitness y gimnasio', clientType: 'Gimnasios y centros deportivos', category: 'Bienestar', format: 'Sitio multipágina', description: 'Instalaciones, máquinas, clases, horarios, entrenadores y eventos dentro de un recorrido comercial completo.', thumbnailAlt: 'Vista de la demostración web Pulso para gimnasios', availableSections: ['Instalaciones', 'Clases', 'Horarios', 'Entrenadores', 'Eventos'] },
      en: { title: 'Fitness and gym', clientType: 'Gyms and fitness studios', category: 'Wellness', format: 'Multi-page website', description: 'Facilities, equipment, classes, schedules, trainers, and events in a complete commercial journey.', thumbnailAlt: 'Preview of the Pulso fitness website demo', availableSections: ['Facilities', 'Classes', 'Schedules', 'Trainers', 'Events'] },
    },
  },
  {
    id: 'clinica', brand: 'CLARA SALUD', url: `${webDemosCatalogUrl}clinica/`, featured: true,
    accent: '#3971c6', soft: '#eaf4ff', thumbnail: clinicThumbnail,
    copy: {
      es: { title: 'Clínica y consultorio', clientType: 'Clínicas y profesionales de salud', category: 'Salud', format: 'Portal médico', description: 'Especialidades, médicos, diagnóstico, requisitos, citas e información para pacientes organizados con claridad.', thumbnailAlt: 'Vista de la demostración web Clara Salud para clínicas', availableSections: ['Especialidades', 'Médicos', 'Diagnóstico', 'Pacientes', 'Citas', 'Ubicación'] },
      en: { title: 'Clinic and medical practice', clientType: 'Clinics and healthcare professionals', category: 'Healthcare', format: 'Medical portal', description: 'Specialties, doctors, diagnostics, requirements, appointments, and patient information organized clearly.', thumbnailAlt: 'Preview of the Clara Salud clinic website demo', availableSections: ['Specialties', 'Doctors', 'Diagnostics', 'Patients', 'Appointments', 'Location'] },
    },
  },
  {
    id: 'inmobiliaria', brand: 'NORTE', url: `${webDemosCatalogUrl}inmobiliaria/`, featured: true,
    accent: '#c45e2c', soft: '#12281f', thumbnail: realEstateThumbnail,
    copy: {
      es: { title: 'Portal inmobiliario', clientType: 'Inmobiliarias y asesores', category: 'Propiedades', format: 'Catálogo + captación', description: 'Propiedades con filtros, fichas detalladas, zonas, asesores y un flujo para captar nuevos inmuebles.', thumbnailAlt: 'Vista de la demostración inmobiliaria Norte', availableSections: ['Propiedades', 'Detalle', 'Zonas', 'Asesores', 'Vender'] },
      en: { title: 'Real estate portal', clientType: 'Agencies and real estate advisors', category: 'Property', format: 'Catalog + lead capture', description: 'Filtered listings, detailed property pages, areas, advisors, and a flow to attract new listings.', thumbnailAlt: 'Preview of the Norte real estate website demo', availableSections: ['Listings', 'Property', 'Areas', 'Advisors', 'Sell'] },
    },
  },
  {
    id: 'tienda', brand: 'FORMA', url: `${webDemosCatalogUrl}tienda/`, featured: true,
    accent: '#db5b35', soft: '#eee7dc', thumbnail: storeThumbnail,
    copy: {
      es: { title: 'Tienda ecommerce', clientType: 'Marcas y comercios', category: 'Comercio', format: 'Tienda + checkout', description: 'Catálogo, producto, favoritos, bolsa, cuenta, checkout, envíos y seguimiento de pedidos en una experiencia completa.', thumbnailAlt: 'Vista de la demostración ecommerce Forma', availableSections: ['Catálogo', 'Producto', 'Favoritos', 'Bolsa', 'Checkout', 'Pedido', 'Envíos'] },
      en: { title: 'Ecommerce store', clientType: 'Brands and retailers', category: 'Commerce', format: 'Store + checkout', description: 'Catalog, product, favorites, bag, account, checkout, shipping, and order tracking in one complete experience.', thumbnailAlt: 'Preview of the Forma ecommerce website demo', availableSections: ['Catalog', 'Product', 'Favorites', 'Bag', 'Checkout', 'Order', 'Shipping'] },
    },
  },
  {
    id: 'producto', brand: 'ORBIT', url: `${webDemosCatalogUrl}producto/`, featured: false,
    accent: '#6b56e8', soft: '#161232',
    copy: {
      es: { title: 'Producto digital', clientType: 'Creadores y productos digitales', category: 'Tecnología', format: 'Landing de conversión', description: 'Presentación comercial, beneficios, contenido, compra simulada y descarga de un recurso de ejemplo.', thumbnailAlt: 'Composición visual de la demostración Orbit', availableSections: ['Beneficios', 'Contenido', 'Compra', 'Descarga'] },
      en: { title: 'Digital product', clientType: 'Creators and digital products', category: 'Technology', format: 'Conversion landing page', description: 'Commercial story, benefits, contents, simulated purchase, and an example resource download.', thumbnailAlt: 'Visual composition for the Orbit demo', availableSections: ['Benefits', 'Contents', 'Purchase', 'Download'] },
    },
  },
  {
    id: 'despacho', brand: 'VARELA / RÍOS', url: `${webDemosCatalogUrl}despacho/`, featured: false,
    accent: '#aa8a55', soft: '#171c24',
    copy: {
      es: { title: 'Despacho legal', clientType: 'Firmas y profesionales legales', category: 'Servicios', format: 'Sitio institucional', description: 'La firma, áreas de práctica, abogados, experiencia, publicaciones y contacto con una presencia sobria.', thumbnailAlt: 'Composición visual de la demostración para el despacho Varela y Ríos', availableSections: ['Firma', 'Áreas', 'Equipo', 'Experiencia', 'Recursos', 'Contacto'] },
      en: { title: 'Legal firm', clientType: 'Law firms and legal professionals', category: 'Services', format: 'Institutional website', description: 'The firm, practice areas, lawyers, experience, publications, and contact in a restrained digital presence.', thumbnailAlt: 'Visual composition for the Varela and Ríos law firm demo', availableSections: ['Firm', 'Practice areas', 'Team', 'Experience', 'Resources', 'Contact'] },
    },
  },
  {
    id: 'evento', brand: 'YSYSMO', url: `${webDemosCatalogUrl}evento/`, featured: false,
    accent: '#00bdb8', soft: '#ec007a',
    copy: {
      es: { title: 'Evento musical', clientType: 'Eventos, artistas y festivales', category: 'Entretenimiento', format: 'Landing audiovisual', description: 'Archivo editorial de un concierto con información, invitados, setlist, galería y enlaces musicales.', thumbnailAlt: 'Composición visual de la demostración YSYSMO para eventos musicales', availableSections: ['Información', 'Archivo visual', 'Invitados', 'Setlist', 'Música'] },
      en: { title: 'Music event', clientType: 'Events, artists, and festivals', category: 'Entertainment', format: 'Audiovisual landing page', description: 'Editorial concert archive with information, guests, setlist, gallery, and music links.', thumbnailAlt: 'Visual composition for the YSYSMO music event demo', availableSections: ['Information', 'Visual archive', 'Guests', 'Setlist', 'Music'] },
    },
  },
  {
    id: 'blog', brand: 'LA GRADA', url: `${webDemosCatalogUrl}blog/`, featured: false,
    accent: '#8b1238', soft: '#f2efe7',
    copy: {
      es: { title: 'Blog deportivo', clientType: 'Medios, clubes y creadores', category: 'Contenido', format: 'Archivo editorial', description: 'Temporadas, partidos, crónicas y fichas deportivas dentro de un archivo editorial pensado para volver.', thumbnailAlt: 'Composición visual de la demostración editorial La Grada', availableSections: ['Temporadas', 'Partidos', 'Crónicas', 'Archivo'] },
      en: { title: 'Sports blog', clientType: 'Media, clubs, and creators', category: 'Content', format: 'Editorial archive', description: 'Seasons, matches, reports, and sports records in an editorial archive designed for repeat visits.', thumbnailAlt: 'Visual composition for the La Grada editorial demo', availableSections: ['Seasons', 'Matches', 'Reports', 'Archive'] },
    },
  },
  {
    id: 'corporativo', brand: 'NODO', url: `${webDemosCatalogUrl}corporativo/`, featured: true,
    accent: '#0667f9', soft: '#caff3d', thumbnail: corporateThumbnail,
    copy: {
      es: { title: 'Proveedor de internet', clientType: 'Telecomunicaciones y servicios', category: 'Empresa', format: 'Sitio corporativo', description: 'Planes residenciales, soluciones empresariales, cobertura, entretenimiento y soporte para un proveedor venezolano.', thumbnailAlt: 'Vista de la demostración corporativa Nodo para telecomunicaciones', availableSections: ['Hogar', 'Empresas', 'Cobertura', 'Entretenimiento', 'Soporte'] },
      en: { title: 'Internet provider', clientType: 'Telecommunications and services', category: 'Business', format: 'Corporate website', description: 'Residential plans, business solutions, coverage, entertainment, and support for a Venezuelan provider.', thumbnailAlt: 'Preview of the Nodo telecommunications website demo', availableSections: ['Home', 'Business', 'Coverage', 'Entertainment', 'Support'] },
    },
  },
]

export const webDemosCopy = {
  es: {
    nav: 'Web demos', eyebrow: 'Soluciones para clientes', title: 'Experiencias web para negocios que necesitan algo propio.',
    intro: 'Una colección de experiencias web diseñadas para industrias, necesidades y públicos diferentes. Cada demostración explora una estructura, identidad visual y recorrido comercial propios.',
    catalog: 'Explorar todas las demos', catalogLabel: 'Ruta principal', catalogTitle: 'Catálogo completo de Web Demos',
    catalogDescription: 'Empieza aquí para ver las diez propuestas, comparar sus identidades y elegir qué experiencia recorrer.',
    catalogRoute: 'jorge-suarez-web-demos.netlify.app/', visit: 'Abrir demostración', directory: 'Directorio completo',
    directoryDescription: 'Diez industrias, diez recorridos y acceso directo a cada experiencia.', sections: (count) => `${count} secciones`,
    external: (title) => `Abrir la demostración ${title} en una pestaña nueva`, catalogExternal: 'Abrir el catálogo completo de Web Demos en una pestaña nueva',
  },
  en: {
    nav: 'Web demos', eyebrow: 'Client solutions', title: 'Web experiences for businesses that need something distinct.',
    intro: 'A collection of web experiences designed for different industries, needs, and audiences. Each demo explores its own structure, visual identity, and commercial journey.',
    catalog: 'Explore all demos', catalogLabel: 'Main route', catalogTitle: 'Complete Web Demos catalog',
    catalogDescription: 'Start here to see all ten concepts, compare their identities, and choose which experience to explore.',
    catalogRoute: 'jorge-suarez-web-demos.netlify.app/', visit: 'Open demo', directory: 'Complete directory',
    directoryDescription: 'Ten industries, ten journeys, and direct access to every experience.', sections: (count) => `${count} sections`,
    external: (title) => `Open the ${title} demo in a new tab`, catalogExternal: 'Open the complete Web Demos catalog in a new tab',
  },
}

export function getWebDemos(language) {
  const locale = language === 'es' ? 'es' : 'en'
  return demoDefinitions.map(({ copy, ...demo }) => ({ ...demo, ...copy[locale] }))
}

