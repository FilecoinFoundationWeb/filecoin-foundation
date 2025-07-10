import Link from 'next/link'

import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'

import { Heading } from '@/components/Heading'
import { TagGroup } from '@/components/TagGroup/TagGroup'

import { type BlogPost } from '../schemas/BlogPostFrontmatterSchema'

import { PostMetadata } from './PostMetadata'

type BlogCardLink = {
  href: string
  ariaLabel: string
}

export type BlogCardProps = {
  title: BlogPost['title']
  cta?: BlogCardLink
  tags?: BlogPost['categories']
  description?: BlogPost['excerpt']
  image?: CardImageProps
  author?: BlogPost['author']
  date: BlogPost['date']
}

export function BlogCard({
  title,
  tags,
  date,
  description,
  cta,
  image,
  author,
}: BlogCardProps) {
  return (
    <article aria-label={title} title={title} className="group relative h-full">
      {image && <CardImage image={image} />}

      <div className="flex flex-col gap-4 py-4">
        {tags && <TagGroup tags={tags} />}
        <Heading tag="h3" variant="xl-medium" className="leading-tight">
          {title}
        </Heading>

        {description && <p className="text-zinc-600">{description}</p>}

        <PostMetadata author={author} date={date} />
      </div>

      {cta && (
        <Link
          href={cta.href}
          aria-label={cta.ariaLabel}
          className="focus:brand-outline absolute inset-0 z-10"
        ></Link>
      )}
    </article>
  )
}
