import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import { findOrThrow } from '@filecoin-foundation/utils/findOrThrow'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL, FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { CTASection } from '@/components/CTASection'

import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'
import {
  getEcosystemProjectData,
  getEcosystemProjectsData,
} from '../utils/getEcosystemProjectData'

import { Article } from './components/Article'
import { PageHeader } from './components/PageHeader'
import { generateStructuredData } from './utils/generateStructuredData'

type EcosystemProjectProps = {
  params: Promise<SlugParams>
}

const categories = getEcosystemCMSCategories()

export default async function EcosystemProject(props: EcosystemProjectProps) {
  const { slug } = await props.params
  const data = await getEcosystemProjectData(slug)

  const {
    image,
    title,
    content,
    videoUrl,
    website,
    repo,
    twitter,
    featuredContent,
    category,
  } = data

  const projectCategory = findOrThrow(
    categories,
    ({ value }) => value === category,
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
        category={projectCategory.label}
      />

      <ShareArticle
        articleTitle={title}
        path={`${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`}
        sectionTitle="Share Project"
        baseUrl={BASE_URL}
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

export async function generateStaticParams() {
  const entries = await getEcosystemProjectsData()
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: EcosystemProjectProps) {
  const { slug } = await props.params
  const data = await getEcosystemProjectData(slug)

  return createMetadata({
    title: data.seo.title,
    description: data.seo.description,
    image: graphicsData.ecosystem.data.src,
    path: `${PATHS.ECOSYSTEM_EXPLORER.path}/${data.slug}`,
    openGraph: { type: 'article' },
  })
}
