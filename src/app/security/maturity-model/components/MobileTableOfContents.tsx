'use client'

import {
  Listbox as HeadlessUIListbox,
  ListboxOptions as HeadlessUIListboxOptions,
} from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'
import { ListboxButton } from '@/components/ListboxButton'
import { ListboxOption } from '@/components/ListboxOption'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

type Option = {
  id: string
  name: string
}

const options: Array<Option> = coreFunctionsData.map(({ slug, title }) => ({
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
        value={selectedOption.id}
        onChange={(selectedOptionId: Option['id']) =>
          handleChange(selectedOptionId)
        }
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
            <ListboxOption key={option.id} option={option} />
          ))}
        </HeadlessUIListboxOptions>
      </HeadlessUIListbox>
    </nav>
  )

  function handleChange(slug: Option['id']) {
    updateHash(slug)

    const sectionHash = getHashFromSlug(slug)
    scrollToSection(sectionHash)
  }
}
