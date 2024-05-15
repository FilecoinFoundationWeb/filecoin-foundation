import Image from 'next/image'

import { Article, WithContext } from 'schema-dts'

import { Badge } from '@/components/Badge'
import { DescriptionText } from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { formatDate } from '@/utils/formatDate'
import { generateDynamicContentMetadata } from '@/utils/generateDynamicContentMetadata'
import { getEcosystemProjectData } from '@/utils/getEcosystemProjectData'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type EcosystemProjectProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: EcosystemProjectProps) {
  const { slug } = params
  const data = getEcosystemProjectData(slug)

  return generateDynamicContentMetadata({
    basePath: PATHS.ECOSYSTEM.path,
    data,
  })
}

function createEcosystemProjectPostStructuredData(
  data: EcosystemProjectData,
): WithContext<Article> {
  const { title, slug, publishedOn, updatedOn, description, image } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image?.url,
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.ECOSYSTEM.path}/${slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
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
    tags,
    publishedOn,
    newsUpdate,
  } = data

  return (
    <>
      <StructuredDataScript
        structuredData={createEcosystemProjectPostStructuredData(data)}
      />

      <article>
        {image.url && (
          <div className="relative my-16 h-10 w-full sm:h-16">
            <Image
              fill
              src={image.url}
              alt={image.alt}
              className="max-w-fit object-contain"
            />
          </div>
        )}
        <div className="grid gap-16 md:grid-cols-[auto,_150px] md:gap-9">
          <div>
            <div className="mb-8 space-y-6">
              <Heading tag="h1" variant="4xl">
                {title}
              </Heading>
              {content && <MarkdownContent>{content}</MarkdownContent>}
            </div>

            {videoUrl && (
              <div className="relative my-8 h-44 w-full max-w-2xl sm:h-80">
                <iframe
                  allowFullScreen
                  width="100%"
                  height="100%"
                  aria-label="Embedded YouTube Video"
                  src={videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                />
              </div>
            )}

            {newsUpdate && (
              <div className="prose mb-4 space-y-4">
                <Heading tag="h3" variant="xl" color="secondary">
                  Latest Update From Project:
                </Heading>
                <DescriptionText>{newsUpdate}</DescriptionText>
              </div>
            )}

            <div className="space-y-8">
              {publishedOn && (
                <span className="inline-block text-sm text-blue-300">
                  {formatDate(publishedOn)}
                </span>
              )}

              <ul className="flex list-none flex-wrap gap-3">
                {tags.map((tag) => (
                  <li key={tag} className="ml-0">
                    <Badge>{tag}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-5 md:auto-rows-max md:grid-cols-1">
            {website && (
              <li>
                <TextLink href={website}>Website</TextLink>
              </li>
            )}
            {repo && (
              <li>
                <TextLink href={repo}>GitHub</TextLink>
              </li>
            )}
            {twitter && (
              <li>
                <TextLink href={twitter}>Twitter</TextLink>
              </li>
            )}
            {featuredContent && (
              <li>
                <TextLink href={featuredContent}>Featured Content</TextLink>
              </li>
            )}
          </ul>
        </div>
      </article>
    </>
  )
}
