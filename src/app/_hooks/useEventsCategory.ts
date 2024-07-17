import { useMemo } from 'react'

import { UseCategoryProps, useCategory } from '@/hooks/useCategory'

import type { EventData } from '@/types/eventTypes'

import { isDateValid } from '@/utils/formatDate'

import { pastEventsSetting } from '@/constants/categoryConstants'

function getUTCMidnightToday(): Date {
  const today = new Date()
  return new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate(),
      0,
      0,
      0,
      0,
    ),
  )
}

function filterByPastEvents(entry: EventData): boolean {
  const today = getUTCMidnightToday()
  const { startDate, endDate, slug } = entry

  if (endDate && !isDateValid(endDate)) {
    throw new Error(`Invalid endDate provided for event: ${slug}`)
  }

  if (!isDateValid(startDate)) {
    throw new Error(`Invalid startDate provided for event: ${slug}`)
  }

  const eventDate = endDate ? new Date(endDate) : new Date(startDate)
  return eventDate < today
}

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
