import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://akave.com/',
  outputPath: 'public/site-audit-reports/akave-cloud',
  routerPrefix: '/site-audit-reports/akave-cloud',
  debug: true,
  scanner: {
    samples: 3,
    throttle: true,
    dynamicSampling: 1,
  },
  ci: {
    buildStatic: true,
  },
}

export default config
