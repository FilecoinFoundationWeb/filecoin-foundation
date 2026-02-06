import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://filecoin.cloud/',
  outputPath: 'public/site-audit-reports/filecoin-onchain-cloud',
  routerPrefix: '/site-audit-reports/filecoin-onchain-cloud',
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
