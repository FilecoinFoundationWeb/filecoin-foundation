import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { Card } from '@/components/Card'
import Header from '@/components/Header'

import { homepageCards, otherResources } from './data/homepage'

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <CardGrid as="section" cols="mdTwo">
        {homepageCards.map(({ title, description, cta }) => (
          <Card
            key={title.text}
            as="div"
            title={title}
            description={description}
            cta={cta}
          />
        ))}
      </CardGrid>

      <section className="flex flex-col gap-6">
        <Heading tag="h3" variant="lg">
          Other Resources
        </Heading>
        <div className="grid auto-cols-max gap-4">
          {otherResources.map(({ href, children }) => (
            <ExternalTextLink key={href} href={href}>
              {children}
            </ExternalTextLink>
          ))}
        </div>
      </section>
    </div>
  )
}
