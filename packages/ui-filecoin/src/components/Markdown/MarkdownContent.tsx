import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { MarkdownImage } from './MarkdownImage'
import { MarkdownLink } from './MarkdownLink'

export type MarkdownContentProps = {
  children: Parameters<typeof ReactMarkdown>[0]['children']
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  const rehypePlugins = [rehypeRaw, rehypeSlug]

  const markdownComponents: Components = {
    a: ({ href, ...props }) => (
      <MarkdownLink href={href as string} {...props} />
    ),
    img: ({ src, alt }) => (
      <MarkdownImage src={src as string} alt={alt || ''} />
    ),
  }

  return (
    <div className="prose sm:prose-lg md:prose-xl">
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
