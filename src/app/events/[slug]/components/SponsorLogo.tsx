import Image from 'next/image'

import { clsx } from 'clsx'

import { capitalize } from '@/utils/capitalize'

import type { SponsorTierConfig } from '../../constants/sponsorTierConfigs'
import type { Sponsor } from '../../types/sponsorType'

type SponsorLogoProps = Omit<SponsorTierConfig, 'containerGap'> & {
  sponsor: Sponsor
}

export function SponsorLogo({
  sponsor,
  tier,
  logoImageConfig,
}: SponsorLogoProps) {
  const formattedSponsorTier = formatSponsorTier(tier)

  return (
    <div className={clsx('relative', logoImageConfig.containerStyles)}>
      <Image
        fill
        src={sponsor.image.src}
        alt={`${sponsor.name} Logo - ${formattedSponsorTier} sponsor`}
        sizes={logoImageConfig.imageSizes}
        className="object-contain"
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

function formatSponsorTier(tier: string) {
  return capitalize(tier.replace('-', ' '))
}
