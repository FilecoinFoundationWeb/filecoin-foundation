import { createMarkdownImage } from '@filecoin-foundation/ui/Markdown'
import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'
import * as Sentry from '@sentry/node'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

export type MarkdownContentProps = {
  children: Parameters<typeof ReactMarkdown>[0]['children']
}

const MarkdownLink: Components['a'] = ({ href, children }) => {
  if (!href) {
    const errorMessage = `Invalid markdown: link is missing href attribute for text "${children}"`

    console.error(errorMessage)
    Sentry.captureException(new Error(errorMessage))

    return <>{children}</>
  }

  return (
    <SmartTextLink href={href} baseDomain={BASE_DOMAIN}>
      {children}
    </SmartTextLink>
  )
}

const markdownComponents: Components = {
  img: createMarkdownImage(graphicsData.imageFallback),
  a: MarkdownLink,
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  const rehypePlugins = [rehypeRaw, rehypeSlug]

  return (
    <div className="prose">
      <ReactMarkdown
        rehypePlugins={rehypePlugins}
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
