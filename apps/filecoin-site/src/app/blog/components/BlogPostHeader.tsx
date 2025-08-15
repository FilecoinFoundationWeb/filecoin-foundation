import Image from 'next/image'

import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { Heading } from '@/components/Heading'
import { SectionDivider } from '@/components/SectionDivider'

import type { BlogPost } from '../types/blogPostType'

import { BlogPostContainer } from './BlogPostContainer'
import { Categories } from './Categories'
import { PostMetadata } from './PostMetadata'

type BlogPostHeaderProps = {
  image: BlogPost['image']
  categories: BlogPost['categories']
  title: BlogPost['title']
  slug: string
  author?: BlogPost['author']
  date: BlogPost['publishedOn']
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
      <div className="relative mb-10 min-h-80">
        <Image
          fill
          priority
          quality={100}
          src={image?.url || ''}
          alt=""
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <BlogPostContainer>
        <div className="mb-10 flex flex-col justify-between gap-15 md:flex-row md:gap-4">
          <Categories categories={categories} />
          <ShareArticle
            articleTitle={title}
            path={`${PATHS.BLOG.path}/${slug}`}
            baseUrl={BASE_URL}
          />
        </div>

        <SectionDivider />

        <div className="mt-15 mb-4">
          <PostMetadata author={author} date={date} />
        </div>

        <Heading tag="h1" className="font-heading text-4xl font-medium">
          {title}
        </Heading>
      </BlogPostContainer>
    </header>
  )
}
