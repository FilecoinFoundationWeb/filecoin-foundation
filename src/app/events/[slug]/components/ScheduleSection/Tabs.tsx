'use client'

import { useRef } from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useQueryState, parseAsInteger } from 'nuqs'
import theme from 'tailwindcss/defaultTheme'
import { useIsMounted, useMediaQuery } from 'usehooks-ts'

import type { Event } from '../../../types/eventType'
import { formatDate } from '../../utils/dateUtils'
import { filterAndSortScheduleDays } from '../../utils/filterAndSortScheduleDays'
import { scrollRefIntoView } from '../../utils/scrollRefIntoView'

import { EventDetails } from './EventDetails'

type TabsProps = {
  schedule: NonNullable<Event['schedule']>
}

const { screens } = theme

const QUERY_KEY = 'tab'
const DEFAULT_TAB_INDEX = 0

export function Tabs({ schedule }: TabsProps) {
  const sortedDays = filterAndSortScheduleDays(schedule)

  const [activeTabIndex, setActiveTabIndex] = useQueryState(
    QUERY_KEY,
    parseAsInteger.withDefault(DEFAULT_TAB_INDEX).withOptions({
      clearOnDefault: false,
    }),
  )

  const tabGroupRef = useRef<HTMLDivElement>(null)
  const isMounted = useIsMounted()
  const isScreenBelowLg = useMediaQuery(
    `(max-width: ${parseInt(screens.md, 10) - 1}px)`,
  )

  function handleIndexChange(index: number) {
    setActiveTabIndex(index)

    if (isMounted() && isScreenBelowLg) {
      scrollRefIntoView(tabGroupRef)
    }
  }

  return (
    <TabGroup
      ref={tabGroupRef}
      className="relative grid gap-6"
      selectedIndex={activeTabIndex}
      onChange={handleIndexChange}
    >
      <TabList className="sticky top-0 -m-2 flex gap-4 overflow-auto bg-brand-800 p-2 lg:static">
        {sortedDays.map((day) => (
          <Tab
            key={formatDate(day.date)}
            className="whitespace-nowrap rounded-lg p-3 font-bold text-brand-300 focus:brand-outline data-[hover]:bg-brand-700 data-[selected]:bg-brand-700 data-[selected]:text-brand-400"
          >
            {formatDate(day.date)}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {sortedDays.map((day) => (
          <TabPanel
            key={formatDate(day.date)}
            className="rounded-lg focus:brand-outline"
          >
            <div className="grid gap-4">
              {day.events.map((event) => (
                <EventDetails key={event.title} {...event} />
              ))}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
