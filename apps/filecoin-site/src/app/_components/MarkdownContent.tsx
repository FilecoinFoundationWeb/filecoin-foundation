import ReactMarkdown, { type Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { MarkdownLink } from '@filecoin-foundation/ui/Markdown'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type MarkdownContentProps = {
  children: Parameters<typeof ReactMarkdown>[0]['children']
}

const markdownComponents: Components = {
  a: (props) => <MarkdownLink {...props} baseDomain={BASE_DOMAIN} />,
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
