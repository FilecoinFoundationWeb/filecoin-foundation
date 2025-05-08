import { useMemo } from 'react'

import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'
import type {
  AnyObject,
  NonEmptyReadonlyArray,
} from '@filecoin-foundation/utils/types/utilTypes'
import type { normalizeQueryParam } from '@filecoin-foundation/utils/urlUtils'

import type { EntryViewConfig } from './types/entryViewTypes'

type UseEntryViewProps<
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
}: UseEntryViewProps<Entry, Configs>) {
  const viewId = useMemo(() => {
    const config = configs.find((config) => config.id === query)
    return config?.id || defaultConfig.id
  }, [configs, defaultConfig.id, query])

  const viewResults = useMemo(() => {
    const viewConfig = findOrThrow(configs, (config) => config.id === viewId)

    return viewConfig.filterOrSortFn(entries)
  }, [configs, entries, viewId])

  return { viewResults }
}
