'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import useSWR from 'swr'

import { fetchYouTubeVideoMetadata } from '../services/youtube'

type VideoPlaceholderProps = {
  text: string
}

function VideoPlaceholder({ text }: VideoPlaceholderProps) {
  return (
    <div
      className="flex aspect-video items-center justify-center rounded-lg bg-brand-700"
      role="status"
    >
      <p>{text}</p>
    </div>
  )
}

type VideoSectionProps = {
  videoUrl: string
}

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'
const removeMoreVideosSuggestionsOnPause = 'rel=0'

export function VideoSection({ videoUrl }: VideoSectionProps) {
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
    return <VideoPlaceholder text="Video unavailable" />
  }

  if (data) {
    return (
      <LiteYouTubeEmbed
        id={videoId}
        title={data.title}
        wrapperClass="aspect-video bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
        iframeClass="focus:brand-outline w-full h-full cursor-pointer"
        playerClass="sr-only"
        noCookie={true}
        params={removeMoreVideosSuggestionsOnPause}
      />
    )
  }

  return <VideoPlaceholder text="Loading video..." />
}
