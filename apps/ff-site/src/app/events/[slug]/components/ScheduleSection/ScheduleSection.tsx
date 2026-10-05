import { Suspense } from 'react'

import type { Event } from '@/qino/collections/events'

import { PageSection } from '@/components/PageSection'

import { Tabs } from './Tabs'

type ScheduleSectionProps = {
  schedule: NonNullable<Event['schedule']>
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <PageSection kicker={schedule.kicker} title={schedule.title}>
      <Suspense>
        <Tabs schedule={schedule} />
      </Suspense>
    </PageSection>
  )
}
