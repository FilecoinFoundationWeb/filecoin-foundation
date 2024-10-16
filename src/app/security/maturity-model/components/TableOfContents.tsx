'use client'

import { useState } from 'react'

import Link from 'next/link'

import { Listbox } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash, HASH_SIGN, type SectionHash } from '../utils/useUrlHash'

export function DesktopTableOfContents() {
  const { currentHash } = useUrlHash()

  return (
    <nav aria-label="Table of Contents" className="hidden lg:block">
      <p className="mb-4 ml-6 text-sm font-semibold uppercase text-brand-200 lg:mb-6">
        Table of Contents
      </p>
      <ol>
        {coreFunctionsData.map(({ slug, title }) => {
          const sectionHash: SectionHash = `${HASH_SIGN}${slug}`
          const isCurrentSection = currentHash === sectionHash

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

export function MobileTableOfContents() {
  const { currentHash } = useUrlHash()

  const [selectedSlug, setSelectedSlug] = useState(() => {
    const currentOption = coreFunctionsData.find(
      (item) => `${HASH_SIGN}${item.slug}` === currentHash,
    )
    return currentOption ? currentOption.slug : ''
  })

  const options = coreFunctionsData.map((item) => {
    return {
      id: item.slug,
      name: item.title,
    }
  })

  function handleChange(slug: string) {
    setSelectedSlug(slug)

    const sectionHash: SectionHash = `${HASH_SIGN}${slug}`
    scrollToSection(sectionHash)
  }

  const selectedTitle =
    coreFunctionsData.find((item) => item.slug === selectedSlug)?.title ??
    'Table of Contents'

  return (
    <Listbox value={selectedSlug} onChange={handleChange}>
      {({ open }) => (
        <>
          <ListboxButton ariaLabel="Table of Contents" open={open}>
            <span>{selectedTitle}</span>
            <Icon component={CaretDown} size={16} weight="bold" />
          </ListboxButton>
          <ListboxOptions>
            {options.map((option) => (
              <ListboxOption key={option.id} option={option} />
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  )
}
