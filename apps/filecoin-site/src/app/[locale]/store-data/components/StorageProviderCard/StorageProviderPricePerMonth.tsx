import { useFormatter, useTranslations } from 'next-intl'

import { StorageProviderCardText } from './StorageProviderCardText'

export type StorageProviderPricePerMonthProps = {
  children: number
}

export function StorageProviderPricePerMonth({
  children: cents,
}: StorageProviderPricePerMonthProps) {
  const t = useTranslations('storageProviderCard')
  const format = useFormatter()

  if (cents < 0) {
    throw new Error('Price per month cannot be negative')
  }

  const formattedPrice = format.number(cents / 100, {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <StorageProviderCardText>
      <span className="text-2xl font-medium">{formattedPrice}</span>{' '}
      {t('perMonth')}
    </StorageProviderCardText>
  )
}
