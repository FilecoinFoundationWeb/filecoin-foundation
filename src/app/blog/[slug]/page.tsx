import { BlogPosting, WithContext } from 'schema-dts'

import { BlogPostHeader } from '@/components/BlogPostHeader'
import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { type BlogPostData } from '@/types/blogPostTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getBlogPostData } from '@/utils/getBlogPostData'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

type BlogPostProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)

  return createMetadata({
    seo: data.seo,
    title: data.title,
    description: data.description,
    path: `${PATHS.BLOG.path}/${data.slug}` as DynamicPathValues,
  })
}

function createBlogPostStructuredData(
  data: BlogPostData,
): WithContext<BlogPosting> {
  const { title, description, image, publishedOn, updatedOn, slug } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image.url,
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
  const { title, image, content, publishedOn, category } = data

  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={createBlogPostStructuredData(data)}
      />
      <div className="m-auto max-w-2xl space-y-16">
        <BlogPostHeader
          title={title}
          image={image}
          publishedOn={publishedOn}
          category={category}
        />
        {content && <MarkdownContent>{content}</MarkdownContent>}
      </div>
    </PageLayout>
  )
}
