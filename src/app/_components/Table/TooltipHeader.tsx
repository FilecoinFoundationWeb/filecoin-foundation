import { Button } from '@headlessui/react'
import { Question } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import type { TouchTarget } from '@/types/touchTargetType'

import { Icon } from '@/components/Icon'
import { Tooltip, type TooltipProps } from '@/components/Tooltip/Tooltip'

type TableHeaderWithTooltipProps = {
  title: string
  description: TooltipProps['description']
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
  touchAreaOffset: '-m-2',
}

const TOUCH_TARGET_ICON: TouchTarget = {
  touchAreaPadding: 'p-1.5',
}

export function TooltipHeader({
  title,
  description,
}: TableHeaderWithTooltipProps) {
  return (
    <div className="flex items-center gap-1">
      <span>{title}</span>
      <Tooltip description={description}>
        {({ open, tooltipId }) => (
          <Button
            aria-label={`More info on ${title}`}
            aria-describedby={tooltipId}
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
              <Icon component={Question} size={20} />
            </span>
          </Button>
        )}
      </Tooltip>
    </div>
  )
}
