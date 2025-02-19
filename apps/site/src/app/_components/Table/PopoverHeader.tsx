import { Button } from '@headlessui/react'
import { Question } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import type { TouchTarget } from '@/types/touchTargetType'

import { Icon } from '@/components/Icon'
import { Popover, type PopoverProps } from '@/components/Tooltip/Popover'

type TableHeaderWithPopoverProps = {
  title: string
  description: PopoverProps['description']
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-2',
}

const TOUCH_TARGET_ICON: TouchTarget & { visibleElementSize: number } = {
  visibleElementSize: 20,
  touchAreaPadding: 'p-1.5',
}

export function PopoverHeader({
  title,
  description,
}: TableHeaderWithPopoverProps) {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <Popover description={description}>
        {({ open }) => (
          <Button
            aria-label={`More info on ${title}`}
            className={clsx(
              'group focus-visible:brand-outline',
              TOUCH_TARGET.touchAreaPadding,
              TOUCH_TARGET.touchAreaOffset,
            )}
          >
            <span
              className={clsx(
                TOUCH_TARGET_ICON.touchAreaPadding,
                'flex items-center justify-center rounded-full transition ease-in-out',
                open
                  ? 'bg-brand-600/70 text-brand-200'
                  : 'text-brand-400 group-hover:bg-brand-700 group-hover:text-brand-300',
              )}
            >
              <Icon
                component={Question}
                size={TOUCH_TARGET_ICON.visibleElementSize}
              />
            </span>
          </Button>
        )}
      </Popover>
    </div>
  )
}
