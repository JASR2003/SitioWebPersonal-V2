import { ArrowUpRight, Check } from 'lucide-react'

const versions = [
  { id: 'v1', number: '01', name: 'Original refinada', description: 'Oscura, tecnológica y centrada en una lectura directa del perfil.' },
  { id: 'v2', number: '02', name: 'Editorial', description: 'Tipografía expresiva, ritmo de revista y protagonismo del contenido.' },
  { id: 'v3', number: '03', name: 'Developer console', description: 'Una interfaz técnica inspirada en terminales y herramientas de desarrollo.' },
  { id: 'v4', number: '04', name: 'Creative studio', description: 'Color, módulos y una personalidad visual cercana a un estudio digital.' },
  { id: 'v5', number: '05', name: 'Swiss brutalist', description: 'Una composición gráfica directa, estructural y de alto contraste.' },
]

function currentVersion() {
  return document.documentElement.dataset.portfolioVersion ?? 'v1'
}

function versionHref(id) {
  const prefix = currentVersion() === 'v1' ? './' : '../'
  return id === 'v1' ? prefix : `${prefix}${id}/`
}

export function VersionMenu() {
  const activeVersion = currentVersion()

  return (
    <details className="version-menu">
      <summary>Versiones <span aria-hidden="true">＋</span></summary>
      <div className="version-menu-panel">
        {versions.map((version) => (
          <a key={version.id} href={versionHref(version.id)} aria-current={activeVersion === version.id ? 'page' : undefined}>
            <span>{version.number}</span>
            <strong>{version.name}</strong>
            {activeVersion === version.id && <Check aria-label="Versión actual" />}
          </a>
        ))}
      </div>
    </details>
  )
}

export function VersionGallery() {
  const activeVersion = currentVersion()

  return (
    <section className="version-gallery" id="versiones" aria-labelledby="version-gallery-title">
      <div className="version-gallery-heading">
        <span>Explorar</span>
        <h2 id="version-gallery-title">Cinco formas de contar la misma historia.</h2>
        <p>Cada versión utiliza el mismo perfil profesional con una dirección visual y una experiencia diferente.</p>
      </div>
      <div className="version-gallery-grid">
        {versions.map((version) => {
          const isActive = activeVersion === version.id
          return (
            <a className={isActive ? 'is-current' : ''} href={versionHref(version.id)} key={version.id} aria-current={isActive ? 'page' : undefined}>
              <div><span>{version.number}</span>{isActive && <small>Estás aquí</small>}</div>
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
