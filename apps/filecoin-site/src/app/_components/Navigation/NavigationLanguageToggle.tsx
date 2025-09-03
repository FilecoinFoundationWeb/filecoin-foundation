'use client'

import { Button } from '@headlessui/react'

import { useTransifexLive } from './hooks/useTransifexLive'
import { desktopStyle } from './NavigationMainLink'

export function NavigationLanguageToggle() {
  const { languages, locale, isTransifexReady, handleLanguageChange } =
    useTransifexLive()

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
