import { Button, type ButtonProps } from '@headlessui/react'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'
import type { DirectionData } from '@filecoin-foundation/utils/constants/paginationLabels'

type PaginationArrowButtonProps = {
  reversed?: boolean
  direction: DirectionData
  disabled: ButtonProps['disabled']
  setPage: () => unknown
}

export function PaginationArrowButton({
  reversed,
  direction,
  disabled,
  setPage,
}: PaginationArrowButtonProps) {
  return (
    <Button
      aria-label={direction.aria}
      disabled={disabled}
      className={clsx(
        'pagination-arrow-button flex items-center gap-x-1.5 p-1 px-2',
        reversed && 'flex-row-reverse',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
      onClick={setPage}
    >
      <Icon component={direction.icon} size={20} weight="regular" />
      <span className="hidden sm:mx-1.5 sm:inline">{direction.cta}</span>
    </Button>
  )
}
