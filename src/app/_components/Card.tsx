import Image from 'next/image'
import Link from 'next/link'

import {
  BookOpen,
  MagnifyingGlass,
  UserPlus,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type { Route } from 'next'

import { Heading } from '@/components/Heading'

export type CardProps = {
  title: string
  description: string
  cta: {
    type: 'connect' | 'learn' | 'read'
    href: Route
  }
  image?: {
    url: string
    alt: string
    type: 'blogPost' | 'caseStudy'
  }
  style?: 'muted' | 'vibrant'
  as?: React.ElementType
}

const ctaConfig = {
  connect: { icon: UserPlus, text: 'Connect' },
  learn: { icon: MagnifyingGlass, text: 'Learn More' },
  read: { icon: BookOpen, text: 'Read More' },
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
  image,
  style = 'vibrant',
  as: Tag = 'li',
}: CardProps) {
  const Icon = ctaConfig[cta.type].icon

  return (
    <Tag
      className={clsx(
        'relative flex min-h-52 flex-col justify-between gap-3 rounded-lg bg-brand-700 bg-opacity-30 backdrop-blur-xl',
        style === 'vibrant'
          ? 'border border-brand-500'
          : 'border border-brand-300',
      )}
    >
      <div>
        {image?.url && (
          <div className="relative block h-52">
            <Image
              fill
              src={image.url}
              alt={image.alt}
              sizes={imageSizes[image.type]}
              className="block rounded-t-lg object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 p-4">
          <Heading
            tag="h3"
            variant="lg"
            className="overflow-hidden text-ellipsis"
          >
            {title}
          </Heading>
          <p className="line-clamp-3 overflow-hidden text-ellipsis text-brand-100">
            {description}
          </p>
        </div>
      </div>
      <div className="inline-flex items-center gap-2 p-4 font-medium text-brand-300">
        <Icon size={24} weight="bold" />
        <span>{ctaConfig[cta.type].text}</span>
      </div>
      <Link
        className="absolute inset-0 rounded-lg focus:outline-2 focus:outline-white"
        href={cta.href}
        aria-label={`Learn more about ${title}`}
      />
    </Tag>
  )
}
