'use client'

import Link from 'next/link'

import { clsx } from 'clsx'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

import styles from './TableOfContents.module.scss'

export function DesktopTableOfContents() {
  const { isSectionActive, getHashFromSlug } = useUrlHash()

  return (
    <nav aria-label="Table of Contents">
      <p className={clsx(styles.tableOfContentsHeader, 'mb-4 ml-6 lg:mb-6')}>
        Table of Contents
      </p>

      <ol>
        {coreFunctionsData.map(({ slug, title }) => {
          const sectionHash = getHashFromSlug(slug)
          const isCurrentSection = isSectionActive(slug)

          return (
            <li key={slug}>
              <Link
                href={sectionHash}
                className={clsx(
                  'inline-block appearance-none text-balance border border-transparent px-6 py-2.5 text-left focus-visible:brand-outline',
                  isCurrentSection
                    ? 'border-l-brand-300 font-semibold text-brand-100'
                    : 'border-l-brand-300/20 font-normal text-brand-300 hover:text-brand-100',
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
