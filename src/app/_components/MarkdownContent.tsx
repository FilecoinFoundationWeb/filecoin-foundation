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
      components={{
        img: ({ src, alt }) => (
          <CustomImage src={src as string} alt={alt as string} />
        ),
        p: ({ ...rest }) => <p className="mb-4 text-base" {...rest} />,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
