import { clsx } from 'clsx'

import { type SponsorLogoProps, SponsorLogo } from './SponsorLogo'
import type { Sponsor } from './SponsorSection'

type SponsorGridProps = {
  sponsors: Array<Sponsor>
  tier: string
  gridClassName: string
  logoImageConfig: SponsorLogoProps['logoImageConfig']
}

export function SponsorGrid({
  sponsors,
  tier,
  gridClassName,
  logoImageConfig,
}: SponsorGridProps) {
  return (
    <div className={clsx('grid gap-8', gridClassName)}>
      {sponsors.map(({ name, ...sponsorProps }) => (
        <SponsorLogo
          key={name}
          sponsor={{ name, ...sponsorProps }}
          tier={tier}
          logoImageConfig={logoImageConfig}
        />
      ))}
    </div>
  )
}
