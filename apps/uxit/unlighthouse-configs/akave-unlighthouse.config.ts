import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://www.akave.network/',
  outputPath: 'public/site-audit-reports/akave',
  routerPrefix: '/site-audit-reports/akave',
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
