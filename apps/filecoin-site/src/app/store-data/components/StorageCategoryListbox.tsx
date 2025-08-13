import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CaretDownIcon } from '@phosphor-icons/react'

import { Icon } from '@filecoin-foundation/ui/Icon'

import {
  storageCategories,
  type StorageCategory,
} from '../data/storageCategories'
import { storageProviders } from '../data/storageProviders'
import type { StorageCategoryFilterProps } from '../types'
import { getActiveCategories } from '../utils/getActiveCategories'
import { getProvidersForCategory } from '../utils/getProvidersForCategory'

const DEFAULT_BUTTON_TEXT = 'Categories'

export function StorageCategoryListbox({
  activeFilters,
  setFilters,
}: StorageCategoryFilterProps) {
  const activeCategories = getActiveCategories(activeFilters)

  return (
    <Listbox multiple value={activeCategories} onChange={handleCategoryChange}>
      <ListboxButton className="listbox-button group">
        <span className="block truncate pr-6">
          {renderButtonText(activeCategories)}
        </span>

        <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-zinc-500 group-data-open:rotate-180">
          <Icon component={CaretDownIcon} size={16} weight="bold" />
        </div>
      </ListboxButton>

      <ListboxOptions
        className="focus:brand-outline mt-2 w-[var(--button-width)] space-y-2 border border-zinc-200 bg-white p-2 shadow-lg"
        anchor="bottom start"
      >
        {storageCategories.map((category) => {
          const { id, name, description } = category
          const matches = getProvidersForCategory(storageProviders, id)

          return (
            <ListboxOption
              key={id}
              value={category}
              className="group cursor-pointer data-focus:bg-zinc-100"
            >
              <div className="group-data-selected:bg-brand-900 px-4 py-3">
                <div className="flex items-center gap-4">
                  <p className="font-medium text-zinc-600 group-data-selected:text-white">
                    {name}
                  </p>
                  <span className="group-data-selected:bg-brand-800 grid size-7 place-items-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-700 group-data-selected:text-white">
                    {matches.length}
                  </span>
                </div>
                <p className="group-data-selected:text-brand-50 mt-3 text-sm text-zinc-600">
                  {description}
                </p>
              </div>
            </ListboxOption>
          )
        })}
      </ListboxOptions>
    </Listbox>
  )

  function handleCategoryChange(newSelection: Array<StorageCategory>) {
    const newSelectionIds = newSelection.map((category) => category?.id)
    setFilters(newSelectionIds)
  }
}

function renderButtonText(categories: Array<StorageCategory>) {
  if (!categories.length) {
    return DEFAULT_BUTTON_TEXT
  }

  const categoryNames = categories.map((category) => category.name)

  if (categoryNames.length === 1) {
    return categoryNames[0]
  }

  return categoryNames[0] + ` +${categoryNames.length - 1} more`
}
