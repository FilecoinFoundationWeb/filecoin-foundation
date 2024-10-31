'use client'

import { useState } from 'react'

import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { useCopyToClipboard } from 'usehooks-ts'

import { NOTIFICATION_DIALOG_DURATION_MS } from '@/constants/notificationDialogDuration'

import { Icon } from '@/components/Icon'
import { NotificationDialog } from '@/components/NotificationDialog'
import { Button } from '@headlessui/react'

type CopyToClipboardProps = {
  text: string
  notificationTitle: string
}

export function CopyToClipboard({
  text,
  notificationTitle,
}: CopyToClipboardProps) {
  const [, copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)

  const resetCopyState = () => setIsCopied(false)

  async function handleCopy(text: string) {
    try {
      await copy(text)
      setIsCopied(true)
      setTimeout(resetCopyState, NOTIFICATION_DIALOG_DURATION_MS)
    } catch (error) {
      console.error('Failed to copy!', error)
      Sentry.captureException(error)
    }
  }

  return (
    <>
      <NotificationDialog
        isOpen={isCopied}
        setIsOpen={setIsCopied}
        title={notificationTitle}
      />
      <Button
        className="touch-target focus:brand-outline hover:text-brand-400"
        onClick={() => handleCopy(text)}
      >
        <Icon component={Link} size={32} weight="light" />
      </Button>
    </>
  )
}
