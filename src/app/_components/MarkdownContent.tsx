import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

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
            src={src || ''}
            alt={alt || ''}
            width={800}
            height={450}
            sizes={buildImageSizeProp({ startSize: '100vw', md: '660px' })}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
