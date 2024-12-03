'use client'

import { useMemo } from 'react'

import { Listbox as HeadlessUIListbox } from '@headlessui/react'

import { ListboxButton } from '@/components/Listbox/ListboxButton'
import {
  ListboxOption,
  type OptionType,
} from '@/components/Listbox/ListboxOption'
import { ListboxOptions } from '@/components/Listbox/ListboxOptions'

import { useUrlHash } from '../utils/useUrlHash'

import type { DataWithRef } from './TableOfContents'

type MobileTableOfContentsProps = {
  data: Array<DataWithRef>
  scrollToSection: (slug: string) => void
}

export function MobileTableOfContents({
  data,
  scrollToSection,
}: MobileTableOfContentsProps) {
  const { isSectionActive, updateHash } = useUrlHash()

  const options = useMemo(
    () => data.map(({ slug, title }) => ({ id: slug, name: title })),
    [data],
  )

  const selectedOption =
    options.find((option) => isSectionActive(option.id)) || options[0]

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
    scrollToSection(option.id)
  }
}
