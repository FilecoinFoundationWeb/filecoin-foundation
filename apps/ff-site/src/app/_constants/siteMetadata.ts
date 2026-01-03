import type { Metadata } from 'next'

import { PATHS } from './paths'

const BASE_DOMAIN = 'fil.org'
const BASE_URL = `https://${BASE_DOMAIN}`
const ORGANIZATION_NAME = 'Filecoin Foundation'

export const ROOT_METADATA = {
  title: {
    template: `%s | ${ORGANIZATION_NAME}`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
} satisfies Metadata

const FIL_PLUS_URLS = {
  allocators: {
    blog: 'https://blog.allocator.tech/',
    rfa: 'https://blog.allocator.tech/2024/04/allocator-tech-blog.html',
    site: 'https://allocator.tech/',
  },
  dataCapMetrics: 'https://datacapstats.io/',
  documentation:
    'https://docs.filecoin.io/basics/how-storage-works/filecoin-plus',
  filPlusParticipants:
    'https://docs.filecoin.io/basics/how-storage-works/filecoin-plus#filecoin-processes-and-participants',
  notary: 'https://github.com/filecoin-project/Allocator-Governance',
  slack: 'https://filecoinproject.slack.com/archives/C01DLAPKDGX',
}

const FILECOIN_DOCS_URLS = {
  site: 'https://docs.filecoin.io/',
  waysToContribute:
    'https://docs.filecoin.io/basics/project-and-community/ways-to-contribute',
}

const FILECOIN_FOUNDATION_URLS = {
  annualReports: {
    '2024': `${PATHS.BLOG.path}/filecoin-foundation-2024-annual-report`,
    '2023': `${PATHS.BLOG.path}/filecoin-foundation-2023-annual-report`,
    '2022': `${PATHS.BLOG.path}/filecoin-foundation-2022-annual-report`,
  },
  careers: {
    href: 'https://careers.fil.org/jobs',
    label: 'Careers',
  },
  digest: {
    submitIdea: {
      label: 'Submit Idea',
      href: 'https://airtable.com/appQReX5uAegC0yom/pagoKQqs5z4LCWleW/form',
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
    label: 'Contact Us',
    href: 'mailto:hello@fil.org',
  },
  governance: {
    filPoll: {
      label: 'Fil Poll',
      href: 'https://poll.fil.org',
    },
    powerVote: {
      label: 'PowerVote',
      href: 'https://vote.fil.org',
    },
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
    documents: {
      builderNextStepGrants:
        'https://github.com/filecoin-project/devgrants/blob/master/Program%20Resources/Builder%20Next%20Step%20Grants.md',
      openGrants:
        'https://github.com/filecoin-project/devgrants/blob/master/Program%20Resources/Open%20Grants%20README.md',
      requestsForProposals:
        'https://github.com/filecoin-project/devgrants?tab=readme-ov-file#requests-for-proposals-rfps',
    },
  },
  ecosystem: {
    email: {
      href: 'mailto:info@fil.org',
    },
  },
  orbit: {
    ambassadorsApplicationForm:
      'https://airtable.com/apprCQqrHfze7O5S7/shrUVrGWw31jP3e9M',
    ambassadorsPortal: 'https://hub.fil.org/orbit-ambassadors',
    email: {
      href: 'mailto:orbit@fil.org',
    },
    eventsCalendar:
      'https://airtable.com/apprCQqrHfze7O5S7/shrqWLN6F7mEY36ol/tblnrsxREgBikWu9A',
    orbitYearInReview: {
      '2023': `${PATHS.BLOG.path}/orbit-year-in-review-growing-a-global-community-of-builders/`,
    },
  },
  greenhouse: 'https://boards.greenhouse.io/filecoinfoundation',
  newsletter: 'https://upload.fil.org/subscribe',
  publicDataCommons: {
    contactForm: 'https://airtable.com/appyPZiiFSUIYFsrA/shrmNURZt1khzB00M',
    email: 'mailto:impact@fil.org',
  },
  security: {
    bugBountyProgram: 'https://immunefi.com/bug-bounty/filecoin/',
    emails: {
      main: {
        label: 'Contact Security Team',
        href: 'mailto:security@fil.org',
      },
      audits: {
        href: 'mailto:audits@fil.org',
      },
    },
    resources: {
      auditReports: 'https://spec.filecoin.io/#section-appendix.audit_reports',
      filecoinEVMCompatibility:
        'https://docs.filecoin.io/smart-contracts/filecoin-evm-runtime/difference-with-ethereum',
    },
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
      handle: '@FilFoundation',
    },
    youtube: {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCeM5ezNgFM1Sle_gIz-KMMA',
    },
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
  BASE_DOMAIN,
  BASE_URL,
  FIL_PLUS_URLS,
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
  ORGANIZATION_NAME,
}
