'use client'

import { YouTubeVideo } from '@filecoin-foundation/ui/YouTubeVideo'

import YouTubeLogoIcon from '@/assets/logos/youtube-logo-icon.svg'

type PlaceholderProps = {
  text: string
}

type YouTubeVideoEmbedProps = {
  videoUrl: string
}

export function YouTubeVideoEmbed({ videoUrl }: YouTubeVideoEmbedProps) {
  return (
    <div className="border-brand-500 overflow-hidden rounded-lg border">
      <YouTubeVideo
        embedUrl={videoUrl}
        Placeholder={Placeholder}
        PlayButton={PlayButton}
      />
    </div>
  )
}

function Placeholder({ text }: PlaceholderProps) {
  return (
    <div
      className="bg-brand-700 flex aspect-video items-center justify-center rounded-lg"
      role="status"
    >
      <p>{text}</p>
    </div>
  )
}

function PlayButton() {
  return <YouTubeLogoIcon aria-hidden="true" width={64} />
}
