import { Heading } from '@filecoin-foundation/filecoin-ui/Heading'

type StorageProviderCardSectionProps = {
  title: string
  children: React.ReactNode
}

export function StorageProviderCardSection({
  title,
  children,
}: StorageProviderCardSectionProps) {
  return (
    <div className="space-y-4">
      <Heading tag="h4" className="font-medium">
        {title}
      </Heading>
      {children}
    </div>
  )
}
