import Image from 'next/image'

import * as Sentry from '@sentry/node'
import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { TextLink } from '@/components/TextLink'

type MarkdownContentProps = {
  children: string
}

const MarkdownImage: Components['img'] = ({ src, alt }) => (
  <Image
    priority
    quality={100}
    src={src!}
    width={800}
    height={450}
    sizes={buildImageSizeProp({ startSize: '100vw', md: '660px' })}
    alt={alt!}
  />
)

const MarkdownLink: Components['a'] = ({ href, children }) => {
  if (!href) {
    Sentry.captureException(
      new Error(
        `Invalid markdown: link is missing href attribute for text "${children}"`,
      ),
    )
    return <>{children}</>
  }
  return <TextLink href={href}>{children}</TextLink>
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
