import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CaretDownIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { DEFAULT_FILTER_ID } from '@filecoin-foundation/hooks/useFilter/constants'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { backgroundVariants } from '@filecoin-foundation/ui-filecoin/Section'

import { blogCategories, type BlogCategoryKey } from '../data/blogCategories'
import { useCategoryState } from '../hooks/useCategoryState'

const DEFAULT_BUTTON_TEXT = 'All Categories'

export function CategoryListbox() {
  const [selectedCategory, setSelectedCategory] = useCategoryState()

  return (
    <Listbox value={selectedCategory} onChange={handleCategoryChange}>
      <ListboxButton className="listbox-button group">
        <span className="block truncate pr-6">
          {getCategoryDisplayName(selectedCategory)}
        </span>

        <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center group-data-open:rotate-180">
          <Icon component={CaretDownIcon} size={16} weight="bold" />
        </div>
      </ListboxButton>

      <ListboxOptions
        anchor="bottom start"
        className={clsx(
          backgroundVariants.light,
          'focus:brand-outline mt-2 w-[var(--button-width)] space-y-2 border border-[var(--color-border-base)] p-2 shadow-lg',
        )}
      >
        {blogCategories.map((category) => {
          const { id } = category
          const displayName = getCategoryDisplayName(id)

          return (
            <ListboxOption
              key={id}
              value={id}
              className="group cursor-pointer data-focus:bg-zinc-100"
            >
              <div className="px-4 py-3 group-data-selected:bg-zinc-100">
                <div className="flex items-center gap-4">
                  <p className="font-medium text-[var(--color-paragraph-text)] group-data-focus:text-[var(--color-paragraph-text-strong)] group-data-selected:text-[var(--color-paragraph-text-strong)]">
                    {displayName}
                  </p>
                </div>
              </div>
            </ListboxOption>
          )
        })}
      </ListboxOptions>
    </Listbox>
  )

  function handleCategoryChange(newSelection: BlogCategoryKey) {
    setSelectedCategory(newSelection)
  }
}

function getCategoryDisplayName(categoryId: BlogCategoryKey) {
  if (categoryId === DEFAULT_FILTER_ID) {
    return DEFAULT_BUTTON_TEXT
  }

  return (
    blogCategories.find(({ id }) => id === categoryId)?.name ??
    DEFAULT_BUTTON_TEXT
  )
}
