'use client'

import { useRef } from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import theme from 'tailwindcss/defaultTheme'
import { useIsMounted, useMediaQuery } from 'usehooks-ts'

import { BasicCard } from '@/components/BasicCard'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import type { Event } from '../../types/eventType'
import { formatDate, formatTime } from '../utils/dateUtils'
import { filterAndSortScheduleDays } from '../utils/filterAndSortScheduleDays'

import { type ParticipantsProps, Participants } from './Participants'

type ScheduleTabsProps = {
  schedule: NonNullable<Event['schedule']>
}

const { screens } = theme

export function ScheduleTabs({ schedule }: ScheduleTabsProps) {
  const sortedDays = filterAndSortScheduleDays(schedule)

  const tabGroupRef = useRef<HTMLDivElement>(null)
  const isMounted = useIsMounted()
  const isScreenBelowLg = useMediaQuery(
    `(max-width: ${parseInt(screens.md, 10) - 1}px)`,
  )

  function scrollToTabGroup() {
    if (isMounted() && isScreenBelowLg && tabGroupRef.current) {
      tabGroupRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <TabGroup
      ref={tabGroupRef}
      className="relative grid gap-6"
      onChange={scrollToTabGroup}
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
                <BasicCard key={event.title}>
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="flex gap-6 text-brand-300 lg:flex-col lg:gap-1">
                      <div className="text-sm font-bold">
                        <span>{formatTime(event.start)}</span>
                        {event.end && <span> – {formatTime(event.end)}</span>}
                      </div>
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="lg:col-span-2">
                      <Heading tag="h3" variant="lg">
                        {event.title}
                      </Heading>
                      <div className="mt-2 space-y-2">
                        {event.description && (
                          <p className="max-w-readable">{event.description}</p>
                        )}
                        <div>
                          {event.moderators && event.moderators?.length > 0 && (
                            <Participants
                              title="Moderators"
                              participants={
                                event.moderators as ParticipantsProps['participants']
                              }
                            />
                          )}
                          {event.speakers && event.speakers.length > 0 && (
                            <Participants
                              title="Speakers"
                              participants={
                                event.speakers as ParticipantsProps['participants']
                              }
                            />
                          )}
                        </div>
                      </div>
                      {event.url && (
                        <div className="mt-4">
                          <TextLink href={event.url}>View Details</TextLink>
                        </div>
                      )}
                    </div>
                  </div>
                </BasicCard>
              ))}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
// mb-4 mt-2
