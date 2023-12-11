import CustomLink from '@/components/CustomLink'
import FeaturedCaseStudies from '@/components/FeaturedCaseStudies'
import PageHeader from '@/components/PageHeader'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/ecosystem.md'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo.title, seo.description)

export default function Ecosystem() {
  return (
    <>
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
            <CustomLink href="#">See More</CustomLink>
          </article>

          <article>
            <span>Featured Projects</span>
            <h2>Title</h2>
            <p>Description</p>
            <CustomLink href="#">See More</CustomLink>
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
                  <CustomLink href="#">More</CustomLink>
                </article>

                <article>
                  <h2>Project Name</h2>
                  <span>Topic</span>
                  <p>Project Description</p>
                  <CustomLink href="#">More</CustomLink>
                </article>

                <article>
                  <h2>Project Name</h2>
                  <span>Topic</span>
                  <p>Project Description</p>
                  <CustomLink href="#">More</CustomLink>
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
              If you've developed on Filecoin and don't find your project
              listed, share your details below.
            </p>
            <CustomLink href="#">Submit Your Project</CustomLink>
          </article>

          <article>
            <h2>Elevate your involvement with ecosystem events.</h2>
            <p>
              Engage with Filecoin creators at real-world gatherings worldwide
              to discuss and refine your ideas.
            </p>
            <CustomLink href="#">→</CustomLink>
          </article>

          <article>
            <h2>Connect with Web3 developers..</h2>
            <p>
              Engage with fellow Web3 builders on Filecoin, exchange insights,
              and initiate collaborations on future ventures.
            </p>
            <CustomLink href="#">→</CustomLink>
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
