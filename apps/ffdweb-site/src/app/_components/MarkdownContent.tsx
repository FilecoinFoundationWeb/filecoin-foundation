import Image from 'next/image'

import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

export type MarkdownContentProps = {
  children: Parameters<typeof ReactMarkdown>[0]['children']
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

export function MarkdownContent({ children }: MarkdownContentProps) {
  const rehypePlugins = [rehypeRaw, rehypeSlug]

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
