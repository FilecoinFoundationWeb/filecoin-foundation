import Image from 'next/image'

import { Button } from '@/components/Button'
import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { Meta } from '@/components/Meta'

import { type CTAProps } from '@/types/sharedProps/ctaType'
import { type ImageProps } from '@/types/sharedProps/imageType'

import { Badge } from './Badge'

type PageHeaderProps = {
  title: string
  description: DescriptionTextType
  cta: CTAProps
  secondaryCta?: CTAProps
  image?: ImageProps
  metaData?: Array<string | null | undefined>
  isFeatured?: boolean
}

export function PageHeader({
  title,
  description,
  cta,
  secondaryCta,
  image,
  metaData,
  isFeatured = false,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col gap-4 md:w-1/2">
        {isFeatured && <Badge>Featured</Badge>}
        <Heading tag="h1" variant="4xl" className="text-balance">
          {title}
        </Heading>
        {metaData && metaData.length > 0 && (
          <span className="mb-2">
            <Meta metaData={metaData} />
          </span>
        )}
        <DescriptionText>{description}</DescriptionText>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:flex-col md:gap-4">
          <Button href={cta.href} variant="primary" className="flex-1">
            {cta.text}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="ghost" className="flex-1">
              {secondaryCta.text}
            </Button>
          )}
        </div>
      </div>

      {image && (
        <div className="relative h-32 w-full rounded-lg border border-brand-100 sm:h-60 md:h-auto md:w-1/2">
          <Image
            fill
            src={image.url}
            alt={image.alt}
            className="block rounded-lg object-cover"
          />
        </div>
      )}
    </header>
  )
}
