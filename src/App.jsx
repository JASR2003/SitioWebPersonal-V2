import { Navigation } from './components/Navigation';
import { HeroEnhanced } from './components/HeroEnhanced';
import {
  ContactEnhanced,
  EducationEnhanced,
  ExperienceEnhanced,
  ProjectsEnhanced,
  SkillsEnhanced,
} from './components/V1Sections';
import { VersionGallery } from './components/VersionExplorer';

function App() {
  return (
    <div className="v1-root min-h-screen bg-[#0A1A3A] transition-colors duration-300">
      <a className="v1-skip-link" href="#contenido">Saltar al contenido</a>
      <Navigation />

      <main id="contenido">
        <HeroEnhanced />
        <ProjectsEnhanced />
        <ExperienceEnhanced />
        <SkillsEnhanced />
        <EducationEnhanced />
        <VersionGallery />
        <ContactEnhanced />
      </main>

      <footer className="bg-[#0D1F45] py-8 border-t border-gray-700/30">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Jorge Suárez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
