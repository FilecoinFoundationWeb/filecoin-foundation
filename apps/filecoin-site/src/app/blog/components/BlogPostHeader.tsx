import Image, { type ImageProps } from 'next/image'

import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import type { BlogPost } from '../types/blogPostType'

import { Categories } from './Categories'
import { PostMetadata } from './PostMetadata'

type BlogPostHeaderProps = {
  categories: BlogPost['categories']
  title: BlogPost['title']
  date: BlogPost['publishedOn']
  slug: BlogPost['slug']
  image: ImageProps
  author?: BlogPost['author']
}

export function BlogPostHeader({
  image,
  categories,
  title,
  slug,
  author,
  date,
}: BlogPostHeaderProps) {
  return (
    <header>
      <div className="space-y-10">
        <Categories categories={categories} />

        <Heading tag="h1" variant="section-heading">
          {title}
        </Heading>

        <SectionDivider />

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <PostMetadata author={author} date={date} />

          <div className="flex flex-col justify-between gap-15 md:flex-row md:gap-4">
            <ShareArticle
              articleTitle={title}
              path={`${PATHS.BLOG.path}/${slug}`}
              baseUrl={BASE_URL}
            />
          </div>
        </div>
      </div>

      <div className="relative my-12 aspect-video">
        <Image
          fill
          priority
          quality={100}
          fetchPriority="high"
          src={image.src}
          alt={image.alt}
          className="rounded-2xl object-cover"
          sizes={buildImageSizeProp({ startSize: '100vw', md: '768px' })}
        />
      </div>
    </header>
  )
}
