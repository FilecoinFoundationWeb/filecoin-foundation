import { useState } from 'react'

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
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

const EXIT_ANIMATION_DURATION_MS = 1000

export function NotificationDialog({
  isOpen,
  setIsOpen,
  status,
}: NotificationDialogProps) {
  const [isExiting, setIsExiting] = useState(isOpen)

  const { title = '', icon = null } = status ? dialogStatus[status] : {}

  function handleClose() {
    setIsExiting(true)
    setIsOpen(false)
    setTimeout(function () {
      setIsExiting(false)
    }, EXIT_ANIMATION_DURATION_MS)
  }

  return (
    <Transition show={isOpen || isExiting} as="div" unmount={false}>
      <Dialog
        open={isOpen}
        className="fixed inset-0 z-50 flex items-start justify-center p-4"
        onClose={handleClose}
      >
        <TransitionChild
          as="div"
          className={`transition ${
            !isOpen && isExiting
              ? 'animate-shrink-and-fade-out'
              : 'animate-slide-in-from-top'
          }`}
        >
          <div className="w-fit rounded-lg border border-brand-100 border-opacity-20 bg-brand-800 p-5">
            <DialogPanel className="flex gap-3">
              <DialogTitle className="flex flex-1 items-center gap-3 text-brand-100">
                {icon}
                {title}
              </DialogTitle>
              <button
                className="text-brand-200  hover:text-brand-400"
                onClick={handleClose}
              >
                <Icon component={X} size={16} />
              </button>
            </DialogPanel>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  )
}
