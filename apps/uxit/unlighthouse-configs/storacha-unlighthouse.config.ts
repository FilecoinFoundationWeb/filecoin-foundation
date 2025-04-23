import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://storacha.network/',
  outputPath: 'public/site-audit-reports/storacha',
  routerPrefix: '/site-audit-reports/storacha',
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
