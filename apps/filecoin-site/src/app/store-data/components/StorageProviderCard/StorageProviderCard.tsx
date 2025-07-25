import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
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
      <article className="flex h-full flex-col justify-between space-y-8 border border-zinc-200 p-8">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            {/* Placeholder for logo */}
            <div
              aria-hidden="true"
              className="size-9 rounded-full bg-gradient-to-tr from-blue-950 to-blue-800"
            />
            <Heading tag="h3" variant="xl-medium">
              {name}
            </Heading>
          </div>

          <p className="text-zinc-600">{description}</p>

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
        </div>

        <Button href={url} variant="ghost" className="mt-20 w-full">
          Visit {name}'s website
        </Button>
      </article>
    </li>
  )
}
