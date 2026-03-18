import { useFormatter, useTranslations } from 'next-intl'

export type StorageProviderPricePerMonthProps = {
  cents: number
  offer?: string
}

export function StorageProviderPricePerMonth({
  cents,
  offer,
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
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        {t('from')}
        <span className="text-2xl font-medium">{formattedPrice}</span>{' '}
        {t('perMonth')}
      </div>
      {offer && <span className="text-brand-700 text-sm">{offer}</span>}
    </div>
  )
}
