'use client'

import { useState } from 'react'

import { Button } from '@headlessui/react'
import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { clsx } from 'clsx'
import { useCopyToClipboard } from 'usehooks-ts'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { NotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { Tooltip } from '@filecoin-foundation/ui/Tooltip/Tooltip'
import { NOTIFICATION_DIALOG_DURATION_MS } from '@filecoin-foundation/utils/constants/notificationDialogDuration'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

type CopyToClipboardProps = {
  text: string
  notificationTitle: string
  ariaLabel: string
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'p-2',
}

export function CopyToClipboard({
  text,
  notificationTitle,
  ariaLabel = 'Copy link to clipboard',
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
            'copy-to-clipboard-button focus:brand-outline cursor-pointer',
            TOUCH_TARGET.touchAreaPadding,
          )}
          onClick={() => handleCopy(text)}
          aria-label={ariaLabel}
        >
          <Icon component={Link} size={32} weight="light" />
        </Button>
      </Tooltip>
    </>
  )
}
