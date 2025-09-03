'use client'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'

import { useTransifexLive } from './hooks/useTransifexLive'
import { desktopStyle } from './NavigationMainLink'

export function NavigationLanguageToggle() {
  const { languages, locale, isTransifexReady, handleLanguageChange } =
    useTransifexLive()

  return (
    <div className="flex items-center gap-4 font-medium">
      {languages.map(({ key, label, ariaLabel }) => (
        <Button
          key={key}
          type="button"
          aria-label={ariaLabel}
          aria-pressed={locale === key}
          className={clsx(desktopStyle, 'cursor-pointer')}
          disabled={!isTransifexReady}
          onClick={() => handleLanguageChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
