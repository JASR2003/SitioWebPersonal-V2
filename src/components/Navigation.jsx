import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../assets/logotipo-blanco.svg';
import { VersionMenu } from './VersionExplorer';
import { LanguageSwitcher } from '../i18n/LanguageSwitcher';
import { useLanguage } from '../i18n/language-context';

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { copy } = useLanguage();

    const navLinks = ['#inicio', '#proyectos', '#experiencia', '#conocimientos', '#estudios', '#contacto']
        .map((href, index) => ({ name: copy.v1.nav[index], href }));

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1F45]/95 backdrop-blur-sm border-b border-gray-700/30 transition-colors duration-300 py-2">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#inicio');
                        }}
                        className="flex items-center"
                    >
                        <img
                            src={logo}
                            alt="Jorge Suárez"
                            className="h-10 w-auto md:h-14 object-contain"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="text-gray-300 hover:text-[#296BFF] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <LanguageSwitcher />
                        <VersionMenu />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-[#0A1A3A] transition-all"
                            aria-label={isMenuOpen ? copy.v1.menuClose : copy.v1.menuOpen}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-700/30">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="block py-3 text-gray-300 hover:text-[#296BFF] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <LanguageSwitcher className="v1-mobile-language" />
                        <VersionMenu />
                    </div>
                )}
            </div>
        </nav>
    );
}
