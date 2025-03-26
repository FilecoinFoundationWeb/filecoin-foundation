'use client'

import { Listbox } from '@filecoin-foundation/ui/Listbox'
import { ListboxButton } from '@filecoin-foundation/ui/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@filecoin-foundation/ui/Listbox/ListboxOption'
import { ListboxOptions } from '@filecoin-foundation/ui/Listbox/ListboxOptions'

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
      <Listbox value={selectedOption} onChange={scrollToActiveSection}>
        <ListboxButton text={selectedOption.name} />

        <ListboxOptions matchButtonWidth>
          {options.map((option) => (
            <ListboxOption key={option.id} option={option} />
          ))}
        </ListboxOptions>
      </Listbox>
    </nav>
  )

  function scrollToActiveSection(option: OptionType) {
    updateHash(option.id)

    const sectionHash = getHashFromSlug(option.id)
    scrollToSection(sectionHash)
  }
}
