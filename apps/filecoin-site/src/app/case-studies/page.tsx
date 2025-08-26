import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { GradientContainer } from '@/components/GradientContainer'
import { Navigation } from '@/components/Navigation/Navigation'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { SectionContent } from '@/components/SectionContent'
import { SimpleCardWithLogo } from '@/components/SimpleCardWithLogo'

import { CASE_STUDIES_SEO } from './constants/seo'
import { caseStudies } from './data/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <GradientContainer>
        <graphicsData.caseStudies.data className="absolute -top-[40vw] -right-[25vw] -z-10 hidden overflow-visible md:-top-[45vw] md:right-0 md:block md:w-[50vw] lg:-top-[50vw] lg:w-[45vw] xl:w-[40vw] 2xl:w-[33vw]" />

        <Navigation backgroundVariant="transparentDark" />
        <PageSection backgroundVariant="transparentDark">
          <PageHeader
            title="Powering the preservation of critical datasets"
            description="From AI datasets to government archives, leading institutions trust Filecoin to securely and resiliently store their most valuable datasets."
            cta={
              <Button href="#featured-datasets" variant="primary">
                Explore datasets stored on Filecoin
              </Button>
            }
          />
        </PageSection>
      </GradientContainer>

      <PageSection paddingVariant="topOnly" backgroundVariant="dark">
        <SectionContent
          title="Featured datasets"
          description="Explore some of the organizations using Filecoin to preserve their data."
        >
          <CardGrid as="ul" variant="lgTwoWide">
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

export const metadata = createMetadata({
  title: { absolute: CASE_STUDIES_SEO.title },
  description: CASE_STUDIES_SEO.description,
  path: PATHS.CASE_STUDIES.path,
})
