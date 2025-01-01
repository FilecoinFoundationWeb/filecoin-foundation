import { clsx } from 'clsx'

import type { SponsorTierConfig } from '../../constants/sponsorTierConfigs'
import type { Sponsor } from '../../types/sponsorType'

import { SponsorLogo } from './SponsorLogo'

type SponsorContainerProps = {
  sponsors: Array<Sponsor>
} & SponsorTierConfig

export function SponsorContainer({
  sponsors,
  tier,
  logoImageConfig,
  containerGap,
}: SponsorContainerProps) {
  return (
    <div
      className={clsx(
        'flex flex-col flex-wrap justify-start sm:flex-row sm:justify-center',
        containerGap,
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
