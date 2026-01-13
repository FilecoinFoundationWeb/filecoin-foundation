import { Link } from '@/i18n/navigation'

import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui-filecoin/Card/CardImage'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { buildImageSizeProp } from '@filecoin-foundation/ui-filecoin/utils'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

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
        <CardImage
          {...(image || graphicsData.fallback)}
          sizes={buildImageSizeProp({
            startSize: '100vw',
            md: '364px',
            lg: '315px',
          })}
        />

        <div className="flex flex-col gap-4 py-5">
          <TagGroup tags={tags} />
          <span className="group-focus-within:text-(--color-card-heading-hover) group-hover:text-(--color-card-heading-hover)">
            <Heading tag="h2" variant="card-heading">
              {title}
            </Heading>
          </span>

          <p className="text-(--color-paragraph-text)">{description}</p>

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
