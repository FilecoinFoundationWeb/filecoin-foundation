'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import useSWR from 'swr'

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'

type YouTubeEmbedProps = {
  videoUrl: string
}

type YouTubeVideoMetadata = {
  title: string
}

function fetchYouTubeVideoMetadata(
  videoId: string,
): Promise<YouTubeVideoMetadata> {
  return fetch(
    `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${videoId}&format=json`,
  ).then((response) => response.json())
}

export function VideoSection({ videoUrl }: YouTubeEmbedProps) {
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
    // Add sentry error reporting here?

    return (
      <div
        className="flex aspect-video items-center justify-center rounded-lg bg-brand-700"
        role="alert"
      >
        <p>Video unavailable</p>
      </div>
    )
  }

  return (
    <LiteYouTubeEmbed
      id={videoId}
      title={data?.title || 'YouTube video player'}
      wrapperClass="aspect-video bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
      iframeClass="focus:brand-outline w-full h-full cursor-pointer"
      playerClass="sr-only"
      noCookie={true}
    />
  )
}
