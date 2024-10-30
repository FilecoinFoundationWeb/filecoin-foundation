'use client'

import { useState } from 'react'

import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { useCopyToClipboard } from 'usehooks-ts'

import { NOTIFICATION_DIALOG_DURATION_MS } from '@/constants/notificationDialogDuration'

import { Icon } from '@/components/Icon'
import { NotificationDialog } from '@/components/NotificationDialog'


type CopyToClipboardProps = {
  text: string
}

export function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [_, copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)

  async function handleCopy(text: string) {
    try {
      await copy(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), NOTIFICATION_DIALOG_DURATION_MS)
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
        title="Link successfully copied"
      />
      <button
        className={`${isCopied && 'text-brand-300'} touch-target focus:brand-outline hover:text-brand-400`}
        onClick={() => handleCopy(text)}
      >
        <Icon component={Link} size={32} weight="light" />
      </button>
    </>
  )
}
