import { useMemo } from 'react'

import { isBefore } from 'date-fns'

import { UseCategoryProps, useCategory } from '@/hooks/useCategory'

import type { Event } from '@/types/eventType'

import { getUTCMidnightToday } from '@/utils/dateUtils'

import { pastEventsOption } from '@/constants/categoryConstants'

export function useEventsCategory(props: UseCategoryProps<Event>) {
  const { entries, searchParams, validCategoryIds } = props

  const results = useCategory({
    searchParams,
    entries,
    validCategoryIds,
  })
  const { categoryQuery, categoryCounts, categorizedResults } = results

  const pastEvents = useMemo(
    () => entries.filter(filterByPastEvents),
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

function filterByPastEvents(entry: Event) {
  const today = getUTCMidnightToday()
  const { startDate, endDate } = entry
  const eventDate = endDate || startDate

  return isBefore(eventDate, today)
}
