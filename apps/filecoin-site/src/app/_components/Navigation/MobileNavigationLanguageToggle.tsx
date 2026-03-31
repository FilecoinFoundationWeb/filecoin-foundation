'use client'

import { routing } from '@/i18n/routing'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'

import { mobileStyle } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

import { LANGUAGES } from './constants/languages'
import { useLanguageToggle } from './hooks/useLanguageToggle'

export function MobileNavigationLanguageToggle() {
  const { currentLocale, switchLocale } = useLanguageToggle()

  return (
    <div className="flex items-center gap-8 font-medium">
      {routing.locales.map((locale) => {
        const { label, name } = LANGUAGES[locale]

        return (
          <Button
            key={locale}
            type="button"
            aria-label={`Switch site language to ${name}`}
            aria-current={currentLocale === locale}
            className={clsx(mobileStyle, 'cursor-pointer')}
            onClick={() => switchLocale(locale)}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
