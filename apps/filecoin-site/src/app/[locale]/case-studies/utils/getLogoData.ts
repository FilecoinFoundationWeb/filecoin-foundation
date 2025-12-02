import AethirLogo from '@/assets/logos/aethir-icon-logo.svg'
import EasierDataInitiativeLogo from '@/assets/logos/easier-data-initiative-logo.png'
import FlickrFoundationLogo from '@/assets/logos/flickr-foundation-icon-logo.svg'
import InternetArchiveLogo from '@/assets/logos/internet-archive-icon-logo.svg'
import MITOpenLearningLogo from '@/assets/logos/MIT-open-learning-icon-logo.svg'
import SetiInstituteLogo from '@/assets/logos/seti-institute-logo.svg'
import SmithsonianLogo from '@/assets/logos/smithsonian-icon-logo.png'
import SolanaLogo from '@/assets/logos/solana-icon-logo.png'
import StarlingLabLogo from '@/assets/logos/starling-lab-icon-logo.png'
import VictorChangLogo from '@/assets/logos/victor-chang-icon-logo.svg'

import type {
  HEXCodeType,
  ImageLogoProps,
  SVGLogoProps,
} from '@/components/SimpleCardWithLogo'

type SVGLogoConfig = {
  type: 'svg'
  asset: SVGLogoProps['src']
  bgColor: HEXCodeType
  color: HEXCodeType
}

type ImageLogoConfig = {
  type: 'image'
  asset: ImageLogoProps['src']
  bgColor: HEXCodeType
}

const LOGO_CONFIG: Record<string, ImageLogoConfig | SVGLogoConfig> = {
  'victor-chang': {
    type: 'svg',
    asset: VictorChangLogo,
    bgColor: '#ffffff',
    color: '#000000',
  },
  aethir: {
    type: 'svg',
    asset: AethirLogo,
    bgColor: '#111111',
    color: '#D7FE51',
  },
  'easier-data-initiative': {
    type: 'image',
    asset: EasierDataInitiativeLogo,
    bgColor: '#ffffff',
  },
  'flickr-foundation': {
    type: 'svg',
    asset: FlickrFoundationLogo,
    bgColor: '#EDEDED',
    color: '#FF0084',
  },
  'internet-archive': {
    type: 'svg',
    asset: InternetArchiveLogo,
    bgColor: '#222222',
    color: '#ffffff',
  },
  'mit-open-learning': {
    type: 'svg',
    asset: MITOpenLearningLogo,
    bgColor: '#325B6B',
    color: '#ffffff',
  },
  'seti-institute': {
    type: 'svg',
    asset: SetiInstituteLogo,
    bgColor: '#000000',
    color: '#ffffff',
  },
  smithsonian: {
    type: 'image',
    asset: SmithsonianLogo,
    bgColor: '#ffffff',
  },
  solana: {
    type: 'image',
    asset: SolanaLogo,
    bgColor: '#000000',
  },
  'starling-labs': {
    type: 'image',
    asset: StarlingLabLogo,
    bgColor: '#ffffff',
  },
}

export function getLogoData(slug: string) {
  const logoConfig = LOGO_CONFIG[slug]

  if (!logoConfig) {
    throw new Error(`Logo config not found for ${slug}`)
  }

  return {
    ...logoConfig,
    src: logoConfig.asset,
  }
}
