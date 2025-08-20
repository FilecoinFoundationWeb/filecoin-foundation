'use client'

import { PlayCircleIcon } from '@phosphor-icons/react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import useSWR from 'swr'

import { Icon } from '@filecoin-foundation/ui/Icon'
import { fetchYouTubeVideoMetadata } from '@filecoin-foundation/utils/fetchYouTubeVideoMetadata'

type PlaceholderProps = {
  text: string
}

type YouTubeVideoEmbedProps = {
  videoUrl: string
}

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'
const REMOVE_MORE_VIDEOS_SUGGESTIONS = 'rel=0'

export function YouTubeVideoEmbed({ videoUrl }: YouTubeVideoEmbedProps) {
  const isUrlFormatValid = videoUrl.startsWith(YOUTUBE_EMBED_BASE_URL)
  const videoId = videoUrl.replace(YOUTUBE_EMBED_BASE_URL, '')

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
    <div
      aria-label={`Video: ${title}`}
      role="region"
      className="group focus-visible:brand-outline relative"
      tabIndex={0}
    >
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        activatedClass="lyt-activated"
        iframeClass="h-full w-full cursor-pointer"
        params={REMOVE_MORE_VIDEOS_SUGGESTIONS}
        playerClass="sr-only"
        webp={true}
        wrapperClass="aspect-video opacity-50 [&:has(iframe)]:opacity-100 cursor-pointer overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${thumbnail_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <PlayButton />
    </div>
  )
}

function PlayButton() {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="pointer-events-none absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center space-x-2 rounded-full bg-zinc-800 px-6 py-4 text-[var(--color-logo-item)] opacity-100 [.lyt-activated_+_&]:invisible [.lyt-activated_+_&]:opacity-0"
    >
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
      className="flex aspect-video items-center justify-center"
    >
      <p>{text}</p>
    </div>
  )
}
