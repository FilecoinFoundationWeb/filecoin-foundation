'use client'

import { useState } from 'react'

import { Button } from '@headlessui/react'
import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { clsx } from 'clsx'
import { useCopyToClipboard } from 'usehooks-ts'

import type { TouchTarget } from '@/types/touchTargetType'

import { NOTIFICATION_DIALOG_DURATION_MS } from '@/constants/notificationDialogDuration'

import { Icon } from '@/components/Icon'
import { NotificationDialog } from '@/components/NotificationDialog'
import { Tooltip } from '@/components/Tooltip/Tooltip'

type CopyToClipboardProps = {
  text: string
  notificationTitle: string
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
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
      <Tooltip description="Copy link to clipboard" side="bottom">
        <Button
          className={clsx(
            'focus:brand-outline hover:text-brand-400',
            TOUCH_TARGET.touchAreaPadding,
          )}
          onClick={() => handleCopy(text)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCopy(text)
            }
          }}
        >
          <Icon component={Link} size={32} weight="light" />
        </Button>
      </Tooltip>
    </>
  )
}
