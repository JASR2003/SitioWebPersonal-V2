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
import { socialLinks } from '../data/portfolio'
import { certificateTitles } from '../i18n/content'
import { useLanguage } from '../i18n/language-context'
import { MonixSpotlight } from './MonixSpotlight'

const certificateModules = import.meta.glob('../assets/certificados/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

function certificateSlug(path) {
  return path
    .split('/')
    .pop()
    .replace('.png', '')
    .replace(/^diploma-/, '')
    .replace(/-1$|-2-3$|-2020-1$/, '')
}

function certificateTitle(slug) {
  return slug
    .replaceAll('-', ' ')
    .replace(/\b(html|css|javascript|ecmascript|wordpress)\b/gi, (word) => word.toUpperCase())
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

const certificates = Object.entries(certificateModules)
  .map(([path, image]) => {
    const slug = certificateSlug(path)
    return { slug, title: certificateTitle(slug), image }
  })
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
  const { content: { skills }, copy } = useLanguage()

  return (
    <section id="conocimientos" className="v1-skills-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="03"
          eyebrow={copy.v1.skills.eyebrow}
          title={copy.v1.skills.title}
          description={copy.v1.skills.description}
        />
        <div className="v1-skills-intro">
          <div><strong>{skills.length}</strong><span>{copy.v1.skills.count}</span></div>
          <p>{copy.v1.skills.intro}</p>
        </div>
        <div className="v1-skills-matrix">
          {skills.map((skill, index) => (
            <article key={skill.name}>
              <div><span>{String(index + 1).padStart(2, '0')}</span><small>{skill.level}</small></div>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
              <div
                className={`v1-skill-meter level-${['Avanzado', 'Advanced'].includes(skill.level) ? 'avanzado' : ['Intermedio', 'Intermediate'].includes(skill.level) ? 'intermedio' : 'basico'}`}
                aria-label={`${copy.v1.skills.level}: ${skill.level}`}
              ><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceEnhanced() {
  const { content: { experiences }, copy } = useLanguage()

  return (
    <section id="experiencia" className="v1-experience-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="02"
          eyebrow={copy.v1.experience.eyebrow}
          title={copy.v1.experience.title}
          description={copy.v1.experience.description}
        />
        <div className="v1-experience-layout">
          <aside>
            <span className="v1-live-dot" />
            <strong>{copy.v1.experience.active}</strong>
            <p>{copy.v1.experience.activeDescription}</p>
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
  const { content: { projects }, copy } = useLanguage()
  const standardProjects = projects.filter((project) => !project.isSpotlight)
  const featuredProjects = standardProjects.slice(0, 4)
  const archiveProjects = standardProjects.slice(4)

  return (
    <section id="proyectos" className="v1-projects-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="01"
          eyebrow={copy.v1.projects.eyebrow}
          title={copy.v1.projects.title}
          description={copy.v1.projects.description}
        />
        <MonixSpotlight variant="v1" />
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
                <a href={project.url} target="_blank" rel="noreferrer">{copy.v1.projects.visit} <ExternalLink aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="v1-project-archive">
          <div><span>{copy.v1.projects.archive}</span><strong>{copy.v1.projects.archiveTitle}</strong></div>
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
  const { language, content: { education }, copy } = useLanguage()
  const [currentCertificate, setCurrentCertificate] = useState(0)
  const certificate = certificates[currentCertificate]
  const localizedCertificateTitle = language === 'en' ? certificateTitles.en[certificate.slug] ?? certificate.title : certificate.title
  const moveCertificate = (direction) => {
    setCurrentCertificate((current) => (current + direction + certificates.length) % certificates.length)
  }

  return (
    <section id="estudios" className="v1-education-section">
      <div className="v1-section-shell">
        <SectionHeading
          number="04"
          eyebrow={copy.v1.education.eyebrow}
          title={copy.v1.education.title}
          description={copy.v1.education.description}
        />
        <div className="v1-education-layout">
          <article className="v1-degree-card">
            <div><GraduationCap aria-hidden="true" /><span>{copy.v1.education.main}</span></div>
            <p>{education.period}</p>
            <h3>{education.title}</h3>
            <h4>{education.institution}</h4>
            <p>{education.description}</p>
            <div className="v1-certificate-total"><strong>{certificates.length}</strong><span>{copy.v1.education.completed}</span></div>
          </article>
          <div className="v1-certificate-viewer">
            <div className="v1-certificate-toolbar">
              <div><Award aria-hidden="true" /><span>{copy.v1.education.certificate} {String(currentCertificate + 1).padStart(2, '0')} / {certificates.length}</span></div>
              <div>
                <button onClick={() => moveCertificate(-1)} aria-label={copy.v1.education.previous}><ChevronLeft /></button>
                <button onClick={() => moveCertificate(1)} aria-label={copy.v1.education.next}><ChevronRight /></button>
              </div>
            </div>
            <div className="v1-certificate-image"><img src={certificate.image} alt={localizedCertificateTitle} /></div>
            <div className="v1-certificate-caption"><span>Platzi</span><h3>{localizedCertificateTitle}</h3></div>
            <div className="v1-certificate-progress"><span style={{ width: `${((currentCertificate + 1) / certificates.length) * 100}%` }} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactEnhanced() {
  const { copy } = useLanguage()

  return (
    <section id="contacto" className="v1-contact-section">
      <div className="v1-contact-orb" aria-hidden="true" />
      <div className="v1-section-shell">
        <span className="v1-contact-number">{copy.v1.contact.label}</span>
        <h2>{copy.v1.contact.title}</h2>
        <p>{copy.v1.contact.description}</p>
        <div className="v1-contact-links">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.name] ?? ArrowUpRight
            return <a href={social.url} target="_blank" rel="noreferrer" key={social.name}><Icon aria-hidden="true" /><span>{social.name}<small>{social.label}</small></span><ArrowUpRight aria-hidden="true" /></a>
          })}
        </div>
        <div className="v1-location"><MapPin aria-hidden="true" /><div><span>{copy.v1.contact.location}</span><strong>{copy.v1.contact.remote}</strong></div></div>
      </div>
    </section>
  )
}
