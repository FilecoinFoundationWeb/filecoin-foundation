'use client'

import { clsx } from 'clsx'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../data/scrollToSection'
import {
  useSectionHashObserver,
  HASH_SIGN,
  type SectionHash,
} from '../utils/useSectionHashObserver'

export function TableOfContent() {
  const { currentHash } = useSectionHashObserver()

  return (
    <nav>
      <p className="mb-4 ml-6 text-sm font-semibold uppercase text-brand-200 lg:mb-6">
        Table of Contents
      </p>

      <ul>
        {coreFunctionsData.map(({ slug, title }, index) => {
          const sectionHash: SectionHash = `${HASH_SIGN}${slug}`
          const isCurrentSection = currentHash === sectionHash

          return (
            <li key={index}>
              <button
                className={clsx(
                  'appearance-none text-balance border border-transparent px-6 py-2.5 text-left focus-visible:brand-outline',
                  isCurrentSection
                    ? 'border-l-brand-300 font-semibold text-brand-100'
                    : 'border-l-brand-300/20 font-normal text-brand-300',
                )}
                onClick={() => scrollToSection(sectionHash)}
              >
                {title}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
