'use client'

import { cloneElement, Fragment } from 'react'

import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'

import { Icon } from '@/components/Icon'

type PopOverProps = {
  label: string
  mainNavItemStyles: string
  as: React.ElementType
  children: React.ReactElement
}

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
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute right-0 z-10 mt-6 xl:-right-6">
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
      </Transition>
    </Popover>
  )
}
