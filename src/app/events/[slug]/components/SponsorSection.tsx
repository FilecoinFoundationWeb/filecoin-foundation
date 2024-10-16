import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { PageSection } from '@/components/PageSection'

import type { Event } from '../../types/eventType'

import { SponsorGrid } from './SponsorGrid'

export type Sponsor = NonNullable<
  NonNullable<Event['sponsors']>['firstTier']
>[number]

type SponsorSectionProps = {
  sponsors: NonNullable<Event['sponsors']>
}

const sponsorTierConfigs = [
  {
    tier: 'firstTier',
    gridClassName: 'grid-cols-2 md:grid-cols-4',
    logoImageConfig: {
      containerStyles: 'h-16 sm:h-20',
      imageSizes: buildImageSizeProp({ startSize: '140px', sm: '180px' }),
    },
  },
  {
    tier: 'secondTier',
    gridClassName: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    logoImageConfig: {
      containerStyles: 'h-11 sm:h-16',
      imageSizes: buildImageSizeProp({ startSize: '100px', sm: '140px' }),
    },
  },
  {
    tier: 'thirdTier',
    gridClassName: 'grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7',
    logoImageConfig: {
      containerStyles: 'h-7 sm:h-11',
      imageSizes: buildImageSizeProp({ startSize: '60px', sm: '100px' }),
    },
  },
] as const

export function SponsorSection({ sponsors }: SponsorSectionProps) {
  return (
    <PageSection kicker="sponsors" title="Sponsors">
      <div className="grid gap-8">
        {sponsorTierConfigs.map(({ tier, gridClassName, logoImageConfig }) => {
          if (!sponsors[tier] || sponsors[tier].length === 0) return null

          return (
            <SponsorGrid
              key={tier}
              sponsors={sponsors[tier]}
              tier={tier}
              gridClassName={gridClassName}
              logoImageConfig={logoImageConfig}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
