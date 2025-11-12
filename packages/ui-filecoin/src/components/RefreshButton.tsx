import type { ComponentProps } from 'react'

import { ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr'

import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

type RefreshButtonProps = Pick<
  ComponentProps<typeof Button>,
  'onClick' | 'disabled'
> & {
  baseDomain: string
}

export function RefreshButton({ baseDomain, ...props }: RefreshButtonProps) {
  return (
    <Button variant="tertiary" {...props} baseDomain={baseDomain}>
      <span className="flex items-center gap-2">
        <Icon component={ArrowClockwiseIcon} size={20} />
        Refresh
      </span>
    </Button>
  )
}
