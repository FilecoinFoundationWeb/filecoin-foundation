'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import useSWR from 'swr'

import { fetchYouTubeVideoMetadata } from '@/services/youtube'

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
    <LiteYouTubeEmbed
      id={videoId}
      title={data.title}
      wrapperClass="aspect-video bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
      iframeClass="focus:brand-outline w-full h-full cursor-pointer"
      playerClass="sr-only"
      noCookie={true}
      params={REMOVE_MORE_VIDEOS_SUGGESTIONS}
    />
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
