'use client'

import { Listbox as HeadlessUIListbox } from '@headlessui/react'
import { ArrowsDownUp, CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'
import { ListboxOptions } from '@/components/ListboxOptions'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

const options = coreFunctionsData.map(({ slug, title }) => ({
  id: slug,
  name: title,
}))

export function MobileTableOfContents() {
  const { updateHash, isSectionActive, getHashFromSlug } = useUrlHash()

  const selectedOption = options.find((option) => isSectionActive(option.id))

  return (
    <nav aria-label="Table of Contents" className="w-full max-w-sm">
      <HeadlessUIListbox
        value={selectedOption}
        onChange={(value) => handleChange(value.id)}
      >
        <ListboxButton>
          <div className="inline-flex w-full items-center gap-2">
            <Icon component={ArrowsDownUp} />
            <span className="grow truncate text-left">
              {selectedOption?.name || 'Select a section'}
            </span>
            <Icon component={CaretDown} size={16} weight="bold" />
          </div>
        </ListboxButton>

        <ListboxOptions position="left">
          {options.map((option) => (
            <ListboxOption key={option.id} option={option} />
          ))}
        </ListboxOptions>
      </HeadlessUIListbox>
    </nav>
  )

  function handleChange(slug: string) {
    updateHash(slug)

    const sectionHash = getHashFromSlug(slug)
    scrollToSection(sectionHash)
  }
}
