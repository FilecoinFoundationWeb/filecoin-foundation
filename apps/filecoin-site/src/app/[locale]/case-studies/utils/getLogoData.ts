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
  ImageLogoProps,
  SVGLogoProps,
} from '@/components/SimpleCardWithLogo'

type SVGLogoConfig = Omit<SVGLogoProps, 'src'> & { asset: SVGLogoProps['src'] }
type ImageLogoConfig = Omit<ImageLogoProps, 'src'> & {
  asset: ImageLogoProps['src']
}

const LOGO_CONFIG: Record<string, ImageLogoConfig | SVGLogoConfig> = {
  aethir: {
    type: 'svg',
    asset: AethirLogo,
    bgColor: '#111',
  },
  'easier-data-initiative': {
    type: 'image',
    asset: EasierDataInitiativeLogo,
    bgColor: '#fff',
  },
  'flickr-foundation': {
    type: 'svg',
    asset: FlickrFoundationLogo,
    bgColor: '#ededed',
  },
  'internet-archive': {
    type: 'svg',
    asset: InternetArchiveLogo,
    bgColor: '#222',
  },
  'mit-open-learning': {
    type: 'svg',
    asset: MITOpenLearningLogo,
    bgColor: '#325b6b',
  },
  'seti-institute': {
    type: 'svg',
    asset: SetiInstituteLogo,
    bgColor: '#000',
  },
  smithsonian: {
    type: 'image',
    asset: SmithsonianLogo,
    bgColor: '#000',
  },
  solana: {
    type: 'image',
    asset: SolanaLogo,
    bgColor: '#000',
  },
  'starling-lab': {
    type: 'image',
    asset: StarlingLabLogo,
    bgColor: '#fff',
  },
  'victor-chang': {
    type: 'svg',
    asset: VictorChangLogo,
    bgColor: '#fff',
  },
}

export function getLogoData(slug: string) {
  const logoConfig = LOGO_CONFIG[slug]

  if (!logoConfig) {
    throw new Error(`Logo config not found for ${slug}`)
  }

  if (logoConfig.type === 'image') {
    return {
      ...logoConfig,
      src: logoConfig.asset,
    } satisfies ImageLogoProps
  }

  return {
    ...logoConfig,
    src: logoConfig.asset,
  } satisfies SVGLogoProps
}
