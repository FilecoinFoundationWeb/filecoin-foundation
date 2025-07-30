import { toggleArraySelection } from '@filecoin-foundation/utils/toggleArraySelection'

import { storageCategories } from '../data/storageCategories'
import { storageProviders } from '../data/storageProviders'

import { StorageCategoryCheckbox } from './StorageCategoryCheckbox'

type StorageCategoryCheckboxListProps = {
  activeFilters: Array<string>
  setFilters: (
    value: Array<string> | ((old: Array<string>) => Array<string>),
  ) => unknown
}

export function StorageCategoryCheckboxList({
  activeFilters,
  setFilters,
}: StorageCategoryCheckboxListProps) {
  return (
    <div className="grid grid-cols-5 gap-8">
      {storageCategories.map(({ name, description, id }) => {
        const isChecked = activeFilters.includes(id)

        const matches = storageProviders
          .filter((provider) => provider.category === id)
          .filter(Boolean)

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
