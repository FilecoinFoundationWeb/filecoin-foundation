import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircle } from '@phosphor-icons/react'
import { X } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

type DialogComponentProps = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
}

export default function DialogComponent({
  isOpen,
  setIsOpen,
}: DialogComponentProps) {
  return (
    <Dialog
      open={isOpen}
      className={`${isOpen ? 'animate-slide-in-from-top' : 'animate-leave'} fixed inset-0 z-50 flex items-start justify-center p-4`}
      onClose={() => setIsOpen(false)}
    >
      <div className="w-96 rounded-lg border border-brand-100 border-opacity-20 bg-brand-800 p-5">
        <DialogPanel className="flex">
          <DialogTitle className="flex flex-1 gap-3 text-brand-100">
            <Icon component={CheckCircle} color="green-400" />
            Check your email
          </DialogTitle>
          <button
            className="hover:text-brand-400"
            onClick={() => setIsOpen(false)}
          >
            <Icon component={X} color="brand-200" hoverStyle="inherit" />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
