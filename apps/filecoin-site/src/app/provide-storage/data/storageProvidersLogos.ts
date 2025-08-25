import CIDgravityLogo from '@/assets/logos/cidgravity-logo.svg'
import DCENTLogo from '@/assets/logos/dcent-logo.svg'
import FutureTechHoldingsLogo from '@/assets/logos/future-tech-holdings-logo.svg'
import NDLABSLogo from '@/assets/logos/ndlabs-logo.svg'
import RRMGlobalLogo from '@/assets/logos/rrm-global-logo.svg'
import SwanChainLogo from '@/assets/logos/swan-chain-logo.svg'

import { type LogoItemProps } from '@/components/LogoSection/LogoItem'

export const storageProvidersLogos = [
  {
    logo: CIDgravityLogo,
    alt: 'CIDgravity Logo',
    href: 'https://cidgravity.com',
    size: 50,
  },
  {
    logo: DCENTLogo,
    alt: 'DCENT Logo',
    href: 'https://dcent.nl/',
    size: 24,
  },
  {
    logo: FutureTechHoldingsLogo,
    alt: 'Future Tech Holdings Logo',
    href: 'https://future-tech-holdings.com/',
    size: 24,
  },
  {
    logo: NDLABSLogo,
    alt: 'ND LABS Logo',
    href: 'https://www.ndlabs.io/',
  },
  {
    logo: RRMGlobalLogo,
    alt: 'RRM Global Logo',
    href: 'https://www.rrmglobal.io/',
  },
  {
    logo: SwanChainLogo,
    alt: 'Swan Chain Logo',
    href: 'https://swanchain.io/',
    size: 40,
  },
] as const satisfies Array<LogoItemProps>
