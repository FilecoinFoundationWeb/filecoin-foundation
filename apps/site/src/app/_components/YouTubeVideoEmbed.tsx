'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import useSWR from 'swr'

import { fetchYouTubeVideoMetadata } from '@/services/youtube'

import YouTubeLogoIcon from '@/assets/logos/youtube-logo-icon.svg'

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

  return (
    <div className="relative">
      <LiteYouTubeEmbed
        id={videoId}
        title={data.title}
        activatedClass="lyt-activated"
        iframeClass="h-full w-full cursor-pointer focus:brand-outline"
        params={REMOVE_MORE_VIDEOS_SUGGESTIONS}
        playerClass="sr-only"
        poster="maxresdefault"
        webp={true}
        wrapperClass="aspect-video cursor-pointer overflow-hidden rounded-lg border border-brand-500 bg-cover"
      />
      <YouTubeLogoIcon
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-12 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-300 ease-in-out [.lyt-activated_+_&]:invisible [.lyt-activated_+_&]:opacity-0"
      />
    </div>
  )
}

function Placeholder({ text }: PlaceholderProps) {
  return (
    <div
      className="flex aspect-video items-center justify-center rounded-lg bg-brand-700"
      role="status"
    >
      <p>{text}</p>
    </div>
  )
}
