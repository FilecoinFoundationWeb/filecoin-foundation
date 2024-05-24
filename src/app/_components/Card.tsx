import Image from 'next/image'

import clsx from 'clsx'

import { Badge } from '@/components/Badge'
import { CustomLink } from '@/components/CustomLink'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { Meta, type MetaDataType } from '@/components/Meta'

import { type CTAProps } from '@/types/sharedProps/ctaType'
import { type ImageProps } from '@/types/sharedProps/imageType'

type CardProps = {
  title: string | React.ReactNode
  tag?: string
  metaData?: MetaDataType
  description?: string
  cta?: CTAProps
  entryType?: 'blogPost' | 'ecosystemProject'
  image?: ImageProps
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

const imageStyles = {
  blogPost: 'object-cover',
  ecosystemProject: 'object-contain',
}

const imageSizes = {
  blogPost:
    '(max-width: 639px) 320px, (max-width: 767px) 584px, (max-width: 1023px) 712px, (max-width: 1279px) 472px, 500px',
  ecosystemProject:
    '(max-width: 639px) 320px, (max-width: 767px) 276px, (max-width: 1023px) 340px, 304px',
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

export function Card({
  title,
  tag,
  metaData,
  description,
  cta,
  entryType = 'blogPost',
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
      {image?.url && (
        <div className="relative block aspect-video">
          <Image
            fill
            src={image.url}
            alt={image.alt}
            sizes={imageSizes[entryType]}
            className={clsx(
              'block rounded-lg px-1 pt-1',
              imageStyles[entryType],
            )}
          />
        </div>
      )}
      <div className="flex flex-col p-4">
        {tag && (
          <span className="mb-4">
            <Badge>{tag}</Badge>
          </span>
        )}

        {metaData && metaData.length > 0 && (
          <span className="mb-2">
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
