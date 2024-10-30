'use client'

import { useState } from 'react'

import { Link } from '@phosphor-icons/react/dist/ssr'
import * as Sentry from '@sentry/nextjs'
import { useCopyToClipboard } from 'usehooks-ts'

import { Icon } from '@/components/Icon'

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
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy!', error)
      Sentry.captureException(error)
    }
  }

  return (
    <button
      className={`${isCopied && 'text-brand-300'} touch-target focus:brand-outline hover:text-brand-400`}
      onClick={() => handleCopy(text)}
    >
      <Icon component={Link} size={32} weight="light" />
    </button>
  )
}
