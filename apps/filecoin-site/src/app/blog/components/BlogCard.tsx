import Link from 'next/link'

import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'

import { Heading } from '@/components/Heading'
import { TagGroup } from '@/components/TagGroup/TagGroup'

import type { BlogPost } from '../types/blogPostType'

import { PostMetadata } from './PostMetadata'

type BlogCardLink = {
  href: string
  ariaLabel: string
}

export type BlogCardProps = {
  title: BlogPost['title']
  cta: BlogCardLink
  tags: BlogPost['categories']
  description: BlogPost['excerpt']
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
    <li>
      <article
        aria-label={title}
        title={title}
        className="group relative h-full"
      >
        <div className="border border-zinc-200">
          {image && <CardImage image={image} />}
        </div>

        <div className="flex flex-col gap-4 py-4">
          <TagGroup tags={tags} />
          <Heading tag="h3" variant="xl-medium">
            {title}
          </Heading>

          <p className="text-zinc-600">{description}</p>

          <PostMetadata author={author} date={date} />
        </div>

        <Link
          href={cta.href}
          aria-label={cta.ariaLabel}
          className="focus:brand-outline absolute inset-0 z-10"
        />
      </article>
    </li>
  )
}
