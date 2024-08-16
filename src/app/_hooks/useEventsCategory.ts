import { useMemo } from 'react'

import { isBefore } from 'date-fns'

import { UseCategoryProps, useCategory } from '@/hooks/useCategory'

import type { EventData } from '@/types/eventDataType'

import { getUTCMidnightToday } from '@/utils/dateUtils'

import { pastEventsSetting } from '@/constants/categoryConstants'

export function useEventsCategory(props: UseCategoryProps<EventData>) {
  const { entries, searchParams, validCategoryOptions } = props

  const results = useCategory({
    searchParams,
    entries,
    validCategoryOptions,
  })
  const { categoryQuery, categoryCounts, categorizedResults } = results

  const pastEvents = useMemo(
    () => entries.filter(filterByPastEvents),
    [entries],
  )

  const updatedCategoryCounts = useMemo(() => {
    const pastEventsCount = pastEvents.length
    return { ...categoryCounts, [pastEventsSetting.id]: pastEventsCount }
  }, [categoryCounts, pastEvents])

  const updatedCategorizedResults = useMemo(() => {
    if (categoryQuery === pastEventsSetting.id) {
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

function filterByPastEvents(entry: EventData) {
  const today = getUTCMidnightToday()
  const { startDate, endDate } = entry
  const eventDate = endDate || startDate

  return isBefore(eventDate, today)
}
