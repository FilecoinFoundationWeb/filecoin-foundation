'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'

type YouTubeEmbedProps = {
  videoUrl: `${typeof YOUTUBE_EMBED_BASE_URL}${string}` | string
}

export function VideoSection({ videoUrl }: YouTubeEmbedProps) {
  if (!videoUrl.startsWith(YOUTUBE_EMBED_BASE_URL)) {
    // Add sentry error reporting here

    return (
      <section className="mb-8">
        <div className="flex aspect-video items-center justify-center rounded-lg bg-brand-700">
          <p>Video unavailable</p>
        </div>
      </section>
    )
  }

  //   return (
  //     <div className="mb-8 aspect-video">
  //       <iframe
  //         allowFullScreen
  //         width="100%"
  //         height="100%"
  //         aria-label="Embedded YouTube Video"
  //         src={videoUrl}
  //         title="YouTube video player"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
  //       />
  //     </div>
  //   )

  const videoId = videoUrl.replace(YOUTUBE_EMBED_BASE_URL, '')

  return (
    <section className="mb-8">
      <LiteYouTubeEmbed
        id={videoId}
        title="YouTube video player"
        wrapperClass="aspect-video bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
        iframeClass="focus:brand-outline w-full h-full cursor-pointer"
        playerClass="sr-only"
      />
    </section>
  )
}
