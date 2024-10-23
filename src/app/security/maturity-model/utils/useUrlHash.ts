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

  useEffect(() => {
    if (windowIsAvailable()) {
      window.addEventListener('hashchange', onHashChange)
      return () => window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  function updateHash(sectionId: string) {
    const sectionHash = getHashFromSlug(sectionId)

    if (sectionHash !== hash) {
      router.replace(`${pathname}${sectionHash}` as Route, { scroll: false })
      dispatchCustomHashChangeEvent(sectionHash)
    }
  }

  function clearHash() {
    router.replace(pathname as Route, { scroll: false })
    dispatchCustomHashChangeEvent(HASH_SIGN)
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

  function isSectionActive(sectionId: string) {
    const sectionHash = getHashFromSlug(sectionId)
    return sectionHash === hash
  }

  return {
    updateHash,
    clearHash,
    clearHashIfPresent,
    isSectionActive,
    getHashFromSlug,
  }
}

function dispatchCustomHashChangeEvent(newHash: SectionHash) {
  if (windowIsAvailable()) {
    window.dispatchEvent(new CustomEvent('hashchange', { detail: newHash }))
  }
}

function getHashFromWindow() {
  return windowIsAvailable()
    ? ((window.location.hash || HASH_SIGN) as SectionHash)
    : HASH_SIGN
}

function getHashFromEvent(event: NewHashEvent) {
  if (event instanceof HashChangeEvent) {
    const slug = event.newURL.split(HASH_SIGN)[1]
    return slug ? getHashFromSlug(slug) : HASH_SIGN
  }

  return event.detail
}

function getHashFromSlug(slug: string) {
  return `${HASH_SIGN}${slug}` as SectionHash
}

function windowIsAvailable() {
  return typeof window !== 'undefined'
}
