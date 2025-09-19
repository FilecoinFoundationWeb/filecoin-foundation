import { createPathConfig } from '@/utils/createPathConfig'

export const WORKSPACE_ROOT = 'apps/ffdweb-site'
export const CONTENT_ROOT = 'src/content'

export type StaticPath =
  | '/'
  | '/about'
  | '/blog'
  | '/digest'
  | '/faqs'
  | '/learning-resources'
  | '/privacy-policy'
  | '/projects'
  | '/terms-of-use'

type ContentCollectionName = 'blog' | 'digest' | 'projects'

type DynamicPath = {
  [key in ContentCollectionName]: `/${key}/${string}`
}

export type DynamicPathValues = DynamicPath[keyof DynamicPath]
export type PathValues = StaticPath | DynamicPathValues

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
  ABOUT: createPathConfig('/about', 'About'),
  BLOG: createPathConfig('/blog', 'Blog', { hasEntries: true }),
  DIGEST: {
    ...createPathConfig('/digest', 'Digest', { hasEntries: true }),
    issue: (issueNumber: string) => `/digest/issue-${issueNumber}` as const,
    article: (issueNumber: string, slug: string) =>
      `/digest/issue-${issueNumber}/${slug}` as const,
  },
  FAQS: createPathConfig('/faqs', 'FAQs'),
  LEARNING_RESOURCES: createPathConfig(
    '/learning-resources',
    'Learning Resources',
    { hasEntries: true },
  ),
  PRIVACY_POLICY: createPathConfig('/privacy-policy', 'Privacy Policy'),
  PROJECTS: createPathConfig('/projects', 'Projects', {
    hasEntries: true,
  }),
  TERMS_OF_USE: createPathConfig('/terms-of-use', 'Terms of Use'),
} as const
