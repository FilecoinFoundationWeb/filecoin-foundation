import { useState } from 'react'

import { coreFunctionsTableOfContents } from '../data/coreFunctionsData'
import { HASH_SIGN, type SectionHash } from '../utils/useUrlHash'

export function useSelectedSlug(currentHash: SectionHash) {
  const [selectedSlug, setSelectedSlug] = useState(() => {
    const currentOption = coreFunctionsTableOfContents.find(
      (item) => `${HASH_SIGN}${item.slug}` === currentHash,
    )
    return currentOption ? currentOption.slug : ''
  })

  return { selectedSlug, setSelectedSlug }
}
