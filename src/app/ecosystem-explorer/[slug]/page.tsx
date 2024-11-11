import Image from 'next/image'

import { BookOpen, GitFork, Globe, XLogo } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import {
  type DynamicPathValues,
  PATHS,
  ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
} from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { getCategoryDataFromDirectory } from '@/utils/categoryUtils'
import { createMetadata } from '@/utils/createMetadata'

import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { MarkdownContent } from '@/components/MarkdownContent'
import { ShareArticle } from '@/components/ShareArticle'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TagLabel } from '@/components/TagLabel'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'
import { SmartTextLink } from '@/components/TextLink/SmartTextLink'
import { YouTubeVideoEmbed } from '@/components/YouTubeVideoEmbed'

import { getEcosystemProjectData } from '../utils/getEcosystemProjectData'

import { generateStructuredData } from './utils/generateStructuredData'

type EcosystemProjectProps = {
  params: {
    slug: string
  }
}

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

  const categoryData = getCategoryDataFromDirectory(
    ECOSYSTEM_CATEGORIES_DIRECTORY_PATH,
  )
  const subcategoryData = getCategoryDataFromDirectory(
    ECOSYSTEM_SUBCATEGORIES_DIRECTORY_PATH,
  )

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
    subcategories,
  } = data

  return (
    <article>
      <StructuredDataScript structuredData={generateStructuredData(data)} />

      <header className="mb-8 space-y-10 md:space-y-16">
        <div className="relative h-48 md:w-3/4 lg:w-2/3 xl:w-3/5">
          <Image
            fill
            priority
            src={image?.src || graphicsData.imageFallback.data.src}
            alt={''}
            className={clsx(
              image?.src && 'rounded-lg',
              'object-contain object-left-bottom',
            )}
            sizes={buildImageSizeProp({
              startSize: '100vw',
              md: '730px',
              lg: '660px',
              xl: '600px',
            })}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <TagLabel borderColor="brand-100">{categoryData[category]}</TagLabel>
          {subcategories.map((subcategory, i) => (
            <TagLabel key={i}>{subcategoryData[subcategory]}</TagLabel>
          ))}
        </div>
      </header>

      <div className="mb-16 flex flex-wrap justify-between gap-8">
        <div className="max-w-readable space-y-8">
          <div className="space-y-6">
            <Heading tag="h1" variant="4xl">
              {title}
            </Heading>
            {content && <MarkdownContent>{content}</MarkdownContent>}
          </div>

          {videoUrl && <YouTubeVideoEmbed videoUrl={videoUrl} />}
        </div>

        <ul className="mt-4 flex flex-col gap-5">
          {website && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={Globe} />
              <SmartTextLink href={website}>Website</SmartTextLink>
            </li>
          )}
          {repo && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={GitFork} />
              <ExternalTextLink href={repo}>GitHub</ExternalTextLink>
            </li>
          )}
          {twitter && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={XLogo} />
              <ExternalTextLink href={twitter}>X.com</ExternalTextLink>
            </li>
          )}
          {featuredContent && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={BookOpen} />
              <SmartTextLink href={featuredContent}>
                Featured Content
              </SmartTextLink>
            </li>
          )}
        </ul>
      </div>

      <ShareArticle
        articleTitle={title}
        path={`${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`}
        sectionTitle="Share Project"
      />
    </article>
  )
}
