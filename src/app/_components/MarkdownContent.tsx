import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import { CustomImage } from '@/components/CustomImage'

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
          <CustomImage src={src as string} alt={alt as string} />
        ),
        figure: ({ node, ...props }) => (
          <figure {...props} className="text-center">
            {props.children}
          </figure>
        ),
        figcaption: ({ node, ...props }) => (
          <figcaption
            {...props}
            className="overflow-hidden overflow-ellipsis whitespace-nowrap break-words text-left font-sans text-[10px] font-thin"
          >
            {props.children}
          </figcaption>
        ),
        iframe: ({ node, ...props }) => (
          <iframe {...props} className="border-0" />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
