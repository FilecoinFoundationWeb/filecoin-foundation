import { useTranslations } from 'next-intl'

import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui-filecoin/Icon'

import { StorageProviderCardKeyFeature } from './StorageProviderCardKeyFeature'
import { StorageProviderCardSection } from './StorageProviderCardSection'
import { StorageProviderFeatures } from './StorageProviderFeatures'
import {
  PriceDisplay,
  StorageProviderPricePerMonth,
  type StorageProviderPricePerMonthProps,
} from './StorageProviderPricePerMonth'

export type StorageProviderCardProps = {
  as: 'li' | 'div'
  name: string
  description: string
  labels: Array<string>
  pricing?: StorageProviderPricePerMonthProps['pricing']
  bestFor: Array<string>
  keyFeatures: Array<string>
  url: string
  logo: IconProps['component']
  isFeatured?: boolean
}

export function StorageProviderCard({
  as: Tag,
  name,
  description,
  labels,
  pricing,
  bestFor,
  keyFeatures,
  url,
  logo,
  isFeatured,
}: StorageProviderCardProps) {
  const t = useTranslations('storageProviderCard')

  return (
    <Tag>
      <article className="focus-within:brand-outline relative flex h-full flex-col justify-between space-y-10 overflow-hidden rounded-2xl border border-(--color-border-muted) p-8 focus-within:bg-zinc-50 hover:bg-zinc-50">
        <div className="space-y-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Icon component={logo} size={40} />

              <Heading tag="h3" variant="card-heading">
                {name}
              </Heading>
            </div>
            {isFeatured && (
              <span>
                <Badge variant="solid">{t('featured')}</Badge>
              </span>
            )}
          </div>

          <p
            className="text-sm text-(--color-paragraph-text)"
            title={description}
          >
            {description}
          </p>

          <StorageProviderFeatures
            direction="row"
            list={labels}
            Component={(props) => <Badge textTransform="none" {...props} />}
          />

          <StorageProviderCardSection
            title={t('price')}
            content={
              pricing ? (
                <StorageProviderPricePerMonth pricing={pricing} />
              ) : (
                <PriceDisplay value={t('customPricing')} />
              )
            }
          />
          <StorageProviderCardSection
            title={t('bestForLabel')}
            content={bestFor.join(', ')}
          />
          <StorageProviderCardSection
            title={t('keyFeaturesLabel')}
            content={
              <StorageProviderFeatures
                direction="column"
                list={keyFeatures}
                Component={StorageProviderCardKeyFeature}
              />
            }
          />
        </div>

        <Button href={url} variant="ghost">
          {t('storeWith', { name })}
        </Button>
      </article>
    </Tag>
  )
}
