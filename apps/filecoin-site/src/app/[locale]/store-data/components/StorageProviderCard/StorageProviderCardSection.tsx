import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

type StorageProviderCardSectionProps = {
  title: string
  content: React.ReactNode
}

export function StorageProviderCardSection({
  title,
  content,
}: StorageProviderCardSectionProps) {
  return (
    <div className="space-y-4">
      <Heading tag="h4" className="font-medium">
        {title}
      </Heading>
      <div className="text-sm">{content}</div>
    </div>
  )
}
