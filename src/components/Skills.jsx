import { Code2, Palette, Zap, Box, Smartphone, GitBranch, Layers, Database, Wrench } from 'lucide-react';

export function Skills() {
    const skills = [
        {
            icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'HTML5',
            level: 'Avanzado',
            description: 'Semántica y accesibilidad'
        },
        {
            icon: <Palette className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'CSS',
            level: 'Avanzado',
            description: 'Flexbox, Grid, Animations'
        },
        {
            icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'JavaScript',
            level: 'Intermedio',
            description: 'ES6+, Closures, Scope'
        },
        {
            icon: <Box className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Bootstrap',
            level: 'Intermedio',
            description: 'Framework CSS responsive'
        },
        {
            icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Tailwind',
            level: 'Intermedio',
            description: 'Utility-first CSS'
        },
        {
            icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'WordPress',
            level: 'Avanzado',
            description: 'CMS y desarrollo'
        },
        {
            icon: <Box className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Elementor',
            level: 'Avanzado',
            description: 'Page builder profesional'
        },
        {
            icon: <GitBranch className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Git',
            level: 'Intermedio',
            description: 'Control de versiones'
        },
        {
            icon: <Database className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Hostinger',
            level: 'Avanzado',
            description: 'Gestión de hosting'
        },
        {
            icon: <Wrench className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'NPM',
            level: 'Intermedio',
            description: 'Gestor de paquetes'
        },
        {
            icon: <Layers className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'React',
            level: 'Básico',
            description: 'Librería JavaScript'
        },
        {
            icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Vite',
            level: 'Básico',
            description: 'Build tool moderno'
        },
        {
            icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
            name: 'Dart & Flutter',
            level: 'Aprendiendo',
            description: 'Desarrollo multiplataforma'
        }
    ];

    return (
        <section id="conocimientos" className="py-16 md:py-24 px-6 bg-[#0D1F45] transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-white">
                        Conocimientos
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Tecnologías y herramientas con las que trabajo día a día
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-6 md:p-8 rounded-2xl bg-[#0A1A3A] border border-gray-700/30 hover:border-[#296BFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#296BFF]/10 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-[#FF6A3D] via-[#FF3D4E] via-[#8B4DFF] to-[#296BFF] flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>

                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-white">
                                {skill.name}
                            </h3>

                            <div className="inline-block px-3 py-1 rounded-full bg-[#296BFF]/10 text-[#296BFF] text-sm mb-3">
                                {skill.level}
                            </div>

                            <p className="text-sm text-gray-400">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}