'use client'

import type { Event } from '@/types/eventType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { PageSection } from '@/components/PageSection'

import { SponsorGrid } from './SponsorGrid'

export type Sponsor = NonNullable<
  NonNullable<Event['sponsors']>['first-tier']
>[number]

type SponsorSectionProps = {
  sponsors: Event['sponsors']
}

const sponsorTierConfigs = {
  'first-tier': {
    columnsStyle: 'grid-cols-2 md:grid-cols-4',
    imageConfig: {
      containerStyles: 'h-16 sm:h-20',
      imageSizes: buildImageSizeProp({ startSize: '140px', sm: '180px' }),
    },
  },
  'second-tier': {
    columnsStyle: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    imageConfig: {
      containerStyles: 'h-11 sm:h-16',
      imageSizes: buildImageSizeProp({ startSize: '100px', sm: '140px' }),
    },
  },
  'third-tier': {
    columnsStyle: 'grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7',
    imageConfig: {
      containerStyles: 'h-7 sm:h-11',
      imageSizes: buildImageSizeProp({ startSize: '60px', sm: '100px' }),
    },
  },
}

const tiers: Array<keyof typeof sponsorTierConfigs> = [
  'first-tier',
  'second-tier',
  'third-tier',
]

export function SponsorSection({ sponsors }: SponsorSectionProps) {
  if (!sponsors) return null

  return (
    <PageSection kicker="sponsors" title="Sponsors">
      <div className="grid gap-8">
        {tiers.map((tier) => {
          const config = sponsorTierConfigs[tier]

          if (sponsors[tier]) {
            return (
              <SponsorGrid
                key={tier}
                sponsors={sponsors[tier]}
                tier={tier}
                columnsStyle={config.columnsStyle}
                imageConfig={config.imageConfig}
              />
            )
          }
        })}
      </div>
    </PageSection>
  )
}
