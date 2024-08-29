import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { graphicsData } from '@/data/graphicsData'

import { attributes } from '@/content/pages/maturity-model.md'

import { PATHS } from '@/constants/paths'

import { CoreFunctions } from './components/CoreFunctions'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.MATURITY_MODEL.path,
})

export default function MaturityModel() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.security5}
      />

      <PageSection
        kicker="Tailored Security Maturity"
        title="How to Leverage the Model"
        description="The Web3 Security Maturity Model is broken up into 9 core functions. Each core function is divided into functional areas that are broken into two streams with control criteria."
      >
        <div className="prose max-w-readable">
          <p>
            This maturity framework does not require all organizations to
            achieve the maximum maturity level in every category. Instead, it
            allows organizations to define and measure their security activities
            in a way that is tailored to their specific needs, and it encourages
            organizations, projects, and users to adapt the framework based on
            their unique environment, goals, and existing security maturity.
          </p>
          <ul className="list-disc">
            <li>
              <span className="font-semibold">Level 1:</span> Initial and Ad-hoc
              Represents an initial awareness and a basic understanding of the
              concept being evaluated (e.g., security culture). There is minimal
              formalization and process/documentation may not exist.
            </li>
            <li>
              <span className="font-semibold">Level 2:</span> Defined and
              Repeatable Indicates that structured programs are in place, aimed
              at promoting, reinforcing, and sustaining the practices necessary
              to support the area being evaluated. There is an emphasis on
              proactive capabilities in security.
            </li>
            <li>
              <span className="font-semibold">Level 3:</span> Optimized and
              Measurable Reflects a focus on continuous improvement.
              Practitioners use metrics and feedback loops to refine their
              security processes and practices constantly. Capabilities are
              driven by data and metrics to make informed security decisions,
              and there is a focus on optimizing security efforts based on
              evolving threats and lessons learned.
            </li>
          </ul>
        </div>
      </PageSection>

      <PageSection
        kicker="Building Blocks of Security"
        title="Explore the Core Functions"
      >
        <CoreFunctions />
      </PageSection>
    </PageLayout>
  )
}
