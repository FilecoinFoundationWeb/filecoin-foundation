const BASE_DOMAIN = 'ffdweb.org' as const
const BASE_URL = `https://${BASE_DOMAIN}` as const
const ORGANIZATION_NAME =
  'Filecoin Foundation for the Decentralized Web' as const
const ORGANIZATION_NAME_SHORT = 'FFDW' as const

const SEO = {
  metaTitle: 'Rebuilding the Internet for Good',
  metaDescription:
    'Filecoin Foundation for the Decentralized Web is a nonprofit organization committed to preserving humanity’s most important information by funding the development of open-source tools',
} as const

const FFDW_URLS = {
  email: 'impact@ffdweb.org',
  social: {
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/filecoin-foundation-for-the-decentralized-web/',
    },
    twitter: {
      label: 'Twitter',
      href: 'https://twitter.com/ffdweb',
      handle: '@ffdweb',
    },
    youtube: {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCbj3Hck5cwKURkZKHjg_MKQ',
    },
  },
  newResourceForm: 'https://airtable.com/appqYx2g5gO6GX8jL/shrhkHIBbGxLnGGZh',
} as const

export {
  BASE_DOMAIN,
  BASE_URL,
  FFDW_URLS,
  ORGANIZATION_NAME,
  ORGANIZATION_NAME_SHORT,
  SEO,
}
