import Image from 'next/image'

import { NewspaperIcon } from '@phosphor-icons/react/dist/ssr'

import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { TagGroup } from '@filecoin-foundation/ui/TagComponents'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getCategoryLabel } from '@/utils/getCategoryLabel'

import { CTALink } from '@/components/CTALink'

import { getProjectData, getProjectsData } from '../utils/getProjectData'

import { generateStructuredData } from './utils/generateStructuredData'

type ProjectProps = {
  params: Promise<SlugParams>
}

export default async function Project(props: ProjectProps) {
  const { slug } = await props.params
  const data = await getProjectData(slug)
  const {
    category,
    title,
    image,
    description,
    website,
    featuredContent,
    activePartnership,
  } = data

  const categoryLabel = getCategoryLabel({
    collectionName: 'projects',
    category,
  })

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <ArticleLayout>
        <div>
          <div className="mb-8 space-y-4">
            <TagGroup
              tags={[
                { text: categoryLabel },
                {
                  text: `${activePartnership ? 'Current' : 'Past'} Partnership`,
                },
              ]}
            />

            <Heading tag="h1" variant="3xl-medium">
              {title}
            </Heading>
          </div>

          <div className="relative mb-6 aspect-video bg-neutral-50">
            <Image
              fill
              priority
              src={image?.src || graphicsData.imageFallback.data.src}
              alt={`${title}'s logo`}
              className="object-contain"
              sizes={buildImageSizeProp({ startSize: '100vw', md: '640px' })}
            />
          </div>

          {(website || featuredContent) && (
            <div className="inline-flex flex-col gap-8 sm:flex-row sm:gap-12">
              {website && (
                <CTALink href={website}>Visit Project Website</CTALink>
              )}

              {featuredContent && (
                <CTALink href={featuredContent} icon={NewspaperIcon}>
                  Read Blog Post
                </CTALink>
              )}
            </div>
          )}
        </div>

        <div className="prose">
          <h2>About the Project</h2>
          <p>{description}</p>
        </div>
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const entries = await getProjectsData()
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: ProjectProps) {
  const { slug } = await props.params
  const { image, seo } = await getProjectData(slug)

  return createMetadata({
    path: `${PATHS.PROJECTS.path}/${slug}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME_SHORT}` },
    description: seo.description,
    image: image?.src || graphicsData.projects.data.src,
    openGraph: { type: 'article' },
  })
}
