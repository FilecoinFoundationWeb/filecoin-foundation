'use client'

import { createContext, use } from 'react'

import type { SectionProps } from './Section'

const BackgroundVariantContext =
  createContext<SectionProps['backgroundVariant']>('transparent')

export function useBackgroundVariant() {
  const backgroundVariant = use(BackgroundVariantContext)

  if (!backgroundVariant) {
    throw new Error(
      'useBackgroundVariant must be used within a BackgroundVariantContext',
    )
  }

  return backgroundVariant
}

type BackgroundVariantContextProviderProps = {
  children: React.ReactNode
  value: SectionProps['backgroundVariant']
}

export function BackgroundVariantContextProvider({
  children,
  value,
}: BackgroundVariantContextProviderProps) {
  return (
    <BackgroundVariantContext value={value}>
      {children}
    </BackgroundVariantContext>
  )
}
