export const WORKSPACE_ROOT = 'apps/ffdweb-site' as const
export const CONTENT_ROOT = 'src/content' as const
export const MARKDOWN_EXTENSION = '.md' as const

type StaticPath =
  | '/'
  | '/about'
  | '/blog'
  | '/digest'
  | '/faqs'
  | '/get-involved'
  | '/learning-resources'
  | '/privacy-policy'
  | '/projects'
  | '/terms-of-use'

type DynamicPath = {
  blog: `/blog/${string}`
  digest: `/digest/${string}`
  projects: `/project/${string}`
}

type PathConfig = {
  readonly path: PathValues
  readonly label: string
  readonly entriesContentPath?: string
}

type CMSConfig = {
  readonly includesEntries?: boolean
}

export const PATHS = {
  HOME: createPathConfig('/', 'Home'),
  ABOUT: createPathConfig('/about', 'About'),
  BLOG: createPathConfig('/blog', 'Blog', { includesEntries: true }),
  DIGEST: createPathConfig('/digest', 'Digest', { includesEntries: true }),
  FAQS: createPathConfig('/faqs', 'FAQs'),
  GET_INVOLVED: createPathConfig('/get-involved', 'Get Involved'),
  LEARNING_RESOURCES: createPathConfig(
    '/learning-resources',
    'Learning Resources',
  ),
  PRIVACY_POLICY: createPathConfig('/privacy-policy', 'Privacy Policy'),
  PROJECTS: createPathConfig('/projects', 'Projects', {
    includesEntries: true,
  }),
  TERMS_OF_USE: createPathConfig('/terms-of-use', 'Terms of Use'),
} as const

function createPathConfig(
  path: PathValues,
  label: string,
  cmsConfig: CMSConfig = {},
): PathConfig {
  const { includesEntries = false } = cmsConfig

  return {
    path,
    label,
    entriesContentPath: includesEntries ? `${CONTENT_ROOT}${path}` : undefined,
  } as const
}

export type DynamicPathValues = DynamicPath[keyof DynamicPath]
export type PathValues = StaticPath | DynamicPathValues
export type PathConfigKey = keyof typeof PATHS

export function getPathConfig<T extends PathConfigKey>(
  key: T,
): (typeof PATHS)[T] {
  return PATHS[key]
}
