import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

export const MAX_FILE_SIZE_IN_BYTES = 100_000
export const BRIEF_CHARACTER_LIMIT = 160
export const NETWORK_USE_CASE_CHARACTER_LIMIT = 1_800
export const MAX_PROJECT_NAME_LENGTH = 96

export const ALLOWED_IMAGE_FORMATS = [
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.webp',
] as const

export const YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v='
export const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/'
export const GITHUB_BASE_URL = 'https://github.com/'
export const X_BASE_URL = 'https://x.com/'
export const TWITTER_BASE_URL = 'https://twitter.com/'

export const SWR_KEYS = {
  formCreateData: `/form`,
  categories: `/categories`,
  projects: `/projects`,
  formUpdateData: (project: EcosystemProject) => `/form/${project.slug}`,
  projectLogo: (project: EcosystemProject) => `/projects/${project.title}/logo`,
} as const
