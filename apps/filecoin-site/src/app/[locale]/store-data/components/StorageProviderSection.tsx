import { CardGrid } from '@filecoin-foundation/ui-filecoin/CardGrid'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

import { SectionDivider } from '@/components/SectionDivider'

import {
  StorageProviderCard,
  type StorageProviderCardProps,
} from './StorageProviderCard/StorageProviderCard'

type StorageProviderSectionProps = {
  title: string
  providers: Array<Omit<StorageProviderCardProps, 'as'>>
}

export function StorageProviderSection({
  title,
  providers,
}: StorageProviderSectionProps) {
  return (
    <>
      <SectionDivider />

      <Heading tag="h4" className="text-4xl font-medium">
        {title}
      </Heading>

      <CardGrid as="ul" variant="mdTwoLgThreeWide">
        {providers
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((provider) => (
            <StorageProviderCard key={provider.name} as="li" {...provider} />
          ))}
      </CardGrid>
    </>
  )
}
