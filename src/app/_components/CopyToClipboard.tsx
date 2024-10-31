'use client'
import { clsx } from 'clsx'

import { useState } from 'react'

import { Button } from '@headlessui/react'
import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { useCopyToClipboard } from 'usehooks-ts'

import { NOTIFICATION_DIALOG_DURATION_MS } from '@/constants/notificationDialogDuration'

import { Icon } from '@/components/Icon'
import { NotificationDialog } from '@/components/NotificationDialog'
import { TOUCH_TARGET } from '@/components/ShareArticle'

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
        className={clsx(
          'focus:brand-outline hover:text-brand-400',
          TOUCH_TARGET.class,
        )}
        onClick={() => handleCopy(text)}
      >
        <Icon component={Link} size={32} weight="light" />
      </Button>
    </>
  )
}
