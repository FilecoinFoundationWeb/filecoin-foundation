import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'

import { attributes } from '@/content/pages/orbit.md'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

const { header } = attributes

export default function Orbit() {
  return (
    <PageLayout>
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.imageFallback} // TODO: Add proper orbit image
        cta={[
          {
            href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorApplicationForm,
            text: 'Become an Orbit Ambassador',
          },
          {
            href: FILECOIN_FOUNDATION_URLS.orbit.ambassoadorPortal,
            text: 'Filecoin Orbit Ambassador’s Portal',
          },
        ]}
      />
    </PageLayout>
  )
}
