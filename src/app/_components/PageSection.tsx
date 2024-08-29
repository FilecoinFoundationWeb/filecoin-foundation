import { clsx } from 'clsx'

import { Button } from '@/components/Button'
import {
  type DescriptionTextType,
  DescriptionText,
} from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import {
  SectionDivider,
  type SectionDividerProps,
} from '@/components/SectionDivider'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

import type { CTAProps } from '@/types/sharedProps/ctaType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

type PageSectionProps = {
  kicker: SectionDividerProps['title']
  title: string
  description?: DescriptionTextType
  image?: StaticImageProps
  cta?: CTAProps | [CTAProps, CTAProps]
  children?: React.ReactNode
}

export function PageSection({
  kicker,
  title,
  description,
  image,
  children,
  cta,
}: PageSectionProps) {
  const ctaArray = Array.isArray(cta) ? cta : [cta]

  return (
    <section>
      <SectionDivider title={kicker} />
      <div
        className={clsx(
          'mb-6 mt-4',
          image ? 'grid grid-cols-1 gap-6 lg:grid-cols-2' : 'max-w-readable',
        )}
      >
        <div className="space-y-4">
          <Heading tag="h2" variant="3xl">
            {title}
          </Heading>

          {description && <DescriptionText>{description}</DescriptionText>}

          {ctaArray && (
            <div
              className={clsx(
                'grid gap-4',
                ctaArray.length === 1
                  ? 'lg:grid-cols-1'
                  : 'sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-4',
              )}
            >
              {ctaArray.map(
                (button, index) =>
                  button && (
                    <Button
                      key={index}
                      href={button.href}
                      variant={index === 0 ? 'primary' : 'ghost'}
                    >
                      {button.text}
                    </Button>
                  ),
              )}
            </div>
          )}
        </div>
        {image && (
          <div className="relative aspect-video lg:aspect-auto">
            <StaticImage
              {...image}
              fill
              className="rounded-lg"
              sizes={buildImageSizeProp({ startSize: '100vw', lg: '480px' })}
            />
          </div>
        )}
      </div>
      {children && <div className="flex flex-col gap-6">{children}</div>}
    </section>
  )
}
