import { useMemo } from 'react'

import { UseCategoryProps, useCategory } from '@/hooks/useCategory'

import type { EventData } from '@/types/eventTypes'

import { isDateValid } from '@/utils/formatDate'

import { pastEventsSetting } from '@/constants/categoryConstants'

export function useEventsCategory(props: UseCategoryProps<EventData>) {
  const { entries } = props

  const results = useCategory(props)
  const { categoryQuery, categoryCounts, categorizedResults } = results

  const countsWithPastEvents = useMemo(() => {
    const pastEventsCount = entries.filter(filterByPastEvents).length

    return { ...categoryCounts, [pastEventsSetting.id]: pastEventsCount }
  }, [categoryCounts, entries])

  const resultsWithPastEvents = useMemo(() => {
    if (categoryQuery === pastEventsSetting.id) {
      return entries.filter(filterByPastEvents)
    }

    return categorizedResults
  }, [categoryQuery, categorizedResults, entries])

  return {
    categoryQuery,
    categorizedResults: resultsWithPastEvents,
    categoryCounts: countsWithPastEvents,
  }
}

const today = getTodayDateUTCZero()

function filterByPastEvents(entry: EventData) {
  const { startDate, endDate, slug } = entry

  if (endDate) {
    if (!isDateValid(endDate)) {
      throw new Error(`Invalid date provided for event: ${slug}`)
    }
    return new Date(endDate) < today
  }

  if (!isDateValid(startDate)) {
    throw new Error(`Invalid date provided for event: ${slug}`)
  }
  return new Date(startDate) < today
}

function getTodayDateUTCZero() {
  const today = new Date()
  const utcYear = today.getUTCFullYear()
  const utcMonth = today.getUTCMonth()
  const utcDate = today.getUTCDate()

  return new Date(Date.UTC(utcYear, utcMonth, utcDate, 0, 0, 0, 0))
}
