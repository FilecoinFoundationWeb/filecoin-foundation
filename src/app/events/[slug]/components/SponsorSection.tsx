import { PageSection } from '@/components/PageSection'

import { sponsorTierConfigs } from '../../constants/sponsorTierConfigs'
import type { Event } from '../../types/eventType'

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
        {sponsorTierConfigs.map(({ tier, logoImageConfig, containerGap }) => {
          if (!sponsors[tier] || sponsors[tier].length === 0) return null

          return (
            <SponsorContainer
              key={tier}
              sponsors={sponsors[tier]}
              tier={tier}
              containerGap={containerGap}
              logoImageConfig={logoImageConfig}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
