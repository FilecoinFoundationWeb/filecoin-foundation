import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { X } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon, IconProps } from '@/components/Icon'

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
        className={clsx(
          'flex w-80 gap-3 rounded-lg border border-brand-100 border-opacity-20 bg-brand-800 p-5 sm:w-96',
          {
            'animate-slide-in-from-top': isOpen,
            'animate-shrink-and-fade-out': !isOpen,
          },
        )}
      >
        <DialogTitle
          as="h3"
          className="flex flex-1 items-center gap-3 text-brand-100"
        >
          {icon && <Icon {...icon} />}
          {title}
        </DialogTitle>

        <CloseButton className="rounded-md p-1 text-brand-200 focus:brand-outline hover:text-brand-400">
          <Icon component={X} size={16} />
        </CloseButton>
      </DialogPanel>
    </Dialog>
  )
}
