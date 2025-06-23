'use client'

import { Button } from '@headlessui/react'
import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { clsx } from 'clsx'
import { useCopyToClipboard } from 'usehooks-ts'

import { Icon } from '@filecoin-foundation/ui/Icon'
import {
  NotificationDialog,
  useNotificationDialog,
} from '@filecoin-foundation/ui/NotificationDialog'
import { Tooltip } from '@filecoin-foundation/ui/Tooltip/Tooltip'
import {
  NOTIFICATION_DIALOG_DURATION_MS,
  NOTIFICATION_DIALOG_ERROR_DURATION_MS,
} from '@filecoin-foundation/utils/constants/notificationDialogDuration'
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

  const dialog = useNotificationDialog()

  async function handleCopy(text: string) {
    try {
      await copy(text)
      dialog.open({
        message: notificationTitle,
        duration: NOTIFICATION_DIALOG_DURATION_MS,
      })
    } catch (error) {
      dialog.open({
        message: 'Failed to copy to clipboard',
        duration: NOTIFICATION_DIALOG_ERROR_DURATION_MS,
      })
      console.error('Failed to copy!', error)
      Sentry.captureException(error)
    }
  }

  return (
    <>
      <NotificationDialog
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        message={dialog.message}
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
