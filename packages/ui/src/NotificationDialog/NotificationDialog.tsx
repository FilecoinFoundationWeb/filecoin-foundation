import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { X } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

import './NotificationDialog.css'

type NotificationDialogProps = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  title?: string
  icon?: IconProps
}

export function NotificationDialog({
  isOpen,
  setIsOpen,
  title,
  icon,
}: NotificationDialogProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="fixed inset-0 z-50 flex items-start justify-center p-4"
      onClose={() => setIsOpen(false)}
    >
      <DialogPanel
        transition
        role="alertdialog"
        aria-modal="true"
        className={clsx('notification flex w-80 gap-3 p-5 sm:w-96', {
          'animate-slide-in-from-top': isOpen,
          'animate-shrink-and-fade-out': !isOpen,
        })}
      >
        <DialogTitle as="h3" className="flex flex-1 items-center gap-3">
          {icon && <Icon {...icon} />}
          <span>{title}</span>
        </DialogTitle>

        <CloseButton
          className="notification-close-button focus:brand-outline cursor-pointer p-1"
          aria-label="Close notification"
        >
          <Icon component={X} size={16} aria-hidden="true" />
        </CloseButton>
      </DialogPanel>
    </Dialog>
  )
}
