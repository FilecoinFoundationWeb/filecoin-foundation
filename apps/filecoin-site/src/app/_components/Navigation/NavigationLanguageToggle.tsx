'use client'

import { routing } from '@/i18n/routing'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'

import { desktopStyle } from '@filecoin-foundation/ui-filecoin/Navigation/NavigationMainLink'

import { LANGUAGES } from './constants/languages'
import { useLanguageToggle } from './hooks/useLanguageToggle'

const variants = {
  compact: 'gap-4',
  relaxed: 'gap-8',
}

type NavigationLanguageToggleProps = {
  variant?: keyof typeof variants
}

export function NavigationLanguageToggle({
  variant = 'compact',
}: NavigationLanguageToggleProps) {
  const { currentLocale, switchLocale } = useLanguageToggle()

  return (
    <div className={clsx(variants[variant], 'flex items-center font-medium')}>
      {routing.locales.map((locale) => {
        const { label, name } = LANGUAGES[locale]

        return (
          <Button
            key={locale}
            type="button"
            aria-label={`Switch site language to ${name}`}
            aria-current={currentLocale === locale}
            className={clsx(desktopStyle, 'cursor-pointer')}
            onClick={() => switchLocale(locale)}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
