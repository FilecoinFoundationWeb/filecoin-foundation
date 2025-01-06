import Image from 'next/image'

import * as Sentry from '@sentry/node'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { SmartTextLink } from '@/components/TextLink/SmartTextLink'

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
  return <SmartTextLink href={href}>{children}</SmartTextLink>
}

const markdownComponents: Components = {
  img: MarkdownImage,
  a: MarkdownLink,
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      className="prose"
      components={markdownComponents}
    >
      {children}
    </ReactMarkdown>
  )
}
