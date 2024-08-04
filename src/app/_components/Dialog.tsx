import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import { X } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

export type StatusType = 'success' | 'warning' | null

type DialogComponentProps = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  status: StatusType
}

const dialogStatus = {
  success: {
    title: 'Check your email',
    icon: <Icon component={CheckCircle} color="success" />,
  },
  warning: {
    title: 'Something went wrong',
    icon: <Icon component={XCircle} color="warning" />,
  },
}

export default function DialogComponent({
  isOpen,
  setIsOpen,
  status,
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
            {status && dialogStatus[status].icon}
            {status && dialogStatus[status].title}
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
