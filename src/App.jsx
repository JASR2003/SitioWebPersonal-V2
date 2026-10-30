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
import { WebDemosV1 } from './components/WebDemos';
import { useLanguage } from './i18n/language-context';

function App() {
  const { copy } = useLanguage();

  return (
    <div className="v1-root min-h-screen bg-[#0A1A3A] transition-colors duration-300">
      <a className="v1-skip-link" href="#contenido">{copy.v1.skip}</a>
      <Navigation />

      <main id="contenido">
        <HeroEnhanced />
        <ProjectsEnhanced />
        <WebDemosV1 />
        <ExperienceEnhanced />
        <SkillsEnhanced />
        <EducationEnhanced />
        <VersionGallery />
        <ContactEnhanced />
      </main>

      <footer className="bg-[#0D1F45] py-8 border-t border-gray-700/30">
        <div className="v1-footer-shell text-center text-gray-400">
          <p>© {new Date().getFullYear()} Jorge Suárez. {copy.v1.rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App
