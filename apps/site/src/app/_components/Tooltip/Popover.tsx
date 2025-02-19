'use client'

import { useState, type ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'

import './Tooltip.css'

type PopoverRenderProps = {
  open: boolean
}

export type PopoverProps = {
  children: ReactNode | ((props: PopoverRenderProps) => ReactNode)
  description: string
  side?: RadixPopover.PopoverContentProps['side']
}

const GAP_BETWEEN_POPOVER_AND_TRIGGER = 0

export function Popover({ children, description, side = 'top' }: PopoverProps) {
  const [open, setOpen] = useState(false)

  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      <RadixPopover.Trigger asChild>
        {typeof children === 'function' ? children({ open }) : children}
      </RadixPopover.Trigger>

      <RadixPopover.Portal>
        <RadixPopover.Content
          hideWhenDetached
          sideOffset={GAP_BETWEEN_POPOVER_AND_TRIGGER}
          side={side}
          className="tooltip-content tooltip-animation"
        >
          {description}
          <RadixPopover.Arrow className="tooltip-arrow" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
