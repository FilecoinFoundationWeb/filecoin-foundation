import type { TranslationFunction } from '@/i18n/types'

import imageFallback from '@/assets/graphics/image-fallback.webp'

import type { SimpleCardWithImageProps } from '@/components/SimpleCardWithImage'

export function getBuildWithFilecoinOnchainCloud(t: TranslationFunction) {
  return [
    {
      title: t(
        'buildWithFilecoinOnchainCloud.whatIsFilecoinOnchainCloud.title',
      ),
      description: t(
        'buildWithFilecoinOnchainCloud.whatIsFilecoinOnchainCloud.description',
      ),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('buildWithFilecoinOnchainCloud.whatIsFilecoinOnchainCloud.cta'),
      },
    },
    {
      title: t('buildWithFilecoinOnchainCloud.storageAndPaymentFlow.title'),
      description: t(
        'buildWithFilecoinOnchainCloud.storageAndPaymentFlow.description',
      ),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('buildWithFilecoinOnchainCloud.storageAndPaymentFlow.cta'),
      },
    },
    {
      title: t('buildWithFilecoinOnchainCloud.understandingVerification.title'),
      description: t(
        'buildWithFilecoinOnchainCloud.understandingVerification.description',
      ),
      image: {
        src: imageFallback,
        alt: '',
      },
      cta: {
        href: '#',
        text: t('buildWithFilecoinOnchainCloud.understandingVerification.cta'),
      },
    },
  ] satisfies Array<SimpleCardWithImageProps>
}
