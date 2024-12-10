'use client'

import Link from 'next/link'

import { clsx } from 'clsx'

import { useUrlHash } from '../utils/useUrlHash'

import type { DataWithRef } from './TableOfContents'

type DesktopTableOfContentsProps = {
  data: Array<DataWithRef>
  scrollToSection: (slug: string) => void
}

export function DesktopTableOfContents({
  data,
  scrollToSection,
}: DesktopTableOfContentsProps) {
  const { isSectionActive, getHashFromSlug } = useUrlHash()

  return (
    <nav aria-label="Table of Contents">
      <p className="mb-4 ml-6 text-sm font-semibold uppercase text-brand-200 lg:mb-6">
        Table of Contents
      </p>

      <ol>
        {data.map(({ slug, title }) => {
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
                  scrollToSection(slug)
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
