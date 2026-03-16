import type { TranslationFunction } from '@/i18n/types'

import { FILECOIN_CLOUD_VIDEO_URLS } from '@/constants/siteMetadata'

import storageAndPaymentFlow from '@/assets/graphics/storage-and-payment-flow.webp'
import understandingVerification from '@/assets/graphics/understanding-verification.webp'
import whatIsFilecoinOnchainCloud from '@/assets/graphics/what-is-foc.webp'

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
        src: whatIsFilecoinOnchainCloud,
        alt: '',
      },
      cta: {
        href: FILECOIN_CLOUD_VIDEO_URLS.whatIsFilecoinOnchainCloud,
        text: t('buildWithFilecoinOnchainCloud.whatIsFilecoinOnchainCloud.cta'),
      },
    },
    {
      title: t('buildWithFilecoinOnchainCloud.storageAndPaymentFlow.title'),
      description: t(
        'buildWithFilecoinOnchainCloud.storageAndPaymentFlow.description',
      ),
      image: {
        src: storageAndPaymentFlow,
        alt: '',
      },
      cta: {
        href: FILECOIN_CLOUD_VIDEO_URLS.storageAndPaymentFlow,
        text: t('buildWithFilecoinOnchainCloud.storageAndPaymentFlow.cta'),
      },
    },
    {
      title: t('buildWithFilecoinOnchainCloud.understandingVerification.title'),
      description: t(
        'buildWithFilecoinOnchainCloud.understandingVerification.description',
      ),
      image: {
        src: understandingVerification,
        alt: '',
      },
      cta: {
        href: FILECOIN_CLOUD_VIDEO_URLS.understandingVerification,
        text: t('buildWithFilecoinOnchainCloud.understandingVerification.cta'),
      },
    },
  ] satisfies Array<SimpleCardWithImageProps>
}
