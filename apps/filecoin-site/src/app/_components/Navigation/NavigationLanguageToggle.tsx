'use client'

import { useState } from 'react'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'

import { desktopStyle } from './NavigationMainLink'

const LANGUAGES = [
  { key: 'en', label: 'EN', name: 'English' },
  { key: 'zh_CN', label: '中文', name: 'Chinese' },
] as const

type Language = (typeof LANGUAGES)[number]

export function NavigationLanguageToggle() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    LANGUAGES[0],
  )

  return (
    <div className="flex items-center gap-4 font-medium">
      {LANGUAGES.map((language) => {
        const { key, label, name } = language

        return (
          <Button
            key={key}
            type="button"
            aria-label={`Switch site language to ${name}`}
            aria-current={selectedLanguage.key === key}
            className={clsx(desktopStyle, 'cursor-pointer')}
            onClick={() => setSelectedLanguage(language)}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
