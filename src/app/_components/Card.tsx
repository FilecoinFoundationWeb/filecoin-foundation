import clsx from 'clsx'

import { Badge } from '@/components/Badge'
import { CustomLink } from '@/components/CustomLink'
import { DynamicImage, type DynamicImageProps } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { Meta, type MetaDataType } from '@/components/Meta'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'

import { type CTAProps } from '@/types/sharedProps/ctaType'

type CardProps = {
  title: string | React.ReactNode
  tag?: string
  metaData?: MetaDataType
  description?: string
  cta?: CTAProps
  image?: (DynamicImageProps | StaticImageProps) & { padding?: boolean }
  borderColor?: 'brand-300' | 'brand-400' | 'brand-500' | 'brand-600'
  textIsClamped?: boolean
  as?: React.ElementType
}

const borderStyles = {
  'brand-300': 'border-brand-300',
  'brand-400': 'border-brand-400',
  'brand-500': 'border-brand-500',
  'brand-600': 'border-brand-600',
}

function Link({ href, ariaLabel, icon: Icon, text }: CTAProps) {
  return (
    <CustomLink
      href={href}
      aria-label={ariaLabel}
      className="absolute inset-0 rounded-lg focus:outline-2 focus:outline-brand-100"
    >
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-brand-300">
        {Icon && <Icon size={24} />}
        <span>{text}</span>
      </span>
    </CustomLink>
  )
}

const containerStyle = 'relative aspect-video'
const imageStyle = 'rounded-lg px-1 pt-1'

function CardImage({ image }: Pick<CardProps, 'image'>) {
  if (!image) {
    return null
  }

  const isDynamicImage = 'src' in image
  const isStaticImage = 'data' in image

  if (isDynamicImage) {
    const { padding, fallback, ...rest } = image

    return (
      <div className={clsx(containerStyle, padding && 'mx-4 my-2')}>
        <DynamicImage
          {...rest}
          fill
          className={imageStyle}
          fallback={{ ...fallback, className: imageStyle }}
        />
      </div>
    )
  }

  if (isStaticImage) {
    const { padding, ...rest } = image

    return (
      <div className={containerStyle}>
        <StaticImage
          {...rest}
          fill
          className={clsx(imageStyle, padding && 'mx-4 my-2')}
        />
      </div>
    )
  }
}

export function Card({
  title,
  tag,
  metaData,
  description,
  cta,
  image,
  borderColor = 'brand-500',
  textIsClamped = false,
  as: Tag = 'li',
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'relative flex h-full flex-col rounded-lg border bg-brand-700 bg-opacity-30 backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      <CardImage image={image} />

      <div className="flex flex-col p-4">
        {tag && (
          <span className="mb-4">
            <Badge>{tag}</Badge>
          </span>
        )}

        {metaData && metaData.length > 0 && (
          <span className="mb-3">
            <Meta metaData={metaData} />
          </span>
        )}

        {title && typeof title === 'string' ? (
          <Heading isClamped tag="h3" variant="lg">
            {title}
          </Heading>
        ) : (
          title
        )}

        <div className="mb-10 mt-3">
          {description && (
            <p className={clsx(textIsClamped && 'line-clamp-3 text-ellipsis')}>
              {description}
            </p>
          )}

          {cta && <Link {...cta} />}
        </div>
      </div>
    </Tag>
  )
}

Card.Link = Link
