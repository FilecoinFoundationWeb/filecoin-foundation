'use client'

import { PlayCircleIcon } from '@phosphor-icons/react'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { YouTubeVideo } from '@filecoin-foundation/ui/YouTubeVideo'

type PlaceholderProps = {
  text: string
}

type YouTubeVideoEmbedProps = {
  videoUrl: string
}

export function YouTubeVideoEmbed({ videoUrl }: YouTubeVideoEmbedProps) {
  return (
    <YouTubeVideo
      embedUrl={videoUrl}
      Placeholder={Placeholder}
      PlayButton={PlayButton}
    />
  )
}

function PlayButton() {
  return (
    <div className="flex items-center space-x-2 rounded-full bg-zinc-800 px-6 py-4 text-[var(--color-logo-item)] opacity-100">
      <Icon component={PlayCircleIcon} color="inherit" size={20} />
      <span className="text-base text-[var(--color-text-base)]">
        See how it works
      </span>
    </div>
  )
}

function Placeholder({ text }: PlaceholderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex aspect-video items-center justify-center bg-zinc-900"
    >
      <p>{text}</p>
    </div>
  )
}
