'use client'

import { useState } from 'react'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'

import { desktopStyle } from './NavigationMainLink'

const languages = [
  { key: 'en', label: 'EN', ariaLabel: 'Switch to English' },
  { key: 'zh', label: '中文', ariaLabel: 'Switch to Chinese' },
] as const

export function NavigationLanguageToggle() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en')

  return (
    <div className="flex items-center gap-6 font-medium">
      {languages.map(({ key, label, ariaLabel }) => (
        <Button
          key={key}
          type="button"
          aria-label={ariaLabel}
          aria-current={locale === key}
          className={clsx(desktopStyle, 'focus:brand-outline')}
          onClick={() => setLocale(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}
