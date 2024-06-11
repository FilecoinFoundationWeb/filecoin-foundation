import { PATHS } from './paths'

const BASE_URL = 'https://fil.org'
const ORGANIZATION_NAME = 'Filecoin Foundation'

const FIL_PLUS_URLS = {
  notary: 'https://github.com/filecoin-project/notary-governance/',
  site: 'https://plus.fil.org/',
  slack: 'https://filecoinproject.slack.com/archives/C01DLAPKDGX',
}

const FILECOIN_DOCS_URLS = {
  site: 'https://docs.filecoin.io/',
  waysToContribute:
    'https://docs.filecoin.io/basics/project-and-community/ways-to-contribute',
}

const FILECOIN_FOUNDATION_URLS = {
  annualReports: {
    '2024':
      'https://messari.io/report-pdf/20393d669df072af1672e1f2804d63ce27836bb3.pdf',
    '2023': `${PATHS.BLOG.path}/filecoin-foundation-2023-annual-report/`,
    '2022': `${PATHS.BLOG.path}/filecoin-foundation-2022-annual-report/`,
  },
  ecosystem: {
    submitOrUpdateProjectForm: {
      label: 'Submit or Update Your Project',
      href: 'https://airtable.com/app8l0JhN6vJfTzJt/shrKrbPOdxGNnMM9C',
    },
  },
  events: {
    orbitAmbassadorForm:
      'https://airtable.com/appAGdqyYrqoFNuPI/shrKrbPOdxGNnMM9C',
    speakerEngagementForm:
      'https://airtable.com/appjmzgJs0szq6rQJ/shrHgGe2pJoR27Vid',
    sponsorshipsEmail: 'mailto:sponsorships@fil.org',
  },
  email: {
    label: 'Media and collaboration inquiries',
    href: 'mailto:hello@fil.org',
  },
  governance: {
    docs: '#',
    social: {
      github: {
        label: 'GitHub',
        href: 'https://github.com/filecoin-project/FIPs',
      },
      twitter: {
        label: '@fil_gov',
        href: 'https://x.com/fil_gov',
      },
      slack: {
        label: '#fil-gov',
        href: 'https://filecoinproject.slack.com/archives/C0535S9TUUF',
      },
    },
  },
  grants: {
    github: 'https://github.com/filecoin-project/devgrants',
    email: {
      label: 'Ecosystem grants inquiries',
      href: 'mailto:grants@fil.org',
    },
  },
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
  techSupportEmail: {
    label: 'Tech Support',
    href: 'mailto:support@fil.org',
  },
} as const

const FILECOIN_URLS = {
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
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
  FIL_PLUS_URLS,
  ORGANIZATION_NAME,
}
