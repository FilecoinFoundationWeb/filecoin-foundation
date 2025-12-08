import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui-filecoin/Icon'

import { StorageProviderCardKeyFeature } from './StorageProviderCardKeyFeature'
import { StorageProviderCardSection } from './StorageProviderCardSection'
import { StorageProviderCardText } from './StorageProviderCardText'
import { StorageProviderFeatures } from './StorageProviderFeatures'
import { StorageProviderPricePerMonth } from './StorageProviderPricePerMonth'

export type StorageProviderCardProps = {
  as: 'li' | 'div'
  name: string
  description: string
  labels: Array<string>
  cents: number
  bestFor: Array<string>
  keyFeatures: Array<string>
  url: string
  logo: IconProps['component']
}

export function StorageProviderCard({
  as: Tag,
  name,
  description,
  labels,
  cents,
  bestFor,
  keyFeatures,
  url,
  logo,
}: StorageProviderCardProps) {
  return (
    <Tag>
      <article className="focus-within:brand-outline relative flex h-full flex-col justify-between space-y-10 overflow-hidden rounded-2xl border border-[var(--color-border-muted)] p-8 focus-within:bg-zinc-50 hover:bg-zinc-50">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Icon component={logo} size={40} />

            <Heading tag="h3" variant="card-heading">
              {name}
            </Heading>
          </div>

          <p className="text-(--color-paragraph-text)" title={description}>
            {description}
          </p>

          <StorageProviderFeatures list={labels} Component={Badge} />

          <StorageProviderCardSection title="Price">
            <StorageProviderPricePerMonth>{cents}</StorageProviderPricePerMonth>
          </StorageProviderCardSection>
          <StorageProviderCardSection title="Best For">
            <StorageProviderCardText>
              {bestFor.join(', ')}
            </StorageProviderCardText>
          </StorageProviderCardSection>
          <StorageProviderCardSection title="Key Features">
            <StorageProviderFeatures
              list={keyFeatures}
              Component={StorageProviderCardKeyFeature}
            />
          </StorageProviderCardSection>
        </div>

        <Button href={url} variant="ghost">
          {`Store with ${name}`}
        </Button>
      </article>
    </Tag>
  )
}
