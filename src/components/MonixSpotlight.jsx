import { ArrowUpRight, CheckCircle2, Smartphone } from 'lucide-react'
import monixIcon from '../assets/monix/icon.png'
import monixLogo from '../assets/monix/logo-on-dark.png'
import calculatorScreenshot from '../assets/monix/calculator.webp'
import converterScreenshot from '../assets/monix/converter.webp'
import ratesScreenshot from '../assets/monix/rates.webp'
import historyScreenshot from '../assets/monix/history.webp'
import { useLanguage } from '../i18n/language-context'

const screenshots = [
  calculatorScreenshot,
  converterScreenshot,
  ratesScreenshot,
  historyScreenshot,
]

export function MonixSpotlight({ variant }) {
  const { content: { projects } } = useLanguage()
  const project = projects.find((item) => item.slug === 'monix')

  if (!project) return null

  const titleId = `monix-title-${variant}`

  return (
    <article className={`monix-spotlight monix-spotlight-${variant}`} aria-labelledby={titleId}>
      <div className="monix-spotlight-copy">
        <div className="monix-spotlight-meta">
          <img src={monixIcon} alt={project.iconAlt} />
          <div>
            <span>{project.badge}</span>
            <small><Smartphone aria-hidden="true" /> Android · Google Play</small>
          </div>
        </div>

        <img className="monix-spotlight-logo" src={monixLogo} alt={`${project.title} — ${project.tagline}`} />
        <h3 id={titleId} className="monix-visually-hidden">{project.title}</h3>
        <p className="monix-spotlight-tagline">“{project.tagline}”</p>
        <p className="monix-spotlight-description">{project.description}</p>

        <ul className="monix-feature-list">
          {project.features.map((feature) => (
            <li key={feature}><CheckCircle2 aria-hidden="true" />{feature}</li>
          ))}
        </ul>

        <div className="monix-spotlight-footer">
          <div>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.storeLabel} <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="monix-screenshot-gallery" aria-label={project.galleryLabel}>
        {screenshots.map((screenshot, index) => (
          <figure key={screenshot}>
            <img src={screenshot} alt={project.screenshotAlts[index]} loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  )
}
