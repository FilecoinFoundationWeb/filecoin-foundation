import { Button } from '@headlessui/react'
import { Question } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { ClickTooltip, type ClickTooltipProps } from '@/components/ClickTooltip'
import { Icon } from '@/components/Icon'

type TableHeaderWithTooltipProps = {
  header: string
  description: ClickTooltipProps['description']
}

const touchTarget = {
  iconSize: 20,
  iconWrapperPadding: 'p-1.5',
  class: 'p-2',
  offsetClass: '-m-2',
}

export function TableHeaderWithTooltip({
  header,
  description,
}: TableHeaderWithTooltipProps) {
  return (
    <div className="flex items-center gap-1">
      <span>{header}</span>
      <ClickTooltip description={description} gap={0}>
        {({ open, tooltipId }) => (
          <Button
            aria-label={`Help information about ${header} (click to open)`}
            aria-describedby={tooltipId}
            className={clsx(
              'group focus-visible:brand-outline',
              touchTarget.class,
              touchTarget.offsetClass,
            )}
          >
            <span
              className={clsx(
                touchTarget.iconWrapperPadding,
                'flex items-center justify-center rounded-full transition ease-in-out',
                open
                  ? 'bg-brand-600/70 text-brand-200'
                  : 'text-brand-400 group-hover:bg-brand-700 group-hover:text-brand-300',
              )}
            >
              <Icon component={Question} size={touchTarget.iconSize} />
            </span>
          </Button>
        )}
      </ClickTooltip>
    </div>
  )
}
