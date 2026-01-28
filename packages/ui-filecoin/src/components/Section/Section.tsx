import { use } from 'react'

import { clsx } from 'clsx'

import {
  BackgroundVariantContext,
  BackgroundVariantProvider,
} from './BackgroundVariantProvider'

export type BackgroundVariant = keyof typeof backgroundVariants

export type SectionProps = {
  backgroundVariant: BackgroundVariant
  as?: React.ElementType
  children: React.ReactNode
}

export const backgroundVariants = {
  dark: 'dark-section bg-zinc-950',
  gray: 'light-section gray-section bg-gray-200',
  light: 'light-section bg-white',
  transparent: 'light-section bg-transparent',
  transparentDark: 'dark-section bg-transparent',
} as const

export function Section({
  children,
  backgroundVariant,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <BackgroundVariantProvider value={backgroundVariant}>
      <Tag
        className={clsx(
          'text-(--color-text-base)',
          backgroundVariants[backgroundVariant],
        )}
      >
        {children}
      </Tag>
    </BackgroundVariantProvider>
  )
}

export function useBackground() {
  const backgroundVariant = use(BackgroundVariantContext)

  const isDark =
    backgroundVariant === 'dark' || backgroundVariant === 'transparentDark'
  const isLight = !isDark

  const theme = isDark ? 'dark' : 'light'

  return {
    background: backgroundVariant,
    theme,
    isDark,
    isLight,
  } as const
}
