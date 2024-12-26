import type { AsyncNextServerSearchParams } from '@/types/searchParams'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractSlugFromFilename } from '@/utils/fileUtils'
import { getFrontmatter } from '@/utils/getFrontmatter'
import { getSortOptions } from '@/utils/getSortOptions'

import { FeaturedPageFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { BlogContent } from './components/BlogContent'
import { blogSortConfigs } from './constants/sortConfigs'
import { generateStructuredData } from './utils/generateStructuredData'
import { getBlogPostData, getBlogPostsData } from './utils/getBlogPostData'
import { getMetaData } from './utils/getMetaData'

type Props = {
  searchParams: Promise<AsyncNextServerSearchParams>
}

const { seo, featuredEntry: featuredEntryPath } = getFrontmatter({
  path: PATHS.BLOG,
  zodParser: FeaturedPageFrontmatterSchema.parse,
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
const sortOptions = getSortOptions(blogSortConfigs)
const featuredPostSlug = extractSlugFromFilename(featuredEntryPath)
const featuredPost = getBlogPostData(featuredPostSlug)

export default async function Blog(props: Props) {
  const searchParams = await props.searchParams

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
      <PageSection
        kicker="Blog"
        title="Filecoin Ecosystem Updates"
        description="Read the latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
      >
        <BlogContent
          searchParams={searchParams}
          posts={posts}
          sortOptions={sortOptions}
        />
      </PageSection>
    </PageLayout>
  )
}
