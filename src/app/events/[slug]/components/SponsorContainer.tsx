import { clsx } from 'clsx'

import type { SponsorTierConfig } from '../utils/sponsorTierConfigs'

import { SponsorLogo } from './SponsorLogo'
import type { Sponsor } from './SponsorSection'

type SponsorContainerProps = {
  sponsors: Array<Sponsor>
} & SponsorTierConfig

export function SponsorContainer({
  sponsors,
  tier,
  logoImageConfig,
  gap = 'gap-8',
}: SponsorContainerProps) {
  return (
    <div
      className={clsx(
        'flex flex-col flex-wrap justify-start sm:flex-row sm:justify-center sm:gap-8',
        gap,
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
