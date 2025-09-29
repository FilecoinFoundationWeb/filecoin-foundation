'use client'

import { useState } from 'react'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'

import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/i18n/locales'

import { desktopStyle } from './NavigationMainLink'

type Languages = Record<Locale, { label: string; name: string }>

export const LANGUAGES: Languages = {
  en: { label: 'EN', name: 'English' },
  zh_CN: { label: '中文', name: 'Chinese' },
}

export function NavigationLanguageToggle() {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(DEFAULT_LOCALE)

  return (
    <div className="flex items-center gap-4 font-medium">
      {LOCALES.map((locale) => {
        const { label, name } = LANGUAGES[locale]

        return (
          <Button
            key={locale}
            type="button"
            aria-label={`Switch site language to ${name}`}
            aria-current={selectedLocale === locale}
            className={clsx(desktopStyle, 'cursor-pointer')}
            onClick={() => setSelectedLocale(locale)}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
