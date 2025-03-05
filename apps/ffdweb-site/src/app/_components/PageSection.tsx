import Image from 'next/image'

import { Button } from '@filecoin-foundation/ui/Button'
import {
  DescriptionText,
  type DescriptionTextType,
} from '@filecoin-foundation/ui/DescriptionText'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { SmartTextLink } from '@filecoin-foundation/ui/TextLink'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'
import { clsx } from 'clsx'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type PageSectionCTA = {
  href: string
  text: string
  isButton?: boolean
}

type PageSectionProps = {
  kicker: string
  title: string
  description?: DescriptionTextType
  image?: StaticImageProps
  cta?: PageSectionCTA
  isCentered?: boolean
  children?: React.ReactNode
}

export function PageSection({
  kicker,
  title,
  description,
  image,
  cta,
  children,
  isCentered = false,
}: PageSectionProps) {
  return (
    <section
      className={clsx('flex flex-col gap-16', {
        'items-center': isCentered,
        'items-start': !isCentered,
      })}
    >
      <div
        className={clsx('', {
          'grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-6': image,
        })}
      >
        <div
          className={clsx('flex flex-col gap-8', {
            'max-w-xl text-center': isCentered,
          })}
        >
          <span className="inline-block font-bold text-neutral-200">
            {kicker}
          </span>

          <Heading tag="h2" variant="3xl-medium">
            {title}
          </Heading>

          {description && (
            <DescriptionText className="text-lg">{description}</DescriptionText>
          )}

          {cta && image && (
            <div className="mt-8">
              <CTAButton cta={cta} baseDomain={BASE_DOMAIN} />
            </div>
          )}
        </div>

        {image && (
          <Image
            src={image.data || graphicsData.homepage}
            alt={image.alt}
            sizes={buildImageSizeProp({ startSize: '100vw', lg: '480px' })}
            className="aspect-video h-full w-full object-cover lg:aspect-auto"
          />
        )}
      </div>

      {children && <>{children}</>}

      {cta && !image && <CTAButton cta={cta} baseDomain={BASE_DOMAIN} />}
    </section>
  )
}

type CTAButtonProps = {
  cta: PageSectionCTA
  baseDomain: string
}

function CTAButton({ cta, baseDomain }: CTAButtonProps) {
  const { href, text, isButton } = cta

  const sharedProps = {
    href,
    text,
    baseDomain,
  }

  if (isButton) {
    return <Button {...sharedProps}>{text}</Button>
  }

  return <SmartTextLink {...sharedProps}>{text}</SmartTextLink>
}
