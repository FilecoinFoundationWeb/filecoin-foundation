'use client'

import { useEffect, useState } from 'react'

import { useRouter, usePathname } from 'next/navigation'

import type { Route } from 'next'

const HASH_SIGN = '#'

type SectionHash = `${typeof HASH_SIGN}${string}`
type NewHashEvent = HashChangeEvent | CustomEvent<SectionHash>

export function useUrlHash() {
  const pathname = usePathname()
  const router = useRouter()

  const [hash, setHash] = useState(getHashFromWindow)

  function updateHash(sectionId: string) {
    const sectionHash = getHashFromSlug(sectionId)

    if (sectionHash === hash) {
      return
    }

    const pathnameWithNewSectionHash = `${pathname}${sectionHash}`
    router.replace(pathnameWithNewSectionHash as Route, { scroll: false })

    if (windowIsDefined()) {
      window.dispatchEvent(
        new CustomEvent('hashchange', { detail: sectionHash }),
      )
    }
  }

  function clearHash() {
    router.replace(pathname as Route, { scroll: false })

    if (windowIsDefined()) {
      window.dispatchEvent(new CustomEvent('hashchange', { detail: HASH_SIGN }))
    }
  }

  function clearHashIfPresent(sectionId: string) {
    const sectionHash = getHashFromSlug(sectionId)

    if (sectionHash === hash) {
      clearHash()
    }
  }

  function onHashChange(event: NewHashEvent) {
    const newHash = getHashFromEvent(event)
    setHash(newHash)
  }

  function getHashFromSlug(slug: string) {
    return `${HASH_SIGN}${slug}` as SectionHash
  }

  function isSectionActive(sectionId: string) {
    const sectionHash = getHashFromSlug(sectionId)
    return sectionHash === hash
  }

  useEffect(() => {
    if (windowIsDefined()) {
      window.addEventListener('hashchange', onHashChange)
      return () => window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  return {
    updateHash,
    clearHash,
    clearHashIfPresent,
    isSectionActive,
    getHashFromSlug,
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
