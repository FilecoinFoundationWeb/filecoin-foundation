import { Fragment } from 'react'

import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from '@headlessui/react'

type SlideOverProps = {
  open: boolean
  setOpen: (open: boolean) => void
  children: React.ReactNode
}

export function SlideOver({ open, setOpen, children }: SlideOverProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500 sm:duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500 sm:duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-lg" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full max-w-[480px]">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
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
