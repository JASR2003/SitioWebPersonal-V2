import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { getWebDemos, webDemosCatalogUrl, webDemosCopy } from '../data/webDemos'
import { useLanguage } from '../i18n/language-context'
import './web-demos.css'

function useDemoContent() {
  const { language } = useLanguage()
  const locale = language === 'es' ? 'es' : 'en'
  return { demos: getWebDemos(locale), ui: webDemosCopy[locale] }
}

function DemoLink({ demo, className = '', children }) {
  const { ui } = useDemoContent()
  return (
    <a className={className} href={demo.url} target="_blank" rel="noopener noreferrer" aria-label={ui.external(demo.title)}>
      {children}
    </a>
  )
}

function CatalogLink({ className = '', children }) {
  const { ui } = useDemoContent()
  return (
    <a className={className} href={webDemosCatalogUrl} target="_blank" rel="noopener noreferrer" aria-label={ui.catalogExternal}>
      {children}
    </a>
  )
}

function CatalogGateway({ className = '' }) {
  const { ui } = useDemoContent()
  return (
    <CatalogLink className={`web-demo-catalog-gateway ${className}`}>
      <span>00</span>
      <div><small>{ui.catalogLabel}</small><strong>{ui.catalogTitle}</strong><code>{ui.catalogRoute}</code><p>{ui.catalogDescription}</p></div>
      <ArrowUpRight aria-hidden="true" />
    </CatalogLink>
  )
}

function DemoPreview({ demo, className = '' }) {
  return (
    <div
      className={`web-demo-preview ${className}`}
      style={{ '--demo-accent': demo.accent, '--demo-soft': demo.soft }}
    >
      {demo.thumbnail ? (
        <img src={demo.thumbnail} alt={demo.thumbnailAlt} width="1200" height="750" loading="lazy" />
      ) : (
        <div className="web-demo-generated-preview" role="img" aria-label={demo.thumbnailAlt}>
          <span>{demo.brand.slice(0, 1)}</span><strong>{demo.brand}</strong><small>{demo.format}</small>
        </div>
      )}
      <span className="web-demo-preview-label">{demo.brand}</span>
    </div>
  )
}

export function WebDemosV1() {
  const { demos, ui } = useDemoContent()
  return (
    <section className="v1-web-demos" id="web-demos" aria-labelledby="v1-web-demos-title">
      <div className="v1-section-shell">
        <div className="v1-demo-heading">
          <span>01B</span><div><p>{ui.eyebrow}</p><h2 id="v1-web-demos-title">{ui.title}</h2></div><p>{ui.intro}</p>
        </div>
        <CatalogGateway className="v1-demo-gateway" />
        <div className="v1-demo-grid">
          {demos.map((demo, index) => (
            <article key={demo.id} className={`v1-demo-card v1-demo-card-${index + 1}`}>
              <DemoPreview demo={demo} />
              <div className="v1-demo-card-copy">
                <div><span>{demo.category}</span><span>{demo.format}</span></div>
                <h3>{demo.title}</h3><p>{demo.description}</p>
                <div className="v1-demo-card-footer"><small>{ui.sections(demo.availableSections.length)}</small><DemoLink demo={demo}>{ui.visit} <ArrowUpRight aria-hidden="true" /></DemoLink></div>
              </div>
            </article>
          ))}
        </div>
        <CatalogLink className="v1-demo-catalog-cta">{ui.catalog}<ArrowRight aria-hidden="true" /></CatalogLink>
      </div>
    </section>
  )
}

export function WebDemosV2() {
  const { demos, ui } = useDemoContent()
  return (
    <section className="v2-web-demos" id="demos" aria-labelledby="v2-web-demos-title">
      <div className="v2-demo-intro"><p>02 / {ui.eyebrow}</p><h2 id="v2-web-demos-title">{ui.title}</h2><div><p>{ui.intro}</p></div></div>
      <CatalogGateway className="v2-demo-gateway" />
      <div className="v2-demo-editorial-grid">
        {demos.map((demo, index) => (
          <article key={demo.id}>
            <DemoPreview demo={demo} />
            <div><span>{String(index + 1).padStart(2, '0')} / {demo.clientType}</span><h3>{demo.title}</h3><p>{demo.description}</p><DemoLink demo={demo}>{ui.visit}<ArrowUpRight aria-hidden="true" /></DemoLink></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WebDemosV3() {
  const { demos, ui } = useDemoContent()
  return (
    <section className="v3-web-demos" id="demos" aria-labelledby="v3-web-demos-title">
      <div className="v3-section-title"><p><span>$</span> ls ./client-demos</p><h2 id="v3-web-demos-title">{ui.title}</h2></div>
      <div className="v3-demo-terminal">
        <div className="v3-demo-terminal-head"><span>demo-index.json</span><span>{demos.length} demos</span></div>
        <p className="v3-demo-terminal-intro">// {ui.intro}</p>
        <div className="v3-demo-terminal-list">
          <CatalogGateway className="v3-demo-gateway" />
          {demos.map((demo, index) => (
            <div key={demo.id}><code>{String(index + 1).padStart(2, '0')}</code><span>{demo.category}</span><strong>{demo.brand}</strong><small>{demo.format}</small><DemoLink demo={demo}>open <ExternalLink aria-hidden="true" /></DemoLink></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WebDemosV4() {
  const { demos, ui } = useDemoContent()
  return (
    <section className="v4-web-demos" id="demos" aria-labelledby="v4-web-demos-title">
      <div className="v4-heading"><span>02</span><div><p>{ui.eyebrow}</p><h2 id="v4-web-demos-title">{ui.title}</h2></div></div>
      <div className="v4-demo-intro"><p>{ui.intro}</p></div>
      <CatalogGateway className="v4-demo-gateway" />
      <div className="v4-demo-bento">
        {demos.map((demo, index) => (
          <article key={demo.id} className={`v4-demo-card v4-demo-card-${index + 1}`} style={{ '--demo-accent': demo.accent, '--demo-soft': demo.soft }}>
            <DemoPreview demo={demo} /><div><span>{demo.clientType}</span><h3>{demo.title}</h3><p>{demo.description}</p><DemoLink demo={demo}>{ui.visit}<ArrowUpRight aria-hidden="true" /></DemoLink></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WebDemosV5() {
  const { demos, ui } = useDemoContent()
  return (
    <section className="v5-web-demos" id="demos" aria-labelledby="v5-web-demos-title">
      <div className="v5-title-row"><span>03</span><h2 id="v5-web-demos-title">WEB<br />DEMOS</h2><p>{ui.intro}</p></div>
      <CatalogGateway className="v5-demo-gateway" />
      <div className="v5-demo-index">
        {demos.map((demo, index) => (
          <article key={demo.id} style={{ '--demo-accent': demo.accent }}>
            <span>{String(index + 1).padStart(2, '0')}</span><div><small>{demo.clientType}</small><h3>{demo.title}</h3></div><p>{demo.format}</p><DemoLink demo={demo}>{ui.visit}<ArrowUpRight aria-hidden="true" /></DemoLink>
          </article>
        ))}
      </div>
      <CatalogLink className="v5-demo-catalog">{ui.catalog}<ArrowUpRight aria-hidden="true" /></CatalogLink>
    </section>
  )
}

