import { Button } from '@headlessui/react'
import { Question } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { getTouchTargetStyles } from '@/utils/getTouchTargetStyles'

import { Icon } from '@/components/Icon'
import { Tooltip, type TooltipProps } from '@/components/Tooltip/Tooltip'

type TableHeaderWithTooltipProps = {
  title: string
  description: TooltipProps['description']
}

const { touchAreaOffset, touchAreaPadding } =
  getTouchTargetStyles('tooltipHeader')

const { touchAreaPadding: iconTouchAreaPadding } =
  getTouchTargetStyles('tooltipHeaderIcon')

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
              touchAreaPadding,
              touchAreaOffset,
            )}
          >
            <span
              className={clsx(
                iconTouchAreaPadding,
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
