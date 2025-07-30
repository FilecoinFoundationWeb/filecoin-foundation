'use client'

import { useMemo } from 'react'

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'

import { CardGrid } from '@/components/CardGrid'

import { storageProviders } from '../data/storageProviders'

import { StorageCategoryCheckboxList } from './StorageCategoryCheckboxList'
import { StorageCategoryListbox } from './StorageCategoryListbox'
import { StorageProviderCard } from './StorageProviderCard/StorageProviderCard'

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

  const alphaSortedStorageProviders = useMemo(() => {
    return filteredStorageProviders.sort((a, b) => a.name.localeCompare(b.name))
  }, [filteredStorageProviders])

  return (
    <>
      <fieldset>
        <legend className="sr-only">Filter by storage type</legend>

        <div className="hidden xl:block">
          <StorageCategoryCheckboxList
            activeFilters={filters}
            setFilters={setFilters}
          />
        </div>

        <div className="max-w-xl xl:hidden">
          <StorageCategoryListbox
            activeFilters={filters}
            setFilters={setFilters}
          />
        </div>
      </fieldset>

      <div className="mt-10">
        <CardGrid as="ul" variant="smTwoLgThree">
          {alphaSortedStorageProviders.map(
            ({ name, description, bestFor, keyFeatures, url }) => (
              <StorageProviderCard
                key={name}
                name={name}
                description={description}
                bestFor={bestFor}
                keyFeatures={keyFeatures}
                url={url}
              />
            ),
          )}
        </CardGrid>
      </div>
    </>
  )
}
