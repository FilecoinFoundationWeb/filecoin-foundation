import { clsx } from 'clsx'
import slugify from 'slugify'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageLayout } from '@/components/PageLayout'
import { ShareArticle } from '@/components/ShareArticle'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { DesktopTableOfContents } from '@/security/maturity-model/components/DesktopTableOfContents'

import { getBlogPostData } from '../utils/getBlogPostData'

import { BlogPostHeader } from './components/BlogPostHeader'
import { H2WithObserver } from './components/H2WithObserver'
import { generateStructuredData } from './utils/generateStructuredData'

type BlogPostProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: data.image?.src || graphicsData.blog.data.src,
    },
    path: `${PATHS.BLOG.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params
  const data = getBlogPostData(slug)
  const { title, image, content, publishedOn, category, tableOfContents } = data

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <div
        className={clsx('space-y-16', !tableOfContents && 'm-auto max-w-2xl')}
      >
        <BlogPostHeader
          title={title}
          image={image}
          publishedOn={publishedOn}
          category={category}
        />

        <div className="flex flex-col gap-8 lg:relative lg:flex-row lg:items-start lg:gap-12">
          <MarkdownContent
            components={tableOfContents ? { h2: H2WithObserver } : undefined}
          >
            {content}
          </MarkdownContent>
          {tableOfContents && (
            <div className="hidden lg:sticky lg:top-12 lg:order-last lg:block lg:w-72">
              <DesktopTableOfContents data={extractContentFromH2(content)} />
            </div>
          )}
        </div>
        <ShareArticle
          articleTitle={title}
          path={`${PATHS.BLOG.path}/${slug}`}
          sectionTitle="Share Post"
        />
      </div>
    </PageLayout>
  )
}

function extractContentFromH2(markdown: string) {
  const h2Regex = /^## (.+)/gm
  let match

  const headings = []

  // Loop through matches and extract the heading text
  while ((match = h2Regex.exec(markdown)) !== null) {
    headings.push({
      slug: slugify(match[1].trim(), { lower: true, strict: true }),
      title: match[1].trim(),
    })
  }

  return headings
}
