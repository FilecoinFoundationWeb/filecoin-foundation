import React, { Fragment } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

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
  isFeatured,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col md:w-1/2">
        {isFeatured && (
          <span className="mb-4 text-xl font-bold text-brand-300">
            Featured
          </span>
        )}
        <Heading tag="h1" variant="4xl" className="mb-4 text-balance">
          {title}
        </Heading>
        {metaData && metaData.length > 0 && (
          <div className="mb-6 flex gap-3 font-bold text-brand-300">
            {metaData.filter(Boolean).map((data, index) => {
              const isNotLastItem = index < metaData.length - 1
              const isNotFirstItem = index > 0

              return (
                <Fragment key={index}>
                  <span className={clsx({ capitalize: isNotFirstItem })}>
                    {data}
                  </span>
                  {isNotLastItem && <span> | </span>}
                </Fragment>
              )
            })}
          </div>
        )}
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
