import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { DynamicImage } from '@/components/DynamicImage'

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
          <DynamicImage
            src={src || ''}
            alt={alt || ''}
            width={800}
            height={450}
            fallback={graphicsData.imageFallback}
            sizes={buildImageSizeProp({ startSize: '100vw', md: '660px' })}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
