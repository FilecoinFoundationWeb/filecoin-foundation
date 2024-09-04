'use client'

import { type SectionHash } from '../utils/useSectionHashObserver'

export function scrollToSection(sectionHash: SectionHash) {
  const element = document.querySelector(sectionHash)

  element?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}
