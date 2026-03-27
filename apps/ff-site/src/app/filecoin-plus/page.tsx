import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { attributes as allocatorsAttributes } from '@/content/pages/filecoin-plus/allocators.md'
import { attributes } from '@/content/pages/filecoin-plus/filecoin-plus.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractDomain } from '@/utils/extractDomain'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { CardWithBadge } from '@/components/CardWithBadge'
import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { MarkdownContent } from '@/components/MarkdownContent'
import { PageSection } from '@/components/PageSection'

import { aboutData } from './data/aboutData'
import { applicationData } from './data/applicationData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)
const { header: allocatorsHeader } =
  PageFrontmatterSchema.parse(allocatorsAttributes)

export default function FilPlus() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.filPlus}
      >
        <CTAButtonGroup
          cta={[
            { href: '#', text: 'Apply for DataCap' },
            {
              href: FIL_PLUS_URLS.documentation,
              text: 'Learn More About Filecoin Plus',
            },
          ]}
        />
      </PageHeader>

      <PageSection kicker="How It Works" title="The Filecoin Plus Process">
        <BadgeCardGrid cols="smThree">
          {aboutData.map(({ step, title, description }) => (
            <CardWithBadge key={step} title={title} description={description}>
              <Badge number={step} />
            </CardWithBadge>
          ))}
        </BadgeCardGrid>
      </PageSection>

      <PageSection
        kicker="Allocators"
        title={allocatorsHeader.title}
        description={allocatorsHeader.description}
        image={graphicsData.filPlusAllocators}
        cta={{
          href: PATHS.ALLOCATORS.path,
          text: 'Allocators List',
        }}
      />

      <PageSection kicker="Allocator Application" title="Become an Allocator">
        <p className="max-w-readable mb-2">
          An allocator’s primary responsibilities include allocating DataCap,
          ensuring trust and compliance, and participating in community
          governance. For a full list of instructions on how to become an
          allocator, please visit{' '}
          <MarkdownContent.Link href={FIL_PLUS_URLS.allocators.blog}>
            {extractDomain(FIL_PLUS_URLS.allocators.blog)}
          </MarkdownContent.Link>
          . We are currently prioritizing new allocators that are developing
          pathways according to our{' '}
          <MarkdownContent.Link href={FIL_PLUS_URLS.allocators.rfa}>
            Request for Allocators (RFA)
          </MarkdownContent.Link>
          .
        </p>

        <BadgeCardGrid cols="smThree">
          {applicationData.map((item) => {
            const { step, title, description } = item

            return (
              <CardWithBadge key={step} title={title} description={description}>
                <Badge number={step} />
              </CardWithBadge>
            )
          })}
        </BadgeCardGrid>
      </PageSection>

      <PageSection kicker="Frequently Asked Questions" title="FAQs">
        <div className="prose prose-h3:text-brand-300 prose-h3:first:mt-0 space-y-10">
          <div>
            <h3>What is Filecoin Plus (Fil+)?</h3>
            <p>
              Filecoin Plus is a program designed to increase the amount of
              useful data stored on the Filecoin network. It achieves this by
              providing verified clients with DataCap tokens, which they can use
              to make storage deals with storage providers. These deals are
              considered higher quality and incentivize storage providers to
              store valuable data.
            </p>
          </div>

          <div>
            <h3>What is DataCap?</h3>
            <p>
              DataCap is a token allocated to verified clients, allowing them to
              make storage deals with storage providers. These deals are
              recognized as verified, enhancing the storage provider&apos;s
              reputation and potential rewards. DataCap is a one-time credit and
              cannot be transferred between addresses. If a client needs more
              DataCap, they must request additional allocations.
            </p>
          </div>

          <div>
            <h3>How does Filecoin Plus benefit storage providers?</h3>
            <p>
              When storage providers accept deals that utilize DataCap, their
              Quality Adjusted Power (QAP) increases. This higher QAP boosts
              their chances of earning block rewards. However, it&apos;s
              important to note that while the probability of earning rewards
              increases, the actual amount of rewards does not multiply.
            </p>
          </div>

          <div>
            <h3>How can clients acquire DataCap?</h3>
            <p>
              Clients can obtain DataCap by applying through approved
              allocators. The process typically involves:
            </p>
            <ol>
              <li>Creating a Filecoin wallet.</li>
              <li>
                Choosing an allocator from the list of approved allocators.
              </li>
              <li>Ensuring they meet the allocator&apos;s requirements.</li>
              <li>Submitting an application for DataCap.</li>
              <li>Using the allocated DataCap in storage deals.</li>
            </ol>
            <p>
              For builders on the Calibration testnet, a faucet is available to
              grant testnet DataCap.
            </p>
          </div>

          <div>
            <h3>Can smart contracts use DataCap?</h3>
            <p>
              Yes, smart contracts can acquire and use DataCap similarly to
              regular clients. To do so, the smart contract&apos;s address must
              be specified when requesting DataCap. It&apos;s important to
              remember that DataCap allocations are tied to specific addresses
              and cannot be transferred. If a smart contract is redeployed with
              a new address, a new DataCap allocation is necessary.
            </p>
          </div>

          <div>
            <h3>
              What responsibilities do storage providers have when accepting
              verified deals?
            </h3>
            <p>Storage providers accepting verified deals must:</p>
            <ul>
              <li>Ensure the data is stored securely and reliably.</li>
              <li>Provide regular proofs of storage to the network.</li>
              <li>Be prepared to offer data retrieval services to clients.</li>
              <li>
                Understand that while the potential rewards are higher, so are
                the penalties for failing to meet the network&apos;s standards.
              </li>
            </ul>
          </div>

          <div>
            <h3>How does one apply to become an Allocator?</h3>
            <p>
              To apply to become a Filecoin Plus Allocator, follow these steps:
            </p>
            <ol>
              <li>
                <strong>Open a Pull Request</strong> — Visit the{' '}
                <MarkdownContent.Link href={FIL_PLUS_URLS.notary}>
                  Allocator Governance GitHub
                </MarkdownContent.Link>{' '}
                page. Create a pull request, name the file &quot;Allocator
                application&quot;, and commit the change as a branch.
              </li>
              <li>
                <strong>Fill Out the Airtable Form</strong> — After the pull
                request is submitted, a GitHub Action will comment with a link
                to an Airtable form. Fill out the form using your GitHub handle
                and PR number.
              </li>
              <li>
                <strong>Track the Submission</strong> — Once the form is
                submitted, a corresponding issue will be created for governance
                review. This issue will also propose adding the new Allocator to
                the registry JSON file.
              </li>
            </ol>
            <p>
              For a full list of instructions on how to become an allocator,
              please visit{' '}
              <MarkdownContent.Link href={FIL_PLUS_URLS.allocators.blog}>
                {extractDomain(FIL_PLUS_URLS.allocators.blog)}
              </MarkdownContent.Link>
              . We are currently prioritizing new allocators that are developing
              pathways according to our{' '}
              <MarkdownContent.Link href={FIL_PLUS_URLS.allocators.rfa}>
                Request for Allocators (RFA)
              </MarkdownContent.Link>
              .
            </p>
          </div>
        </div>
      </PageSection>

      <CTASection
        title="Get Started"
        description="Find the right Allocator to support your storage needs or learn more about Filecoin Plus."
        cta={[
          { text: 'Find an Allocator', href: PATHS.ALLOCATORS.path },
          { text: 'Learn More', href: FIL_PLUS_URLS.documentation },
        ]}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: seo.title,
  description: seo.description,
  image: graphicsData.filPlus.data.src,
  path: PATHS.FIL_PLUS.path,
})
