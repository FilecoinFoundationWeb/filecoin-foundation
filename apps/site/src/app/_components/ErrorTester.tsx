'use client'

import { useEffect } from 'react'

export function ErrorTester() {
  useEffect(() => {
    // This will bubble up to global-error.tsx
    setTimeout(() => {
      throw new Error('Simulated global error')
    }, 1_000)
  }, [])

  return null
}
