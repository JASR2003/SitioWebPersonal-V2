import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Layers3,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react'
import profilePhoto from '../assets/JorgeSuarez.jpg'
import { MobileSectionMenu, VersionGallery, VersionMenu } from '../components/VersionExplorer'
import { MonixSpotlight } from '../components/MonixSpotlight'
import { WebDemosV2, WebDemosV3, WebDemosV4, WebDemosV5 } from '../components/WebDemos'
import { socialLinks } from '../data/portfolio'
import { LanguageSwitcher } from '../i18n/LanguageSwitcher'
import { useLanguage } from '../i18n/language-context'

function ExternalProjectLink({ project, className = '', children }) {
  const { copy } = useLanguage()

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={copy.shared.externalProject(project.title)}
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
  const { content: { education, experiences, profile, projects, skills, stats }, copy } = useLanguage()
  const standardProjects = projects.filter((project) => !project.isSpotlight)
  const featuredProjects = standardProjects.slice(0, 4)
  const remainingProjects = standardProjects.slice(4)
  const ui = copy.v2

  return (
    <div className="v2-root">
      <header className="v2-header">
        <a className="v2-mark" href="#inicio" aria-label={ui.home}>
          JS<span>®</span>
        </a>
        <nav className="variant-nav" aria-label={copy.shared.navigation}>
          <a href="#trabajo">{ui.nav[0]}</a>
          <a href="#demos">{ui.nav[1]}</a>
          <a href="#trayectoria">{ui.nav[2]}</a>
          <a href="#perfil">{ui.nav[3]}</a>
          <a className="v2-nav-cta" href="#contacto">{ui.talk}</a>
          <MobileSectionMenu links={[
            { label: copy.shared.mobileLinks.projects, href: '#trabajo' },
            { label: copy.shared.mobileLinks.webDemos, href: '#demos' },
            { label: copy.shared.mobileLinks.experience, href: '#trayectoria' },
            { label: copy.shared.mobileLinks.skills, href: '#perfil' },
            { label: copy.shared.mobileLinks.contact, href: '#contacto' },
          ]} />
          <LanguageSwitcher />
          <VersionMenu />
        </nav>
      </header>

      <main>
        <section className="v2-hero" id="inicio">
          <div className="v2-kicker">{ui.kicker}</div>
          <h1>
            {ui.heroBefore}
            <em> {ui.heroAccent}</em>
          </h1>
          <div className="v2-hero-bottom">
            <div className="v2-photo-frame">
              <img src={profilePhoto} alt={copy.shared.photoAlt} />
              <span>{ui.location}</span>
            </div>
            <div className="v2-intro">
              <p>{profile.intro}</p>
              <a href="#trabajo">{ui.explore} <ArrowDownRight aria-hidden="true" /></a>
            </div>
            <div className="v2-status">
              <span className="v2-status-dot" aria-hidden="true" />
              {profile.availability}
            </div>
          </div>
        </section>

        <section className="v2-work" id="trabajo">
          <div className="v2-section-heading">
            <p>{ui.workEyebrow}</p>
            <h2>{ui.workTitle}</h2>
            <span>{ui.workDescription}</span>
          </div>

          <MonixSpotlight variant="v2" />

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
                  {ui.viewSite} <ArrowUpRight aria-hidden="true" />
                </ExternalProjectLink>
              </article>
            ))}
          </div>

          <details className="v2-archive">
            <summary>{ui.archive} ({remainingProjects.length})</summary>
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

        <WebDemosV2 />

        <section className="v2-experience" id="trayectoria">
          <div className="v2-section-heading v2-section-heading-light">
            <p>{ui.experienceEyebrow}</p>
            <h2>{ui.experienceTitle}</h2>
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
            <p className="v2-eyebrow">{ui.toolsEyebrow}</p>
            <h2>{ui.toolsTitle}</h2>
            <p>{education.description}</p>
          </div>
          <div className="v2-skill-cloud" aria-label={ui.toolsLabel}>
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
        <p>{ui.footerEyebrow}</p>
        <h2>{ui.footerTitle}</h2>
        <a href={socialLinks[1].url} target="_blank" rel="noreferrer">
          {ui.linkedin} <ArrowUpRight aria-hidden="true" />
        </a>
        <SocialLinks className="v2-socials" />
        <div className="v2-footer-meta"><span>© {new Date().getFullYear()} Jorge Suárez</span><span>{ui.remote}</span></div>
      </footer>
    </div>
  )
}

export function PortfolioV3() {
  const { content: { experiences, profile, projects, skills }, copy } = useLanguage()
  const standardProjects = projects.filter((project) => !project.isSpotlight)
  const ui = copy.v3

  return (
    <div className="v3-root">
      <header className="v3-window-bar">
        <div className="v3-dots" aria-hidden="true"><span /><span /><span /></div>
        <span>jorge@portfolio:~/work</span>
        <span className="v3-secure">{ui.online}</span>
      </header>

      <div className="v3-layout">
        <aside className="v3-sidebar">
          <a className="v3-logo" href="#inicio"><Terminal aria-hidden="true" /> JS.dev</a>
          <nav className="variant-nav" aria-label={copy.shared.navigation}>
            <a href="#inicio"><span>01</span> {ui.paths[0]}</a>
            <a href="#proyectos"><span>02</span> {ui.paths[1]}</a>
            <a href="#demos"><span>03</span> {ui.paths[2]}</a>
            <a href="#experiencia"><span>04</span> {ui.paths[3]}</a>
            <a href="#stack"><span>05</span> {ui.paths[4]}</a>
            <a href="#contacto"><span>06</span> {ui.paths[5]}</a>
            <MobileSectionMenu links={[
              { label: copy.shared.mobileLinks.projects, href: '#proyectos' },
              { label: copy.shared.mobileLinks.webDemos, href: '#demos' },
              { label: copy.shared.mobileLinks.experience, href: '#experiencia' },
              { label: copy.shared.mobileLinks.skills, href: '#stack' },
              { label: copy.shared.mobileLinks.contact, href: '#contacto' },
            ]} />
            <LanguageSwitcher />
            <VersionMenu />
          </nav>
          <div className="v3-sidebar-note">
            <span>{ui.status}</span>
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
                <img src={profilePhoto} alt={copy.shared.photoAlt} />
                <div><span>{ui.role}</span><p>{profile.role}</p></div>
                <div><span>{ui.location}</span><p>{profile.location}</p></div>
              </div>
            </div>
          </section>

          <section className="v3-projects" id="proyectos">
            <div className="v3-section-title">
              <p><span>$</span> ls ./selected-work</p>
              <h2>{ui.deployed}</h2>
            </div>
            <MonixSpotlight variant="v3" />
            <div className="v3-project-grid">
              {standardProjects.map((project, index) => (
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

          <WebDemosV3 />

          <section className="v3-history" id="experiencia">
            <div className="v3-section-title">
              <p><span>$</span> git log --career</p>
              <h2>{ui.history}</h2>
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
              <h2>{ui.dependencies}</h2>
            </div>
            <div className="v3-skill-table" role="table" aria-label={ui.skillsLabel}>
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
            <h2>{ui.nextVersion}</h2>
            <p>{ui.contactDescription}</p>
            <div>
              <a href={socialLinks[1].url} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> connect()</a>
              <a href={socialLinks[0].url} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> inspect_code()</a>
            </div>
            <code>© {new Date().getFullYear()} — {ui.session}</code>
          </footer>
        </main>
      </div>
    </div>
  )
}

export function PortfolioV4() {
  const { content: { experiences, profile, projects, skills }, copy } = useLanguage()
  const standardProjects = projects.filter((project) => !project.isSpotlight)
  const featuredProjects = standardProjects.slice(0, 4)
  const remainingProjects = standardProjects.slice(4)
  const ui = copy.v4

  return (
    <div className="v4-root">
      <header className="v4-header">
        <a href="#inicio" className="v4-brand">Jorge<span>Suárez</span></a>
        <nav className="variant-nav" aria-label={copy.shared.navigation}>
          <a href="#proyectos">{ui.nav[0]}</a>
          <a href="#demos">{ui.nav[1]}</a>
          <a href="#experiencia">{ui.nav[2]}</a>
          <a href="#conocimientos">{ui.nav[3]}</a>
          <MobileSectionMenu links={[
            { label: copy.shared.mobileLinks.projects, href: '#proyectos' },
            { label: copy.shared.mobileLinks.webDemos, href: '#demos' },
            { label: copy.shared.mobileLinks.experience, href: '#experiencia' },
            { label: copy.shared.mobileLinks.skills, href: '#conocimientos' },
            { label: copy.shared.mobileLinks.contact, href: '#contacto' },
          ]} />
          <LanguageSwitcher />
          <VersionMenu />
        </nav>
        <a href="#contacto" className="v4-contact-pill">{ui.available} <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="v4-hero" id="inicio">
          <div className="v4-hero-copy">
            <div className="v4-mini-label"><Sparkles aria-hidden="true" /> {ui.developer}</div>
            <h1>{ui.heroBefore}<br /><span>{ui.heroAccent}</span></h1>
            <p>{profile.intro}</p>
            <div className="v4-actions">
              <a href="#proyectos">{ui.viewWork} <ArrowRight aria-hidden="true" /></a>
              <a href={socialLinks[1].url} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="v4-portrait-card">
            <div className="v4-orbit v4-orbit-one" aria-hidden="true">CSS</div>
            <div className="v4-orbit v4-orbit-two" aria-hidden="true">WP</div>
            <img src={profilePhoto} alt={copy.shared.photoAlt} />
            <div className="v4-portrait-caption"><span>Jorge Suárez</span><span>{ui.remote}</span></div>
          </div>
          <div className="v4-bento v4-bento-status">
            <span className="v4-pulse" aria-hidden="true" />
            <p>{ui.now}</p><strong>{ui.open}</strong>
          </div>
          <div className="v4-bento v4-bento-stat">
            <strong>20<sup>+</sup></strong><span>{ui.projectsDone}</span>
          </div>
        </section>

        <section className="v4-projects" id="proyectos">
          <div className="v4-heading">
            <span>01</span><div><p>{ui.projectsEyebrow}</p><h2>{ui.projectsTitle}</h2></div>
          </div>
          <MonixSpotlight variant="v4" />
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

        <WebDemosV4 />

        <section className="v4-experience" id="experiencia">
          <div className="v4-heading">
            <span>03</span><div><p>{ui.journey}</p><h2>{ui.journeyTitle}</h2></div>
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
            <span>04</span><div><p>{ui.toolkit}</p><h2>{ui.toolkitTitle}</h2></div>
          </div>
          <div className="v4-skills-layout">
            <div className="v4-skill-intro">
              <Layers3 aria-hidden="true" />
              <p>{ui.toolkitDescription}</p>
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
          <p>{ui.footerEyebrow}</p>
          <h2>{ui.footerTitle}</h2>
        </div>
        <a href={socialLinks[1].url} target="_blank" rel="noreferrer">{ui.write} <ArrowUpRight aria-hidden="true" /></a>
        <SocialLinks className="v4-socials" />
        <span>© {new Date().getFullYear()} — {ui.detail}</span>
      </footer>
    </div>
  )
}

export function PortfolioV5() {
  const { content: { education, experiences, profile, projects, skills }, copy } = useLanguage()
  const standardProjects = projects.filter((project) => !project.isSpotlight)
  const ui = copy.v5

  return (
    <div className="v5-root">
      <header className="v5-header">
        <a href="#inicio">JS/26</a>
        <p>{ui.developer}<br />& WORDPRESS</p>
        <nav className="variant-nav" aria-label={copy.shared.navigation}>
          <a href="#trabajo">{ui.nav[0]}</a>
          <a href="#demos">{ui.nav[1]}</a>
          <a href="#experiencia">{ui.nav[2]}</a>
          <a href="#contacto">{ui.nav[3]}</a>
          <MobileSectionMenu links={[
            { label: copy.shared.mobileLinks.projects, href: '#trabajo' },
            { label: copy.shared.mobileLinks.webDemos, href: '#demos' },
            { label: copy.shared.mobileLinks.experience, href: '#experiencia' },
            { label: copy.shared.mobileLinks.skills, href: '#conocimientos' },
            { label: copy.shared.mobileLinks.contact, href: '#contacto' },
          ]} />
          <LanguageSwitcher />
          <VersionMenu />
        </nav>
      </header>

      <main>
        <section className="v5-hero" id="inicio">
          <div className="v5-hero-number">01</div>
          <p className="v5-vertical">{ui.vertical}</p>
          <div className="v5-hero-title">
            <p>{ui.hero}</p>
            <h1>JORGE<br /><span>SUÁREZ</span></h1>
          </div>
          <div className="v5-photo-block">
            <img src={profilePhoto} alt={copy.shared.photoAlt} />
            <div><MapPin aria-hidden="true" /> {ui.remote}</div>
          </div>
          <div className="v5-hero-note">
            <p>{profile.intro}</p>
            <a href="#trabajo">{ui.viewProjects} <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </section>

        <div className="v5-marquee" aria-label={ui.workAreas}>
          <div>FRONTEND ✦ WORDPRESS ✦ UI/UX ✦ RESPONSIVE ✦ HOSTING ✦ FRONTEND ✦ WORDPRESS ✦ UI/UX ✦ RESPONSIVE ✦ HOSTING ✦</div>
        </div>

        <section className="v5-work" id="trabajo">
          <div className="v5-title-row"><span>02</span><h2>{ui.selectedWork[0]}<br />{ui.selectedWork[1]}</h2><p>{ui.projectsSummary(projects.length)}</p></div>
          <MonixSpotlight variant="v5" />
          <div className="v5-project-table">
            {standardProjects.map((project, index) => (
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

        <WebDemosV5 />

        <section className="v5-experience" id="experiencia">
          <div className="v5-title-row v5-title-row-dark"><span>04</span><h2>{ui.realExperience[0]}<br />{ui.realExperience[1]}</h2><p>{ui.experienceDescription}</p></div>
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
          <div className="v5-title-row"><span>05</span><h2>{ui.capabilities}</h2><p>{ui.learning(education.certificateCount)}</p></div>
          <div className="v5-capability-grid">
            {skills.map((skill) => <div key={skill.name}><strong>{skill.name}</strong><span>{skill.level}</span><p>{skill.detail}</p></div>)}
          </div>
        </section>
        <VersionGallery />
      </main>

      <footer className="v5-footer" id="contacto">
        <div className="v5-footer-top"><span>06</span><p>{ui.available[0]}<br />{ui.available[1]}</p></div>
        <h2>{ui.talk}<span>↗</span></h2>
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
