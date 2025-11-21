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
  gray: 'light-section bg-gray-200',
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
          'text-[var(--color-text-base)]',
          backgroundVariants[backgroundVariant],
        )}
      >
        {children}
      </Tag>
    </BackgroundVariantProvider>
  )
}

export function useBackgroundVariant() {
  const backgroundVariant = use(BackgroundVariantContext)

  if (!backgroundVariant) {
    throw new Error(
      'useBackgroundVariant must be used within a BackgroundVariantContext',
    )
  }

  return backgroundVariant
}
