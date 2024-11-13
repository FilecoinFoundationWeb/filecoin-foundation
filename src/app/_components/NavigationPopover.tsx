'use client'

import { cloneElement } from 'react'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'

import { Icon } from '@/components/Icon'

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
        <span className="transition-transform ui-open:rotate-180">
          <Icon component={CaretDown} size={20} color="brand-400" />
        </span>
      </PopoverButton>

      <PopoverPanel
        transition
        className="z-10 transition duration-200 ease-out data-[closed]:translate-y-1 data-[open]:translate-y-0 data-[closed]:opacity-0 data-[open]:opacity-100"
        anchor={{
          to: 'bottom',
          gap: SPACE_BETWEEN_PANEL_AND_BUTTON,
          padding: SPACE_BETWEEN_PANEL_AND_VIEWPORT,
        }}
      >
        {(props) => {
          const clonedChildren = cloneElement(children, {
            onClick: function closeOnClickWithin() {
              props.close()
            },
          })

          return (
            <div className="overflow-hidden rounded-2xl border border-brand-500 bg-brand-800 p-4">
              {clonedChildren}
            </div>
          )
        }}
      </PopoverPanel>
    </Popover>
  )
}
