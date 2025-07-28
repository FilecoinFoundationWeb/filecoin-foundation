import { type LogoItemProps } from '@/components/LogoSection/LogoItem'

import AethirLogo from '@/assets/logos/aethir-logo.svg'
import FlickrFoundationLogo from '@/assets/logos/flickr-foundation-logo.svg'
import InternetArchiveLogo from '@/assets/logos/internet-archive-logo.svg'
import MITOpenLearningLogo from '@/assets/logos/MIT-open-learning-logo.svg'
import SetiInstituteLogo from '@/assets/logos/seti-institute-logo.svg'
import SmithsonianLogo from '@/assets/logos/smithsonian-logo.svg'
import SolanaLogo from '@/assets/logos/solana-logo.svg'
import StarlingLabLogo from '@/assets/logos/starling-lab-logo.svg'
import VictorChanLogo from '@/assets/logos/victor-chang-logo.svg'

export const trustedByLogos: Array<LogoItemProps> = [
  {
    logo: SolanaLogo,
    size: 24,
    alt: 'Solana Logo',
    href: 'https://solana.com',
  },
  {
    logo: InternetArchiveLogo,
    alt: 'Internet Archive Logo',
    href: 'https://archive.org',
  },
  {
    logo: MITOpenLearningLogo,
    alt: 'MIT Open Learning Logo',
    href: 'https://openlearning.mit.edu',
  },
  {
    logo: SmithsonianLogo,
    alt: 'Smithsonian Logo',
    href: 'https://www.si.edu',
  },
  {
    logo: FlickrFoundationLogo,
    alt: 'Flickr Foundation Logo',
    href: 'https://www.flickr.org',
  },
  {
    logo: StarlingLabLogo,
    alt: 'Starling Lab Logo',
    href: 'https://www.starlinglab.org/',
  },
  {
    logo: AethirLogo,
    size: 24,
    alt: 'Aethir Logo',
    href: 'https://aethir.com',
  },
  {
    logo: VictorChanLogo,
    alt: 'Victor Chan Logo',
    href: 'https://www.victorchang.edu.au/',
  },
  {
    logo: SetiInstituteLogo,
    alt: 'Seti Institute Logo',
    href: 'https://www.seti.org/',
  },
]
