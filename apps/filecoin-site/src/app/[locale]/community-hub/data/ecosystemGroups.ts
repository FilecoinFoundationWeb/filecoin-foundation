import type { TranslationFunction } from '@/i18n/types'

import { FILECOIN_FOUNDATION_URL } from '@/constants/siteMetadata'


import ANSALogo from '@/assets/logos/ansa-logo.svg'
import FIDLLogo from '@/assets/logos/fidl-logo.png'
import FilBLogo from '@/assets/logos/fil-b-logo.png'
import FilecoinFoundationIconLogo from '@/assets/logos/filecoin-foundation-icon-logo.svg'
import FilOzLogo from '@/assets/logos/filoz-logo.svg'
import PolarisLogo from '@/assets/logos/polaris-logo.png'

import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

export function getEcosystemGroups(t: TranslationFunction) {
  return [
    {
      title: 'Filecoin Foundation',
      description: t('ecosystemGroups.filecoinFoundation.description'),
      logo: {
        type: 'svg',
        src: FilecoinFoundationIconLogo,
        bgColor: '#08072E',
      },
      cta: {
        href: FILECOIN_FOUNDATION_URL,
        text: t('ecosystemGroups.visitWebsite'),
      },
    },
    {
      title: 'FilOz',
      description: t('ecosystemGroups.filOz.description'),
      logo: {
        type: 'svg',
        src: FilOzLogo,
        bgColor: '#0090FF',
      },
      cta: {
        href: 'https://www.filoz.org/',
        text: t('ecosystemGroups.visitWebsite'),
      },
    },
    {
      title: 'Polaris',
      description: t('ecosystemGroups.polaris.description'),
      logo: {
        type: 'image',
        src: PolarisLogo,
        bgColor: '#fff',
      },
      cta: {
        href: 'https://directory.plnetwork.io/teams/clz1ls1gr0003xl02n5lpvbhn',
        text: t('ecosystemGroups.visitWebsite'),
      },
    },
    {
      title: 'Fil-B',
      description: t('ecosystemGroups.filB.description'),
      logo: {
        type: 'image',
        src: FilBLogo,
        bgColor: '#FAFAFA',
      },
      cta: {
        href: 'https://fil.builders',
        text: t('ecosystemGroups.visitWebsite'),
      },
    },
    {
      title: 'FIDL',
      description: t('ecosystemGroups.fidl.description'),
      logo: {
        type: 'image',
        src: FIDLLogo,
        bgColor: '#000',
      },
      cta: {
        href: 'https://www.fidl.tech/',
        text: t('ecosystemGroups.visitWebsite'),
      },
    },
    {
      title: 'ANSA',
      description: t('ecosystemGroups.ansa.description'),
      logo: {
        type: 'svg',
        src: ANSALogo,
        bgColor: '#F5F4F2',
      },
      cta: {
        href: 'https://ansaresearch.ai/',
        text: t('ecosystemGroups.visitWebsite'),
      },
    },
  ] as const satisfies Array<SimpleCardWithLogoProps>
}
