import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://pay.filecoin.cloud',
  outputPath: 'public/site-audit-reports/filecoin-pay',
  routerPrefix: '/site-audit-reports/filecoin-pay',
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
