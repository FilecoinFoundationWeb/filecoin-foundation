import { PATHS } from '@/constants/paths'

const BASE_URL = 'https://fil.org'
const ORGANIZATION_NAME = 'Filecoin Foundation'

const FIL_PLUS_URLS = {
  notary: 'https://github.com/filecoin-project/notary-governance/',
  site: 'https://plus.fil.org/',
  slack: 'https://filecoinproject.slack.com/archives/C01DLAPKDGX',
}

const FILECOIN_FOUNDATION_URLS = {
  annualReports: {
    latest: `${PATHS.BLOG.path}/filecoin-foundation-2023-annual-report/`,
    previous: `${PATHS.BLOG.path}/filecoin-foundation-2022-annual-report/`,
  },
  ecosystem: {
    submitOrUpdateProjectForm:
      'https://airtable.com/apppNMXvdW3i9P1BY/shrvrv4B9JKCP1e4O',
  },
  email: 'mailto:hello@fil.org',
  greenhouse: 'https://boards.greenhouse.io/filecoinfoundation',
  newsletter: 'https://upload.fil.org/subscribe',
  publicDataCommons: {
    contactForm: 'https://airtable.com/appyPZiiFSUIYFsrA/shrmNURZt1khzB00M',
    email: 'mailto:impact@fil.org',
  },
  social: {
    bluesky: {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/ff.bsky.social',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/FilecoinFoundationWeb',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/filecoin-foundation/mycompany/',
    },
    twitter: {
      label: 'Twitter',
      href: 'https://twitter.com/FilFoundation',
    },
    youtube: {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCeM5ezNgFM1Sle_gIz-KMMA',
    },
  },
}

const FILECOIN_URLS = {
  grants: {
    github: 'https://github.com/filecoin-project/devgrants',
    email: 'mailto:devgrants@fil.org',
  },
  site: 'https://filecoin.io',
  social: {
    reddit: {
      href: 'https://www.reddit.com/r/filecoin/',
      label: 'Reddit',
    },
    slack: {
      href: 'https://filecoin.io/slack',
      label: 'Slack',
    },
  },
}

export {
  BASE_URL,
  FIL_PLUS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
}
