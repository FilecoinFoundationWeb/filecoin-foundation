import { CaseStudyListItem } from '@/components/CaseStudyListItem'

import { CaseStudyData } from '@/types/caseStudyTypes'

type CaseStudiesListProps = {
  caseStudies: CaseStudyData[]
  className?: string
}

export function CaseStudiesList({
  caseStudies,
  className,
}: CaseStudiesListProps) {
  if (caseStudies.length === 0) {
    return <p>No case studies available.</p>
  }

  return (
    <ul className={className}>
      {caseStudies.map((caseStudy) => (
        <CaseStudyListItem key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </ul>
  )
}
