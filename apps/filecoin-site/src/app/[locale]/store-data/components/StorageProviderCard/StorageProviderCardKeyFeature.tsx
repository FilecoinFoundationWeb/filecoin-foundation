import { CheckIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

import { StorageProviderCardText } from './StorageProviderCardText'
export type StorageProviderCardKeyFeatureProps = {
  feature: string
}

export function StorageProviderCardKeyFeature({
  feature,
}: StorageProviderCardKeyFeatureProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon component={CheckIcon} color="success" size={16} />
      <StorageProviderCardText>{feature}</StorageProviderCardText>
    </div>
  )
}
