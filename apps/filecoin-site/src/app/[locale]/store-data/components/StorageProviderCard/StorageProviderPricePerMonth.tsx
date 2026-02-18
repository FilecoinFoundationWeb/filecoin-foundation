import { useTranslations } from 'next-intl'

import { PATHS } from '@/constants/paths'

import { formatPrice } from '../../utils/formatPrice'

import { StorageProviderCardText } from './StorageProviderCardText'

export type StorageProviderPricePerMonthProps = {
  children: number
}

export function StorageProviderPricePerMonth({
  children: cents,
}: StorageProviderPricePerMonthProps) {
  const t = useTranslations(PATHS.STORE_DATA.path)

  if (cents < 0) {
    throw new Error('Price per month cannot be negative')
  }

  return (
    <StorageProviderCardText>
      <span className="text-2xl font-medium">{formatPrice(cents)}</span>{' '}
      {t('perMonth')}
    </StorageProviderCardText>
  )
}
