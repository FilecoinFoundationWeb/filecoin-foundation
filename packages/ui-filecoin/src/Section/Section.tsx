'use client'

import { createContext, use } from 'react'

import { clsx } from 'clsx'

import { backgroundVariants } from './backgroundVariants'

type BackgroundVariant = keyof typeof backgroundVariants

export type SectionProps = {
  backgroundVariant: BackgroundVariant
  as?: React.ElementType
  children: React.ReactNode
}

const BackgroundVariantContext = createContext<BackgroundVariant>('transparent')

export function Section({
  children,
  backgroundVariant,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <BackgroundVariantContext value={backgroundVariant}>
      <Tag
        className={clsx(
          'text-[var(--color-text-base)]',
          backgroundVariants[backgroundVariant],
        )}
      >
        {children}
      </Tag>
    </BackgroundVariantContext>
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
