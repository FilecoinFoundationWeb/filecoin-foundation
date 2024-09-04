'use client'

import { useEffect, useState } from 'react'

import { useRouter, usePathname } from 'next/navigation'

import type { Route } from 'next'

export const HASH_SIGN = '#'

export type SectionHash = `${typeof HASH_SIGN}${string}`
type NewHashEvent = HashChangeEvent | CustomEvent<SectionHash>

export function useSectionHashObserver() {
  const pathname = usePathname()
  const router = useRouter()

  const [hash, setHash] = useState(getHashFromWindow)

  function updateSectionHash(sectionId: string) {
    const sectionHash: SectionHash = `${HASH_SIGN}${sectionId}`
    const pathnameWithNewSectionHash = pathname + sectionHash

    router.replace(pathnameWithNewSectionHash as Route, { scroll: false })

    if (windowIsDefined()) {
      window.dispatchEvent(
        new CustomEvent('hashchange', { detail: sectionHash }),
      )
    }
  }

  function onHashChange(event: NewHashEvent) {
    const newHash = getHashFromEvent(event)
    setHash(newHash)
  }

  useEffect(() => {
    if (windowIsDefined()) {
      window.addEventListener('hashchange', onHashChange)
      return () => window.removeEventListener('hashchange', onHashChange)
    }
  }, [pathname])

  return {
    currentHash: hash,
    updateSectionHash,
  }
}

function getHashFromWindow() {
  if (windowIsDefined()) {
    const currentHash = window.location.hash

    if (currentHash === '') {
      return HASH_SIGN
    }
    return currentHash as SectionHash
  }
  return HASH_SIGN
}

function getHashFromEvent(event: NewHashEvent) {
  if (event instanceof HashChangeEvent) {
    const slug = event.newURL.split(HASH_SIGN)[1]
    if (!slug) return HASH_SIGN
    return `${HASH_SIGN}${slug}` as SectionHash
  }

  return event.detail
}

function windowIsDefined() {
  return typeof window !== 'undefined'
}
