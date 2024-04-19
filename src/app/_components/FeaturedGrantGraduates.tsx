import { getAllGrantGraduateData } from '@/_utils/getGrantGraduatesData'
import { PATHS } from '@/constants/paths'

import { Card } from './Card'
import { CardLayout } from './CardLayout'

const grantGraduates = getAllGrantGraduateData()

export function FeaturedGrantsGraduates() {
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
            cta={{
              href: `${PATHS.GRANTS.path}/${slug}`,
              text: 'Read More',
            }}
            textIsClamped={true}
          />
        )
      })}
    </CardLayout>
  )
}
