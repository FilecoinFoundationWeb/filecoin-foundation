import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

export default function Ecosystem() {
  return (
    <>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
      <PageHeader
        title={title}
        description={description}
        link={{ url: '#', text: 'Submit Your Project' }}
      />

      <div>
        <section>
          <div>Logos</div>
        </section>

        <section>
          <article>
            <span>Featured Projects</span>
            <h2>Title</h2>
            <p>Description</p>
            <TextLink href="#">See More</TextLink>
          </article>

          <article>
            <span>Featured Projects</span>
            <h2>Title</h2>
            <p>Description</p>
            <TextLink href="#">See More</TextLink>
          </article>

          <section>
            <h2>Ecosystem Projects</h2>
            <p>Discover the diverse landscape of Filecoin projects</p>
          </section>

          <section>
            <div>
              <div>FILTERS</div>
            </div>
            <div>
              <div>
                <input type="search" placeholder="Search" />
                <div>Sort</div>
              </div>
              <div>
                <article>
                  <h2>Project Name</h2>
                  <span>Topic</span>
                  <p>Project Description</p>
                  <TextLink href="#">More</TextLink>
                </article>

                <article>
                  <h2>Project Name</h2>
                  <span>Topic</span>
                  <p>Project Description</p>
                  <TextLink href="#">More</TextLink>
                </article>

                <article>
                  <h2>Project Name</h2>
                  <span>Topic</span>
                  <p>Project Description</p>
                  <TextLink href="#">More</TextLink>
                </article>
              </div>
            </div>
          </section>
        </section>

        <section>
          <article>
            <h2>
              Become an integral part of the expanding Filecoin Ecosystem.
            </h2>
            <p>
              If you&apos;ve developed on Filecoin and don&apos;t find your
              project listed, share your details below.
            </p>
            <TextLink href="#">Submit Your Project</TextLink>
          </article>

          <article>
            <h2>Elevate your involvement with ecosystem events.</h2>
            <p>
              Engage with Filecoin creators at real-world gatherings worldwide
              to discuss and refine your ideas.
            </p>
            <TextLink href="#">→</TextLink>
          </article>

          <article>
            <h2>Connect with Web3 developers..</h2>
            <p>
              Engage with fellow Web3 builders on Filecoin, exchange insights,
              and initiate collaborations on future ventures.
            </p>
            <TextLink href="#">→</TextLink>
          </article>
        </section>

        <section>
          <header>
            <h2>Case Studies</h2>
            <p>See the value of public datasets in action.</p>
          </header>

          <FeaturedCaseStudies />
        </section>
      </div>
    </>
  )
}
