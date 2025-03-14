import Image from 'next/image'

import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'
import { Newspaper } from '@phosphor-icons/react/dist/ssr'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTALink } from '@/components/CTALink'

import { getProjectData, getProjectsData } from '../utils/getProjectData'

import { generateStructuredData } from './utils/generateStructuredData'

type ProjectProps = {
  params: Promise<SlugParams>
}

export default async function Project(props: ProjectProps) {
  const { slug } = await props.params
  const data = await getProjectData(slug)
  const { title, image, description, externalLink, featuredContent } = data

  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <ArticleLayout>
        <Heading tag="h1" variant="3xl-medium">
          {title}
        </Heading>

        <div>
          <div className="relative aspect-video bg-neutral-50">
            <Image
              fill
              priority
              src={image?.src || graphicsData.imageFallback.data.src}
              alt={`${title}'s logo`}
              className="object-cover"
              sizes={buildImageSizeProp({
                startSize: '100vw',
                md: '730px',
                lg: '660px',
                xl: '600px',
              })}
            />
          </div>

          <div className="mt-8 inline-flex flex-col gap-8 sm:flex-row sm:gap-12">
            {externalLink && (
              <CTALink href={externalLink}>Visit Project Website</CTALink>
            )}

            {featuredContent && (
              <CTALink href={featuredContent} icon={Newspaper}>
                Read Blog Post
              </CTALink>
            )}
          </div>
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
  const { title, description } = await getProjectData(slug)

  return createMetadata({
    metaTitle: `${title} | FFDW`,
    metaDescription: description,
    overrideTitle: true,
  })
}
