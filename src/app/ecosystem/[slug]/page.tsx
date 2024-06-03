import Image from 'next/image'

import { BookOpen, GitFork, Globe, XLogo } from '@phosphor-icons/react/dist/ssr'

import { Badge } from '@/components/Badge'
import { DescriptionText } from '@/components/DescriptionText'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { type EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'
import { getEcosystemProjectData } from '@/utils/getEcosystemProjectData'

import { type DynamicPathValues, PATHS } from '@/constants/paths'

import { generateEcosystemProjectPostStructuredData } from './utils/structuredData'

type EcosystemProjectProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: EcosystemProjectProps) {
  const { slug } = params
  const data = getEcosystemProjectData(slug)

  return createMetadata({
    seo: data.seo,
    title: data.title,
    description: data.description,
    path: `${PATHS.ECOSYSTEM.path}/${data.slug}` as DynamicPathValues,
  })
}

function getTagLabels(project: EcosystemProjectData) {
  const { fields } = getCollectionConfig('ecosystem_projects')
  const tagOptions = getCMSFieldOptions(fields, 'tags')

  return project.tags.map((tag) => {
    const option = tagOptions.find((option) => option.value === tag)
    return option ? option.label : tag
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
    updatedOn,
    newsUpdate,
  } = data

  return (
    <>
      <StructuredDataScript
        structuredData={generateEcosystemProjectPostStructuredData()}
      />

      {/* #TODO: Top spacing to be handled by layout parent */}
      <article className="mt-6">
        {image.url && (
          <div className="relative mb-16 h-10 w-full sm:h-16">
            <Image
              fill
              src={image.url}
              alt={image.alt}
              className="max-w-fit object-contain"
            />
          </div>
        )}

        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-readable">
            <div className="mb-8 space-y-6">
              <Heading tag="h1" variant="4xl">
                {title}
              </Heading>
              {content && <MarkdownContent>{content}</MarkdownContent>}
            </div>

            {videoUrl && (
              <div className="mb-8 aspect-video">
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
              <div className="prose mb-8">
                <span className="not-prose text-brand-300">
                  <Heading tag="h3" variant="xl">
                    Latest Update
                  </Heading>
                </span>
                <DescriptionText>{newsUpdate}</DescriptionText>
                {updatedOn && (
                  <span className="inline-block text-sm text-blue-300">
                    {formatDate(updatedOn)}
                  </span>
                )}
              </div>
            )}

            <ul className="flex flex-wrap gap-2">
              {getTagLabels(data).map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-4 flex flex-col gap-5">
            {website && (
              <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
                <Icon component={Globe} />
                <TextLink href={website}>Website</TextLink>
              </li>
            )}
            {repo && (
              <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
                <Icon component={GitFork} />
                <TextLink href={repo}>GitHub</TextLink>
              </li>
            )}
            {twitter && (
              <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
                <Icon component={XLogo} />
                <TextLink href={twitter}>X.com</TextLink>
              </li>
            )}
            {featuredContent && (
              <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
                <Icon component={BookOpen} />
                <TextLink href={featuredContent}>Featured Content</TextLink>
              </li>
            )}
          </ul>
        </div>
      </article>
    </>
  )
}
