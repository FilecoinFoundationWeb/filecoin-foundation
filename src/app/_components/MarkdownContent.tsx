import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { DynamicImage } from '@/components/DynamicImage'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { graphicsData } from '@/data/graphicsData'

type MarkdownContentProps = {
  children: string
}

export function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
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
