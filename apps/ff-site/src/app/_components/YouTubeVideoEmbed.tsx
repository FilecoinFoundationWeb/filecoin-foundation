'use client'

import { YouTubeVideo } from '@filecoin-foundation/ui/YouTubeVideo'

type PlaceholderProps = {
  text: string
}

type YouTubeVideoEmbedProps = {
  videoUrl: string
}

export function YouTubeVideoEmbed({ videoUrl }: YouTubeVideoEmbedProps) {
  return <YouTubeVideo embedUrl={videoUrl} Placeholder={Placeholder} />
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
