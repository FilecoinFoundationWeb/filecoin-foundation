import { useEffect, useState } from 'react'

// Type definitions
declare global {
  interface Window {
    Transifex?: {
      live: {
        onFetchLanguages: (callback: (languages: any[]) => void) => void
        onTranslatePage: (callback: (languageCode: string) => void) => void
        translateTo: (languageCode: string, reload?: boolean) => void
        getSelectedLanguageCode: () => string
        getSourceLanguage: () => { code: string; name: string }
        getLanguageName: (code: string) => string
        onReady: (callback: () => void) => void
      }
    }
  }
}

type Language = {
  key: string
  label: string
  ariaLabel: string
}

type UseTransifexLiveReturn = {
  languages: Language[]
  locale: string
  isTransifexReady: boolean
  handleLanguageChange: (newLocale: string) => void
}

const DEFAULT_LANGUAGE = 'en'

const LANGUAGE_CONFIG = {
  en: { label: 'EN', name: 'English' },
  zh_CN: { label: '中文', name: 'Chinese' },
} as const

const getDefaultLanguages = (): Language[] =>
  Object.entries(LANGUAGE_CONFIG).map(([key, { label, name }]) => ({
    key,
    label,
    ariaLabel: `Switch to ${name}`,
  }))

export function useTransifexLive(): UseTransifexLiveReturn {
  const [languages, setLanguages] = useState<Language[]>(getDefaultLanguages())

  const [locale, setLocale] = useState<string>(DEFAULT_LANGUAGE)
  const [isTransifexReady, setIsTransifexReady] = useState(false)

  const transifex = window.Transifex?.live

  useEffect(() => {
    const waitForTransifex = () => {
      if (transifex) {
        setupTransifex()
      } else {
        setTimeout(waitForTransifex, 100)
      }
    }

    const setupTransifex = () => {
      const transifex = window.Transifex!.live

      transifex.onFetchLanguages((availableLanguages) => {
        const formattedLanguages = availableLanguages.map((lang) => ({
          key: lang.code,
          label:
            LANGUAGE_CONFIG[lang.code as keyof typeof LANGUAGE_CONFIG]?.label ||
            lang.name,
          ariaLabel: `Switch to ${lang.name}`,
        }))
        setLanguages(formattedLanguages)

        const sourceLang = transifex.getSourceLanguage()
        setLocale(sourceLang?.code || DEFAULT_LANGUAGE)
      })

      transifex.onReady(() => setIsTransifexReady(true))

      transifex.onTranslatePage((languageCode) => setLocale(languageCode))
    }

    waitForTransifex()
  }, [transifex])

  const handleLanguageChange = (newLocale: string) => {
    if (!isTransifexReady || !transifex) return

    setLocale(newLocale)
    transifex.translateTo(newLocale, true)
  }

  return {
    languages,
    locale,
    isTransifexReady,
    handleLanguageChange,
  }
}
