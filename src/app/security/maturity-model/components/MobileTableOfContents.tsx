'use client'

import { Listbox as HeadlessUIListbox } from '@headlessui/react'

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
const firstOption = options[0]

export function MobileTableOfContents() {
  const { updateHash, isSectionActive, getHashFromSlug } = useUrlHash()

  const selectedOption =
    options.find((option) => isSectionActive(option.id)) || firstOption

  return (
    <nav aria-label="Table of Contents" className="w-full max-w-sm">
      <HeadlessUIListbox value={selectedOption.id} onChange={handleChange}>
        <ListboxButton text={selectedOption.name} />
        <ListboxOptions position="bottom" inheritWidth="button">
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
