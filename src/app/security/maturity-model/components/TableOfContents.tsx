'use client'

import { Listbox } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import { coreFunctionsTableOfContents } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useSelectedSlug } from '../utils/useSelectedSlug'
import { useUrlHash, HASH_SIGN } from '../utils/useUrlHash'

import {
  TableOfContentsList,
  type TableOfContentsListProps,
} from './TableOfContentsList'

export function DesktopTableOfContents() {
  const { currentHash } = useUrlHash()

  const handleLinkClick: TableOfContentsListProps['onLinkClick'] = (
    e,
    hash,
  ) => {
    e.preventDefault()
    scrollToSection(hash)
  }

  return (
    <nav aria-label="Table of Contents">
      <p className="mb-4 ml-6 text-sm font-semibold uppercase text-brand-200 lg:mb-6">
        Table of Contents
      </p>
      <TableOfContentsList
        items={coreFunctionsTableOfContents}
        currentHash={currentHash}
        onLinkClick={handleLinkClick}
      />
    </nav>
  )
}

export function MobileTableOfContents() {
  const { currentHash } = useUrlHash()

  const { selectedSlug, setSelectedSlug } = useSelectedSlug(currentHash)

  const options = coreFunctionsTableOfContents.map(({ slug, title }) => ({
    id: slug,
    name: title,
  }))

  function handleChange(slug: string) {
    setSelectedSlug(slug)
    scrollToSection(`${HASH_SIGN}${slug}`)
  }

  const selectedTitle =
    coreFunctionsTableOfContents.find((item) => item.slug === selectedSlug)
      ?.title ?? 'Table of Contents'

  return (
    <nav aria-label="Table of Contents">
      <Listbox value={selectedSlug} onChange={handleChange}>
        <ListboxButton>
          <span>{selectedTitle}</span>
          <Icon component={CaretDown} size={16} weight="bold" />
        </ListboxButton>
        <ListboxOptions>
          {options.map((option) => (
            <ListboxOption key={option.id} option={option} />
          ))}
        </ListboxOptions>
      </Listbox>
    </nav>
  )
}
