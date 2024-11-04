'use client'

import { useId, useState, type ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'
import { clsx } from 'clsx'

type TooltipRenderProps = {
  open: boolean
  tooltipId: string
}

export type TooltipProps = {
  children: ReactNode | ((props: TooltipRenderProps) => ReactNode)
  description: string
  gap?: RadixPopover.PopoverContentProps['sideOffset']
  side?: RadixPopover.PopoverContentProps['side']
}

const animationClasses = {
  bottom: 'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
  left: 'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  right: 'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
  top: 'data-[state=open]:data-[side=top]:animate-slideDownAndFade',
}

export function Tooltip({
  children,
  description,
  gap = 8,
  side = 'top',
}: TooltipProps) {
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
          sideOffset={gap}
          side={side}
          role="tooltip"
          className={clsx(
            'tooltip-content focus-visible:outline-none',
            animationClasses[side],
          )}
        >
          {description}
          <RadixPopover.Arrow className="tooltip-arrow" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
