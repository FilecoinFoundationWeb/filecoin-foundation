import { type Route } from 'next'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'

import { getCaseStudiesData } from '@/utils/getCaseStudyData'

import { PATHS } from '@/constants/paths'

type FeaturedCaseStudiesProps = {
  maxPosts?: number
}

const caseStudies = getCaseStudiesData()

export function FeaturedCaseStudies({
  maxPosts = 6,
}: FeaturedCaseStudiesProps) {
  const featuredCaseStudies = caseStudies
    // .filter((caseStudy) => caseStudy.featured)
    .slice(0, maxPosts)

  if (featuredCaseStudies.length === 0) {
    return <p>No featured projects available.</p>
  }

  return (
    <CardLayout type="caseStudy">
      {featuredCaseStudies.map(({ title, description, slug, image }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          image={image}
          borderColor="brand-300"
          textIsClamped={true}
          cta={{
            href: `${PATHS.CASE_STUDIES.path}/${slug}` as Route,
          }}
        />
      ))}
    </CardLayout>
  )
}
