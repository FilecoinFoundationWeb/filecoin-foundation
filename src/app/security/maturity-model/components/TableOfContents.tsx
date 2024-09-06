'use client'

import { clsx } from 'clsx'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash, HASH_SIGN, type SectionHash } from '../utils/useUrlHash'

export function TableOfContents() {
  const { currentHash } = useUrlHash()

  return (
    <table role="navigation" aria-label="Table of Contents">
      <p className="mb-4 ml-6 text-sm font-semibold uppercase text-brand-200 lg:mb-6">
        Table of Contents
      </p>

      <ol>
        {coreFunctionsData.map(({ slug, title }) => {
          const sectionHash: SectionHash = `${HASH_SIGN}${slug}`
          const isCurrentSection = currentHash === sectionHash

          return (
            <li key={slug}>
              <a
                href={sectionHash}
                className={clsx(
                  'inline-block appearance-none text-balance border border-transparent px-6 py-2.5 text-left focus-visible:brand-outline',
                  isCurrentSection
                    ? 'border-l-brand-300 font-semibold text-brand-100'
                    : 'border-l-brand-300/20 font-normal text-brand-300',
                )}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  scrollToSection(sectionHash)
                }}
              >
                {title}
              </a>
            </li>
          )
        })}
      </ol>
    </table>
  )
}
