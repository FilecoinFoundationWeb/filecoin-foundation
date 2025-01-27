import { PATHS } from '@/constants/paths'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { generateStructuredData } from './utils/generateStructuredData'
import { FrontmatterSchema } from './schemas/FrontmatterSchema'
import { getMetaData } from './utils/getMetaData'
import { getBlogPostsData } from './utils/getBlogPostData'
import { BlogSection } from './components/BlogSection'

const { seo, featuredEntry: featuredPost } = getFrontmatter({
  path: PATHS.BLOG,
  zodParser: FrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.blog.data.src,
  },
  path: PATHS.BLOG.path,
  overrideDefaultTitle: true,
})

const posts = getBlogPostsData()

export default async function Blog() {
  return (
    <PageLayout>
      <StructuredDataScript
        structuredData={generateStructuredData(posts, seo)}
      />
      <PageHeader
        isFeatured
        title={featuredPost.title}
        description={featuredPost.description}
        metaData={getMetaData(featuredPost.publishedOn)}
        image={{
          ...(featuredPost.image || graphicsData.imageFallback.data),
          alt: '',
          objectFit: 'cover',
        }}
        cta={{
          href: `${PATHS.BLOG.path}/${featuredPost.slug}`,
          text: 'Read Featured Post',
        }}
      />
      <BlogSection posts={posts} />
    </PageLayout>
  )
}

export const dynamic = 'force-static'
