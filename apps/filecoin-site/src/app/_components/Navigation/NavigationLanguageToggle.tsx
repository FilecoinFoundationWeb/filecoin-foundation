'use client'

import { Button } from '@headlessui/react'
import { clsx } from 'clsx'
import { useLocale } from 'next-intl'

import { LOCALES, type Locale } from '@/i18n/locales'
import { useRouter, usePathname } from '@/i18n/navigation'

import { desktopStyle } from './NavigationMainLink'

type Languages = Record<Locale, { label: string; name: string }>

export const LANGUAGES: Languages = {
  en: { label: 'EN', name: 'English' },
  ['zh-cn']: { label: '中文', name: 'Chinese' },
}

export function NavigationLanguageToggle() {
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-4 font-medium">
      {LOCALES.map((locale) => {
        const { label, name } = LANGUAGES[locale]

        return (
          <Button
            key={locale}
            type="button"
            aria-label={`Switch site language to ${name}`}
            aria-current={currentLocale === locale}
            className={clsx(desktopStyle, 'cursor-pointer')}
            onClick={() => {
              // setSelectedLocale(locale)
              router.replace(pathname, { locale })
            }}
          >
            {label}
          </Button>
        )
      })}
    </div>
  )
}
