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

type getLogoConfigProps = {
  asset: SVGLogoProps['src'] | ImageLogoProps['src']
  defaultBgColor?: HEXCodeType
  defaultColor?: HEXCodeType
}

export function getLogoConfig(slug: string): getLogoConfigProps {
  const LOGO_CONFIG: Record<string, getLogoConfigProps> = {
    'victor-chang': { asset: VictorChangLogo, defaultBgColor: '#ffffff' },
    aethir: {
      asset: AethirLogo,
      defaultBgColor: '#111111',
      defaultColor: '#D7FE51',
    },
    'easier-data-initiative': {
      asset: EasierDataInitiativeLogo,
      defaultBgColor: '#ffffff',
    },
    'flickr-foundation': {
      asset: FlickrFoundationLogo,
      defaultBgColor: '#ffffff',
    },
    'internet-archive': {
      asset: InternetArchiveLogo,
      defaultBgColor: '#ffffff',
    },
    'mit-open-learning': {
      asset: MITOpenLearningLogo,
      defaultBgColor: '#ffffff',
    },
    'seti-institute': { asset: SetiInstituteLogo, defaultBgColor: '#ffffff' },
    smithsonian: { asset: SmithsonianLogo, defaultBgColor: '#ffffff' },
    solana: { asset: SolanaLogo, defaultBgColor: '#000000' },
    'starling-labs': { asset: StarlingLabLogo, defaultBgColor: '#ffffff' },
  }

  const config = LOGO_CONFIG[slug]
  if (!config) {
    throw new Error(`No logo configuration found for case study: ${slug}`)
  }

  return config
}

export function getLogoData(slug: string): SVGLogoProps | ImageLogoProps {
  const logoConfig = getLogoConfig(slug)
  const logoSrc = logoConfig.asset

  const isImage = typeof logoSrc === 'object'

  return isImage
    ? {
        type: 'image' as const,
        src: logoSrc as ImageLogoProps['src'],
        bgColor: logoConfig.defaultBgColor || '#ffffff',
      }
    : {
        type: 'svg' as const,
        src: logoSrc as SVGLogoProps['src'],
        bgColor: logoConfig.defaultBgColor || '#ffffff',
        color: logoConfig.defaultColor || '#000000',
      }
}
