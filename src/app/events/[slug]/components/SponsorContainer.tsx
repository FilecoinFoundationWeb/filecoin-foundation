import { clsx } from 'clsx'

import { type SponsorLogoProps, SponsorLogo } from './SponsorLogo'
import type { Sponsor } from './SponsorSection'

type SponsorContainerProps = {
  sponsors: Array<Sponsor>
  tier: string
  gap: string
  logoImageConfig: SponsorLogoProps['logoImageConfig']
}

export function SponsorContainer({
  sponsors,
  tier,
  gap,
  logoImageConfig,
}: SponsorContainerProps) {
  return (
    <div
      className={clsx(
        gap,
        'flex flex-col flex-wrap justify-start sm:flex-row sm:justify-center sm:gap-8',
      )}
    >
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
