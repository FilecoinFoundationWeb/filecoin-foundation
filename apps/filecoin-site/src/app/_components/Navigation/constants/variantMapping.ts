import type { SectionProps } from '@/components/Section'

type VariantMapping = Record<
  SectionProps['backgroundVariant'],
  'light' | 'dark'
>

export const variantMapping = {
  light: 'light',
  gray: 'light',
  transparent: 'light',
  dark: 'dark',
  transparentDark: 'dark',
} satisfies VariantMapping
