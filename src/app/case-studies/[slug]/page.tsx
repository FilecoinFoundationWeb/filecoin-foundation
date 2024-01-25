import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { CaseStudyData } from '@/types/caseStudyTypes'
import { SeoMetadata } from '@/types/metadataTypes'

import { createMetadata } from '@/utils/createMetadata'

import { PATHS, PathValues } from '@/constants/paths'

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

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const data = getCaseStudyData(slug)

  const seo: SeoMetadata = {
    title: data.title,
    description: data.f_description || '',
  }

  const path: PathValues = `${PATHS.CASE_STUDIES}/${slug}`

  return createMetadata(seo, path)
}

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
