import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { X } from '@phosphor-icons/react/dist/ssr'

import { Icon, IconProps } from '@/components/Icon'

type NotificationDialogProps = {
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
  title?: string
  icon?: IconProps['component']
  iconColor?: IconProps['color']
}

export function NotificationDialog({
  isOpen,
  setIsOpen,
  title,
  icon,
  iconColor,
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
        className="data-[closed]:transform-[scale(95%)] flex w-80 gap-3 rounded-lg border border-brand-100 border-opacity-20 bg-brand-800 p-5 duration-300 ease-out data-[open]:animate-slide-in-from-top data-[closed]:opacity-0 sm:w-96"
      >
        <DialogTitle
          as="h3"
          className="flex flex-1 items-center gap-3 text-brand-100"
        >
          {icon && <Icon component={icon} color={iconColor} />}
          {title}
        </DialogTitle>

        <CloseButton className="rounded-md p-1 text-brand-200 focus:brand-outline hover:text-brand-400">
          <Icon component={X} size={16} />
        </CloseButton>
      </DialogPanel>
    </Dialog>
  )
}
