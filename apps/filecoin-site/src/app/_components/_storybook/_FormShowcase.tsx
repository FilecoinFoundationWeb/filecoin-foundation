'use client'

import { useState } from 'react'

import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import Checkbox from '@filecoin-foundation/ui-filecoin/Checkbox'
import Input from '@filecoin-foundation/ui-filecoin/Input'
import { SearchInput } from '@filecoin-foundation/ui-filecoin/SearchInput'
import { FilterButton } from '@filecoin-foundation/ui-filecoin/FilterButton'
import { FunnelSimpleIcon } from '@phosphor-icons/react/dist/ssr'

export function FormShowcase() {
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState('')

  return (
    <PageSection backgroundVariant="light">
      <SectionContent centerTitle title="Button Styles Showcase">
        <form className="max-w-readable flex flex-col gap-6">
          <Checkbox checked={checked} onChange={setChecked} />
          <Input value={value} placeholder="Placeholder" onChange={setValue} />
          <SearchInput value={value} onChange={setValue} />
          <FilterButton Icon={FunnelSimpleIcon}>Filters</FilterButton>
        </form>
      </SectionContent>
    </PageSection>
  )
}
