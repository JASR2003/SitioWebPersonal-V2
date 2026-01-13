import { ArrowRight, Download } from 'lucide-react';
import profilePic from '../assets/JorgeSuarez.jpg';

export function Hero() {
    const scrollToProjects = () => {
        const element = document.querySelector('#proyectos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element = document.querySelector('#contacto');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    {/* Avatar/Circle */}
                    <div className="w-38 h-38 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#FF6A3D] via-[#FF3D4E] via-[#8B4DFF] to-[#296BFF] p-1 mb-8">
                        <img
                            src={profilePic}
                            alt="Jorge Suárez"
                            className="w-full h-full rounded-full object-cover bg-[#0A1A3A]"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white">
                        Jorge Suárez – Desarrollador Frontend y WordPress
                    </h1>

                    {/* Description */}
                    <p className="max-w-2xl mb-8 md:mb-10 text-gray-300">
                        Desarrollador Frontend y WordPress especializado en crear sitios web modernos,
                        responsivos y funcionales. Experiencia en maquetación, diseño de interfaces y
                        desarrollo con WordPress, Elementor y tecnologías web actuales.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button
                            onClick={scrollToProjects}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF6A3D] via-[#FF3D4E] via-[#8B4DFF] to-[#296BFF] text-white hover:shadow-lg hover:shadow-[#296BFF]/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Ver proyectos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={scrollToContact}
                            className="px-8 py-3 rounded-xl border-2 border-[#296BFF] text-[#296BFF] hover:bg-[#152847] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Contacto
                            <Download className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-16 w-full max-w-2xl">
                        <div className="p-6 rounded-2xl bg-[#0D1F45] border border-gray-700/30">
                            <div className="bg-gradient-to-r from-[#FF6A3D] via-[#FF3D4E] via-[#8B4DFF] to-[#296BFF] bg-clip-text text-transparent mb-2">
                                2+
                            </div>
                            <p className="text-sm text-gray-400">Años exp.</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#0D1F45] border border-gray-700/30">
                            <div className="bg-gradient-to-r from-[#FF6A3D] via-[#FF3D4E] via-[#8B4DFF] to-[#296BFF] bg-clip-text text-transparent mb-2">
                                20+
                            </div>
                            <p className="text-sm text-gray-400">Proyectos</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-[#0D1F45] border border-gray-700/30">
                            <div className="bg-gradient-to-r from-[#FF6A3D] via-[#FF3D4E] via-[#8B4DFF] to-[#296BFF] bg-clip-text text-transparent mb-2">
                                3
                            </div>
                            <p className="text-sm text-gray-400">Empresas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}