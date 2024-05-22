import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { PATHS } from '@/constants/paths'

type FeaturedGrantsGraduatesProps = {
  grantGraduates: EcosystemProjectData[]
}

export function FeaturedGrantsGraduates({
  grantGraduates,
}: FeaturedGrantsGraduatesProps) {
  if (grantGraduates.length === 0) {
    return <p>No featured grants graduates available.</p>
  }

  return (
    <CardLayout cols="smTwo">
      {grantGraduates.map(({ title, description, slug }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          textIsClamped={true}
          cta={{
            href: `${PATHS.GRANTS.path}/${slug}`,
            text: 'Read More',
          }}
        />
      ))}
    </CardLayout>
  )
}
