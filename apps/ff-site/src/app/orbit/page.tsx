import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import type { AsyncQueryParams } from '@filecoin-foundation/utils/types/urlTypes'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/orbit.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { CardWithBadge } from '@/components/CardWithBadge'
import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { OrbitAmbassadorCard } from '@/components/OrbitAmbassadorCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { StatisticCard } from '@/components/StatisticCard'

import { OrbitEventsSection } from './components/EventsSection'
import { ambassadorsData } from './data/ambassadorsData'
import { exploreOrbitData } from './data/exploreOrbitData'
import { programFeaturesAndPerksData } from './data/programFeaturesAndPerksData'
import { programGoalsData } from './data/programGoalsData'
import { statisticsData } from './data/statisticsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

type Props = {
  searchParams: AsyncQueryParams
}

export default async function Orbit(props: Props) {
  const searchParams = await props.searchParams

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.orbit}
      >
        <CTAButtonGroup
          cta={[
            {
              href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorsApplicationForm,
              text: 'Become an Orbit Ambassador',
            },
            {
              href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorsPortal,
              text: 'Filecoin Orbit Ambassador’s Portal',
            },
          ]}
        />
      </PageHeader>

      <PageSection kicker="Goals" title="Orbit Program Goals">
        <CardGrid as="ul" cols="lgThree">
          {programGoalsData.map((goal, index) => {
            const { image, title, description } = goal

            return (
              <FocusAreaCard
                key={index}
                image={image}
                title={title}
                description={description}
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Statistics" title="Key Statistics Since 2020">
        <CardGrid as="ul" cols="smTwo">
          {statisticsData.map((statistic, index) => (
            <StatisticCard key={index} {...statistic} />
          ))}
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="Upcoming Events"
        title="Global Orbit Events"
        description="All Orbit events are free to attend! Come meet the members of your Filecoin community in our upcoming events."
      >
        <OrbitEventsSection searchParams={searchParams} />
      </PageSection>

      <PageSection
        kicker="Program Perks"
        title="Orbit Program Features & Perks"
      >
        <BadgeCardGrid cols="smTwoLgFour">
          {programFeaturesAndPerksData.map((perk) => {
            const { icon, title, description } = perk

            return (
              <CardWithBadge
                key={title}
                title={title}
                description={description}
              >
                <Badge icon={icon} />
              </CardWithBadge>
            )
          })}
        </BadgeCardGrid>
      </PageSection>

      <PageSection kicker="Get Involved" title="Explore Orbit">
        <CardGrid as="ul" cols="lgThree">
          {exploreOrbitData.map((data, index) => {
            const {
              heading: { title, icon },
              description,
              cta,
            } = data

            return (
              <ExploreSectionCard
                key={index}
                cta={cta}
                heading={{
                  tag: 'h3',
                  variant: 'lg',
                  children: title,
                  iconProps: {
                    component: icon,
                  },
                }}
              >
                {description}
              </ExploreSectionCard>
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection kicker="Testimonials" title="Hear From Our Ambassadors">
        {ambassadorsData.map((ambassadorData, index) => {
          const { name, location, testimonial, image } = ambassadorData

          return (
            <OrbitAmbassadorCard
              key={index}
              index={index}
              image={image}
              name={name}
              testimonial={testimonial}
              location={location}
            />
          )
        })}
      </PageSection>

      <PageSection kicker="Frequently Asked Questions" title="FAQs">
        <div className="prose prose-h3:text-brand-300 prose-h3:first:mt-0 space-y-10">
          <div>
            <h3>
              Where can I find info about the Filecoin Orbit 2021 conference?
            </h3>
            <p>
              If you’re looking for the Filecoin Orbit 2021 virtual conference
              celebrating the first year of Filecoin Mainnet, the{' '}
              <ExternalTextLink href="https://www.youtube.com/playlist?list=PL_0VrY55uV1_HE_bE-frkYUPGybjYHbNz">
                event recordings are on YouTube
              </ExternalTextLink>
              .
            </p>
          </div>

          <div>
            <h3>How do I become an Orbit Ambassador?</h3>
            <ol>
              <li>
                Review the responsibilities associated with serving as a
                Filecoin Orbit Ambassador.
              </li>
              <li>
                Complete the{' '}
                <ExternalTextLink
                  href={
                    FILECOIN_FOUNDATION_URLS.orbit.ambassadorsApplicationForm
                  }
                >
                  application form
                </ExternalTextLink>
                . After submitting, your application will undergo review. Keep
                an eye on your email for updates on the status of your
                application and next steps. This may take up to two weeks.
              </li>
              <li>
                If your application is accepted, you will receive an approval
                email and a signing request from DocuSign with an ambassador
                agreement.
              </li>
              <li>
                Once the agreement is signed, you&apos;ll receive a follow-up
                email containing everything you need to know to be an active
                ambassador. Plus, you&apos;ll gain access to our exclusive
                Ambassadors Lounge, packed with valuable resources and
                information.
              </li>
            </ol>
          </div>

          <div>
            <h3>What are the Orbit Ambassador responsibilities?</h3>
            <ol>
              <li>
                Follow the processes and procedures on the right timeline to
                organize community meetups, conferences or hackathons. This
                includes drafting event proposals, using our registration
                format, creating reports, etc.
              </li>
              <li>
                Share high-quality photos and videos from the events on social
                media.
              </li>
              <li>Manage logistics, content, and execution of the events.</li>
              <li>
                Keep track of detailed records of budget, expenses, and
                receipts.
              </li>
            </ol>
          </div>

          <div>
            <h3>How does Filecoin Foundation support Orbit Ambassadors?</h3>
            <ol>
              <li>
                Provide funding for the event, following proper procedures. This
                funding is intended to cover expenses such as venue rental, food
                & beverages, A/V, photography, swag, and other costs associated
                with your Filecoin event.
              </li>
              <li>Event management guidance.</li>
              <li>Marketing and communications resources.</li>
              <li>
                Ensure your event is listed on the Global Orbit Events Calendar
                and Filecoin Foundation’s Google Calendar.
              </li>
              <li>Access to potential speakers from the Filecoin network.</li>
              <li>
                Subject to approval, receive reimbursement for travel expenses.
              </li>
            </ol>
          </div>

          <div>
            <h3>Does language matter to host events?</h3>
            <p>
              No, you can host your event in your local language. If you have an
              English-speaking host/speaker/guest, you should have instant
              translation available (both ways).
            </p>
          </div>

          <div>
            <h3>How many Orbit Ambassadors are there?</h3>
            <p>
              There are currently over 80 Orbit Ambassadors, in just as many
              countries, building the Filecoin communities in their cities and
              regions.
            </p>
          </div>

          <div>
            <h3>
              Can University students apply? Can I apply if I am already a part
              of other software or Web3 communities?
            </h3>
            <p>Yes, of course. To both questions.</p>
          </div>

          <div>
            <h3>
              Do I need experience in community building to join Filecoin Orbit?
            </h3>
            <p>
              Not necessarily. Orbit Ambassadors include engineers who build on
              Filecoin Virtual Machine, writers who publish educational articles
              on popular websites about Filecoin, and event hosts who want to
              bring people together about something they are excited about
              (Filecoin!) You’re welcome to make the most of the Orbit program
              however it resonates with your background and goals.
            </p>
          </div>
        </div>
      </PageSection>

      <CTASection
        title="Ready to Be Involved In the Filecoin Ecosystem?"
        description="Don't miss out on the opportunity to be part of something big. Join Filecoin Orbit and help shape the future of decentralized technology!"
        cta={{
          href: FILECOIN_FOUNDATION_URLS.orbit.ambassadorsApplicationForm,
          text: 'Join Filecoin Orbit',
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  image: graphicsData.orbit.data.src,
  path: PATHS.ORBIT.path,
})
