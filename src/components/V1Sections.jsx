import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
} from 'lucide-react'
import { education, experiences, projects, skills, socialLinks } from '../data/portfolio'

const certificateModules = import.meta.glob('../assets/certificados/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

function certificateTitle(path) {
  return path
    .split('/')
    .pop()
    .replace('.png', '')
    .replace(/^diploma-/, '')
    .replace(/-1$|-2-3$|-2020-1$/, '')
    .replaceAll('-', ' ')
    .replace(/\b(html|css|javascript|ecmascript|wordpress)\b/gi, (word) => word.toUpperCase())
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

const certificates = Object.entries(certificateModules)
  .map(([path, image]) => ({ title: certificateTitle(path), image }))
  .sort((a, b) => a.title.localeCompare(b.title, 'es'))

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: ArrowUpRight,
}

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="v1-section-heading">
      <span>{number}</span>
      <div><p>{eyebrow}</p><h2>{title}</h2></div>
      <p>{description}</p>
    </div>
  )
}

export function SkillsEnhanced() {
  return (
    <section id="conocimientos" className="v1-skills-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="01"
          eyebrow="Conocimientos"
          title="Herramientas que convierto en soluciones."
          description="Una combinación práctica de frontend, construcción visual y operación web para llevar un proyecto desde la idea hasta producción."
        />
        <div className="v1-skills-intro">
          <div><strong>12</strong><span>tecnologías y herramientas</span></div>
          <p>No se trata de coleccionar logos: cada herramienta aparece porque ya forma parte de mi flujo de trabajo.</p>
        </div>
        <div className="v1-skills-matrix">
          {skills.map((skill, index) => (
            <article key={skill.name}>
              <div><span>{String(index + 1).padStart(2, '0')}</span><small>{skill.level}</small></div>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
              <div className={`v1-skill-meter level-${skill.level.toLowerCase()}`} aria-label={`Nivel: ${skill.level}`}><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceEnhanced() {
  return (
    <section id="experiencia" className="v1-experience-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="02"
          eyebrow="Experiencia"
          title="Aprendizaje convertido en trabajo real."
          description="Experiencias remotas, proyectos independientes y responsabilidad directa sobre sitios que necesitan seguir funcionando."
        />
        <div className="v1-experience-layout">
          <aside>
            <span className="v1-live-dot" />
            <strong>Trayectoria activa</strong>
            <p>Desde interfaces frontend hasta gestión de hosting, dominios y mantenimiento WordPress.</p>
          </aside>
          <div className="v1-experience-list">
            {experiences.map((experience, index) => (
              <article key={experience.company}>
                <div className="v1-exp-rail"><span>0{index + 1}</span><i /></div>
                <div className="v1-exp-main">
                  <time>{experience.period}</time>
                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>
                </div>
                <ul>
                  {experience.achievements.map((achievement) => <li key={achievement}><CheckCircle2 aria-hidden="true" />{achievement}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectsEnhanced() {
  const featuredProjects = projects.slice(0, 4)
  const archiveProjects = projects.slice(4)

  return (
    <section id="proyectos" className="v1-projects-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="03"
          eyebrow="Proyectos destacados"
          title="Trabajo diseñado para ser usado."
          description="Sitios corporativos, portafolios, contenido y pequeños productos web construidos para objetivos concretos."
        />
        <div className="v1-featured-projects">
          {featuredProjects.map((project, index) => (
            <article key={project.title}>
              <div className="v1-project-visual">
                <span>0{index + 1}</span>
                <strong>{project.category}</strong>
                <div className="v1-project-orbit" aria-hidden="true"><i /><i /><i /></div>
              </div>
              <div className="v1-project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <a href={project.url} target="_blank" rel="noreferrer">Visitar proyecto <ExternalLink aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="v1-project-archive">
          <div><span>Archivo</span><strong>Otros experimentos y proyectos</strong></div>
          {archiveProjects.map((project) => (
            <a href={project.url} target="_blank" rel="noreferrer" key={project.title}>
              <span>{project.category}</span><strong>{project.title}</strong><span>{project.technologies.slice(0, 2).join(' · ')}</span><ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EducationEnhanced() {
  const [currentCertificate, setCurrentCertificate] = useState(0)
  const certificate = certificates[currentCertificate]
  const moveCertificate = (direction) => {
    setCurrentCertificate((current) => (current + direction + certificates.length) % certificates.length)
  }

  return (
    <section id="estudios" className="v1-education-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="04"
          eyebrow="Formación"
          title="La curiosidad también forma parte del stack."
          description="Formación continua en frontend, diseño de interfaces, JavaScript, CSS y construcción de sitios con WordPress."
        />
        <div className="v1-education-layout">
          <article className="v1-degree-card">
            <div><GraduationCap aria-hidden="true" /><span>Formación principal</span></div>
            <p>{education.period}</p>
            <h3>{education.title}</h3>
            <h4>{education.institution}</h4>
            <p>{education.description}</p>
            <div className="v1-certificate-total"><strong>{certificates.length}</strong><span>certificados completados</span></div>
          </article>
          <div className="v1-certificate-viewer">
            <div className="v1-certificate-toolbar">
              <div><Award aria-hidden="true" /><span>Certificado {String(currentCertificate + 1).padStart(2, '0')} / {certificates.length}</span></div>
              <div>
                <button onClick={() => moveCertificate(-1)} aria-label="Certificado anterior"><ChevronLeft /></button>
                <button onClick={() => moveCertificate(1)} aria-label="Siguiente certificado"><ChevronRight /></button>
              </div>
            </div>
            <div className="v1-certificate-image"><img src={certificate.image} alt={certificate.title} /></div>
            <div className="v1-certificate-caption"><span>Platzi</span><h3>{certificate.title}</h3></div>
            <div className="v1-certificate-progress"><span style={{ width: `${((currentCertificate + 1) / certificates.length) * 100}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactEnhanced() {
  return (
    <section id="contacto" className="v1-contact-section">
      <div className="v1-contact-orb" aria-hidden="true" />
      <div className="v1-section-shell">
        <span className="v1-contact-number">05 / Contacto</span>
        <h2>Una buena idea merece una buena ejecución.</h2>
        <p>Estoy disponible para oportunidades laborales, colaboraciones y proyectos web donde pueda aportar criterio visual y técnico.</p>
        <div className="v1-contact-links">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.name] ?? ArrowUpRight
            return <a href={social.url} target="_blank" rel="noreferrer" key={social.name}><Icon aria-hidden="true" /><span>{social.name}<small>{social.label}</small></span><ArrowUpRight aria-hidden="true" /></a>
          })}
        </div>
        <div className="v1-location"><MapPin aria-hidden="true" /><div><span>Ubicación</span><strong>Venezuela · Disponible para trabajo remoto</strong></div></div>
      </div>
    </section>
  )
}
