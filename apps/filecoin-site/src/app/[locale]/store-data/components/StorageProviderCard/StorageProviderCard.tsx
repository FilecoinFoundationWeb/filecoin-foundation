import type { ComponentType, SVGProps } from 'react'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

import { Badge } from '@/components/Badge'
import { CTALink } from '@/components/CTALink'

import { StorageProviderCardKeyFeature } from './StorageProviderCardKeyFeature'
import { StorageProviderCardSection } from './StorageProviderCardSection'

export type StorageProviderCardProps = {
  as: 'li' | 'div'
  featured: boolean
  name: string
  description: string
  bestFor: Array<string>
  keyFeatures: Array<string>
  url: string
  logo: ComponentType<SVGProps<SVGSVGElement>>
}

export function StorageProviderCard({
  as: Tag,
  featured,
  name,
  description,
  bestFor,
  keyFeatures,
  url,
  logo,
}: StorageProviderCardProps) {
  return (
    <Tag>
      <article className="focus-within:brand-outline relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-2xl border border-[var(--color-border-muted)] p-8 pb-16 focus-within:bg-zinc-50 hover:bg-zinc-50">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-center">
          {featured && (
            <span className="sm:order-2 sm:flex-row">
              <Badge variant="solid">Featured</Badge>
            </span>
          )}

          <div className="flex items-center gap-3">
            <Icon component={logo} size={40} />

            <Heading tag="h3" variant="card-heading">
              {name}
            </Heading>
          </div>
        </div>

        <p className="text-[var(--color-paragraph-text)]" title={description}>
          {description}
        </p>

        <StorageProviderCardSection title="Best For">
          <ul className="flex flex-wrap gap-2.5">
            {bestFor.map((text) => (
              <li key={text}>
                <Badge>{text}</Badge>
              </li>
            ))}
          </ul>
        </StorageProviderCardSection>

        <StorageProviderCardSection title="Key Features">
          <ul className="space-y-2.5">
            {keyFeatures.map((feature) => (
              <li key={feature}>
                <StorageProviderCardKeyFeature feature={feature} />
              </li>
            ))}
          </ul>
        </StorageProviderCardSection>

        <CTALink inset href={url} textClassName="bottom-8 left-8">
          {`Learn more about ${name}`}
        </CTALink>
      </article>
    </Tag>
  )
}
