import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  type DialogProps,
} from '@headlessui/react'
import { XIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

type NotificationDialogProps = {
  message: string
  isOpen: DialogProps['open']
  onClose: DialogProps['onClose']
  icon?: IconProps
}

const TOUCH_TARGET = {
  touchAreaPadding: 'p-4',
  touchAreaOffset: '-m-4',
} as const satisfies TouchTarget

export function NotificationDialog({
  isOpen,
  onClose,
  message,
  icon,
}: NotificationDialogProps) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="fixed inset-0 z-50 w-screen overflow-y-auto"
      onClose={onClose}
    >
      <div className="flex items-start justify-center p-4">
        <DialogPanel
          transition
          role="alertdialog"
          aria-modal="true"
          className="notification flex w-full max-w-96 items-center gap-3 p-5 transition duration-300 ease-out data-closed:translate-y-[-20%] data-closed:transform-[scale(95%)] data-closed:opacity-0"
        >
          <DialogTitle as="h3" className="flex flex-1 items-center gap-3">
            {icon && <Icon {...icon} />}
            <span>{message}</span>
          </DialogTitle>

          <CloseButton
            className={clsx(
              'notification-close-button focus:brand-outline cursor-pointer',
              TOUCH_TARGET.touchAreaPadding,
              TOUCH_TARGET.touchAreaOffset,
            )}
            aria-label="Close notification"
          >
            <Icon component={XIcon} size={16} aria-hidden="true" />
          </CloseButton>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
