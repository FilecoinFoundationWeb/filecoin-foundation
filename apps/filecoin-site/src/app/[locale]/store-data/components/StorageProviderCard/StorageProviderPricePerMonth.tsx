import { useFormatter, useTranslations } from 'next-intl'

export type StorageProviderPricePerMonthProps = {
  pricing: {
    cents: number
    monthlyStorageRate: string
    offer?: string
  }
}

export function StorageProviderPricePerMonth({
  pricing,
}: StorageProviderPricePerMonthProps) {
  const t = useTranslations('storageProviderCard')
  const format = useFormatter()

  const { cents, monthlyStorageRate, offer } = pricing

  if (cents < 0) {
    throw new Error('Price per month cannot be negative')
  }

  if (!monthlyStorageRate) {
    throw new Error('monthlyStorageRate cannot be empty')
  }

  const showWithoutDecimals = cents % 100 === 0

  const formattedPrice = format.number(cents / 100, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showWithoutDecimals ? 0 : 2,
    maximumFractionDigits: showWithoutDecimals ? 0 : 2,
  })

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        {t('from')}
        <PriceDisplay value={formattedPrice} /> {monthlyStorageRate}
      </div>
      {offer && <span className="text-brand-700 text-sm">{offer}</span>}
    </div>
  )
}

export function PriceDisplay({ value }: { value: string }) {
  return <span className="text-2xl font-medium">{value}</span>
}
