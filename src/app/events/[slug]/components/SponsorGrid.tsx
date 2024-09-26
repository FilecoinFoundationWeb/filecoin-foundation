import { clsx } from 'clsx'

import { type SponsorLogoProps, SponsorLogo } from './SponsorLogo'
import type { Sponsor } from './SponsorSection'

type SponsorGridProps = {
  sponsors: Array<Sponsor>
  tier: string
  columnsStyle: string
  logoImageConfig: SponsorLogoProps['logoImageConfig']
}

export function SponsorGrid({
  sponsors,
  tier,
  columnsStyle,
  logoImageConfig,
}: SponsorGridProps) {
  return (
    <div className={clsx('grid gap-8', columnsStyle)}>
      {sponsors.map((sponsor, index) => (
        <SponsorLogo
          key={index}
          sponsor={sponsor}
          tier={tier}
          logoImageConfig={logoImageConfig}
        />
      ))}
    </div>
  )
}
