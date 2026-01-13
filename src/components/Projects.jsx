import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: 'Asdrúbal Suárez | Senior Backend Engineer',
            description: 'Sitio web profesional diseñado para un Senior Backend Engineer. Un portafolio moderno y minimalista que destaca su trayectoria, experiencia técnica y proyectos de alto impacto.',

            technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
            demoUrl: 'https://asdrubalivan.com/'
        },
        {
            title: 'pokedex api',
            description: 'Presento una carta Pokémon utilizando la PokeAPI. Al cargar la página, una función elige un número aleatorio y muestra los valores del Pokémon correspondiente.',

            technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
            demoUrl: 'https://jasr2003.github.io/pokedex-card/'
        },
        {
            title: 'Calculadora',
            description: 'Desarrollé una calculadora basada en un tutorial, con las cuatro operaciones básicas. Además, agregué la opción de cambiar el color de la misma.',

            technologies: ['HTML', 'CSS', 'JavaScript'],
            demoUrl: 'https://jorgesuarez-calculadora.netlify.app/'
        },
        {
            title: 'Piedra, Papel, Tijera',
            description: 'El clásico Piedra Papel o Tijera de toda la vida, Intenta ganarle a la máquina, es al mejor de 5.',

            technologies: ['HTML', 'CSS', 'JavaScript'],
            demoUrl: 'https://jorgesuarez-piedra-papel-tijera.netlify.app/'
        },
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


                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-white uppercase font-bold text-lg md:text-xl lg:text-2xl mb-3 text-center">
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
                                        target='_blank'
                                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF] text-white text-sm text-center hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver sitio
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