import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: 'Plataforma E-commerce',
            description: 'Plataforma de comercio electrónico completa con carrito, pasarela de pago y panel de administración.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
            technologies: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Dashboard de Analíticas',
            description: 'Dashboard interactivo con visualización de datos en tiempo real y reportes personalizables.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            technologies: ['React', 'Chart.js', 'API REST', 'CSS'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Portafolio Creativo',
            description: 'Sitio web portafolio para agencia creativa con animaciones y diseño moderno.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
            technologies: ['React', 'Motion', 'Tailwind'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Gestor de Tareas',
            description: 'Aplicación de gestión de tareas con arrastrar y soltar, etiquetas y sistema de notificaciones.',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
            technologies: ['React', 'DnD', 'LocalStorage', 'CSS', 'Tailwind'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'App del Clima',
            description: 'Aplicación del clima con pronósticos de 7 días, geolocalización y mapas interactivos.',
            image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
            technologies: ['React', 'OpenWeather API', 'Mapbox'],
            demoUrl: '#',
            githubUrl: '#'
        },
        {
            title: 'Panel de Redes Sociales',
            description: 'Panel para gestión de redes sociales con programación de publicaciones y analíticas.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
            technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
            demoUrl: '#',
            githubUrl: '#'
        }
    ];

    return (
        <section id="proyectos" className="py-16 md:py-24 px-6 bg-[#0D1F45] transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-white">
                        Proyectos Destacados
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Algunos de los proyectos en los que he trabajado recientemente
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-[#0A1A3A] border border-gray-700/30 overflow-hidden hover:border-[#296BFF] hover:shadow-lg hover:shadow-[#296BFF]/10 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF] shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-3 text-center">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 mb-4 text-justify flex-1">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-[#296BFF]/10 text-[#296BFF] text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.demoUrl}
                                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF] text-white text-sm text-center hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver sitio
                                    </a>

                                    <a
                                        href={project.githubUrl}
                                        className="flex-1 px-4 py-2 rounded-lg border border-[#296BFF] text-[#296BFF] text-sm text-center hover:bg-[#152847] transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}