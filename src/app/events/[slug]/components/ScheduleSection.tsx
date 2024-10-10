import type { Event } from '@/types/eventType'

import { PageSection } from '@/components/PageSection'

import { ScheduleTabs } from './ScheduleTabs'

type ScheduleSectionProps = {
  schedule: Event['schedule']
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <PageSection kicker="Join Us" title={schedule!.title || 'Schedule'}>
      <ScheduleTabs schedule={schedule} />
    </PageSection>
  )
}
