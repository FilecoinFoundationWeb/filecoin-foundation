'use client'

import { useState, type ReactNode } from 'react'

import * as RadixTooltip from '@radix-ui/react-tooltip'

import './Tooltip.css'

type TooltipRenderProps = {
  open: boolean
}

export type TooltipProps = {
  children: ReactNode | ((props: TooltipRenderProps) => ReactNode)
  description: string
  side?: RadixTooltip.TooltipContentProps['side']
}

const GAP_BETWEEN_TOOLTIP_AND_TRIGGER = 0

export function Tooltip({ children, description, side = 'top' }: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={0} open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>
          {typeof children === 'function' ? children({ open }) : children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            hideWhenDetached
            sideOffset={GAP_BETWEEN_TOOLTIP_AND_TRIGGER}
            side={side}
            role="tooltip"
            className="tooltip-base tooltip-content tooltip-animation"
          >
            {description}
            <RadixTooltip.Arrow className="tooltip-arrow" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
