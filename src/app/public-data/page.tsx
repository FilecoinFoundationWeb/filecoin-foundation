import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { PageHeader } from '@/components/PageHeader'
import { SectionJoin } from '@/components/SectionJoin'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/public-data.md'

const { title, description, seo } = attributes

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_URLS,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'

export const metadata = createMetadata(seo, PATHS.PUBLIC_DATA.path)

const governancePageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.PUBLIC_DATA.path,
})

export default function PublicData() {
  return (
    <>
      <StructuredDataScript structuredData={governancePageBaseData} />
      <PageHeader title={title} description={description} />

      <section>
        <h2>
          Making public data more resilient, permanent, and cost-effective,
          while also increasing accessibility.
        </h2>
        <p>
          The Public Data Commons exists to support open data initiatives in
          partnership with governments and official organizations across the
          globe. This initiative brings together cutting-edge archival
          technologies and the most civic-minded public institutions to leverage
          the unique benefits of decentralized storage – because public data
          should be a useful resource, not a costly burden to store.
        </p>
        <p>
          Open data in cities help foster trust in governments by allowing
          citizens and community organizations to play a role in advancing
          accountability for a more effective government.
        </p>
      </section>

      <section>
        <h2>
          Control over today’s centralized internet is concentrated in the hands
          of a few, for-profit power players.
        </h2>
        <p>
          These huge, ultra-powerful companies collect our data, control the
          information we get, and present vulnerable targets for malicious
          hackers.
        </p>
        <p>
          All too often, we see some of these power players curate public data
          behind paywalls. This undermines the original intention of making the
          data public to begin with.
        </p>
        <p>
          We have seen these companies suffer blackouts in which vast swaths of
          the Web go down for hours, including websites that are massive
          contributors to the economy. That’s the problem with having single
          points of failure.
        </p>
        <p>
          We seek to help governments and official organizations ensure that
          information remains open and accessible to their communities and
          constituents. We believe citizens and cities deserve a better version
          of the web - a decentralized one.
        </p>
      </section>

      <section>
        <h2>Public data belongs in the hands of the people</h2>
        <TextLink href={FILECOIN_FOUNDATION_URLS.publicDataCommons.contactForm}>
          Join the Public Data Commons
        </TextLink>
      </section>

      <section>
        <h2>What is decentralized storage?</h2>
        <p>
          Governments and communities need accessible and cost-effective ways to
          store public datasets. Filecoin makes decentralized storage easy, and
          it costs <TextLink href="https://file.app/">a fraction</TextLink> of
          the price of centralized cloud storage.
        </p>
        <p>
          On the Filecoin network, files are stored on a distributed network of
          professional storage providers around the globe, with built-in
          economic incentives to ensure files are stored reliably over time. The
          mission of Filecoin is to create a decentralized, efficient, and
          robust foundation for humanity’s information.
        </p>
        <TextLink href={FILECOIN_URLS.site}>Learn More about Filecoin</TextLink>
      </section>

      <section>
        <h2>Award Opportunities</h2>
        <p>
          Filecoin Foundation’s Public Data Awards program funds the work of
          local civic technology groups to store and/or access their community
          datasets on the decentralized web.
        </p>
        <TextLink href={PATHS.PUBLIC_DATA_AWARDS.path}>
          Read More and Apply for Awards
        </TextLink>
      </section>

      <SectionJoin />

      <section>
        <header>
          <h2>Case Studies</h2>
          <p>See the value of public datasets in action.</p>
        </header>
        <FeaturedCaseStudies />
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>

        <article>
          <h3>What is Filecoin?</h3>
          <p>
            Filecoin is a decentralized network to store files, with built-in
            economic incentives to ensure files are stored reliably over time.
            The mission of Filecoin is to create a decentralized, efficient, and
            robust foundation for humanity’s information.
          </p>
        </article>

        <article>
          <h3>What is the Filecoin Foundation?</h3>
          <p>
            Filecoin Foundation (FF) is an independent organization that
            facilitates governance of the Filecoin network, funds critical
            development projects, supports the growth of the Filecoin ecosystem,
            and advocates for Filecoin and the decentralized web. FF does this
            by coordinating and supporting the creation and improvement of
            open-source software and open protocols for decentralized data
            storage and retrieval networks.
          </p>
        </article>

        <article>
          <h3>How do I get Involved?</h3>
          <p>
            If you are a government official interested in having your city join
            the Public Data Commons,{' '}
            <TextLink href="impact@fil.org">reach out to us</TextLink>.
          </p>
          <p>
            If you are from a civic technology group and want to leverage public
            datasets hosted on decentralized storage,
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.publicDataCommons.contactForm}
            >
              fill out this form
            </TextLink>{' '}
            and we will notify you if there is a Public Data Awards program
            launched for your city.
          </p>
        </article>

        <article>
          <h3>What about the environmental impacts of blockchain?</h3>
          <p>
            Filecoin is the world’s most transparent blockchain when it comes to
            electricity consumption. Check the network’s energy use right now at
            <TextLink href="https://filecoin.energy/">filecoin.energy</TextLink>
            ! <TextLink href="https://green.filecoin.io/">Learn more</TextLink>
            about the Filecoin community’s commitment to energy efficiency.
          </p>
        </article>

        <p>
          Have a question not addressed here?{' '}
          <TextLink href={FILECOIN_FOUNDATION_URLS.publicDataCommons.email}>
            Reach out to us.
          </TextLink>
        </p>
      </section>

      <section>
        <h2>Highlighted Open Data Events</h2>
        <TextLink href={PATHS.EVENTS.path}>View All Events</TextLink>
        <div>
          <h3>Stay Tuned</h3>
          <p>
            More information to come soon on future events, such as the World
            Economic Forum and SXSW in 2023.
          </p>
        </div>
      </section>

      <SectionJoin />
    </>
  )
}
