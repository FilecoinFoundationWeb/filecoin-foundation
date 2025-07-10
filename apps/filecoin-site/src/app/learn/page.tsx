import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'

import { PATHS } from '@/constants/paths'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { PageSection } from '@/components/PageSection'

import { ComparisonTable } from './components/ComparisonTable'
import { ecosystemPartners } from './data/ecosystemPartners'
import { filecoinParticipants } from './data/filecoinParticipants'
import { filecoinStackFeatures } from './data/filecoinStackFeatures'
import { filecoinStorageFlow } from './data/filecoinStorageFlow'
import { filecoinValues } from './data/filecoinValues'

export default function Learn() {
  return (
    <>
      <PageSection backgroundVariant="dark">
        <PageHeader
          title="A decentralized storage network for humanity's data"
          description="Filecoin is a protocol, economy, and community powering the world's
          largest open storage network. It enables anyone to store, retrieve,
          and build on verifiable data — securely and at scale."
          cta={
            <Button href="" variant="primaryDark">
              Explore documentation
            </Button>
          }
        />
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          An open, resilient, and equitable foundation for the internet
        </Heading>

        <DescriptionText>
          Filecoin's mission is to create a more open, resilient, and equitable
          foundation for the internet. We believe in:
        </DescriptionText>

        <CardGrid as="ul" cols="mdThree">
          {filecoinValues.map(({ title, description, icon }) => (
            <Card
              key={title}
              as="li"
              backgroundVariant="dark"
              title={title}
              description={description}
              icon={{
                component: icon,
                position: 'top',
              }}
            />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <Heading tag="h2" variant="6xl-medium">
          Breaking free from centralized control
        </Heading>
        <div>
          <span>Why decentralize storage?</span>
          <div>
            <DescriptionText
              children={[
                "Today, most of the world's data lives in the hands of a few centralized cloud providers. This creates risks — from single points of failure and rising costs to censorship and opaque control.",
                'Filecoin turns this model on its head. By creating a global, trustless marketplace for storage, it gives individuals, developers, and organizations control over their data and infrastructure. Data becomes verifiable, programmable, and interoperable across use cases, industries, and chains.',
              ]}
            />
            <Button href="" variant="primary">
              Store on Filecoin
            </Button>
          </div>
        </div>
      </PageSection>

      <PageSection backgroundVariant="light">
        <Heading tag="h2" variant="6xl-medium">
          From storage request to verified data
        </Heading>

        <DescriptionText>
          Here's how Filecoin works and who makes it happen.
        </DescriptionText>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <div>
              {' '}
              <Heading tag="h3" variant="3xl-medium">
                How Filecoin works
              </Heading>
              <DescriptionText>
                Imagine you have a file that you want to store. Here’s how
                Filecoin makes that possible:
              </DescriptionText>
            </div>

            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {filecoinStorageFlow.map(({ description }, index) => (
                <li key={description} className="flex flex-col gap-3">
                  <span className="text-brand-500 text-4xl font-medium">
                    {`0${index + 1}.`}
                  </span>
                  <DescriptionText>{description}</DescriptionText>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-zinc-400" />

          <div>
            <div>
              <Heading tag="h3" variant="3xl-medium">
                Who's involved?
              </Heading>

              <DescriptionText>
                Storing a file on Filecoin involves several participants working
                together.
              </DescriptionText>

              <CardGrid as="ul" cols="mdThree">
                {filecoinParticipants.map(({ title, description, cta }) => (
                  <Card
                    key={title}
                    as="li"
                    backgroundVariant="light"
                    title={title}
                    description={description}
                    cta={{ href: cta.href, text: cta.label }}
                  />
                ))}
              </CardGrid>
            </div>

            <CardGrid as="ul" cols="mdTwo">
              <li>
                <Heading tag="h4" variant="xl-medium">
                  Storage providers
                </Heading>
              </li>
            </CardGrid>
          </div>
        </div>

        <Button href="" variant="primary">
          Find storage solutions
        </Button>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          See how Filecoin storage stacks up
        </Heading>

        <DescriptionText>
          Compare decentralized object storage against the traditional cloud
          storage.
        </DescriptionText>

        <ComparisonTable />

        <Button href={PATHS.STORE_DATA.path} variant="primaryDark">
          Store on Filecoin
        </Button>
      </PageSection>

      <PageSection backgroundVariant="light">
        <Heading tag="h2" variant="6xl-medium">
          A robust foundation for humanity's information
        </Heading>

        <DescriptionText>
          Filecoin provides the foundation for critically important public data,
          such as open access scientific data, creative commons media,
          historical archives, preservation, and more.
        </DescriptionText>

        <CardGrid as="ul" cols="mdTwo">
          {ecosystemPartners.map(({ name, description, href }) => (
            <li key={name} className="flex flex-col gap-6">
              <div className="space-y-3">
                <Heading tag="h4" variant="xl-medium">
                  {name}
                </Heading>
                <p className="color-zinc-600">{description}</p>
              </div>
              <a href={href}>Visit website</a>
            </li>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection backgroundVariant="gray">
        <Heading tag="h2" variant="6xl-medium">
          What powers the Filecoin network
        </Heading>

        <DescriptionText>
          Filecoin is more than storage. It's a full stack of innovation.
        </DescriptionText>

        <CardGrid as="ul" cols="mdThree">
          {filecoinStackFeatures.map(({ title, description, href }) => (
            <li key={title} className="flex flex-col gap-6">
              <div className="space-y-3">
                <Heading tag="h4" variant="xl-medium">
                  {title}
                </Heading>
                <p className="color-zinc-600">{description}</p>
              </div>
              <a href={href}>Learn more</a>
            </li>
          ))}
        </CardGrid>
      </PageSection>

      <PageSection backgroundVariant="dark">
        <Heading tag="h2" variant="6xl-medium">
          Go further with Filecoin
        </Heading>

        <DescriptionText>
          Whether you're a developer, a storage provider, or just curious, the
          Filecoin documentation has everything you need — from quick starts to
          in-depth guides.
        </DescriptionText>

        <Button href="" variant="primaryDark">
          Explore documentation
        </Button>
      </PageSection>
    </>
  )
}
