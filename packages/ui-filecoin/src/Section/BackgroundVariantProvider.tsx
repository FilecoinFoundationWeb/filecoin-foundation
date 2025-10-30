'use client'

import { createContext } from 'react'

import type { BackgroundVariant } from './Section'

export const BackgroundVariantContext =
  createContext<BackgroundVariant>('transparent')

type BackgroundVariantProviderProps = {
  value: BackgroundVariant
  children: React.ReactNode
}

export function BackgroundVariantProvider(
  props: BackgroundVariantProviderProps,
) {
  return <BackgroundVariantContext {...props} />
}
