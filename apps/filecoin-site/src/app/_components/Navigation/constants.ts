import { PATHS, WHAT_IS_FILECOIN_PATH } from '@/constants/paths'

import type { SectionProps } from '../Section'

export const NAV_LINKS = [
  WHAT_IS_FILECOIN_PATH,
  PATHS.CASE_STUDIES,
  PATHS.STORE_DATA,
  PATHS.PROVIDE_STORAGE,
  PATHS.BUILD_ON_FILECOIN,
  PATHS.COMMUNITY,
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
