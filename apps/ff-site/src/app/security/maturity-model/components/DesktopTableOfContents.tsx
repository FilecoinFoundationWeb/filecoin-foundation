'use client'

import Link from 'next/link'

import { clsx } from 'clsx'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

export function DesktopTableOfContents() {
  const { isSectionActive, getHashFromSlug } = useUrlHash()

  return (
    <nav aria-label="Table of Contents">
      <p className="toc-header mb-4 ml-6 lg:mb-6">Table of Contents</p>

      <ol>
        {coreFunctionsData.map(({ slug, title }) => {
          const sectionHash = getHashFromSlug(slug)
          const isCurrentSection = isSectionActive(slug)

          return (
            <li key={slug}>
              <Link
                href={sectionHash}
                className={clsx(
                  'focus-visible:brand-outline inline-block appearance-none border border-transparent px-6 py-2.5 text-left text-balance',
                  isCurrentSection
                    ? 'border-l-brand-300 text-brand-100 font-semibold'
                    : 'border-l-brand-300/20 text-brand-300 hover:text-brand-100 font-normal',
                )}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  scrollToSection(sectionHash)
                }}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
