import Image from 'next/image'
import Link from 'next/link'

import { BookOpen } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type { Route } from 'next'

import { Heading } from '@/components/Heading'

export type CardProps = {
  title: string
  description: string
  cta: {
    href: Route
  }
  entryType?: 'blogPost' | 'caseStudy'
  image?: {
    url: string
    alt: string
  }
  borderColor?: 'brand-300' | 'brand-500' | 'brand-600'
  as?: React.ElementType
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
  description,
  cta,
  entryType = 'blogPost',
  image,
  borderColor = 'brand-500',
  as: Tag = 'li',
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'relative flex flex-col rounded-lg border bg-brand-700 bg-opacity-30 backdrop-blur-xl',
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
      <div className="flex flex-col gap-3 p-4">
        <Heading tag="h3" variant="lg" className="line-clamp-3 text-ellipsis">
          {title}
        </Heading>
        <p className="mb-10 line-clamp-3 text-ellipsis">{description}</p>
        <Link
          href={cta.href}
          className="absolute inset-0 rounded-lg focus:outline-2 focus:outline-white"
        >
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-brand-300">
            <BookOpen size={24} aria-hidden={true} />
            <span>Learn More</span>
          </span>
        </Link>
      </div>
    </Tag>
  )
}
