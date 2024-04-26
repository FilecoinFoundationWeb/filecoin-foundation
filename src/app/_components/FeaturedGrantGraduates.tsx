import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { PATHS } from '@/constants/paths'

import { Card } from './Card'
import { CardLayout } from './CardLayout'

export function FeaturedGrantsGraduates({
  grantGraduates,
}: {
  grantGraduates: EcosystemProjectData[]
}) {
  if (grantGraduates.length === 0) {
    return <p>No featured grants graduates available.</p>
  }

  return (
    <CardLayout type="blogPost">
      {grantGraduates.map((post) => {
        const { title, description, slug } = post

        return (
          <Card
            key={post.slug}
            title={title}
            description={description}
            textIsClamped={true}
            cta={{
              href: `${PATHS.GRANTS.path}/${slug}`,
              text: 'Read More',
            }}
          />
        )
      })}
    </CardLayout>
  )
}
