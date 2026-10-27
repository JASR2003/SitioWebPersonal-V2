import { useLanguage } from './language-context'

export function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, copy } = useLanguage()
  const targetLanguage = language === 'es' ? 'en' : 'es'
  const targetLanguageName = targetLanguage === 'es' ? copy.shared.spanish : copy.shared.english

  return (
    <button
      className={`language-switcher ${className}`.trim()}
      type="button"
      role="switch"
      aria-checked={language === 'en'}
      aria-label={copy.shared.switchTo(targetLanguageName)}
      title={copy.shared.switchTo(targetLanguageName)}
      data-language={language}
      onClick={() => setLanguage(targetLanguage)}
    >
      <span className={language === 'es' ? 'is-active' : ''}>ES</span>
      <span className="language-switcher-track" aria-hidden="true"><i /></span>
      <span className={language === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}
