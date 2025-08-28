'use client'

import { createContext, use } from 'react'

import type { BackgroundVariant } from './Section'

const BackgroundVariantContext = createContext<BackgroundVariant>('transparent')

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
  value: BackgroundVariant
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
