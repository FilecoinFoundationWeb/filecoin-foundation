import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

import CustomImage from '@/components/CustomImage'

type Props = {
  children: string
}

export default function MarkdownContent({ children }: Props) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ src, alt }) => (
          <CustomImage src={src as string} alt={alt as string} />
        ),
        p: ({ ...props }) => <p className="mb-4 text-base" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
