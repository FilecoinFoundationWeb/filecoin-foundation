import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { CASE_STUDIES_SEO } from './constants/seo'
import { caseStudies } from './data/caseStudies'
import { generateStructuredData } from './utils/generateStructuredData'

import { PATHS } from '@/_constants/paths'

export default function CaseStudies() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(CASE_STUDIES_SEO)}
      />
      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="Powering the preservation of critical datasets"
          description="From scientific breakthroughs to cultural heritage, leading institutions trust Filecoin to securely and resiliently store their most valuable datasets."
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Explore datasets stored on Filecoin
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="light">
        <SectionContent
          title="Featured datasets"
          description="Explore some of the organizations using Filecoin to preserve their data."
        >
          <CardGrid as="ul" variant="lgTwo">
            {caseStudies.map(({ title, description, cta, logo }) => (
              <SimpleCardWithLogo
                key={title}
                title={title}
                description={description}
                cta={cta}
                logo={logo}
              />
            ))}
          </CardGrid>
        </SectionContent>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <SectionContent
          title="Preserve your most important data with Filecoin"
          description="Join the organizations already protecting their most valuable datasets on Filecoin’s secure, decentralized storage network."
          cta={
            <Button href={PATHS.STORE_DATA.path} variant="primary">
              Start storing on Filecoin
            </Button>
          }
        ></SectionContent>
      </PageSection>
    </>
  )
}
