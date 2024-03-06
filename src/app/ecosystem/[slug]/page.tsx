import fs from 'fs'
import path from 'path'

import Image from 'next/image'

import matter from 'gray-matter'
import { Article, WithContext } from 'schema-dts'

import { Badge } from '@/components/Badge'
import { Heading } from '@/components/Heading'
import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import {
  EcosystemProjectData,
  LinkDataKey,
} from '@/types/ecosystemProjectTypes'

import { generateDynamicContentMetadata } from '@/utils/generateDynamicContentMetadata'
import { baseOrganizationSchema } from '@/utils/structuredData'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

type EcosystemProjectProps = {
  params: {
    slug: string
  }
}

function getEcosystemProjectData(slug: string): {
  content: string
  data: EcosystemProjectData
} {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'ecosystem',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)

  return { content, data: data as EcosystemProjectData }
}

export async function generateMetadata({ params }: EcosystemProjectProps) {
  const { slug } = params
  const { data } = getEcosystemProjectData(slug)

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
  const { content, data } = getEcosystemProjectData(slug)

  const linkTypes = [
    { key: 'caseStudy', text: 'Featured Content' },
    { key: 'website', text: 'Website' },
    { key: 'repo', text: 'GitHub' },
    { key: 'twitter', text: 'Twitter' },
  ]

  const links = linkTypes
    .map(({ key, text }) => {
      const href = data[key as LinkDataKey]
      return href ? { href, text } : null
    })
    .filter((link): link is { href: string; text: string } => link !== null)

  return (
    <>
      <StructuredDataScript
        structuredData={createEcosystemProjectPostStructuredData(data)}
      />

      <article>
        <Badge featured={!!data.featured}>Ecosystem Project</Badge>

        {data.image.url && (
          <Image
            priority
            src={data.image.url}
            alt={data.image.alt}
            width={232}
            height={220}
            className="block h-auto object-contain"
          />
        )}

        <Heading tag="h1" variant="2xl">
          {data.title}
        </Heading>

        <MarkdownContent>{content}</MarkdownContent>

        <ul className="flex flex-col gap-1 list-none">
          {links.map((link, index) => (
            <li key={index} className="ml-0 mb-0">
              <TextLink href={link.href}>{link.text}</TextLink>
            </li>
          ))}
        </ul>

        {data.videoUrl && (
          <iframe
            allowFullScreen
            width="560"
            height="315"
            aria-label="Embedded YouTube Video"
            src={data.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
        )}

        <ul className="flex gap-3 list-none flex-wrap">
          {data.tags.map((tag) => (
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
