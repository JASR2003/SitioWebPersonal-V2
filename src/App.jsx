import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-[#0A1A3A] transition-colors duration-300">
      <Navigation />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <footer className="bg-[#0D1F45] py-8 border-t border-gray-700/30">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Jorge Suárez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App