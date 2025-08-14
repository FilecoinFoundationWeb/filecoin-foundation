import Link from 'next/link'

import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'

import { PATHS } from '@/constants/paths'

import { Heading } from '@/components/Heading'
import { TagGroup } from '@/components/TagGroup/TagGroup'

import type { BlogPost } from '../types/blogPostType'

import { PostMetadata } from './PostMetadata'

export type BlogCardProps = {
  title: BlogPost['title']
  slug: BlogPost['slug']
  tags: BlogPost['categories']
  description: BlogPost['excerpt']
  image?: CardImageProps
  author?: BlogPost['author']
  date: BlogPost['publishedOn']
}

export function BlogCard({
  title,
  slug,
  tags,
  date,
  description,
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
        {image && <CardImage image={image} />}

        <div className="flex flex-col gap-4 py-4">
          <TagGroup tags={tags} />
          <Heading tag="h2" variant="card-heading">
            {title}
          </Heading>

          <p className="text-[var(--color-text-paragraph)]">{description}</p>

          <PostMetadata author={author} date={date} />
        </div>

        <Link
          href={`${PATHS.BLOG.path}/${slug}`}
          aria-label={`Read more about ${title}`}
          className="focus:brand-outline absolute inset-0 z-10"
        />
      </article>
    </li>
  )
}
