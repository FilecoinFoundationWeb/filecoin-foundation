import { useMemo } from 'react'

import { pastEventsOption } from '@/constants/categoryConstants'

import { type UseCategoryProps, useCategory } from '@/hooks/useCategory'

import type { Event } from '@/events/types/eventType'
import { isEventConcluded } from '@/events/utils/isEventConcluded'

export function useEventsCategory(props: UseCategoryProps<Event>) {
  const { entries, searchParams, validCategoryIds } = props

  const results = useCategory({
    searchParams,
    entries,
    validCategoryIds,
  })
  const { categoryQuery, categoryCounts, categorizedResults } = results

  const pastEvents = useMemo(
    () =>
      entries.filter(({ startDate, endDate }) =>
        isEventConcluded(startDate, endDate),
      ),
    [entries],
  )

  const updatedCategoryCounts = useMemo(() => {
    const pastEventsCount = pastEvents.length
    return { ...categoryCounts, [pastEventsOption.id]: pastEventsCount }
  }, [categoryCounts, pastEvents])

  const updatedCategorizedResults = useMemo(() => {
    if (categoryQuery === pastEventsOption.id) {
      return pastEvents
    }
    return categorizedResults
  }, [categoryQuery, categorizedResults, pastEvents])

  return {
    categoryQuery,
    categorizedResults: updatedCategorizedResults,
    categoryCounts: updatedCategoryCounts,
  }
}
