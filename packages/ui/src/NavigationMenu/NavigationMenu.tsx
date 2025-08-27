'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { CaretDownIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'

type PopOverProps = {
  label: string
  labelClassName?: string
  as: React.ElementType
  children: React.ReactElement
  isCurrent?: boolean
}

const SPACE_BETWEEN_PANEL_AND_BUTTON = 24
const SPACE_BETWEEN_PANEL_AND_VIEWPORT = 8

export function NavigationMenu({
  as,
  label,
  labelClassName,
  isCurrent,
  children,
}: PopOverProps) {
  return (
    <Popover as={as}>
      <PopoverButton
        aria-label={`${label} (opens a navigation menu)`}
        className={clsx('group', labelClassName)}
        {...(isCurrent && { 'aria-current': 'true' })}
      >
        <span>{label}</span>
        <span className="transition-transform group-data-open:rotate-180">
          <Icon component={CaretDownIcon} size={20} />
        </span>
      </PopoverButton>
      <PopoverPanel
        transition
        className="z-10 transition duration-200 ease-out data-closed:translate-y-1 data-closed:opacity-0 data-open:translate-y-0 data-open:opacity-100"
        anchor={{
          to: 'bottom',
          gap: SPACE_BETWEEN_PANEL_AND_BUTTON,
          padding: SPACE_BETWEEN_PANEL_AND_VIEWPORT,
        }}
      >
        {(props) => (
          <div
            className="navigation-menu-panel"
            onClick={(e) => {
              e.stopPropagation()
              props.close()
            }}
          >
            {children}
          </div>
        )}
      </PopoverPanel>
    </Popover>
  )
}
