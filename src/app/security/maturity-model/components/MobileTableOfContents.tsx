'use client'

import { FormListbox } from '@/components/Form/FormListbox/FormListbox'

import { coreFunctionsData } from '../data/coreFunctionsData'
import { scrollToSection } from '../utils/scrollToSection'
import { useUrlHash, HASH_SIGN } from '../utils/useUrlHash'

const options = coreFunctionsData.map(({ slug, title }) => ({
  id: slug,
  name: title,
}))

export function MobileTableOfContents() {
  const { updateHash, currentSlug } = useUrlHash()

  function handleChange(slug: string) {
    updateHash(slug)
    scrollToSection(`${HASH_SIGN}${slug}`)
  }

  const selectedItem = coreFunctionsData.find(
    (item) => item.slug === currentSlug,
  )

  return (
    <div className="flex justify-center">
      <nav aria-label="Table of Contents" className="w-full max-w-sm">
        <FormListbox
          hideLabel
          hideError
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
