import { MarkdownImage, MarkdownLink } from '@filecoin-foundation/ui/Markdown'
import rehypeToc, { type HtmlElementNode } from '@jsdevtools/rehype-toc'
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

const markdownComponents: Components = {
  img: (props) => <MarkdownImage {...props} fallbackImage={graphicsData.imageFallback} />,
  a: (props) => <MarkdownLink {...props} baseDomain={BASE_DOMAIN} />,
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
