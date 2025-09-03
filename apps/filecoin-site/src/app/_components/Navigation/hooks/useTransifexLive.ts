import { useEffect, useState } from 'react'

type Language = {
  key: string
  label: string
  ariaLabel: string
}

type LanguageConfig = {
  label: string
  name: string
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
} as const satisfies Record<string, LanguageConfig>

const DEFAULT_LANGUAGE: keyof typeof LANGUAGE_CONFIG = 'en'

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

    waitForTransifex()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  function setupTransifex() {
    if (!window.Transifex?.live) return
    const transifex = window.Transifex.live

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

function getDefaultLanguages() {
  return Object.entries(LANGUAGE_CONFIG).map(
    ([languageCode, languageConfig]) => ({
      key: languageCode,
      label: languageConfig.label,
      ariaLabel: `Switch to ${languageConfig.name}`,
    }),
  )
}
