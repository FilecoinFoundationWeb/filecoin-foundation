import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { MarkdownLink } from './MarkdownLink'

export type MarkdownContentProps = {
  children: Parameters<typeof ReactMarkdown>[0]['children']
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  const rehypePlugins = [rehypeRaw, rehypeSlug]

  const markdownComponents: Components = {
    a: ({ href, ...props }) => <MarkdownLink href={href} {...props} />,
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
