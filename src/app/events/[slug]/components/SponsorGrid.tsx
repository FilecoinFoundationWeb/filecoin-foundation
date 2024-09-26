import { clsx } from 'clsx'

import { type SponsorLogoProps, SponsorLogo } from './SponsorLogo'
import type { Sponsor } from './SponsorsSection'

type SponsorGridProps = {
  sponsors: Array<Sponsor>
  tier: string
  columnsStyle: string
  imageConfig: SponsorLogoProps['imageConfig']
}

export function SponsorGrid({
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
