'use client'

import { useEffect } from 'react'

export function ErrorTester() {
  useEffect(() => {
    // This will bubble up to global-error.tsx
    throw new Error('Simulated global error')
  }, [])

  return null
}
