import { useState } from 'react'
import { Navigation } from './assets/components/Navigation';
import { Hero } from './assets/components/Hero';
import { Skills } from './assets/components/Skills';
import { Experience } from './assets/components/Experience';
import { Projects } from './assets/components/Projects';
import { Education } from './assets/components/Education';
import { Contact } from './assets/components/Contact';
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1A3A] transition-colors duration-300">
      <Navigation />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="bg-[#0D1F45] py-8 border-t border-gray-700/30">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Jorge Suárez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
