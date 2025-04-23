import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://ffdweb.org',
  outputPath: 'public/site-audit-reports/ffdweb',
  routerPrefix: '/site-audit-reports/ffdweb',
  debug: true,
  ci: {
    buildStatic: true,
  },
  scanner: {
    samples: 3,
    throttle: true,
    dynamicSampling: 1,
  },
}

export default config
