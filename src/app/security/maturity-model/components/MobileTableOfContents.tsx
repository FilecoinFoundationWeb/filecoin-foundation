'use client'

import { FormListbox } from '@/components/Form/FormListbox/FormListbox'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash } from '../utils/useUrlHash'

const options = coreFunctionsData.map(({ slug, title }) => ({
  id: slug,
  name: title,
}))

export function MobileTableOfContents() {
  const { updateHash, isSectionActive, getHashFromSlug } = useUrlHash()

  function handleChange(slug: string) {
    updateHash(slug)

    const sectionHash = getHashFromSlug(slug)
    scrollToSection(sectionHash)
  }

  const selectedItem = coreFunctionsData.find((item) =>
    isSectionActive(item.slug),
  )

  return (
    <div className="flex justify-center">
      <nav aria-label="Table of Contents" className="w-full max-w-sm">
        <FormListbox
          hideLabel
          label="Table of Contents"
          placeholder="Select a section"
          options={options}
          value={{
            id: selectedItem?.slug || '',
            name: selectedItem?.title || '',
          }}
          onChange={(option) => handleChange(option.id)}
        />
      </nav>
    </div>
  )
}
