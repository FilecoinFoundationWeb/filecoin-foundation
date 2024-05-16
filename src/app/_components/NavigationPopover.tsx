'use client'

import { cloneElement, Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'

import { Icon } from '@/components/Icon'

type PopOverProps = {
  label: string
  mainNavItemStyles: string
  as: React.ElementType
  children: React.ReactElement
}

const TransitionProps = {
  enter: 'transition ease-out duration-200',
  enterFrom: 'opacity-0 translate-y-1',
  enterTo: 'opacity-100 translate-y-0',
  leave: 'transition ease-in duration-150',
  leaveFrom: 'opacity-100 translate-y-0',
  leaveTo: 'opacity-0 translate-y-1',
}

export function NavigationPopover({
  label,
  mainNavItemStyles,
  as,
  children,
}: PopOverProps) {
  return (
    <Popover as={as}>
      <Popover.Button
        aria-label={`${label} (opens a navigation menu)`}
        className={mainNavItemStyles}
      >
        <span>{label}</span>
        <span className="transition-transform ui-open:rotate-180">
          <Icon component={CaretDown} size={20} color="brand-400" />
        </span>
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 -z-10" />
      <Transition as={Fragment} {...TransitionProps}>
        <Popover.Panel className="absolute right-0 z-10 mt-6 xl:-right-6">
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
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
