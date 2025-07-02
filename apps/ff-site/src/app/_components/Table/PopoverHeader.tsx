import { Button } from '@headlessui/react'
import { QuestionIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'
import {
  Popover,
  type PopoverProps,
} from '@filecoin-foundation/ui/Tooltip/Popover'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

type TableHeaderWithPopoverProps = {
  title: string
  description: PopoverProps['description']
}

const TOUCH_TARGET = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-2',
} as const satisfies TouchTarget

const TOUCH_TARGET_ICON = {
  visibleElementSize: 20,
  touchAreaPadding: 'p-1.5',
} as const satisfies TouchTarget

export function PopoverHeader({
  title,
  description,
}: TableHeaderWithPopoverProps) {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <Popover description={description}>
        {({ open, popoverId }) => (
          <Button
            aria-label={`More info on ${title}`}
            aria-describedby={popoverId}
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
                component={QuestionIcon}
                size={TOUCH_TARGET_ICON.visibleElementSize}
              />
            </span>
          </Button>
        )}
      </Popover>
    </div>
  )
}
