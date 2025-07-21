import { CheckIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui/Icon'

export type CardKeyFeatureProps = {
  feature: string
}

export function CardKeyFeature({ feature }: CardKeyFeatureProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon component={CheckIcon} color="success" size={16} />
      <span className="text-sm text-zinc-950">{feature}</span>
    </div>
  )
}
