import fs from 'fs'
import path from 'path'

import Image from 'next/image'

import matter from 'gray-matter'
import type { Route } from 'next'
import { BlogPosting, WithContext } from 'schema-dts'

import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { BlogPostData } from '@/types/blogPostTypes'
import { SeoMetadata } from '@/types/metadataTypes'

import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

type BlogPostProps = {
  params: {
    slug: string
  }
}

function getPostData(slug: string): { content: string; data: BlogPostData } {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'blog',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)

  return { content, data: data as BlogPostData }
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  const { data } = getPostData(slug)

  const seo: SeoMetadata = {
    title: data.title,
    description: data.f_description,
  }

  const path: Route = `${PATHS.BLOG.path}/${slug}`

  return createMetadata(seo, path)
}

function createBlogPostStructuredData(
  data: BlogPostData
): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.f_description,
    image: data.f_image.url || '',
    author: {
      '@type': 'Person',
      name: data.f_author || ORGANIZATION_NAME,
    },
    datePublished: data.date,
    dateModified: data['updated-on'] || data.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.BLOG.path}/${data.slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  const { content, data } = getPostData(slug)

  return (
    <>
      <StructuredDataScript
        structuredData={createBlogPostStructuredData(data)}
      />

      <header>
        <span className="block">{formatDate(data.date, 'blog')}</span>
        <h1 className="mb-5 text-xl font-bold">{data.title}</h1>
        <Image
          src={data.f_image.url}
          alt={data.f_image.alt || ''}
          width={770}
          height={440}
          priority={true}
          className="block h-auto object-contain"
        />
      </header>

      <div>
        <MarkdownContent>{content}</MarkdownContent>
      </div>
    </>
  )
}
