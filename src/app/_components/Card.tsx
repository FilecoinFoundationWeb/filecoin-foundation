import Image from 'next/image'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { CustomLink } from '@/components/CustomLink'
import { Heading } from '@/components/Heading'
import { Meta, type MetaDataType } from '@/components/Meta'

export type CardProps = {
  title: string | React.ReactNode
  metaData?: MetaDataType
  description?: string
  cta?: {
    href: string
    text?: string
    icon?: React.ReactNode
  }
  entryType?: 'blogPost' | 'caseStudy'
  image?: {
    url: string
    alt: string
  }
  borderColor?: 'brand-300' | 'brand-500' | 'brand-600'
  textIsClamped?: boolean

  as?: React.ElementType
  children?: React.ReactNode
}

const borderStyles = {
  'brand-300': 'border-brand-300',
  'brand-500': 'border-brand-500',
  'brand-600': 'border-brand-600',
}

const imageSizes = {
  blogPost:
    '(max-width: 639px) 320px, (max-width: 767px) 584px, (max-width: 1023px) 712px, (max-width: 1279px) 472px, 500px',
  caseStudy:
    '(max-width: 639px) 320px, (max-width: 767px) 276px, (max-width: 1023px) 340px, 200px',
}

export function Card({
  title,
  metaData,
  description,
  cta,
  entryType = 'blogPost',
  image,
  borderColor = 'brand-500',
  textIsClamped = false,
  as: Tag = 'li',
  children,
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'relative flex h-full flex-col rounded-lg border bg-brand-700 bg-opacity-30 backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      {image?.url && (
        <div className="relative block h-52">
          <Image
            fill
            src={image.url}
            alt={image.alt}
            sizes={imageSizes[entryType]}
            className="block rounded-lg object-cover px-1 pt-1"
          />
        </div>
      )}
      <div className="flex flex-col p-4">
        {metaData && metaData.length > 0 && (
          <span className="mb-2">
            <Meta metaData={metaData} />
          </span>
        )}

        {title && typeof title === 'string' ? (
          <Heading tag="h3" variant="lg" className="line-clamp-2 text-ellipsis">
            {title}
          </Heading>
        ) : (
          title
        )}

        {description && (
          <p
            className={clsx(
              'mb-10 mt-3',
              textIsClamped && 'line-clamp-3 text-ellipsis',
            )}
          >
            {description}
          </p>
        )}

        {cta && (
          <CustomLink
            href={cta.href}
            className="absolute inset-0 rounded-lg focus:outline-2 focus:outline-white"
          >
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-brand-300">
              {cta.icon || <BookOpen size={24} aria-hidden={true} />}
              <span>{cta.text || 'Learn More'}</span>
            </span>
          </CustomLink>
        )}

        {children && children}
      </div>
    </Tag>
  )
}
