'use client'

import { useEffect, useState } from 'react'

import { Button } from '@headlessui/react'

import { desktopStyle } from './NavigationMainLink'

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

const labelMapping: Record<string, string> = {
  en: 'EN',
  zh_CN: '中文',
}

export function NavigationLanguageToggle() {
  const [languages, setLanguages] = useState([
    { key: 'en', label: 'EN', ariaLabel: 'Switch to English' },
    { key: 'zh_CN', label: '中文', ariaLabel: 'Switch to Chinese' },
  ])
  const [locale, setLocale] = useState<string>('en')
  const [isTransifexReady, setIsTransifexReady] = useState(false)

  useEffect(() => {
    const checkTransifex = () => {
      if (window.Transifex?.live) {
        initializeTransifex()
      } else {
        setTimeout(checkTransifex, 100)
      }
    }

    const initializeTransifex = () => {
      window.Transifex!.live.onFetchLanguages((availableLanguages) => {
        console.log('availableLanguages', availableLanguages)
        const mappedLanguages = availableLanguages.map((lang) => ({
          key: lang.code,
          label: labelMapping[lang.code] || lang.name,
          ariaLabel: `Switch to ${lang.name}`,
        }))

        setLanguages(mappedLanguages)

        const sourceLang = window.Transifex!.live.getSourceLanguage()
        const initialLang = sourceLang?.code || 'en'
        setLocale(initialLang)
      })

      window.Transifex!.live.onReady(() => {
        setIsTransifexReady(true)
      })

      window.Transifex!.live.onTranslatePage((languageCode) => {
        setLocale(languageCode)
      })
    }

    checkTransifex()
  }, [])

  function handleLanguageChange(newLocale: string) {
    if (!isTransifexReady || !window.Transifex?.live) {
      return
    }

    setLocale(newLocale)
    window.Transifex.live.translateTo(newLocale, true)
  }

  return (
    <div className="flex items-center gap-6 font-medium">
      {languages.map(({ key, label, ariaLabel }) => (
        <Button
          key={key}
          type="button"
          aria-label={ariaLabel}
          aria-current={locale === key}
          className={desktopStyle}
          disabled={!isTransifexReady}
          onClick={() => handleLanguageChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
