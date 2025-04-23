import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://fil.org',
  outputPath: 'public/site-audit-reports/ff',
  routerPrefix: '/site-audit-reports/ff',

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
