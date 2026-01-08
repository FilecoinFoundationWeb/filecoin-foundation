'use client'

import { PlayCircleIcon } from '@phosphor-icons/react'

import { YouTubeVideo } from '@filecoin-foundation/ui/YouTubeVideo'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

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
    <div className="flex items-center space-x-2 rounded-full bg-zinc-800 px-6 py-4 text-(--color-logo-item)">
      <Icon component={PlayCircleIcon} color="inherit" size={20} />
      <span className="text-base text-(--color-text-base)">
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
