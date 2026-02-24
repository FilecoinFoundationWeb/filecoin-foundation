import GLIFLogo from '@/assets/logos/glif-logo.svg'
import Huddle01Logo from '@/assets/logos/huddle-01-logo.svg'
import LighthouseLogo from '@/assets/logos/lighthouse-logo.svg'
import RecallLogo from '@/assets/logos/recall-logo.svg'

import type { TranslationFunction } from '@/i18n/types'

import type { SimpleCardWithLogoProps } from '@/components/SimpleCardWithLogo'

export function getBuiltOnFilecoin(t: TranslationFunction) {
  return [
    {
      title: 'Lighthouse',
      description: t('builtOnFilecoin.lighthouse.description'),
      logo: {
        type: 'svg',
        src: LighthouseLogo,
        bgColor: '#643FBB',
      },
      cta: {
        href: 'https://www.lighthouse.storage/',
        text: t('builtOnFilecoin.visitWebsite'),
      },
    },
    {
      title: 'GLIF',
      description: t('builtOnFilecoin.glif.description'),
      logo: {
        type: 'svg',
        src: GLIFLogo,
        bgColor: '#141B35',
      },
      cta: {
        href: 'https://www.glif.io/',
        text: t('builtOnFilecoin.visitWebsite'),
      },
    },
    {
      title: 'Recall',
      description: t('builtOnFilecoin.recall.description'),
      logo: {
        type: 'svg',
        src: RecallLogo,
        bgColor: '#020202',
      },
      cta: {
        href: 'https://recall.network/',
        text: t('builtOnFilecoin.visitWebsite'),
      },
    },
    {
      title: 'Huddle01',
      description: t('builtOnFilecoin.huddle01.description'),
      logo: {
        type: 'svg',
        src: Huddle01Logo,
        bgColor: '#246BFD',
      },
      cta: {
        href: 'https://huddle01.com/',
        text: t('builtOnFilecoin.visitWebsite'),
      },
    },
  ] satisfies Array<SimpleCardWithLogoProps>
}
