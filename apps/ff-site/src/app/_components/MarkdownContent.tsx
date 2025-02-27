import Image from 'next/image'

import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import rehypeToc, { type HtmlElementNode } from '@jsdevtools/rehype-toc'
import * as Sentry from '@sentry/node'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type PluggableList = Parameters<typeof ReactMarkdown>[0]['rehypePlugins']

export type MarkdownContentProps = {
  children: Parameters<typeof ReactMarkdown>[0]['children']
  addTableOfContents?: boolean
}

const IMAGE_DIMENSIONS = {
  containerWidth: 672,
  aspectRatioHeight: Math.round(672 * (9 / 16)),
} as const

const MarkdownImage: Components['img'] = ({ src, alt }) => {
  const commonProps = {
    quality: 100,
    width: IMAGE_DIMENSIONS.containerWidth,
    height: IMAGE_DIMENSIONS.aspectRatioHeight,
    sizes: buildImageSizeProp({
      startSize: '100vw',
      md: `${IMAGE_DIMENSIONS.containerWidth}px`,
    }),
  }

  if (!src) {
    const errorMessage = 'Invalid markdown: image is missing src attribute'

    console.error(errorMessage)
    Sentry.captureException(new Error(errorMessage))

    return (
      <Image
        {...commonProps}
        src={graphicsData.imageFallback.data}
        alt={graphicsData.imageFallback.alt}
      />
    )
  }

  return <Image {...commonProps} src={src} alt={alt || ''} />
}

const MarkdownLink: Components['a'] = ({ href, children }) => {
  if (!href) {
    const errorMessage = `Invalid markdown: link is missing href attribute for text "${children}"`

    console.error(errorMessage)
    Sentry.captureException(new Error(errorMessage))

    return <>{children}</>
  }
  return (
    <SmartTextLink href={href} baseDomain={BASE_DOMAIN} className="not-prose">
      {children}
    </SmartTextLink>
  )
}

const markdownComponents: Components = {
  img: MarkdownImage,
  a: MarkdownLink,
}

export function MarkdownContent({
  children,
  addTableOfContents,
}: MarkdownContentProps) {
  const tableOfContentsRehypePlugins = [
    rehypeSlug,
    [
      rehypeToc,
      {
        nav: true,
        customizeTOC: addTableOfContentsHeader,
        headings: ['h1', 'h2', 'h3'],
        cssClasses: {
          toc: 'border-l border-brand-300/30 pl-6 lg:pl-10',
        },
      },
    ],
  ] as const satisfies PluggableList

  const rehypePlugins = [
    rehypeRaw,
    ...(addTableOfContents ? tableOfContentsRehypePlugins : []),
  ]

  return (
    <ReactMarkdown
      rehypePlugins={rehypePlugins}
      remarkPlugins={[remarkGfm]}
      className="prose"
      components={markdownComponents}
    >
      {children}
    </ReactMarkdown>
  )
}

function addTableOfContentsHeader(nodeTree: HtmlElementNode) {
  const headerNode = {
    type: 'element',
    tagName: 'p',
    properties: { className: 'toc-header' },
    children: [{ type: 'text', value: 'Table of Contents' }],
  }

  return {
    ...nodeTree,
    children: [headerNode, ...Array.from(nodeTree.children || [])],
  }
}
