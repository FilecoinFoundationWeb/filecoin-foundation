'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOptions as HeadlessUIListboxOptions,
  ListboxOption as HeadlessUIListboxOption,
} from '@headlessui/react'
import { CaretDown, Check } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

const options = coreFunctionsData.map(({ slug, title }) => ({
  id: slug,
  name: title,
}))
const firstOption = options[0]

export function MobileTableOfContents() {
  const { updateHash, isSectionActive, getHashFromSlug } = useUrlHash()

  const selectedOption =
    options.find((option) => isSectionActive(option.id)) || firstOption

  return (
    <nav aria-label="Table of Contents" className="w-full max-w-sm">
      <HeadlessUIListbox
        value={selectedOption}
        onChange={(value) => handleChange(value.id)}
      >
        <ListboxButton>
          <span className="truncate">{selectedOption.name}</span>
          <Icon component={CaretDown} size={16} weight="bold" />
        </ListboxButton>

        <HeadlessUIListboxOptions
          as="ul"
          anchor={{ to: 'bottom', gap: 8 }}
          className="w-[var(--button-width)] rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2"
        >
          {options.map((option) => (
            <HeadlessUIListboxOption
              key={option.id}
              as="li"
              value={option}
              className="group flex cursor-default items-center justify-between gap-12 bg-transparent px-5 py-2 data-[focus]:bg-brand-500"
            >
              <span>{option.name}</span>
              <span className="invisible mb-px group-data-[selected]:visible">
                <Icon component={Check} size={20} />
              </span>
            </HeadlessUIListboxOption>
          ))}
        </HeadlessUIListboxOptions>
      </HeadlessUIListbox>
    </nav>
  )

  function handleChange(slug: string) {
    updateHash(slug)

    const sectionHash = getHashFromSlug(slug)
    scrollToSection(sectionHash)
  }
}
