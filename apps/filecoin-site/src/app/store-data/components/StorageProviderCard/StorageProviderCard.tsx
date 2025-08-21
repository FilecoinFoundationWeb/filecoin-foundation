import { Badge } from '@/components/Badge'
import { CTALink } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

import { StorageProviderCardKeyFeature } from './StorageProviderCardKeyFeature'
import { StorageProviderCardSection } from './StorageProviderCardSection'

export type StorageProviderCardProps = {
  name: string
  description: string
  bestFor: Array<string>
  keyFeatures: Array<string>
  url: string
}

export function StorageProviderCard({
  name,
  description,
  bestFor,
  keyFeatures,
  url,
}: StorageProviderCardProps) {
  return (
    <li>
      <article className="focus-within:brand-outline relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-2xl border border-[var(--color-border-muted)] p-8 pb-16">
        <div className="flex items-center gap-3">
          {/* Placeholder for logo */}
          <div
            aria-hidden="true"
            className="size-9 rounded-full bg-gradient-to-tr from-blue-950 to-blue-800"
          />
          <Heading tag="h3" variant="card-heading">
            {name}
          </Heading>
        </div>

        <p className="text-[var(--color-text-paragraph)]" title={description}>
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
          Learn more
        </CTALink>
      </article>
    </li>
  )
}
