'use client'

import { BookOpenIcon } from '@phosphor-icons/react'

import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

export function ButtonShowcase() {
  return (
    <PageSection backgroundVariant="light">
      <SectionContent
        centerTitle
        headingTag="h1"
        title="Button Styles Showcase"
      >
        <div className="space-y-12">
          {/* Light Section */}
          <div className="light-section rounded-lg border border-zinc-200 bg-white p-8">
            <h3 className="mb-8 text-lg font-semibold text-zinc-950">
              Light Section
            </h3>

            <div className="space-y-6">
              {/* Primary Button */}
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-600">
                  Primary Button
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Default</Button>
                  <Button variant="primary" href="www.filecoin.org">
                    Default with link out
                  </Button>
                  <Button variant="primary" icon={BookOpenIcon}>
                    Default with icon
                  </Button>
                  <Button disabled variant="primary">
                    Disabled
                  </Button>
                  <Button disabled variant="primary" icon={BookOpenIcon}>
                    Disabled with icon
                  </Button>
                  <Button disabled variant="primary" href="www.filecoin.org">
                    Disabled with link out
                  </Button>
                </div>
              </div>

              {/* Ghost Button */}
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-600">
                  Ghost Button
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="ghost">Default</Button>
                  <Button variant="ghost" href="www.filecoin.org">
                    Default with link out
                  </Button>
                  <Button variant="ghost" icon={BookOpenIcon}>
                    Default with icon
                  </Button>
                  <Button disabled variant="ghost">
                    Disabled
                  </Button>
                  <Button disabled variant="ghost" icon={BookOpenIcon}>
                    Disabled with icon
                  </Button>
                  <Button disabled variant="ghost" href="www.filecoin.org">
                    Disabled with link out
                  </Button>
                </div>
              </div>

              {/* Tertiary Button */}
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-600">
                  Tertiary Button
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="tertiary">Default</Button>
                  <Button variant="tertiary" href="www.filecoin.org">
                    Default with link out
                  </Button>
                  <Button variant="tertiary" icon={BookOpenIcon}>
                    Default with icon
                  </Button>
                  <Button disabled variant="tertiary">
                    Disabled
                  </Button>
                  <Button disabled variant="tertiary" icon={BookOpenIcon}>
                    Disabled with icon
                  </Button>
                  <Button disabled variant="tertiary" href="www.filecoin.org">
                    Disabled with link out
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Section */}
          <div className="dark-section rounded-lg bg-zinc-900 p-8">
            <h3 className="mb-8 text-lg font-semibold text-zinc-50">
              Dark Section
            </h3>

            <div className="space-y-6">
              {/* Primary Button */}
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-400">
                  Primary Button
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Default</Button>
                  <Button variant="primary" href="www.filecoin.org">
                    Default with link out
                  </Button>
                  <Button variant="primary" icon={BookOpenIcon}>
                    Default with icon
                  </Button>
                  <Button disabled variant="primary">
                    Disabled
                  </Button>
                  <Button disabled variant="primary" icon={BookOpenIcon}>
                    Disabled with icon
                  </Button>
                  <Button disabled variant="primary" href="www.filecoin.org">
                    Disabled with link out
                  </Button>
                </div>
              </div>

              {/* Ghost Button */}
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-400">
                  Ghost Button
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="ghost">Default</Button>
                  <Button variant="ghost" href="www.filecoin.org">
                    Default with link out
                  </Button>
                  <Button variant="ghost" icon={BookOpenIcon}>
                    Default with icon
                  </Button>
                  <Button disabled variant="ghost">
                    Disabled
                  </Button>
                  <Button disabled variant="ghost" icon={BookOpenIcon}>
                    Disabled with icon
                  </Button>
                  <Button disabled variant="ghost" href="www.filecoin.org">
                    Disabled with link out
                  </Button>
                </div>
              </div>

              {/* Tertiary Button */}
              <div>
                <p className="mb-3 text-sm font-medium text-zinc-400">
                  Tertiary Button
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="tertiary">Default</Button>
                  <Button variant="tertiary" href="www.filecoin.org">
                    Default with link out
                  </Button>
                  <Button variant="tertiary" icon={BookOpenIcon}>
                    Default with icon
                  </Button>
                  <Button disabled variant="tertiary">
                    Disabled
                  </Button>
                  <Button disabled variant="tertiary" icon={BookOpenIcon}>
                    Disabled with icon
                  </Button>
                  <Button disabled variant="tertiary" href="www.filecoin.org">
                    Disabled with link out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </PageSection>
  )
}
