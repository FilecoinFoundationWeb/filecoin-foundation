import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { X } from '@phosphor-icons/react/dist/ssr'

import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'

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
      className="fixed inset-0 z-50 w-screen overflow-y-auto"
      onClose={() => setIsOpen(false)}
    >
      <div className="flex items-start justify-center p-4">
        <DialogPanel
          transition
          role="alertdialog"
          aria-modal="true"
          className="notification flex w-full max-w-96 gap-3 p-5 transition duration-300 ease-out data-closed:translate-y-[-20%] data-closed:transform-[scale(95%)] data-closed:opacity-0"
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
      </div>
    </Dialog>
  )
}
