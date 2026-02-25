import type { TranslationFunction } from '@/i18n/types'

import type { MetricCardProps } from '../components/MetricCard'

export function getFilecoinByTheNumbers(
  t: TranslationFunction,
): Array<MetricCardProps> {
  return [
    {
      title: '3.12 EiB',
      subTitle: t('byTheNumbers.storageCapacity.subTitle'),
      description: t('byTheNumbers.storageCapacity.description'),
    },
    {
      title: '800+',
      subTitle: t('byTheNumbers.clients.subTitle'),
      description: t('byTheNumbers.clients.description'),
    },
    {
      title: '+5,000',
      subTitle: t('byTheNumbers.smartContracts.subTitle'),
      description: t('byTheNumbers.smartContracts.description'),
    },
  ]
}
