import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { FFDW_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { generateStructuredData } from './utils/generateStructuredData'

const SEO = {
  metaTitle: 'About FFDW | Building and Supporting the Decentralized Community',
  metaDescription:
    'Discover how Filecoin Foundation for the Decentralized Web (FFDW) accelerates open, decentralized technologies and safeguards vital data. Learn about our mission to empower communities, preserve cultural knowledge, and shape a fairer, more resilient internet for everyone.',
} as const

export default function About() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript structuredData={generateStructuredData(SEO)} />
      <PageHeader
        kicker="About"
        title="Building and Supporting the Decentralized Web Community"
        image={graphicsData.about}
      />

      <PageSection
        kicker="FFDW Priorities"
        title="Our mission is to preserve humanity's most important information."
        description="We do this through:"
      >
        <div>
          <div>
            <h3>Education</h3>
            <p>
              Helping individuals and communities learn about the transformative
              power of decentralized, open technologies.
            </p>
          </div>
          <div>
            <h3>Development</h3>
            <p>
              Accelerating the adoption of decentralized technologies through
              innovation and research.
            </p>
          </div>
          <div>
            <h3>Community Support</h3>
            <p>
              Fostering a network of advocates and builders across the
              decentralized web community.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        kicker="Impact Areas"
        title="Empowering Change Through Decentralization"
        description="FFDW’s efforts span the critical areas listed below. Each of these domains is vital in its own right, and FFDW’s breadth of work reflects its commitment to driving meaningful change not just in one industry but across the expanse of the web."
      >
        <div>
          <div>
            <h3>DWeb Research and Development</h3>
            <p>
              FFDW supports initiatives that advance decentralized technologies.
            </p>
          </div>
          <div>
            <h3>Education</h3>
            <p>
              FFDW champions initiatives that increase education and
              understanding of blockchain, cryptocurrency, and other
              decentralized technologies
            </p>
          </div>
          <div>
            <h3>Human Rights</h3>
            <p>
              Records of the fight for human rights can be some of the most
              vulnerable data in the world — susceptible to tampering or total
              disappearance on unsecured platforms. FFDW’s work with human
              rights organizations is dedicated to safeguarding this critical
              data.
            </p>
          </div>
          <div>
            <h3>Cultural Preservation</h3>
            <p>
              The world’s digital artifacts are fragile —many at risk of
              disappearing forever. FFDW’s work in the area of cultural
              preservation aims to preserve and safeguard humanity’s digital
              cultural heritage for the long term.
            </p>
          </div>
          <div>
            <h3>Government Datasets and Policy</h3>
            <p>
              FFDW educates policymakers about the promise of decentralized
              technologies and works to preserve government data using
              decentralized technologies like the Filecoin network
            </p>
          </div>
          <div>
            <h3>Science and Environment</h3>
            <p>
              Scientific research produces large amounts of data, but there are
              limited systems in place to preserve this information publicly and
              for the long term. FFDW is working with universities and other
              scientific institutions to preserve scientific data by leveraging
              the reliability of decentralized storage.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection kicker="Board of Directors" title="FFDW Board of Directors">
        <div>
          <div>
            <h3>Marta Belcher</h3>
            <p>President & Chair, FFDW</p>
          </div>
          <div>
            <h3>Brian Behlendorf</h3>
            <p>Chief AI Strategist, Linux Foundation</p>
          </div>
          <div>
            <h3>Sheila Warren</h3>
            <p>Chief Executive Officer, Crypto Council for Innovation</p>
          </div>
          <div>
            <h3>Rainey Reitman</h3>
            <p>Board President, Freedom of the Press Foundation</p>
          </div>
          <div>
            <h3>Kristin Smith</h3>
            <p>Executive Director, Blockchain Association</p>
          </div>
        </div>
      </PageSection>

      <CTASection
        kicker="Get Involved"
        title="Join the Conversation and Help Us Build a Better Internet"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  ...SEO,
  overrideTitle: false,
})
