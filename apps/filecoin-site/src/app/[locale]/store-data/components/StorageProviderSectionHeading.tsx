import {
  Heading,
  type HeadingProps,
} from '@filecoin-foundation/ui-filecoin/Heading'

type StorageProviderSectionHeadingProps = {
  children: HeadingProps['children']
}

export function StorageProviderSectionHeading({
  children,
}: StorageProviderSectionHeadingProps) {
  return (
    <Heading tag="h4" className="text-4xl font-medium">
      {children}
    </Heading>
  )
}
