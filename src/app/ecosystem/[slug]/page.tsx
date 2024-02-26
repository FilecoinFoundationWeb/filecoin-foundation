import fs from 'fs'
import path from 'path'

import Image from 'next/image'

import matter from 'gray-matter'
import { Article, WithContext } from 'schema-dts'

import { Badge } from '@/components/Badge'
import { MarkdownContent } from '@/components/MarkdownContent'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

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
    slug,
    data: {
      title: data.title,
      f_description: data['f_card-text-truncated'],
    },
  })
}

function createEcosystemProjectPostStructuredData(
  data: EcosystemProjectData
): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data['f_card-text-truncated'],
    image: data.f_brand?.url || '',
    datePublished: data.date,
    dateModified: data['updated-on'] || data.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.ECOSYSTEM.path}/${data.slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export default function EcosystemProject({ params }: EcosystemProjectProps) {
  const { slug } = params
  const { content, data } = getEcosystemProjectData(slug)

  type LinkDataKey = 'f_website' | 'f_repo' | 'f_social-media' | 'f_case-study'

  const linkTypes = [
    { key: 'f_website', text: 'Website' },
    { key: 'f_repo', text: 'GitHub' },
    { key: 'f_social-media', text: 'Twitter' },
    { key: 'f_case-study', text: 'Featured Content' },
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
        <Badge featured={!!data.f_featured}>Ecosystem Project</Badge>

        {data.f_brand.url && (
          <Image
            src={data.f_brand.url}
            alt={data.f_brand.alt}
            width={232}
            height={220}
            priority={true}
            className="block h-auto object-contain"
          />
        )}

        <h1 className="text-2xl font-bold mb-5">{data.title}</h1>

        <MarkdownContent>{content}</MarkdownContent>

        <ul className="flex flex-col gap-1 list-none">
          {links.map((link, index) => (
            <li key={index} className="ml-0 mb-0">
              <TextLink href={link.href}>{link.text}</TextLink>
            </li>
          ))}
        </ul>

        {data.f_video?.url && (
          <iframe
            allowFullScreen
            width="560"
            height="315"
            aria-label="Embedded YouTube Video"
            src={data.f_video.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
        )}

        <ul className="flex gap-3 list-none flex-wrap">
          {data.f_tag.map((tag) => (
            <li key={tag.value} className="ml-0">
              <span className="px-2 py-1 bg-slate-900 text-white rounded-lg text-sm font-medium uppercase border-white border">
                {tag.label}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
