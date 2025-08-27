import type { SectionProps } from '../Section'

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
