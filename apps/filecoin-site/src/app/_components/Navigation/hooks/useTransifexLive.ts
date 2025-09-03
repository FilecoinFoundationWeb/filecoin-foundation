import { useEffect, useState } from 'react'

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
  languages: Array<Language>
  locale: string
  isTransifexReady: boolean
  handleLanguageChange: (newLocale: string) => void
}

const LANGUAGE_CONFIG = {
  en: { label: 'EN', name: 'English' },
  zh_CN: { label: '中文', name: 'Chinese' },
} as const

const DEFAULT_LANGUAGE = 'en'

function getDefaultLanguages() {
  return Object.entries(LANGUAGE_CONFIG).map(
    ([languageCode, languageConfig]) => ({
      key: languageCode,
      label: languageConfig.label,
      ariaLabel: `Switch to ${languageConfig.name}`,
    }),
  )
}

export function useTransifexLive(): UseTransifexLiveReturn {
  const [languages, setLanguages] = useState<Array<Language>>(
    getDefaultLanguages(),
  )
  const [locale, setLocale] = useState<string>(DEFAULT_LANGUAGE)
  const [isTransifexReady, setIsTransifexReady] = useState(false)

  useEffect(() => {
    let timeoutId: number | null = null

    function waitForTransifex() {
      if (window.Transifex?.live) {
        setupTransifex()
      } else {
        timeoutId = window.setTimeout(waitForTransifex, 100)
      }
    }

    function setupTransifex() {
      const transifex = window.Transifex!.live

      transifex.onFetchLanguages((availableLanguages) => {
        const formattedLanguages = availableLanguages.map((lang) => ({
          key: lang.code,
          label:
            LANGUAGE_CONFIG[lang.code as keyof typeof LANGUAGE_CONFIG]?.label ||
            lang.name,
          ariaLabel: `Switch to ${
            LANGUAGE_CONFIG[lang.code as keyof typeof LANGUAGE_CONFIG]?.name ||
            lang.name
          }`,
        }))
        setLanguages(formattedLanguages)

        const sourceLang = transifex.getSourceLanguage()
        setLocale(sourceLang?.code || DEFAULT_LANGUAGE)
      })

      transifex.onReady(() => setIsTransifexReady(true))
      transifex.onTranslatePage((languageCode) => setLocale(languageCode))
    }

    waitForTransifex()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  function handleLanguageChange(newLocale: string) {
    if (!isTransifexReady || !window.Transifex?.live) return

    setLocale(newLocale)
    window.Transifex.live.translateTo(newLocale, true)
  }

  return {
    languages,
    locale,
    isTransifexReady,
    handleLanguageChange,
  }
}
