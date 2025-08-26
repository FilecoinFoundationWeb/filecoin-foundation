import Link from 'next/link'

import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

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
        <CardImage image={image || graphicsData.fallback} />

        <div className="flex flex-col gap-4 py-5">
          <TagGroup tags={tags} />
          <span className="group-focus-within:text-[var(--color-card-heading-hover)] group-hover:text-[var(--color-card-heading-hover)]">
            <Heading tag="h2" variant="card-heading">
              {title}
            </Heading>
          </span>

          <p className="text-[var(--color-paragraph-text)]">{description}</p>

          <PostMetadata author={author} date={date} />
        </div>

        <Link
          href={`${PATHS.BLOG.path}/${slug}`}
          aria-label={`Read more about ${title}`}
          className="focus:brand-outline absolute inset-0 z-10 rounded-t-2xl"
        />
      </article>
    </li>
  )
}
