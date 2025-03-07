'use client'

import { useState, useEffect, useCallback } from 'react'

import { useUpdateSearchParams } from '@filecoin-foundation/hooks/useUpdateSearchParams'
import { NotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { NOTIFICATION_DIALOG_ERROR_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'
import { XCircle } from '@phosphor-icons/react'

type ErrorMessageProps = {
  message: string
}

export function ErrorNotification({ message }: ErrorMessageProps) {
  const [isOpen, setIsOpen] = useState(true)

  const { resetSearchParams } = useUpdateSearchParams()

  const handleOpen = useCallback(
    (isOpen: boolean) => {
      setIsOpen(isOpen)

      if (isOpen === false) {
        resetSearchParams()
      }
    },
    [resetSearchParams],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleOpen(false)
    }, NOTIFICATION_DIALOG_ERROR_DURATION_MS)

    return () => clearTimeout(timeoutId)
  }, [handleOpen])

  return (
    <NotificationDialog
      isOpen={isOpen}
      title={message}
      icon={{ component: XCircle, color: 'error' }}
      setIsOpen={handleOpen}
    />
  )
}
