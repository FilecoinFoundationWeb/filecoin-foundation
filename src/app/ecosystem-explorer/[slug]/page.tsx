import { type DynamicPathValues, PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'
import { findOrThrow } from '@/utils/findOrThrow'

import { CTASection } from '@/components/CTASection'
import { PageLayout } from '@/components/PageLayout'
import { ShareArticle } from '@/components/ShareArticle'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import { getEcosystemProjectData } from '../utils/getEcosystemProjectData'

import { Article } from './components/Article'
import { PageHeader } from './components/PageHeader'
import { generateStructuredData } from './utils/generateStructuredData'

type EcosystemProjectProps = {
  params: {
    slug: string
  }
}

const { subcategories: cmsSubcategories } = getEcosystemCMSCategories()

export function generateMetadata({ params }: EcosystemProjectProps) {
  const { slug } = params
  const data = getEcosystemProjectData(slug)

  return createMetadata({
    seo: {
      ...data.seo,
      image: graphicsData.ecosystem.data.src,
    },
    path: `${PATHS.ECOSYSTEM_EXPLORER.path}/${data.slug}` as DynamicPathValues,
  })
}

export default function EcosystemProject({ params }: EcosystemProjectProps) {
  const { slug } = params
  const data = getEcosystemProjectData(slug)

  const {
    image,
    title,
    content,
    videoUrl,
    website,
    repo,
    twitter,
    featuredContent,
    subcategories,
  } = data

  const projectSubcategory = findOrThrow(
    cmsSubcategories,
    ({ value }) => value === subcategories[0],
  )

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <PageHeader image={image} />

      <Article
        title={title}
        content={content}
        videoUrl={videoUrl}
        website={website}
        repo={repo}
        twitter={twitter}
        featuredContent={featuredContent}
        subcategory={projectSubcategory.label}
      />

      <ShareArticle
        articleTitle={title}
        path={`${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`}
        sectionTitle="Share Project"
      />

      <CTASection
        title="Update an Existing Project"
        description={
          <>
            If you need to make changes to an existing project, please send an
            email to{' '}
            <ExternalTextLink
              href={FILECOIN_FOUNDATION_URLS.ecosystem.email.href}
            >
              {extractEmailAddress(
                FILECOIN_FOUNDATION_URLS.ecosystem.email.href,
              )}
            </ExternalTextLink>{' '}
            with the updated details.
          </>
        }
      />
    </PageLayout>
  )
}
