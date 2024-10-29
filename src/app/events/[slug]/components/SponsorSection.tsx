import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'
import { sponsorTierConfigs } from '../utils/sponsorTierConfigs'

import { SponsorContainer } from './SponsorContainer'

export type Sponsor = NonNullable<
  NonNullable<Event['sponsors']>['firstTier']
>[number]

type SponsorSectionProps = {
  sponsors: NonNullable<Event['sponsors']>
}

export function SponsorSection({ sponsors }: SponsorSectionProps) {
  return (
    <PageSection kicker="sponsors" title="Sponsors">
      <div className="grid gap-16">
        {sponsorTierConfigs.map(({ tier, logoImageConfig, gap }) => {
          if (!sponsors[tier] || sponsors[tier].length === 0) return null

          return (
            <SponsorContainer
              key={tier}
              sponsors={sponsors[tier]}
              tier={tier}
              gap={gap}
              logoImageConfig={logoImageConfig}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
