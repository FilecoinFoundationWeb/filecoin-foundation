import type { ImageProps } from 'next/image'
import Image from 'next/image'

import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { Icon, type IconProps } from '@filecoin-foundation/ui-filecoin/Icon'

import { StorageProviderCardKeyFeature } from './StorageProviderCardKeyFeature'
import { StorageProviderCardSection } from './StorageProviderCardSection'
import { StorageProviderCardText } from './StorageProviderCardText'

export type StorageProviderCardWithImageProps = {
  image: ImageProps
  name: string
  description: string
  labels: Array<string>
  price: number
  bestFor: Array<string>
  keyFeatures: Array<string>
  url: string
  logo: IconProps['component']
}

export function StorageProviderCardWithImage({
  image,
  name,
  description,
  labels,
  price,
  bestFor,
  keyFeatures,
  url,
  logo,
}: StorageProviderCardWithImageProps) {
  return (
    <article className="grid grid-cols-1 rounded-2xl border border-[var(--color-border-muted)] lg:grid-cols-2">
      <div className="relative aspect-video h-full w-full">
        <Image
          fill
          src={image.src}
          alt={image.alt}
          className="rounded-2xl object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="focus-within:brand-outline relative flex h-full flex-col justify-between space-y-10 overflow-hidden p-8 focus-within:bg-zinc-50 hover:bg-zinc-50">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon component={logo} size={40} />

              <Heading tag="h3" variant="card-heading">
                {name}
              </Heading>
            </div>

            <span className="sm:order-2 sm:flex-row">
              <Badge variant="solid">Featured</Badge>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 space-y-8">
            <div className="flex flex-col gap-8">
              <p className="text-(--color-paragraph-text)" title={description}>
                {description}
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {labels.map((label) => (
                  <li key={label}>
                    <Badge>{label}</Badge>
                  </li>
                ))}
              </ul>

              <StorageProviderCardSection title="Price">
                <StorageProviderCardText>
                  <span className="text-2xl font-medium">{price}$</span> / month
                </StorageProviderCardText>
              </StorageProviderCardSection>
            </div>
            <div className="flex flex-col gap-8">
              <StorageProviderCardSection title="Best For">
                <StorageProviderCardText>
                  {bestFor.join(', ')}
                </StorageProviderCardText>
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
          </div>
        </div>
        <div className="flex justify-start">
          <Button href={url} variant="ghost">
            {`Store with ${name}`}
          </Button>
        </div>
      </div>
    </article>
  )
}
