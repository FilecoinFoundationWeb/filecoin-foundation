'use client'

import { type SectionHash } from './useUrlHash'

export function scrollToSection(sectionHash: SectionHash) {
  const element = document.querySelector(sectionHash)

  if (!element) {
    console.error(`Element with hash ${sectionHash} does not exist`)
  }

  element?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}
