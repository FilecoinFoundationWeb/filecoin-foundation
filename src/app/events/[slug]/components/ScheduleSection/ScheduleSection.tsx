import { PageSection } from '@/components/PageSection'

import type { Event } from '../../../types/eventType'

import { Tabs } from './Tabs'

type ScheduleSectionProps = {
  schedule: NonNullable<Event['schedule']>
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <PageSection kicker={schedule.kicker} title={schedule.title}>
      <Tabs schedule={schedule} />
    </PageSection>
  )
}
