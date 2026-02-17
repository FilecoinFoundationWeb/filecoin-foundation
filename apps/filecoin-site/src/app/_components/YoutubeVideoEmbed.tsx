'use client'

import { PlayCircleIcon } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

import { YouTubeVideo } from '@filecoin-foundation/ui-filecoin/YouTubeVideo'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

type YouTubeVideoEmbedProps = {
  videoUrl: string
}

export function YouTubeVideoEmbed({ videoUrl }: YouTubeVideoEmbedProps) {
  const t = useTranslations('youtubeVideoEmbed')

  return (
    <YouTubeVideo
      embedUrl={videoUrl}
      renderErrorState={() => <Placeholder text={t('error')} />}
      renderLoadingState={() => <Placeholder text={t('loading')} />}
      renderPlayButton={() => <PlayButton text={t('playButton')} />}
    />
  )
}

type PlayButtonProps = {
  text: string
}

function PlayButton({ text }: PlayButtonProps) {
  return (
    <div className="flex items-center space-x-2 rounded-full bg-zinc-800 px-6 py-4 text-(--color-logo-item)">
      <Icon component={PlayCircleIcon} color="inherit" size={20} />
      <span className="text-base text-(--color-text-base)">{text}</span>
    </div>
  )
}

type PlaceholderProps = {
  text: string
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
