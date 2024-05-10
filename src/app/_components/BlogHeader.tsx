import Image from 'next/image'

import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

import { Badge } from '@/components/Badge'
import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'

import { type ImageProps } from '@/types/sharedProps/imageType'

import { formatDate } from '@/utils/formatDate'

type BlogHeaderProps = {
  title: string
  description: DescriptionTextType
  date?: string
  image?: ImageProps
  category?: string
}

export function ReturnButton({ origin }: { origin: string }) {
  return (
    <a
      href={`/${origin}`}
      className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-600 bg-brand-700"
    >
      <Icon component={ArrowLeft} color="brand-300" />
    </a>
  )
}

export function BlogHeader({
  title,
  description,
  date,
  image,
  category,
}: BlogHeaderProps) {
  return (
    <header>
      <div className="mb-8 space-y-4">
        {category && <Badge variant="ghostBlue">{category}</Badge>}
        <Heading tag="h1" variant="4xl" className="text-balance">
          {title}
        </Heading>
        {date && (
          <span className="inline-block text-blue-300">{formatDate(date)}</span>
        )}
      </div>

      {image && (
        <div className="relative mb-16 aspect-video">
          <Image
            fill
            src={image.url}
            alt={image.alt}
            className="block rounded-lg object-cover"
          />
        </div>
      )}

      <DescriptionText variant="bold">{description}</DescriptionText>
    </header>
  )
}
