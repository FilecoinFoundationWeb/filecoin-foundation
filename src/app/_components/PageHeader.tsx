import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Meta, type MetaDataType } from '@/components/Meta'

import { Badge } from './Badge'

type ctaProps = {
  href: string
  text: string
  icon?: React.ReactNode
}

type imageProps = {
  url: string
  alt: string
}

type PageHeaderProps = {
  title: string
  description: string | string[]
  cta: ctaProps
  secondaryCta?: ctaProps
  image?: imageProps
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
  function setDescriptionParagraph(description: string | string[]) {
    if (Array.isArray(description)) {
      return (
        <div className="space-y-4">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )
    }
    return <p>{description}</p>
  }
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
        {setDescriptionParagraph(description)}
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
