'use client'

import { useRef, useCallback } from 'react'

import { Listbox as HeadlessUIListbox } from '@headlessui/react'

import { ListboxButton } from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

const options = coreFunctionsData.map(({ slug, title }) => ({
  id: slug,
  name: title,
}))

export function MobileTableOfContents() {
  const { updateHash, isSectionActive, getHashFromSlug } = useUrlHash()
  const lastSelectedRef = useRef<string | null>(null)

  const selectedOption =
    options.find((option) => isSectionActive(option.id)) || options[0]

  const scrollToActiveSection = useCallback(
    (option: OptionType) => {
      if (lastSelectedRef.current === option.id) return

      lastSelectedRef.current = option.id
      updateHash(option.id)

      const sectionHash = getHashFromSlug(option.id)
      scrollToSection(sectionHash)
    },
    [updateHash, getHashFromSlug],
  )

  return (
    <nav aria-label="Table of Contents" className="w-full max-w-sm">
      <HeadlessUIListbox
        value={selectedOption}
        onChange={scrollToActiveSection}
      >
        <ListboxButton text={selectedOption.name} />
        <ListboxOptions matchButtonWidth>
          {options.map((option) => (
            <ListboxOption key={option.id} option={option} />
          ))}
        </ListboxOptions>
      </HeadlessUIListbox>
    </nav>
  )
}
