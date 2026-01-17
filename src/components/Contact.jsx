import { Github, Linkedin, Instagram, MapPin } from 'lucide-react';

const XIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export function Contact() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github className="w-8 h-8" />,
            url: 'https://github.com/JASR2003',
            color: 'hover:bg-gray-900 dark:hover:bg-white',
            textColor: 'hover:text-white dark:hover:text-gray-900'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-8 h-8" />,
            url: 'https://www.linkedin.com/in/jorge-alejandro-suarez-rivera/',
            color: 'hover:bg-[#0077B5]',
            textColor: 'hover:text-white'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-8 h-8" />,
            url: 'https://www.instagram.com/jasr0807/',
            color: 'hover:bg-gradient-to-br hover:from-[#FF6A3D] hover:via-[#FF3D4E] hover:to-[#8B4DFF]',
            textColor: 'hover:text-white'
        },
        {
            name: 'X (Twitter)',
            icon: <XIcon className="w-8 h-8" />,
            url: 'https://x.com/JorgeSuarezDev',
            color: 'hover:bg-black dark:hover:bg-white',
            textColor: 'hover:text-white dark:hover:text-gray-900'
        }
    ];

    return (
        <section id="contacto" className="py-16 md:py-24 px-6 bg-[#0D1F45] transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-white">
                        Contacto
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Conecta conmigo a través de mis redes sociales
                    </p>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group p-8 rounded-2xl bg-[#0A1A3A] border border-gray-700/30 text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-transparent ${social.color} ${social.textColor} flex flex-col items-center justify-center gap-4`}
                        >
                            {social.icon}
                            <span className="text-sm">{social.name}</span>
                        </a>
                    ))}
                </div>

                {/* Additional Message */}
                <div className="text-center my-12">
                    <p className="text-gray-400">
                        ¿Tienes un proyecto en mente? ¡Escríbeme por cualquiera de estas plataformas!
                    </p>
                </div>

                {/* Location */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0A1A3A] border border-gray-700/30">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF]">
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-gray-400">Ubicación</p>
                            <p className="text-white">Venezuela</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
