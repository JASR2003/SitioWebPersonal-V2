import { useState } from 'react';
import { GraduationCap, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export function Education() {
    const [currentCertificate, setCurrentCertificate] = useState(0);

    const education = [
        {
            type: 'degree',
            title: 'Desarrollo Web Frontend',
            institution: 'Platzi',
            period: 'Agosto 2020 - Agosto 2024',
            description: 'Formación completa en desarrollo web frontend, diseño de interfaces, diseño responsivo, metodologías de desarrollo y tecnologías web modernas'
        }
    ];

    const certificates = [
        {
            title: 'React - Guía Completa',
            issuer: 'Udemy',
            year: '2023',
            image: '/certificates/react-certificate.jpg'
        },
        {
            title: 'CSS y Sass Avanzado',
            issuer: 'Udemy',
            year: '2023',
            image: '/certificates/css-certificate.jpg'
        },
        {
            title: 'Algoritmos con JavaScript',
            issuer: 'freeCodeCamp',
            year: '2022',
            image: '/certificates/js-certificate.jpg'
        },
        {
            title: 'Diseño Web Responsivo',
            issuer: 'freeCodeCamp',
            year: '2022',
            image: '/certificates/responsive-certificate.jpg'
        }
    ];

    const nextCertificate = () => {
        setCurrentCertificate((prev) => (prev + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    return (
        <section id="estudios" className="py-16 md:py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 text-white">
                        Estudios y Certificados
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Formación académica y certificaciones profesionales
                    </p>
                </div>

                {/* Education - Centered */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF]">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-1 lg:mb-2">
                            Educación
                        </h3>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="p-6 md:p-8 rounded-2xl bg-[#0D1F45] border border-gray-700/30 hover:border-[#296BFF] transition-all duration-300"
                            >
                                <h4 className="text-white font-semibold text-md md:text-lg lg:text-xl mb-1 lg:mb-2">
                                    {edu.title}
                                </h4>

                                <p className="text-[#296BFF] mb-1">
                                    {edu.institution}
                                </p>

                                <p className="text-sm text-gray-400 mb-3">
                                    {edu.period}
                                </p>

                                <p className="text-sm text-gray-400 text-justify">
                                    {edu.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates - Carousel */}
                <div>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF]">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-1 lg:mb-2">
                            Certificados
                        </h3>
                    </div>

                    <div className="relative max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
                        {/* Certificate Display */}
                        <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#0D1F45] border border-gray-700/30">
                            <img
                                src={certificates[currentCertificate].image}
                                alt={certificates[currentCertificate].title}
                                className="w-full h-full object-cover"
                            />

                            {/* Certificate Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h4 className="text-white mb-1">
                                    {certificates[currentCertificate].title}
                                </h4>
                                <p className="text-gray-200 text-sm">
                                    {certificates[currentCertificate].issuer} • {certificates[currentCertificate].year}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevCertificate}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#0D1F45] border border-gray-700/30 text-white hover:bg-gradient-to-r hover:from-[#FF6A3D] hover:to-[#296BFF] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
                            aria-label="Certificado anterior"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        <button
                            onClick={nextCertificate}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#0D1F45] border border-gray-700/30 text-white hover:bg-gradient-to-r hover:from-[#FF6A3D] hover:to-[#296BFF] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
                            aria-label="Siguiente certificado"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {certificates.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentCertificate(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentCertificate
                                        ? 'w-8 bg-gradient-to-r from-[#FF6A3D] via-[#8B4DFF] to-[#296BFF]'
                                        : 'w-2 bg-gray-600'
                                        }`}
                                    aria-label={`Ver certificado ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}