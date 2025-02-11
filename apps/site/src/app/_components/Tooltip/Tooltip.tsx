'use client'

import { useId, useState, type ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'

import './Tooltip.css'

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
          className="bg-brand-200 text-brand-800 tooltip-animation max-w-xs rounded-lg px-4 py-3 text-sm leading-tight focus-visible:outline-hidden"
        >
          {description}
          <RadixPopover.Arrow className="fill-brand-200" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
