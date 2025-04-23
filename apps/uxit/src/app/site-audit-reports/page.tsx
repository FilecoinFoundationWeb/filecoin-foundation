import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import { Card } from '@/components/Card'

import { siteMetadataList } from './data/siteMetadataList'

export default function SiteAuditPage() {
  return (
    <PageLayout>
      <header className="max-w-readable space-y-4">
        <Heading tag="h1" variant="4xl">
          Website Lighthouse Audits
        </Heading>
        <p>
          Static Lighthouse reports are available for each site and can be
          viewed directly in the browser.
        </p>
        <p className="max-w-readable">
          These reports are generated periodically using{' '}
          <ExternalTextLink href="https://unlighthouse.dev/integrations/ci">
            Unlighthouse CI
          </ExternalTextLink>{' '}
          and include performance metrics, accessibility scores, best practices
          analysis, and SEO recommendations.
        </p>
      </header>

      <CardGrid as="section" cols="smTwoLgThree">
        {siteMetadataList.map(({ name, id }) => (
          <Card
            key={id}
            as="div"
            title={{ text: name }}
            cta={{
              href: `${PATHS.SITE_AUDIT_REPORTS.path}/${id}/`,
              text: 'View Report',
              icon: {
                component: ArrowRight,
                size: 16,
                position: 'trailing',
                weight: 'bold',
              },
            }}
          />
        ))}
      </CardGrid>
    </PageLayout>
  )
}
