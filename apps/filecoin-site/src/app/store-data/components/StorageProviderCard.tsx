import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'

import { CardKeyFeature } from './CardKeyFeature'
import { CardSection } from './CardSection'

export type StorageProviderCardProps = {
  name: string
  description: string
  bestFor: Array<string>
  keyFeatures: Array<string>
}

export function StorageProviderCard({
  name,
  description,
  bestFor,
  keyFeatures,
}: StorageProviderCardProps) {
  return (
    <li>
      <article className="flex h-full flex-col justify-between space-y-8 border border-zinc-200 p-8">
        <div className="mb-20 space-y-8">
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="size-9 rounded-full bg-gradient-to-tr from-blue-950 to-blue-800"
            />
            <h3 className="text-xl font-medium text-zinc-950">{name}</h3>
          </div>

          <p className="text-zinc-600">{description}</p>

          <CardSection title="Best For">
            <ul className="flex flex-wrap gap-2.5">
              {bestFor.map((text) => (
                <li key={text}>
                  <Badge>{text}</Badge>
                </li>
              ))}
            </ul>
          </CardSection>

          <CardSection title="Key Features">
            <ul className="space-y-2.5">
              {keyFeatures.map((feature) => (
                <li key={feature}>
                  <CardKeyFeature feature={feature} />
                </li>
              ))}
            </ul>
          </CardSection>
        </div>

        <Button
          href="#"
          variant="ghost"
          className="w-full"
          aria-label={`Visit ${name}'s website`}
        >
          Visit {name}'s website
        </Button>
      </article>
    </li>
  )
}
