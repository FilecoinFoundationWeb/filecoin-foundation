import Image from 'next/image'

import { BlogPosting, WithContext } from 'schema-dts'

import { Heading } from '@/components/Heading'
import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { BlogPostData } from '@/types/blogPostTypes'

import { formatDate } from '@/utils/formatDate'
import { generateDynamicContentMetadata } from '@/utils/generateDynamicContentMetadata'
import { getBlogPostData } from '@/utils/getBlogPostData'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

type BlogPostProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)

  return generateDynamicContentMetadata({
    basePath: PATHS.BLOG.path,
    data,
  })
}

function createBlogPostStructuredData(
  data: BlogPostData
): WithContext<BlogPosting> {
  const { title, description, image, publishedOn, updatedOn, slug } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image?.url,
    author: {
      '@type': 'Person',
      name: ORGANIZATION_NAME,
    },
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.BLOG.path}/${slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)
  const { title, publishedOn, image, content } = data

  return (
    <>
      <StructuredDataScript
        structuredData={createBlogPostStructuredData(data)}
      />
      <header>
        {publishedOn && (
          <span className="block">{formatDate(publishedOn, 'blog')}</span>
        )}
        <Heading tag="h1" variant="2xl">
          {title}
        </Heading>
        <Image
          priority
          src={image.url}
          alt={image.alt}
          width={770}
          height={440}
          className="block h-auto object-contain"
        />
      </header>

      {content && <MarkdownContent>{content}</MarkdownContent>}
    </>
  )
}
