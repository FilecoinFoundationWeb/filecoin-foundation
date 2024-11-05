import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { TextLink } from '@/components/TextLink'

type MarkdownContentProps = {
  children: string
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      className="prose"
      components={{
        img: ({ src, alt }) => (
          <Image
            priority
            quality={100}
            src={src!}
            width={800}
            height={450}
            sizes={buildImageSizeProp({ startSize: '100vw', md: '660px' })}
            alt={alt!}
          />
        ),
        a: ({ href, children }) => <TextLink href={href!}>{children}</TextLink>,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
