'use client'

import { useState, useEffect, useCallback } from 'react'

import { XCircle } from '@phosphor-icons/react'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { NotificationDialog } from '@/components/NotificationDialog'

type ErrorMessageProps = {
  message: string
}
const NOTIFICATION_DIALOG_DURATION_MS = 15_000

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
    }, NOTIFICATION_DIALOG_DURATION_MS)

    return () => clearTimeout(timeoutId)
  }, [handleOpen])

  return (
    <NotificationDialog
      isOpen={isOpen}
      title={message}
      icon={{ component: XCircle, color: 'red-400' }}
      setIsOpen={handleOpen}
    />
  )
}
