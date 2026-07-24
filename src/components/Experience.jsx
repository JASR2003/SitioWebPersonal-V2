import { Briefcase } from 'lucide-react';

export function Experience() {
    const experiences = [
        {
            title: 'Desarrollador WordPress',
            company: 'Academy Producciones & Academy Pro Marketing',
            period: 'Julio 2024 - Actualidad',
            description: 'Desarrollo y mantenimiento de sitios web WordPress para proyectos de marketing y producción audiovisual. Trabajo remoto con gestión completa de proyectos web.',
            achievements: [
                'Desarrollo con WordPress y Elementor',
                'Gestión de hosting en Hostinger',
                'Gestión de DNS y dominios',
                'Administración con GoDaddy y otros gestores',
                'Gestión de archivos mediante FTP y FileZilla',
                'Implementación de soluciones con PHP básico'
            ]
        },
        {
            title: 'Desarrollador Frontend Freelance',
            company: 'Proyecto Independiente',
            period: 'Diciembre 2024 - Enero 2025',
            description: 'Desarrollo de sitio web completo de forma independiente utilizando tecnologías modernas y herramientas de desarrollo actuales.',
            achievements: [
                'Maquetación con HTML5 y JavaScript',
                'Diseño responsive con Tailwind CSS',
                'Gestión de dependencias con NPM',
                'Configuración y gestión de DNS',
                'Entrega exitosa del proyecto'
            ]
        },
        {
            title: 'Desarrollador Frontend',
            company: 'Kinlazo',
            period: 'Noviembre 2023 - Enero 2024',
            description: 'Primera experiencia laboral desarrollando la interfaz visual para una aplicación web con chatbot e inteligencia artificial. Trabajo remoto en equipo de desarrollo.',
            achievements: [
                'Desarrollo completo de interfaces web',
                'Codificación Frontend con JavaScript',
                'Diseño e implementación de UI/UX',
                'Maquetación responsive',
                'Colaboración con equipo de desarrollo'
            ]
        }
    ];

    return (
        <section id="experiencia" className="py-16 md:py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-white">
                        Experiencia Laboral
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Mi trayectoria profesional en el desarrollo web
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 lg:pl-0 border-l-2 border-[#296BFF] lg:border-none transition-all duration-300 group">
                            {/* Timeline Dot (Mobile Only) */}
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF] lg:hidden"></div>

                            {/* Card Content */}
                            <div className="p-6 lg:p-8 rounded-2xl bg-[#0D1F45] border border-gray-700/30 lg:hover:border-[#296BFF] lg:hover:shadow-lg lg:hover:shadow-[#296BFF]/10 h-full transition-all duration-300">
                                {/* Header: Icon + Info */}
                                <div className="flex flex-row lg:flex-col lg:items-start gap-4 lg:gap-0 mb-4 lg:mb-2">
                                    <div className="p-2 lg:p-3 w-fit h-fit aspect-square rounded-lg bg-gradient-to-br from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF] lg:mb-6 shrink-0">
                                        <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                    </div>

                                    <div className="flex-1 lg:w-full">
                                        <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-1 lg:mb-2 leading-tight">
                                            {exp.title}
                                        </h3>
                                        <p className="text-[#296BFF] font-medium mb-1 lg:mb-2">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-gray-400 lg:mb-4">
                                            {exp.period}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4 text-justify leading-relaxed">
                                    {exp.description}
                                </p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400 text-justify">
                                            <span className="text-[#296BFF] mt-1 shrink-0">•</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}