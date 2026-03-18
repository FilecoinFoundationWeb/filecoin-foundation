import { CheckIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

type StorageProviderCardKeyFeatureProps = {
  children: string
}

export function StorageProviderCardKeyFeature({
  children,
}: StorageProviderCardKeyFeatureProps) {
  return (
    <div className="flex w-full items-center gap-2.5">
      <Icon component={CheckIcon} color="success" size={16} />
      <div>{children}</div>
    </div>
  )
}
