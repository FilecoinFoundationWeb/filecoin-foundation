import CustomLink from '@/components/CustomLink'
import PageHeader from '@/components/PageHeader'

import { CaseStudyData } from '@/types/caseStudyTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'

import { attributes } from '@/content/pages/case-studies.md'

import { PATHS, CONTENT_PATHS } from '@/constants/paths'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.CASE_STUDIES)

function CaseStudyListItem({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <li>
      <CustomLink href={`/case-studies/${caseStudy.slug}`}>
        <h3>{caseStudy.title}</h3>
      </CustomLink>
      <p>{caseStudy.f_description}</p>
    </li>
  )
}

export default function CaseStudiesPage() {
  const caseStudies: CaseStudyData[] = getMarkdownData(
    CONTENT_PATHS.CASE_STUDIES.POSTS as string
  )

  return (
    <>
      <PageHeader title={title} description={description} />
      <ul>
        {caseStudies.map((caseStudy) => (
          <CaseStudyListItem key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </ul>
    </>
  )
}
