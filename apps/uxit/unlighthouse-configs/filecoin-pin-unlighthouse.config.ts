import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://pin.filecoin.cloud/',
  outputPath: 'public/site-audit-reports/filecoin-pin',
  routerPrefix: '/site-audit-reports/filecoin-pin',
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
