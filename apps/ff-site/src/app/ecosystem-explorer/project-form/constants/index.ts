export const MAX_FILE_SIZE_IN_BYTES = 100_000
export const BRIEF_CHARACTER_LIMIT = { max: 160 } as const
export const DESCRIPTION_CHARACTER_LIMIT = {
  min: 240,
  max: 1_800,
} as const
export const MAX_PROJECT_NAME_LENGTH = 96

export const YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v='
export const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'
export const GITHUB_BASE_URL = 'https://github.com/'
export const X_BASE_URL = 'https://x.com/'
export const TWITTER_BASE_URL = 'https://twitter.com/'

export const ALLOWED_IMAGE_FORMATS = [
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.webp',
] as const
