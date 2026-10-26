import { ArrowRight, Code2, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import profilePic from '../assets/JorgeSuarez.jpg'
import { profile, stats } from '../data/portfolio'

export function HeroEnhanced() {
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
          <p className="v1-overline"><Sparkles aria-hidden="true" /> Hola, soy Jorge Suárez</p>
          <h1>Creo experiencias web que se sienten <span>claras</span> y funcionan de verdad.</h1>
          <p className="v1-lead">{profile.intro}</p>
          <div className="v1-hero-actions">
            <button onClick={() => scrollTo('#proyectos')}>Ver proyectos <ArrowRight aria-hidden="true" /></button>
            <button onClick={() => scrollTo('#contacto')}>Hablemos <MessageCircle aria-hidden="true" /></button>
          </div>
          <div className="v1-focus-list" aria-label="Áreas principales">
            <span>Frontend</span><span>WordPress</span><span>Diseño responsive</span>
          </div>
        </div>
        <div className="v1-visual">
          <div className="v1-photo-shell">
            <img src={profilePic} alt="Retrato de Jorge Suárez" />
            <div className="v1-photo-caption"><strong>{profile.role}</strong><span><MapPin aria-hidden="true" /> {profile.location}</span></div>
          </div>
          <div className="v1-floating-card v1-floating-code"><Code2 aria-hidden="true" /><span>Diseño + código</span></div>
          <div className="v1-floating-card v1-floating-status"><span /> Disponible</div>
        </div>
      </div>
      <div className="v1-stat-row">
        {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        <a href="#versiones">Explorar las 5 versiones <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}
