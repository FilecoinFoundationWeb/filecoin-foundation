import { CheckIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/filecoin-ui/Icon'

export type StorageProviderCardKeyFeatureProps = {
  feature: string
}

export function StorageProviderCardKeyFeature({
  feature,
}: StorageProviderCardKeyFeatureProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon component={CheckIcon} color="success" size={16} />
      <span className="text-sm text-zinc-950">{feature}</span>
    </div>
  )
}
