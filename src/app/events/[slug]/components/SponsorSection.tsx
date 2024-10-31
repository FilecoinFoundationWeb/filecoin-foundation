import { PageSection } from '@/components/PageSection'

import { sponsorTierConfigs } from '../../constants/sponsorTierConfigs'
import type { Sponsors } from '../../types/sponsorType'

import { SponsorContainer } from './SponsorContainer'

type SponsorSectionProps = {
  sponsors: Sponsors
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
