import { ArrowRight, Code2, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import profilePic from '../assets/JorgeSuarez.jpg'
import { useLanguage } from '../i18n/language-context'

export function HeroEnhanced() {
  const { content: { profile, stats }, copy } = useLanguage()

  const scrollTo = (selector) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="v1-hero px-6">
      <div className="v1-glow v1-glow-one" aria-hidden="true" />
      <div className="v1-glow v1-glow-two" aria-hidden="true" />
      <div className="v1-hero-grid">
        <div className="v1-hero-copy">
          <div className="v1-availability"><span />{profile.availability}</div>
          <p className="v1-overline"><Sparkles aria-hidden="true" /> {copy.v1.hello}</p>
          <h1>{copy.v1.heroBefore} <span>{copy.v1.heroAccent}</span> {copy.v1.heroAfter}</h1>
          <p className="v1-lead">{profile.intro}</p>
          <div className="v1-hero-actions">
            <button onClick={() => scrollTo('#proyectos')}>{copy.v1.viewProjects} <ArrowRight aria-hidden="true" /></button>
            <button onClick={() => scrollTo('#contacto')}>{copy.v1.talk} <MessageCircle aria-hidden="true" /></button>
          </div>
          <div className="v1-focus-list" aria-label={copy.v1.focusLabel}>
            {copy.v1.focus.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="v1-visual">
          <div className="v1-photo-shell">
            <img src={profilePic} alt={copy.shared.photoAlt} />
            <div className="v1-photo-caption"><strong>{profile.role}</strong><span><MapPin aria-hidden="true" /> {profile.location}</span></div>
          </div>
          <div className="v1-floating-card v1-floating-code"><Code2 aria-hidden="true" /><span>{copy.v1.designCode}</span></div>
          <div className="v1-floating-card v1-floating-status"><span /> {copy.v1.available}</div>
        </div>
      </div>
      <div className="v1-stat-row">
        {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        <a href="#versiones">{copy.v1.exploreVersions} <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}
