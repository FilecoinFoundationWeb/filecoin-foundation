import type { TranslationFunction } from '@/i18n/types'

import imageFallback from '@/assets/graphics/image-fallback.webp'


import type { SimpleCardWithImageProps } from '@/components/SimpleCardWithImage'

export function getCodeNCorgiSeries(t: TranslationFunction) {
  return [
    {
      title: t('codeNCorgi.day1.title'),
      description: t('codeNCorgi.day1.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
    {
      title: t('codeNCorgi.day2.title'),
      description: t('codeNCorgi.day2.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
    {
      title: t('codeNCorgi.day3.title'),
      description: t('codeNCorgi.day3.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
    {
      title: t('codeNCorgi.day4.title'),
      description: t('codeNCorgi.day4.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
    {
      title: t('codeNCorgi.day5.title'),
      description: t('codeNCorgi.day5.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
    {
      title: t('codeNCorgi.day6.title'),
      description: t('codeNCorgi.day6.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
    {
      title: t('codeNCorgi.day7.title'),
      description: t('codeNCorgi.day7.description'),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('codeNCorgi.watchVideo'),
      },
    },
  ] satisfies Array<SimpleCardWithImageProps>
}
