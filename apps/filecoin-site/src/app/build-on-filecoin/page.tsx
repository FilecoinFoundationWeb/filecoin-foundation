import { LogoSection } from '@/components/LogoSection'

import LogoAsset from '@/assets/filecoin-logo-full.svg'
import LogoIconAsset from '@/assets/filecoin-logo-icon.svg'

export default function BuildOnFilecoin() {
  return (
    <div>
      <LogoSection
        title="Filecoin Partners"
        logos={[
          {
            logo: LogoAsset,
            alt: 'Filecoin Logo Full',
            href: 'https://filecoin.io',
          },
          {
            logo: LogoIconAsset,
            alt: 'Filecoin Logo',
            height: 36,
          },
          {
            logo: LogoIconAsset,
            alt: 'Filecoin Logo',
            height: 36,
          },
          {
            logo: LogoAsset,
            alt: 'Filecoin Logo Full',
          },
          {
            logo: LogoAsset,
            alt: 'Filecoin Logo',
            height: 36,
          },
          {
            logo: LogoAsset,
            alt: 'Filecoin Logo',
            height: 36,
          },
          {
            logo: LogoAsset,
            alt: 'Filecoin Logo Full',
          },
        ]}
      />
    </div>
  )
}
