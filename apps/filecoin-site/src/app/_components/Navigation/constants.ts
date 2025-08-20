import { PATHS } from '@/constants/paths'

import type { SectionProps } from '../Section'

// This is still used by the mobile navigation, will be deleted once everthing uses navigationBis
export const NAV_LINKS = [
  PATHS.BUILD_ON_FILECOIN,
  PATHS.STORE_DATA,
  PATHS.PROVIDE_STORAGE,
  PATHS.LEARN,
  PATHS.BLOG,
] as const

type VariantMapping = Record<
  SectionProps['backgroundVariant'],
  'light' | 'dark'
>

export const variantMapping: VariantMapping = {
  light: 'light',
  gray: 'light',
  transparent: 'light',
  dark: 'dark',
  transparentDark: 'dark',
}
