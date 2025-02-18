'use client'

import { useId, useState, type ReactNode } from 'react'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import { clsx } from 'clsx'

import styles from './tooltip.module.scss'

type TooltipRenderProps = {
  open: boolean
  tooltipId: string
}

export type TooltipProps = {
  children: ReactNode | ((props: TooltipRenderProps) => ReactNode)
  description: string
  side?: RadixTooltip.TooltipContentProps['side']
}

const GAP_BETWEEN_TOOLTIP_AND_TRIGGER = 0

export function Tooltip({ children, description, side = 'top' }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  const tooltipId = `tooltip-${id}`

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={0} open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>
          {typeof children === 'function'
            ? children({ open, tooltipId })
            : children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            hideWhenDetached
            id={tooltipId}
            sideOffset={GAP_BETWEEN_TOOLTIP_AND_TRIGGER}
            side={side}
            role="tooltip"
            className={clsx(
              styles['tooltip-content'],
              styles['tooltip-animation'],
            )}
          >
            {description}
            <RadixTooltip.Arrow className={styles['tooltip-arrow']} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
