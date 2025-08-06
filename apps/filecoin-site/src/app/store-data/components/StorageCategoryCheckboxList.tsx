import { toggleArraySelection } from '@filecoin-foundation/utils/toggleArraySelection'

import { storageCategories } from '../data/storageCategories'
import { storageProviders } from '../data/storageProviders'
import type { StorageCategoryFilterProps } from '../types'
import { getProvidersForCategory } from '../utils/getProvidersForCategory'

import { StorageCategoryCheckbox } from './StorageCategoryCheckbox'

export function StorageCategoryCheckboxList({
  activeFilters,
  setFilters,
}: StorageCategoryFilterProps) {
  return (
    <div className="grid grid-cols-5 gap-8">
      {storageCategories.map(({ name, description, id }) => {
        const isChecked = activeFilters.includes(id)
        const matches = getProvidersForCategory(storageProviders, id)

        return (
          <StorageCategoryCheckbox
            key={name}
            checked={isChecked}
            name={name}
            description={description}
            count={matches.length}
            onClick={() => {
              setFilters((currentFilters) => {
                return toggleArraySelection(currentFilters, id)
              })
            }}
          />
        )
      })}
    </div>
  )
}
