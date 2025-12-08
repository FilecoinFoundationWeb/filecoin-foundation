import { CheckIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

import { StorageProviderCardText } from './StorageProviderCardText'

type StorageProviderCardKeyFeatureProps = {
  children: string
}

export function StorageProviderCardKeyFeature({
  children,
}: StorageProviderCardKeyFeatureProps) {
  return (
    <div className="flex w-full items-center gap-2.5">
      <Icon component={CheckIcon} color="success" size={16} />
      <StorageProviderCardText>{children}</StorageProviderCardText>
    </div>
  )
}
