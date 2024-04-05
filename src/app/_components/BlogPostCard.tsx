import Image from 'next/image'

import clsx from 'clsx'

import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import type { BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from '@/utils/formatDate'

import { PATHS } from '@/constants/paths'

type BlogPostCardProps = {
  className?: string
  post: BlogPostData
}

export function BlogPostCard({ post, className }: BlogPostCardProps) {
  const { title, description, slug, image, publishedOn } = post

  return (
    <li
      key={slug}
      className={clsx('rounded-md border border-brand-600 p-4', className)}
    >
      {image.url && (
        <Image
          src={image.url}
          alt={image.alt}
          width={282}
          height={141}
          className="object-cover"
        />
      )}
      <Heading tag="h3" variant="lg">
        {title}
      </Heading>
      <p>{description}</p>
      {publishedOn && (
        <span className="block">{formatDate(publishedOn, 'blog')}</span>
      )}
      <TextLink href={`${PATHS.BLOG.path}/${slug}`}>Read More</TextLink>
    </li>
  )
}
