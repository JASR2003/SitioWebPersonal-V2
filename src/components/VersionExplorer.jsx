import { ArrowUpRight, Check } from 'lucide-react'
import { useLanguage } from '../i18n/language-context'

function currentVersion() {
  return document.documentElement.dataset.portfolioVersion ?? 'v1'
}

function versionHref(id) {
  const prefix = currentVersion() === 'v1' ? './' : '../'
  return id === 'v1' ? prefix : `${prefix}${id}/`
}

export function VersionMenu() {
  const activeVersion = currentVersion()
  const { copy } = useLanguage()
  const { versions } = copy.shared

  return (
    <details className="version-menu" name="navigation-menu">
      <summary>{copy.shared.versionsLabel} <span aria-hidden="true">＋</span></summary>
      <div className="version-menu-panel">
        {versions.map((version) => (
          <a key={version.id} href={versionHref(version.id)} aria-current={activeVersion === version.id ? 'page' : undefined}>
            <span>{version.number}</span>
            <strong>{version.name}</strong>
            {activeVersion === version.id && <Check aria-label={copy.shared.currentVersion} />}
          </a>
        ))}
      </div>
    </details>
  )
}

export function MobileSectionMenu({ links }) {
  const { copy } = useLanguage()

  return (
    <details className="mobile-section-menu" name="navigation-menu">
      <summary>{copy.shared.menu} <span aria-hidden="true">＋</span></summary>
      <div className="mobile-section-menu-panel">
        {links.map((link, index) => (
          <a href={link.href} key={link.href}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{link.label}</strong>
          </a>
        ))}
      </div>
    </details>
  )
}

export function VersionGallery() {
  const activeVersion = currentVersion()
  const { copy } = useLanguage()
  const { versions } = copy.shared

  return (
    <section className="version-gallery" id="versiones" aria-labelledby="version-gallery-title">
      <div className="version-gallery-heading">
        <span>{copy.shared.gallery.eyebrow}</span>
        <h2 id="version-gallery-title">{copy.shared.gallery.title}</h2>
        <p>{copy.shared.gallery.description}</p>
      </div>
      <div className="version-gallery-grid">
        {versions.map((version) => {
          const isActive = activeVersion === version.id
          return (
            <a className={isActive ? 'is-current' : ''} href={versionHref(version.id)} key={version.id} aria-current={isActive ? 'page' : undefined}>
              <div><span>{version.number}</span>{isActive && <small>{copy.shared.youAreHere}</small>}</div>
              <h3>{version.name}</h3>
              <p>{version.description}</p>
              <ArrowUpRight aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
