import { useMemo } from 'react'

import type {
  AnyObject,
  NonEmptyReadonlyArray,
} from '@filecoin-foundation/utils/types/utilTypes'
import type { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'
import type { EntryViewConfig } from './types/entryViewTypes'

type UseSortProps<
  Entry extends AnyObject,
  Configs extends NonEmptyReadonlyArray<EntryViewConfig<Entry>>,
> = {
  query: ReturnType<typeof normalizeQueryParam>
  entries: Array<Entry>
  configs: Configs
  defaultConfig?: Configs[number]
}

export function useEntryView<
  Entry extends AnyObject,
  Configs extends NonEmptyReadonlyArray<EntryViewConfig<Entry>>,
>({
  query,
  entries,
  configs,
  defaultConfig = configs[0],
}: UseSortProps<Entry, Configs>) {
  const viewId = useMemo(() => {
    const viewIds = configs.map((config) => config.id)
    const viewId = viewIds.find((id) => id === query)

    return viewId || defaultConfig.id
  }, [configs, defaultConfig.id, query])

  const viewResults = useMemo(() => {
    const viewConfig = findOrThrow(configs, (config) => config.id === viewId)

    return viewConfig.filterOrSortFn(entries)
  }, [configs, defaultConfig, entries, viewId])

  return {
    query: viewId,
    viewResults,
    defaultQuery: defaultConfig.id,
  }
}
