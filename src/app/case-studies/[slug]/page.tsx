import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { CaseStudyData } from '@/types/caseStudyTypes'

// import { createMetadata } from '@/utils/createMetadata'

type Props = {
  params: {
    slug: string
  }
}

function getCaseStudyData(slug: string): CaseStudyData {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'case-studies',
    `${slug}.md`
  )

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found for slug: ${slug}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)

  return data as CaseStudyData
}

// export async function generateMetadata({ params }: Props) {
//   const { slug } = params
//   const data = getCaseStudyData(slug)

//   return createMetadata(data.seo.title, data.seo.description)
// }

const CaseStudy = ({ params }: Props) => {
  const { slug } = params
  const data = getCaseStudyData(slug)

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">{data.title}</h1>
      <p>{data.f_description}</p>
    </>
  )
}

export default CaseStudy
