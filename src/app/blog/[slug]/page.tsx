import fs from 'fs'
import path from 'path'

import Image from 'next/image'

import matter from 'gray-matter'

import MarkdownContent from '@/components/MarkdownContent'

import { BlogData } from '@/types/blogTypes'

// import { createMetadata } from '@/utils/createMetadata'
import { formatDate } from '@/utils/formatDate'


type Props = {
  params: {
    slug: string
  }
}

function getPostData(slug: string): { content: string; data: BlogData } {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'blog',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)

  return { content, data: data as BlogData }
}

// export async function generateMetadata({ params }: Props) {
//   const { slug } = params
//   const { data } = getPostData(slug)

//   return createMetadata(data.seo.title, data.seo.description)
// }

const BlogPost = ({ params }: Props) => {
  const { slug } = params
  const { content, data } = getPostData(slug)

  const formattedDate = formatDate(data.date, 'blog')

  return (
    <>
      <header>
        <span className="block">{formattedDate}</span>
        <h1 className="mb-5 text-xl font-bold ">{data.title}</h1>
        <Image
          src={data.f_image.url}
          alt={data.f_image.alt || ''}
          width={770}
          height={440}
          priority={true}
          className="block h-auto object-contain"
        />
      </header>

      <div>
        <MarkdownContent>{content}</MarkdownContent>
      </div>
    </>
  )
}

export default BlogPost
