import { PageSection } from '@/components/PageSection'

import type { Event } from '@/events/types/eventType'

import { ScheduleTabs } from './ScheduleTabs'

type ScheduleSectionProps = {
  schedule: NonNullable<Event['schedule']>
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <PageSection kicker="Join Us" title={schedule.title || 'Schedule'}>
      <ScheduleTabs schedule={schedule} />
    </PageSection>
  )
}
