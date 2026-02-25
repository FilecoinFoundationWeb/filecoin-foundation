import type { TranslationFunction } from '@/i18n/types'

import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'


import type { ColumnPropsData } from '../components/ComparisonTable/Column'

const FEATURE_KEYS = [
  'resilience',
  'censorship',
  'participation',
  'storage',
  'incentives',
  'longevity',
] as const

export function getFilecoinColumn(t: TranslationFunction): ColumnPropsData {
  return {
    title: 'Filecoin',
    features: FEATURE_KEYS.map((key) => t(`comparison.${key}.filecoin`)),
    logo: IconLogo,
  }
}

export function getTraditionalCloudColumn(
  t: TranslationFunction,
): ColumnPropsData {
  return {
    title: t('comparison.traditionalCloud'),
    features: FEATURE_KEYS.map((key) =>
      t(`comparison.${key}.traditionalCloud`),
    ),
  }
}
