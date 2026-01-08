import { NetworkSelector } from '@filecoin-foundation/ui-filecoin/Network/NetworkSelector'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

export function NetworkSelectorShowcase() {
  return (
    <PageSection backgroundVariant="light">
      <SectionContent
        centerTitle
        headingTag="h1"
        title="Network Selector Showcase"
      >
        <div className="max-w-md">
          <NetworkSelector />
        </div>
      </SectionContent>
    </PageSection>
  )
}
