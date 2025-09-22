import { useEffect, useState, useRef, useCallback } from 'react'

type Locale = 'en' | 'zh_CN'

type Language = {
  key: Locale
  label: string
  name: string
}

type TransifexLive = NonNullable<Window['Transifex']>['live']

const LANGUAGE_CONFIG = [
  { key: 'en', label: 'EN', name: 'English' },
  { key: 'zh_CN', label: '中文', name: 'Chinese' },
] as const satisfies Array<Language>

type LanguageState = {
  languages: Array<Language>
  locale: Locale
  isTransifexReady: boolean
}

export function useTransifexLive() {
  const [languageState, setLanguageState] = useState<LanguageState>({
    languages: LANGUAGE_CONFIG,
    locale: LANGUAGE_CONFIG[0].key,
    isTransifexReady: false,
  })
  const transifex = useWindowTransifex()

  useEffect(() => {
    transifex?.onReady(() => {
      setLanguageState((prev) => ({ ...prev, isTransifexReady: true }))
    })

    transifex?.onTranslatePage((languageCode) => {
      const config = LANGUAGE_CONFIG.find((lang) => lang.key === languageCode)

      setLanguageState((prev) => ({
        ...prev,
        locale: config?.key || prev.locale,
      }))
    })
  }, [transifex])

  useEffect(() => {
    transifex?.translateNode(document.body)
  }, [transifex, languageState.locale])

  return {
    ...languageState,
    handleLanguageChange: (newLocale: Locale) => {
      transifex?.translateTo(newLocale, true)
    },
  }
}

function useWindowTransifex() {
  const [transifex, setTransifex] = useState<TransifexLive | undefined>()
  const timeoutRef = useRef<number | null>(null)

  const waitForTransifex = useCallback(() => {
    if (window.Transifex?.live) {
      setTransifex(window.Transifex.live)
    } else {
      timeoutRef.current = window.setTimeout(waitForTransifex, 250)
    }
  }, [])

  useEffect(() => {
    waitForTransifex()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [waitForTransifex])

  return transifex
}
