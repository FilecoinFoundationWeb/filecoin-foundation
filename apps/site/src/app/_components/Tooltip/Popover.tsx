'use client'

import { useId, useState, type ReactNode } from 'react'

import * as RadixPopover from '@radix-ui/react-popover'
import { clsx } from 'clsx'

import styles from './tooltip.module.scss'

type PopoverRenderProps = {
  open: boolean
  popoverId: string
}

export type PopoverProps = {
  children: ReactNode | ((props: PopoverRenderProps) => ReactNode)
  description: string
  side?: RadixPopover.PopoverContentProps['side']
}

const GAP_BETWEEN_POPOVER_AND_TRIGGER = 0

export function Popover({ children, description, side = 'top' }: PopoverProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  const popoverId = `popover-${id}`

  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      <RadixPopover.Trigger asChild>
        {typeof children === 'function'
          ? children({ open, popoverId })
          : children}
      </RadixPopover.Trigger>

      <RadixPopover.Portal>
        <RadixPopover.Content
          hideWhenDetached
          id={popoverId}
          sideOffset={GAP_BETWEEN_POPOVER_AND_TRIGGER}
          side={side}
          role="dialog"
          className={clsx(
            styles['tooltip-content'],
            styles['tooltip-animation'],
          )}
        >
          {description}
          <RadixPopover.Arrow className={styles['tooltip-arrow']} />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}
