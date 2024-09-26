'use client'

import Image from 'next/image'

import { clsx } from 'clsx'

import type { Event } from '@/types/eventType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { capitalize } from '@/utils/capitalize'

import { PageSection } from '@/components/PageSection'

type Sponsor = NonNullable<NonNullable<Event['sponsors']>['first-tier']>[number]

type SponsorsSectionProps = {
  sponsors: Event['sponsors']
}

type SponsorGridProps = {
  sponsors: Array<Sponsor>
  tier: string
  columnsStyle: string
  imageConfig: ImageConfig
}

type SponsorLogoProps = {
  sponsor: Sponsor
  tier: string
  imageConfig: ImageConfig
}

type ImageConfig = {
  containerStyles: string
  imageSizes: string
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

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
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

function SponsorGrid({
  sponsors,
  tier,
  columnsStyle,
  imageConfig,
}: SponsorGridProps) {
  return (
    <div className={clsx('grid gap-8', columnsStyle)}>
      {sponsors.map((sponsor, index) => (
        <SponsorLogo
          key={index}
          sponsor={sponsor}
          tier={tier}
          imageConfig={imageConfig}
        />
      ))}
    </div>
  )
}
function SponsorLogo({ sponsor, tier, imageConfig }: SponsorLogoProps) {
  const formattedTier = capitalize(tier.replace('-', ' '))

  return (
    <div className={clsx('relative w-full', imageConfig.containerStyles)}>
      <Image
        key={sponsor.name}
        src={sponsor.image.src}
        alt={`${sponsor.name} Logo - ${formattedTier} sponsor`}
        fill={true}
        sizes={imageConfig.imageSizes}
        className="object-contain object-left-bottom"
      />
      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${sponsor.name}'s website`}
          className="absolute inset-0 rounded-lg focus:brand-outline"
        />
      )}
    </div>
  )
}
