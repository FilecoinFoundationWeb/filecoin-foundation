import Image from 'next/image'

import { Article, WithContext } from 'schema-dts'

import { Badge } from '@/components/Badge'
import { Heading } from '@/components/Heading'
import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

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
    featured,
    image,
    title,
    content,
    videoUrl,
    website,
    repo,
    twitter,
    featuredContent,
    tags,
  } = data

  return (
    <>
      <StructuredDataScript
        structuredData={createEcosystemProjectPostStructuredData(data)}
      />

      <article>
        <Badge badgeType="primary">
          {featured ? 'Featured Project' : 'Ecosystem Project'}
        </Badge>

        {image.url && (
          <Image
            priority
            src={image.url}
            alt={image.alt}
            width={232}
            height={220}
            className="block h-auto object-contain"
          />
        )}

        <Heading tag="h1" variant="2xl">
          {title}
        </Heading>

        {content && <MarkdownContent>{content}</MarkdownContent>}

        <ul className="flex list-none flex-col gap-1">
          {website && (
            <li className="mb-0 ml-0">
              <TextLink href={website}>Website</TextLink>
            </li>
          )}
          {repo && (
            <li className="mb-0 ml-0">
              <TextLink href={repo}>GitHub</TextLink>
            </li>
          )}
          {twitter && (
            <li className="mb-0 ml-0">
              <TextLink href={twitter}>Twitter</TextLink>
            </li>
          )}
          {featuredContent && (
            <li className="mb-0 ml-0">
              <TextLink href={featuredContent}>Featured Content</TextLink>
            </li>
          )}
        </ul>

        {videoUrl && (
          <iframe
            allowFullScreen
            width="560"
            height="315"
            aria-label="Embedded YouTube Video"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
        )}

        <ul className="flex list-none flex-wrap gap-3">
          {tags.map((tag) => (
            <li key={tag} className="ml-0">
              <span className="rounded-lg border border-white bg-brand-800 px-2 py-1 text-sm font-medium uppercase text-white">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
