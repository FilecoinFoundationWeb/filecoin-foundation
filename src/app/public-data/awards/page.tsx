import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { SectionJoin } from '@/components/SectionJoin'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/awards.md'

const { title, description, seo } = attributes

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const metadata = createMetadata(seo, PATHS.PUBLIC_DATA_AWARDS.path)

const awardsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.PUBLIC_DATA_AWARDS.path,
})

export default function Awards() {
  return (
    <>
      <StructuredDataScript structuredData={awardsPageBaseData} />
      <PageHeader title={title} description={description} />

      <section>
        <p>
          The Public Data Awards is a location-specific $50,000 funding pool for
          non-profits and civic technology groups.
        </p>
        <p>
          It will disperse awards up to $10,000 USD to support projects that
          either leverage datasets or advance learning around datasets stored on
          decentralized technology. Each iteration of the award has its own
          $50,000 pool. The Public Data Awards are specific to locations
          centered around governments with which Filecoin Foundation is
          partnering.
        </p>
        <p>
          The award is intended to fund anything from a project analyzing air
          quality data recently uploaded to Filecoin to an educational seminar
          about how to access and use your city’s data stored on Filecoin or
          IPFS. To maximize public learning, all awards should result in at
          least one public output or outcome (e.g., a blog, event, data tool).
        </p>
        <p>
          Note: This Awards program is contingent on the support and involvement
          of local government officials.
        </p>
      </section>

      <section>
        <Heading tag="h2" variant="xl">
          The first Public Data Awards program will be launched soon. Stay
          tuned!
        </Heading>
        <p>
          The Public Data Awards is a location-specific $50,000 funding pool for
          non-profits and civic technology groups that will disperse awards up
          to $10,000 USD to support projects that leverage datasets or advance
          learning around datasets stored on decentralized technology.
        </p>
        <TextLink href={FILECOIN_FOUNDATION_URLS.publicDataCommons.contactForm}>
          Apply for a Public Data Award
        </TextLink>
      </section>

      <section>
        <Heading tag="h2" variant="xl">
          Frequently Asked Questions
        </Heading>

        <article>
          <Heading tag="h3" variant="lg">
            Who is eligible for this award?
          </Heading>
          <p>
            Only individuals and non-profit or civic technology organizations
            based in or working directly in the featured city or jurisdiction
            are eligible at this time.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            What strings are attached to this funding?
          </Heading>
          <p>
            None. We simply ask you to write up a short (one page) report within
            30 days of your project concluding. The reports should help the
            public understand how you spent the money, what you learned, and who
            benefited from the project.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            What are the sizes of these Awards?
          </Heading>
          <p>
            While each location’s overall pool of funding is $50,000, the range
            for individual awards is up to $10,000 USD. An individual award will
            not exceed $10,000, even if your project costs more.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            How can I spend this money?
          </Heading>
          <p>
            Tell us in the application – it could be anything from food & drink
            for an in-person tutorial on how to access and use decentralized
            public data, to an hourly rate covering your team’s programming or
            engineering work to build a data egress or ingress pipeline. We
            expect the funds to cover as much of the costs as possible of your
            planned initiative, including paying for staff time.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            Is there a date by which I need to spend the money?
          </Heading>
          <p>
            This is a rapid-fire program designed to quickly spur new
            innovations and ideas in the decentralized technology space. To help
            with that goal, we hope that you will spend the money within 90 days
            of receipt.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            Can an individual without an organization apply?
          </Heading>
          <p>Yes, either an individual or an organization can apply.</p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            Can one individual or organization submit multiple applications?
          </Heading>
          <p>
            No, applications should be limited to one per person/organization.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            What if I want to apply, but I don&apos;t live or work in the
            featured city?
          </Heading>
          <p>
            If you’re an individual, group, or organization in the civic tech
            space that would be interested in applying for this program, fill
            out this form, and we will reach out if a Public Data Awards program
            is launched for your city or region. Please note in the form if you
            would also be interested in learning about some of our non-location
            specific funding opportunities.
          </p>
        </article>

        <article>
          <Heading tag="h3" variant="lg">
            Where can I send any additional questions?
          </Heading>
          <p>
            <TextLink href={FILECOIN_FOUNDATION_URLS.publicDataCommons.email}>
              You can reach out to us anytime with questions and thoughts.
            </TextLink>
          </p>
        </article>
      </section>

      <SectionJoin />
    </>
  )
}
