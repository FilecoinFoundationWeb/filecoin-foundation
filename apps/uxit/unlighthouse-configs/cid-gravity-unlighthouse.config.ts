import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://www.cidgravity.com/',
  urls: ['/', '/pricing', '/storage-providers', '/about-us'],
  outputPath: 'public/site-audit-reports/cid-gravity',
  routerPrefix: '/site-audit-reports/cid-gravity',
  debug: true,
  scanner: {
    samples: 3,
    throttle: true,
  },
  ci: {
    buildStatic: true,
  },
}

export default config
