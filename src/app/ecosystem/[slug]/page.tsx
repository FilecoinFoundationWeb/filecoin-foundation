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
  data: EcosystemProjectData
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
        <Badge featured={!!featured}>Ecosystem Project</Badge>

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

        <ul className="flex flex-col gap-1 list-none">
          {website && (
            <li className="ml-0 mb-0">
              <TextLink href={website}>Website</TextLink>
            </li>
          )}
          {repo && (
            <li className="ml-0 mb-0">
              <TextLink href={repo}>GitHub</TextLink>
            </li>
          )}
          {twitter && (
            <li className="ml-0 mb-0">
              <TextLink href={twitter}>Twitter</TextLink>
            </li>
          )}
          {featuredContent && (
            <li className="ml-0 mb-0">
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

        <ul className="flex gap-3 list-none flex-wrap">
          {tags.map((tag) => (
            <li key={tag.value} className="ml-0">
              <span className="px-2 py-1 bg-brand-800 text-white rounded-lg text-sm font-medium uppercase border-white border">
                {tag.label}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
