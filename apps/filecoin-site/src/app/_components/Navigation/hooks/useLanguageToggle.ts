import { useRouter, usePathname } from '@/i18n/navigation'
import { type Locale } from '@/i18n/types'

import { useLocale } from 'next-intl'

export function useLanguageToggle() {
  const currentLocale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(locale: Locale) {
    router.replace(pathname, { locale })
  }

  return { currentLocale, switchLocale }
}
