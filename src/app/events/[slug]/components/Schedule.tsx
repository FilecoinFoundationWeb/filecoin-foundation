import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import type { Event } from '@/types/eventType'

import { BasicCard } from '@/components/BasicCard'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { formatDate, formatTime } from '../utils/dateUtils'

type ScheduleProps = {
  schedule: Event['schedule']
}

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <TabGroup className="grid gap-6">
      <TabList className="-m-2 flex gap-4 overflow-auto p-2">
        {schedule!.days.map((day) => (
          <Tab
            key={formatDate(day.date)}
            className="whitespace-nowrap rounded-lg p-3 font-bold text-brand-300 focus:brand-outline data-[hover]:bg-brand-700 data-[selected]:bg-brand-700 data-[selected]:text-brand-400"
          >
            {formatDate(day.date)}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {schedule!.days.map((day) => (
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
                      <p className="mb-4 mt-2 max-w-readable">
                        {event.description}
                      </p>
                      {event.url && (
                        <TextLink href={event.url}>View Details</TextLink>
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
