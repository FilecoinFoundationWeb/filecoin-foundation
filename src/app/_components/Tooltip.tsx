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
  side?: RadixPopover.PopoverContentProps['side']
}

const animationClasses = {
  bottom: 'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
  left: 'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
  right: 'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
  top: 'data-[state=open]:data-[side=top]:animate-slideDownAndFade',
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
            'max-w-xs rounded-lg bg-brand-200 px-4 py-3 text-sm leading-tight text-brand-800 will-change-[transform,opacity] focus-visible:outline-none',
            animationClasses[side],
          )}
        >
          {description}
          <RadixPopover.Arrow className="fill-brand-200" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
