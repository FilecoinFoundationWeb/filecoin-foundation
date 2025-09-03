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
    const checkTransifex = () => {
      if (window.Transifex?.live) {
        initializeTransifex()
      } else {
        setTimeout(checkTransifex, 100)
      }
    }

    const initializeTransifex = () => {
      window.Transifex!.live.onFetchLanguages(() => {
        let initialLang: 'en' | 'zh' = 'en'

        const selectedLang = window.Transifex!.live.getSelectedLanguageCode()

        if (selectedLang === 'zh' || selectedLang === 'zh-CN') {
          initialLang = 'zh'
        } else if (selectedLang === 'en') {
          initialLang = 'en'
        } else {
          const browserLang =
            navigator.language || navigator.languages?.[0] || 'en'
          if (browserLang.startsWith('zh')) {
            initialLang = 'zh'
          }
        }

        setLocale(initialLang)

        if (initialLang === 'zh') {
          console.log(' Triggering initial translation to Chinese...')
          setTimeout(() => {
            if (window.Transifex?.live) {
              window.Transifex.live.translateTo('zh', true)
            }
          }, 500)
        }
      })

      window.Transifex!.live.onReady(() => {
        setIsTransifexReady(true)

        const browserLang =
          navigator.language || navigator.languages?.[0] || 'en'
        if (browserLang.startsWith('zh')) {
          setLocale('zh')
          window.Transifex!.live.translateTo('zh', true)
        }
      })

      window.Transifex!.live.onTranslatePage((languageCode) => {
        if (
          languageCode === 'en' ||
          languageCode === 'zh' ||
          languageCode === 'zh-CN'
        ) {
          const mappedLang = languageCode.startsWith('zh') ? 'zh' : 'en'
          setLocale(mappedLang as 'en' | 'zh')
        }
      })
    }

    checkTransifex()
  }, [])

  function handleLanguageChange(newLocale: 'en' | 'zh') {
    if (!isTransifexReady || !window.Transifex?.live) {
      return
    }

    const transifexLangCode = newLocale === 'zh' ? 'zh' : 'en'

    setLocale(newLocale)

    window.Transifex.live.translateTo(transifexLangCode, true)
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
