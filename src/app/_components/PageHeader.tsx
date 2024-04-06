import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

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
  description: string
  cta: ctaProps
  secondaryCta?: ctaProps
  image?: imageProps
  metaData?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  cta,
  secondaryCta,
  image,
  metaData,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col md:w-1/2">
        <Heading tag="h1" variant="4xl" className="mb-4">
          {title}
        </Heading>
        {metaData && <div className="mb-6">{metaData}</div>}
        <p className="mb-6">{description}</p>
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
