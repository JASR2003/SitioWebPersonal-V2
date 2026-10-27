import { useEffect, useMemo, useState } from 'react'
import { interfaceCopy, portfolioContent } from './content'
import { LanguageContext } from './language-context'

const STORAGE_KEY = 'jorge-portfolio-language'

function getInitialLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
    if (savedLanguage === 'es' || savedLanguage === 'en') return savedLanguage
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }

  return 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'es' ? 'Jorge Suárez | Portafolio' : 'Jorge Suárez | Portfolio'
    document.querySelector('meta[name="description"]')?.setAttribute('content', interfaceCopy[language].metaDescription)

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // The language still works for the current page when storage is blocked.
    }
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    content: portfolioContent[language],
    copy: interfaceCopy[language],
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
