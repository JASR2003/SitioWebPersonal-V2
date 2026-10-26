import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react'
import profilePhoto from '../assets/JorgeSuarez.jpg'
import { MobileSectionMenu, VersionGallery, VersionMenu } from '../components/VersionExplorer'
import {
  education,
  experiences,
  profile,
  projects,
  skills,
  socialLinks,
  stats,
} from '../data/portfolio'

const featuredProjects = projects.slice(0, 4)
const remainingProjects = projects.slice(4)

function ExternalProjectLink({ project, className = '', children }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={`Visitar ${project.title} (abre en una pestaña nueva)`}
    >
      {children}
    </a>
  )
}

function SocialLinks({ className = '', itemClassName = '' }) {
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className={itemClassName}
        >
          {social.name}
        </a>
      ))}
    </div>
  )
}

export function PortfolioV2() {
  return (
    <div className="v2-root">
      <header className="v2-header">
        <a className="v2-mark" href="#inicio" aria-label="Ir al inicio">
          JS<span>®</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#trabajo">Trabajo</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#perfil">Perfil</a>
          <a className="v2-nav-cta" href="#contacto">Hablemos</a>
          <MobileSectionMenu links={[
            { label: 'Proyectos', href: '#trabajo' },
            { label: 'Experiencia', href: '#trayectoria' },
            { label: 'Conocimientos', href: '#perfil' },
            { label: 'Contacto', href: '#contacto' },
          ]} />
          <VersionMenu />
        </nav>
      </header>

      <main>
        <section className="v2-hero" id="inicio">
          <div className="v2-kicker">Portafolio / 2026</div>
          <h1>
            Diseño lo que se ve.
            <em> Construyo lo que funciona.</em>
          </h1>
          <div className="v2-hero-bottom">
            <div className="v2-photo-frame">
              <img src={profilePhoto} alt="Retrato de Jorge Suárez" />
              <span>Caracas — VE</span>
            </div>
            <div className="v2-intro">
              <p>{profile.intro}</p>
              <a href="#trabajo">Explorar proyectos <ArrowDownRight aria-hidden="true" /></a>
            </div>
            <div className="v2-status">
              <span className="v2-status-dot" aria-hidden="true" />
              {profile.availability}
            </div>
          </div>
        </section>

        <section className="v2-work" id="trabajo">
          <div className="v2-section-heading">
            <p>01 / Selección</p>
            <h2>Trabajo reciente</h2>
            <span>Una mezcla de identidad, contenido y desarrollo web.</span>
          </div>

          <div className="v2-project-list">
            {featuredProjects.map((project, index) => (
              <article className="v2-project" key={project.title}>
                <span className="v2-project-number">0{index + 1}</span>
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="v2-project-description">{project.description}</p>
                  <div className="v2-tags">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
                <ExternalProjectLink project={project} className="v2-project-link">
                  Ver sitio <ArrowUpRight aria-hidden="true" />
                </ExternalProjectLink>
              </article>
            ))}
          </div>

          <details className="v2-archive">
            <summary>Ver archivo de proyectos ({remainingProjects.length})</summary>
            <div>
              {remainingProjects.map((project) => (
                <ExternalProjectLink project={project} key={project.title}>
                  <span>{project.title}</span>
                  <span>{project.category}</span>
                  <ArrowUpRight aria-hidden="true" />
                </ExternalProjectLink>
              ))}
            </div>
          </details>
        </section>

        <section className="v2-experience" id="trayectoria">
          <div className="v2-section-heading v2-section-heading-light">
            <p>02 / Trayectoria</p>
            <h2>Experiencia aplicada</h2>
          </div>
          <div className="v2-experience-grid">
            {experiences.map((experience, index) => (
              <article key={experience.company}>
                <span>0{index + 1}</span>
                <p>{experience.period}</p>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="v2-profile" id="perfil">
          <div>
            <p className="v2-eyebrow">03 / Herramientas</p>
            <h2>Una base visual con criterio técnico.</h2>
            <p>{education.description}</p>
          </div>
          <div className="v2-skill-cloud" aria-label="Tecnologías y herramientas">
            {skills.map((skill) => <span key={skill.name}>{skill.name}</span>)}
          </div>
          <div className="v2-stats">
            {stats.map((stat) => (
              <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
            ))}
          </div>
        </section>
        <VersionGallery />
      </main>

      <footer className="v2-footer" id="contacto">
        <p>¿Tienes una oportunidad o un proyecto?</p>
        <h2>Construyamos algo claro, útil y memorable.</h2>
        <a href={socialLinks[1].url} target="_blank" rel="noreferrer">
          Conversemos en LinkedIn <ArrowUpRight aria-hidden="true" />
        </a>
        <SocialLinks className="v2-socials" />
        <div className="v2-footer-meta"><span>© {new Date().getFullYear()} Jorge Suárez</span><span>Venezuela / Remoto</span></div>
      </footer>
    </div>
  )
}

export function PortfolioV3() {
  return (
    <div className="v3-root">
      <header className="v3-window-bar">
        <div className="v3-dots" aria-hidden="true"><span /><span /><span /></div>
        <span>jorge@portfolio:~/work</span>
        <span className="v3-secure">● online</span>
      </header>

      <div className="v3-layout">
        <aside className="v3-sidebar">
          <a className="v3-logo" href="#inicio"><Terminal aria-hidden="true" /> JS.dev</a>
          <nav aria-label="Navegación principal">
            <a href="#inicio"><span>01</span> ./inicio</a>
            <a href="#proyectos"><span>02</span> ./proyectos</a>
            <a href="#experiencia"><span>03</span> ./experiencia</a>
            <a href="#stack"><span>04</span> ./stack</a>
            <a href="#contacto"><span>05</span> ./contacto</a>
            <MobileSectionMenu links={[
              { label: 'Proyectos', href: '#proyectos' },
              { label: 'Experiencia', href: '#experiencia' },
              { label: 'Conocimientos', href: '#stack' },
              { label: 'Contacto', href: '#contacto' },
            ]} />
            <VersionMenu />
          </nav>
          <div className="v3-sidebar-note">
            <span>STATUS</span>
            <p>{profile.availability}</p>
          </div>
        </aside>

        <main className="v3-main">
          <section className="v3-hero" id="inicio">
            <p className="v3-command"><span>$</span> whoami</p>
            <div className="v3-identity">
              <div>
                <span className="v3-comment">// Frontend · WordPress · Web</span>
                <h1>Jorge<br />Suárez<span>_</span></h1>
                <p>{profile.intro}</p>
                <div className="v3-actions">
                  <a href="#proyectos">run projects.exe <ArrowRight aria-hidden="true" /></a>
                  <a href={socialLinks[0].url} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
                </div>
              </div>
              <div className="v3-profile-card">
                <img src={profilePhoto} alt="Jorge Suárez" />
                <div><span>ROLE</span><p>{profile.role}</p></div>
                <div><span>LOCATION</span><p>{profile.location}</p></div>
              </div>
            </div>
          </section>

          <section className="v3-projects" id="proyectos">
            <div className="v3-section-title">
              <p><span>$</span> ls ./selected-work</p>
              <h2>Proyectos desplegados</h2>
            </div>
            <div className="v3-project-grid">
              {projects.map((project, index) => (
                <article key={project.title}>
                  <div className="v3-file-head">
                    <span>{String(index + 1).padStart(2, '0')}.project</span>
                    <span className="v3-live">LIVE</span>
                  </div>
                  <p className="v3-project-path">~/work/{project.title.toLowerCase().replaceAll(' ', '-')}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="v3-tech">{project.technologies.map((tech) => <code key={tech}>{tech}</code>)}</div>
                  <ExternalProjectLink project={project} className="v3-open-link">
                    open --site <ArrowUpRight aria-hidden="true" />
                  </ExternalProjectLink>
                </article>
              ))}
            </div>
          </section>

          <section className="v3-history" id="experiencia">
            <div className="v3-section-title">
              <p><span>$</span> git log --career</p>
              <h2>Historial de experiencia</h2>
            </div>
            <div className="v3-log">
              {experiences.map((experience, index) => (
                <article key={experience.company}>
                  <div className="v3-commit-dot" aria-hidden="true" />
                  <code>commit {`0xJS${index + 240}`}</code>
                  <time>{experience.period}</time>
                  <h3>{experience.title} <span>@ {experience.company}</span></h3>
                  <p>{experience.description}</p>
                  <ul>{experience.achievements.map((item) => <li key={item}>+ {item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className="v3-stack" id="stack">
            <div className="v3-section-title">
              <p><span>$</span> npm run skills</p>
              <h2>Dependencias de trabajo</h2>
            </div>
            <div className="v3-skill-table" role="table" aria-label="Habilidades">
              {skills.map((skill, index) => (
                <div role="row" key={skill.name}>
                  <span role="cell">{String(index + 1).padStart(2, '0')}</span>
                  <strong role="cell">{skill.name}</strong>
                  <span role="cell">{skill.detail}</span>
                  <code role="cell">{skill.level.toLowerCase()}</code>
                </div>
              ))}
            </div>
          </section>

          <VersionGallery />

          <footer className="v3-footer" id="contacto">
            <p className="v3-command"><span>$</span> contact --open</p>
            <h2>¿Construimos la próxima versión?</h2>
            <p>Estoy disponible para oportunidades de desarrollo web y proyectos con equipos que valoren el detalle.</p>
            <div>
              <a href={socialLinks[1].url} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> connect()</a>
              <a href={socialLinks[0].url} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> inspect_code()</a>
            </div>
            <code>© {new Date().getFullYear()} — session active</code>
          </footer>
        </main>
      </div>
    </div>
  )
}

export function PortfolioV4() {
  return (
    <div className="v4-root">
      <header className="v4-header">
        <a href="#inicio" className="v4-brand">Jorge<span>Suárez</span></a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#conocimientos">Conocimientos</a>
          <MobileSectionMenu links={[
            { label: 'Proyectos', href: '#proyectos' },
            { label: 'Experiencia', href: '#experiencia' },
            { label: 'Conocimientos', href: '#conocimientos' },
            { label: 'Contacto', href: '#contacto' },
          ]} />
          <VersionMenu />
        </nav>
        <a href="#contacto" className="v4-contact-pill">Disponible <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="v4-hero" id="inicio">
          <div className="v4-hero-copy">
            <div className="v4-mini-label"><Sparkles aria-hidden="true" /> DESARROLLADOR WEB</div>
            <h1>Ideas claras.<br /><span>Webs que conectan.</span></h1>
            <p>{profile.intro}</p>
            <div className="v4-actions">
              <a href="#proyectos">Ver mi trabajo <ArrowRight aria-hidden="true" /></a>
              <a href={socialLinks[1].url} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="v4-portrait-card">
            <div className="v4-orbit v4-orbit-one" aria-hidden="true">CSS</div>
            <div className="v4-orbit v4-orbit-two" aria-hidden="true">WP</div>
            <img src={profilePhoto} alt="Retrato de Jorge Suárez" />
            <div className="v4-portrait-caption"><span>Jorge Suárez</span><span>Venezuela · Remoto</span></div>
          </div>
          <div className="v4-bento v4-bento-status">
            <span className="v4-pulse" aria-hidden="true" />
            <p>Ahora mismo</p><strong>Abierto a nuevas oportunidades</strong>
          </div>
          <div className="v4-bento v4-bento-stat">
            <strong>20<sup>+</sup></strong><span>proyectos<br />realizados</span>
          </div>
        </section>

        <section className="v4-projects" id="proyectos">
          <div className="v4-heading">
            <span>01</span><div><p>TRABAJO SELECCIONADO</p><h2>Proyectos con propósito</h2></div>
          </div>
          <div className="v4-featured-grid">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className={`v4-project-card v4-project-${index + 1}`}>
                <div className="v4-project-top"><span>{project.category}</span><span>0{index + 1}</span></div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
                <ExternalProjectLink project={project}><ArrowUpRight aria-hidden="true" /></ExternalProjectLink>
              </article>
            ))}
          </div>
          <div className="v4-more-projects">
            {remainingProjects.map((project) => (
              <ExternalProjectLink project={project} key={project.title}>
                <span>{project.category}</span><strong>{project.title}</strong><ArrowUpRight aria-hidden="true" />
              </ExternalProjectLink>
            ))}
          </div>
        </section>

        <section className="v4-experience" id="experiencia">
          <div className="v4-heading">
            <span>02</span><div><p>RECORRIDO</p><h2>Aprender haciendo</h2></div>
          </div>
          <div className="v4-timeline">
            {experiences.map((experience) => (
              <article key={experience.company}>
                <div><time>{experience.period}</time><span /></div>
                <div>
                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>
                </div>
                <ul>{experience.achievements.map((item) => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="v4-skills" id="conocimientos">
          <div className="v4-heading">
            <span>03</span><div><p>CAJA DE HERRAMIENTAS</p><h2>Diseño + código + operación</h2></div>
          </div>
          <div className="v4-skills-layout">
            <div className="v4-skill-intro">
              <Layers3 aria-hidden="true" />
              <p>Trabajo desde la idea y la interfaz hasta la publicación y el mantenimiento.</p>
            </div>
            <div className="v4-skill-grid">
              {skills.map((skill, index) => (
                <div key={skill.name}><span>{String(index + 1).padStart(2, '0')}</span><strong>{skill.name}</strong><small>{skill.level}</small></div>
              ))}
            </div>
          </div>
        </section>
        <VersionGallery />
      </main>

      <footer className="v4-footer" id="contacto">
        <div>
          <p>¿UNA IDEA EN MENTE?</p>
          <h2>Hagamos que cobre vida.</h2>
        </div>
        <a href={socialLinks[1].url} target="_blank" rel="noreferrer">Escríbeme <ArrowUpRight aria-hidden="true" /></a>
        <SocialLinks className="v4-socials" />
        <span>© {new Date().getFullYear()} — Hecho con atención al detalle.</span>
      </footer>
    </div>
  )
}

export function PortfolioV5() {
  return (
    <div className="v5-root">
      <header className="v5-header">
        <a href="#inicio">JS/26</a>
        <p>DESARROLLADOR FRONTEND<br />& WORDPRESS</p>
        <nav aria-label="Navegación principal">
          <a href="#trabajo">TRABAJO</a>
          <a href="#experiencia">EXPERIENCIA</a>
          <a href="#contacto">CONTACTO</a>
          <MobileSectionMenu links={[
            { label: 'Proyectos', href: '#trabajo' },
            { label: 'Experiencia', href: '#experiencia' },
            { label: 'Conocimientos', href: '#conocimientos' },
            { label: 'Contacto', href: '#contacto' },
          ]} />
          <VersionMenu />
        </nav>
      </header>

      <main>
        <section className="v5-hero" id="inicio">
          <div className="v5-hero-number">01</div>
          <p className="v5-vertical">PORTAFOLIO PERSONAL — VENEZUELA</p>
          <div className="v5-hero-title">
            <p>CREO SITIOS WEB CLAROS, ÚTILES Y RESPONSIVOS.</p>
            <h1>JORGE<br /><span>SUÁREZ</span></h1>
          </div>
          <div className="v5-photo-block">
            <img src={profilePhoto} alt="Jorge Suárez" />
            <div><MapPin aria-hidden="true" /> VENEZUELA / REMOTO</div>
          </div>
          <div className="v5-hero-note">
            <p>{profile.intro}</p>
            <a href="#trabajo">VER PROYECTOS <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </section>

        <div className="v5-marquee" aria-label="Áreas de trabajo">
          <div>FRONTEND ✦ WORDPRESS ✦ UI/UX ✦ RESPONSIVE ✦ HOSTING ✦ FRONTEND ✦ WORDPRESS ✦ UI/UX ✦ RESPONSIVE ✦ HOSTING ✦</div>
        </div>

        <section className="v5-work" id="trabajo">
          <div className="v5-title-row"><span>02</span><h2>TRABAJO<br />SELECCIONADO</h2><p>{projects.length} proyectos / diferentes industrias / una misma atención al detalle.</p></div>
          <div className="v5-project-table">
            {projects.map((project, index) => (
              <ExternalProjectLink project={project} key={project.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.title}</strong>
                <span>{project.category}</span>
                <span>{project.technologies.slice(0, 2).join(' + ')}</span>
                <ArrowUpRight aria-hidden="true" />
              </ExternalProjectLink>
            ))}
          </div>
        </section>

        <section className="v5-experience" id="experiencia">
          <div className="v5-title-row v5-title-row-dark"><span>03</span><h2>EXPERIENCIA<br />REAL</h2><p>Diseño, desarrollo, publicación y mantenimiento.</p></div>
          <div className="v5-experience-list">
            {experiences.map((experience, index) => (
              <article key={experience.company}>
                <span>0{index + 1}</span>
                <time>{experience.period}</time>
                <div><h3>{experience.title}</h3><h4>{experience.company}</h4></div>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="v5-capabilities" id="conocimientos">
          <div className="v5-title-row"><span>04</span><h2>CAPACIDADES</h2><p>{education.certificateCount} certificados y aprendizaje continuo desde 2020.</p></div>
          <div className="v5-capability-grid">
            {skills.map((skill) => <div key={skill.name}><strong>{skill.name}</strong><span>{skill.level}</span><p>{skill.detail}</p></div>)}
          </div>
        </section>
        <VersionGallery />
      </main>

      <footer className="v5-footer" id="contacto">
        <div className="v5-footer-top"><span>05</span><p>DISPONIBLE PARA OPORTUNIDADES<br />Y COLABORACIONES</p></div>
        <h2>HABLEMOS<span>↗</span></h2>
        <div className="v5-contact-grid">
          <p>{profile.shortIntro}</p>
          <a href={socialLinks[1].url} target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight aria-hidden="true" /></a>
          <a href={socialLinks[0].url} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight aria-hidden="true" /></a>
          <span>© {new Date().getFullYear()} JORGE SUÁREZ</span>
        </div>
      </footer>
    </div>
  )
}
