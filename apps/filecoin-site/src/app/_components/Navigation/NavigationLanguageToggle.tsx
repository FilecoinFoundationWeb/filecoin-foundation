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

const languages = [
  { key: 'en', label: 'EN', ariaLabel: 'Switch to English' },
  { key: 'zh', label: '中文', ariaLabel: 'Switch to Chinese' },
] as const

export function NavigationLanguageToggle() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en')
  const [isTransifexReady, setIsTransifexReady] = useState(false)

  useEffect(() => {
    if (window.Transifex?.live) {
      window.Transifex.live.onReady(() => {
        setIsTransifexReady(true)

        const currentLang = window.Transifex!.live.getSelectedLanguageCode()
        if (currentLang && (currentLang === 'en' || currentLang === 'zh')) {
          setLocale(currentLang as 'en' | 'zh')
        }
      })

      window.Transifex.live.onTranslatePage((languageCode) => {
        if (languageCode === 'en' || languageCode === 'zh') {
          setLocale(languageCode as 'en' | 'zh')
        }
      })
    }
  }, [])

  const handleLanguageChange = (newLocale: 'en' | 'zh') => {
    if (isTransifexReady && window.Transifex?.live) {
      window.Transifex.live.translateTo(newLocale, true)
    } else {
      setLocale(newLocale)
    }
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
          onClick={() => handleLanguageChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
