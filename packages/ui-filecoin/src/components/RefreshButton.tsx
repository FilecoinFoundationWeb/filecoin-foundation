import { ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr'

import { Button, type ButtonProps } from './Button'
import { Icon } from './Icon'

export type RefreshButtonProps = Omit<ButtonProps, 'variant' | 'children'>

export function RefreshButton({ ...props }: RefreshButtonProps) {
  return (
    <Button variant="tertiary" {...props}>
      <span className="flex items-center gap-2">
        <Icon component={ArrowClockwiseIcon} size={20} />
        Refresh
      </span>
    </Button>
  )
}
