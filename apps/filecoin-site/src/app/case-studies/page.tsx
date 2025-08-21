import clsx from 'clsx'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { backgroundVariants } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { CASE_STUDIES_SEO } from './constants/seo'
import { caseStudies } from './data/caseStudies'
import { generateStructuredData } from './utils/generateStructuredData'

export default function CaseStudies() {
  return (
    <>
      <StructuredDataScript
        structuredData={generateStructuredData(CASE_STUDIES_SEO)}
      />
      <div
        className={clsx(
          'relative isolate overflow-x-clip',
          backgroundVariants.dark,
        )}
      >
        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Powering the preservation of critical datasets"
            description="From AI datasets to government archives, leading institutions trust Filecoin to securely and resiliently store their most valuable datasets."
            cta={
              <Button
                href={`${PATHS.STORE_DATA.path}#featured-datasets`}
                variant="primary"
              >
                Explore datasets stored on Filecoin
              </Button>
            }
          />
        </PageSection>

        <graphicsData.caseStudies.data className="absolute -top-[840px] right-0 -z-10 hidden w-[600px] overflow-visible sm:block" />
      </div>

      <PageSection paddingVariant="topOnly" backgroundVariant="dark">
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
          description="Join the organizations already protecting their most valuable datasets on the Filecoin network."
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
