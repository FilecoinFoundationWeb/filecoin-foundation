import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import { X } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

export type StatusType = 'success' | 'warning'

type NotificationDialogProps = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  status?: StatusType
}

const dialogStatus = {
  success: {
    title: 'Successfully subscribed!',
    icon: <Icon component={CheckCircle} color="green-400" />,
  },
  warning: {
    title: 'An error has occurred. Please try again.',
    icon: <Icon component={XCircle} color="red-400" />,
  },
}

export function NotificationDialog({
  isOpen,
  setIsOpen,
  status,
}: NotificationDialogProps) {
  const { title = '', icon = null } = status ? dialogStatus[status] : {}

  return (
    <Dialog
      transition
      open={isOpen}
      className="data-[closed]:animate-leave data-[open]:animate-slide-in-from-top fixed inset-0 z-50 flex items-start justify-center p-4"
      onClose={() => setIsOpen(false)}
    >
      <div className="w-fit rounded-lg border border-brand-100 border-opacity-20 bg-brand-800 p-5">
        <DialogPanel className="flex gap-3">
          <DialogTitle className="flex flex-1 items-center gap-3 text-brand-100">
            {icon}
            {title}
          </DialogTitle>
          <button
            className="hover:text-brand-400"
            onClick={() => setIsOpen(false)}
          >
            <Icon inheritHoverStyle component={X} color="brand-200" />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
