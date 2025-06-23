import { useState, useEffect, useCallback } from 'react'

import type { IconProps } from '@filecoin-foundation/ui/Icon'
import { NOTIFICATION_DIALOG_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'

type UseNotificationDialogArgs = {
  init?: 'open' | 'closed'
  message?: string
  icon?: IconProps
  duration?: number
  onClose?: () => void
}

type OpenArgs = Pick<UseNotificationDialogArgs, 'message' | 'duration' | 'icon'>

export function useNotificationDialog({
  init = 'closed',
  onClose,
  ...rest
}: UseNotificationDialogArgs = {}) {
  const [dialog, setDialog] = useState({
    isOpen: init === 'open',
    message: rest.message || '',
    icon: rest.icon,
    duration: rest.duration || NOTIFICATION_DIALOG_DURATION_MS,
  })

  const close = useCallback(() => {
    setDialog((prevState) => ({ ...prevState, isOpen: false }))
    onClose?.()
  }, [onClose])

  const open = useCallback(({ message, duration, icon }: OpenArgs = {}) => {
    setDialog((prevState) => ({
      ...prevState,
      ...(message && { message }),
      ...(duration && { duration }),
      ...(icon && { icon }),
      isOpen: true,
    }))
  }, [])

  useEffect(() => {
    if (dialog.isOpen) {
      const timeoutId = setTimeout(close, dialog.duration)
      return () => clearTimeout(timeoutId)
    }
  }, [dialog.isOpen, dialog.duration, close])

  return {
    isOpen: dialog.isOpen,
    message: dialog.message,
    icon: dialog.icon,
    open,
    close,
  }
}
