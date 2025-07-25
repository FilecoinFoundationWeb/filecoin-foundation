import { Button, type ButtonProps } from '@headlessui/react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'

type PaginationArrowButtonProps = {
  to: keyof typeof DIRECTIONS
  disabled: ButtonProps['disabled']
  pageSetter: (value: number | ((oldValue: number) => number)) => unknown
}

const DIRECTIONS = {
  prev: { aria: 'Go to previous page', cta: 'Prev', icon: CaretLeftIcon },
  next: { aria: 'Go to next page', cta: 'Next', icon: CaretRightIcon },
}

export function PaginationArrowButton({
  to,
  disabled,
  pageSetter,
}: PaginationArrowButtonProps) {
  const direction = DIRECTIONS[to]

  return (
    <Button
      aria-label={direction.aria}
      disabled={disabled}
      className={clsx(
        'pagination-arrow-button flex items-center gap-x-1.5 p-1 px-2',
        to === 'next' && 'flex-row-reverse',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
      onClick={() =>
        pageSetter((currentPage) => {
          switch (to) {
            case 'prev':
              return currentPage - 1
            case 'next':
              return currentPage + 1
            default:
              throw new Error(`Unknown direction: ${to}`)
          }
        })
      }
    >
      <Icon component={direction.icon} size={20} weight="regular" />

      <span className="hidden sm:mx-1.5 sm:inline">{direction.cta}</span>
    </Button>
  )
}
