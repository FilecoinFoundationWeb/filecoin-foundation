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

export function NavigationLanguageToggle() {
  const [languages, setLanguages] = useState<
    Array<{ key: string; label: string; ariaLabel: string }>
  >([])
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
        console.log('Available languages from Transifex:', availableLanguages)

        const mappedLanguages = availableLanguages.map((lang) => ({
          key: lang.code,
          label: lang.name,
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

  if (languages.length === 0) {
    return (
      <div className="flex items-center gap-6 font-medium">
        <div className="h-6 w-8 animate-pulse rounded bg-gray-200"></div>
        <div className="h-6 w-8 animate-pulse rounded bg-gray-200"></div>
      </div>
    )
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
