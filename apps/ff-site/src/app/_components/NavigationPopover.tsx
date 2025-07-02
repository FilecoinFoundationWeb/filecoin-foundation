'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { CaretDownIcon } from '@phosphor-icons/react'

import { Icon } from '@filecoin-foundation/ui/Icon'

type PopOverProps = {
  label: string
  mainNavItemStyles: string
  as: React.ElementType
  children: React.ReactElement
}

const SPACE_BETWEEN_PANEL_AND_BUTTON = 24
const SPACE_BETWEEN_PANEL_AND_VIEWPORT = 8

export function NavigationPopover({
  label,
  mainNavItemStyles,
  as,
  children,
}: PopOverProps) {
  return (
    <Popover as={as}>
      <PopoverButton
        aria-label={`${label} (opens a navigation menu)`}
        className={mainNavItemStyles}
      >
        <span>{label}</span>
        <span className="ui-open:rotate-180 transition-transform">
          <Icon component={CaretDownIcon} size={20} color="subtle" />
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
            className="border-brand-500 bg-brand-800 overflow-hidden rounded-2xl border p-4"
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
