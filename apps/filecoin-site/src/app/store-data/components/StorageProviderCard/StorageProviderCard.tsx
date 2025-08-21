import Image, { type StaticImageData } from 'next/image'

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
  logo: StaticImageData
}

export function StorageProviderCard({
  name,
  description,
  bestFor,
  keyFeatures,
  url,
  logo,
}: StorageProviderCardProps) {
  return (
    <li>
      <article className="focus-within:brand-outline relative flex h-full flex-col justify-between space-y-8 overflow-hidden rounded-2xl border border-[var(--color-border-muted)] p-8 pb-16 focus-within:bg-zinc-50 hover:bg-zinc-50">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt={`${name}'s logo`}
            width={40}
            height={40}
            className="rounded-full"
          />

          <Heading tag="h3" variant="card-heading">
            {name}
          </Heading>
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
          Learn more about {name}
        </CTALink>
      </article>
    </li>
  )
}
