import { Fragment } from 'react'

import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  Transition,
  TransitionChild,
  type DialogProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

type SlideOverProps = {
  open: DialogProps['open']
  setOpen: DialogProps['onClose']
  children: React.ReactNode
  slideFrom?: keyof typeof slideFromStyles
}

const slideFromStyles = {
  right: {
    startingPosition: 'right-0',
    openPosition: 'translate-x-0',
    closedPosition: 'translate-x-full',
  },
  left: {
    startingPosition: 'left-0',
    openPosition: 'translate-x-0',
    closedPosition: '-translate-x-full',
  },
} as const

const animationStyles = 'transition ease-in-out duration-500 sm:duration-700'

export function SlideOver({
  open,
  setOpen,
  children,
  slideFrom = 'right',
}: SlideOverProps) {
  const { startingPosition, openPosition, closedPosition } =
    slideFromStyles[slideFrom]

  return (
    <Transition show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter={animationStyles}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave={animationStyles}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 backdrop-blur-lg" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={clsx(
                'pointer-events-none fixed inset-y-0 flex w-full max-w-[480px]',
                startingPosition,
              )}
            >
              <TransitionChild
                as={Fragment}
                enter={clsx('transform', animationStyles)}
                leave={clsx('transform', animationStyles)}
                enterFrom={closedPosition}
                enterTo={openPosition}
                leaveFrom={openPosition}
                leaveTo={closedPosition}
              >
                <DialogPanel className="pointer-events-auto w-full">
                  <div className="flex h-full flex-col overflow-y-scroll bg-brand-800">
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
