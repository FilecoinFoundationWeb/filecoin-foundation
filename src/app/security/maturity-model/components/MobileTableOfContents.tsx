'use client'

import { Listbox as HeadlessUIListbox } from '@headlessui/react'

import { ListboxButton } from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

import { coreFunctionsData } from '../data/coreFunctionsData'
import type { SectionRefsProps } from '../types/sectionRefsTypes'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

const options = coreFunctionsData.map(({ slug, title }) => ({
  id: slug,
  name: title,
}))

const firstOption = options[0]

export function MobileTableOfContents({ sectionRefs }: SectionRefsProps) {
  const { isSectionActive, updateHash } = useUrlHash()
  const selectedOption =
    options.find((option) => isSectionActive(option.id)) || firstOption

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

  function scrollToActiveSection(option: OptionType) {
    updateHash(option.id)

    const sectionRef = sectionRefs[option.id]
    scrollToSection({ sectionRef })
  }
}
