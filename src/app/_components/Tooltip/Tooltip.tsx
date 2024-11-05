'use client'

import { useId, useState, type ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'
import { clsx } from 'clsx'

import styles from './tooltip.module.scss'

type TooltipRenderProps = {
  open: boolean
  tooltipId: string
}

export type TooltipProps = {
  children: ReactNode | ((props: TooltipRenderProps) => ReactNode)
  description: string
  side?: RadixPopover.PopoverContentProps['side']
}

const GAP_BETWEEN_TOOLTIP_AND_TRIGGER = 0

export function Tooltip({ children, description, side = 'top' }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  const tooltipId = `tooltip-${id}`

  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      <RadixPopover.Trigger asChild>
        {typeof children === 'function'
          ? children({ open, tooltipId })
          : children}
      </RadixPopover.Trigger>

      <RadixPopover.Portal>
        <RadixPopover.Content
          hideWhenDetached
          id={tooltipId}
          sideOffset={GAP_BETWEEN_TOOLTIP_AND_TRIGGER}
          side={side}
          role="tooltip"
          className={clsx(
            'max-w-xs rounded-lg bg-brand-200 px-4 py-3 text-sm leading-tight text-brand-800 focus-visible:outline-none',
            styles['tooltip-animation'],
          )}
        >
          {description}
          <RadixPopover.Arrow className="fill-brand-200" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
