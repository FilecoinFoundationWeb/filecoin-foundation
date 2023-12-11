import CaseStudyListItem from '@/components/CaseStudyListItem'

import { CaseStudyData } from '@/types/caseStudyTypes'

type Props = {
  caseStudies: CaseStudyData[]
  className?: string
}

export default function CaseStudiesList({ caseStudies, className }: Props) {
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
