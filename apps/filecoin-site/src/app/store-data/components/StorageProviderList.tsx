'use client'

import { useMemo } from 'react'

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'

import { toggleArraySelection } from '@filecoin-foundation/utils/toggleArraySelection'

import { CardGrid } from '@/components/CardGrid'

import { storageCategories } from '../data/storageCategories'
import { storageProviders } from '../data/storageProviders'

import { StorageCategoryFilter } from './StorageCategoryFilter'
import { StorageProviderCard } from './StorageProviderCard'

const URL_SEARCH_PARAM = 'storage-type'

export function StorageProviderList() {
  const [filters, setFilters] = useQueryState(
    URL_SEARCH_PARAM,
    parseAsArrayOf(parseAsString).withDefault([]).withOptions({
      shallow: false,
      clearOnDefault: true,
    }),
  )

  const filteredStorageProviders = useMemo(() => {
    if (!filters.length) {
      return storageProviders
    }

    return storageProviders.filter((provider) => {
      return filters.some((filter) => provider.category === filter)
    })
  }, [filters])

  return (
    <>
      <fieldset>
        <legend className="sr-only">Filter by storage type</legend>
        {/* TODO: Implement responsiveness */}
        <div className="grid grid-cols-5 gap-8">
          {storageCategories.map(({ name, description, id }) => {
            const matches = storageProviders
              .filter((provider) => provider.category === id)
              .filter(Boolean)

            return (
              <StorageCategoryFilter
                key={name}
                isActive={filters.includes(id)}
                name={name}
                description={description}
                count={matches.length}
                onClick={() => setFilters(toggleArraySelection(filters, id))}
              />
            )
          })}
        </div>
      </fieldset>

      <div className="mt-10">
        <CardGrid as="ul" variant="smTwoLgThree">
          {filteredStorageProviders.map(
            ({ name, description, bestFor, keyFeatures }) => (
              <StorageProviderCard
                key={name}
                name={name}
                description={description}
                bestFor={bestFor}
                keyFeatures={keyFeatures}
              />
            ),
          )}
        </CardGrid>
      </div>
    </>
  )
}
