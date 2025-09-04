'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import useSWR from 'swr'

import { fetchYouTubeVideoMetadata } from './utils/fetchYouTubeVideoMetadata'

type YouTubeVideoEmbedProps = {
  embedUrl: string
  Placeholder: React.ComponentType<{ text: string }>
  PlayButton?: React.ComponentType
}

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'

export function YouTubeVideo({
  embedUrl,
  Placeholder,
  PlayButton,
}: YouTubeVideoEmbedProps) {
  const isUrlFormatValid = embedUrl.startsWith(YOUTUBE_EMBED_BASE_URL)
  const videoId = embedUrl.replace(YOUTUBE_EMBED_BASE_URL, '')

  const { data, error } = useSWR(
    isUrlFormatValid ? videoId : null,
    fetchYouTubeVideoMetadata,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    },
  )

  if (!isUrlFormatValid || error) {
    return <Placeholder text="Video Unavailable" />
  }

  if (!data) {
    return <Placeholder text="Loading video..." />
  }

  const { title, thumbnail_url } = data

  return (
    <div className="relative">
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        activatedClass="lyt-activated"
        iframeClass="h-full w-full cursor-pointer"
        playerClass="sr-only"
        webp={true}
        wrapperClass="aspect-video opacity-50 [&:has(iframe)]:opacity-100 cursor-pointer overflow-hidden bg-cover focus:brand-outline"
        thumbnail={thumbnail_url}
      />
      {PlayButton && (
        <div
          aria-hidden="true"
          role="presentation"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [.lyt-activated_+_&]:invisible [.lyt-activated_+_&]:opacity-0"
        >
          <PlayButton />
        </div>
      )}
    </div>
  )
}
