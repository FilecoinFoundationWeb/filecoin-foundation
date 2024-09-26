import Image from 'next/image'

import { clsx } from 'clsx'

import { capitalize } from '@/utils/capitalize'

import type { Sponsor } from './SponsorSection'

export type ImageConfig = {
  containerStyles: string
  imageSizes: string
}

export type SponsorLogoProps = {
  sponsor: Sponsor
  tier: string
  imageConfig: ImageConfig
}

export function SponsorLogo({ sponsor, tier, imageConfig }: SponsorLogoProps) {
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
