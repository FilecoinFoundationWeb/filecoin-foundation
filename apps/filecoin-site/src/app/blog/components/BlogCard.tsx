import Link from 'next/link'

import type { Route } from 'next'

import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { Heading } from '@/components/Heading'
import { TagGroup } from '@/components/TagGroup/TagGroup'

import type { BlogPostTinaCMS } from '../types/blogPostType'

import { PostMetadata } from './PostMetadata'

export type BlogCardProps = {
  title: BlogPostTinaCMS['title']
  slug: BlogPostTinaCMS['slug']
  tags: BlogPostTinaCMS['categories']
  description: BlogPostTinaCMS['excerpt']
  image?: CardImageProps
  author?: BlogPostTinaCMS['author']
  date: BlogPostTinaCMS['date']
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
          href={`${PATHS.BLOG.path}/${slug}` as Route}
          aria-label={`Read more about ${title}`}
          className="focus:brand-outline absolute inset-0 z-10 rounded-t-2xl"
        />
      </article>
    </li>
  )
}
