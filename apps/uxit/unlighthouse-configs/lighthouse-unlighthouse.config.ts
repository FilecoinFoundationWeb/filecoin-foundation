import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://lighthouse.storage',
  outputPath: 'public/site-audit-reports/lighthouse',
  routerPrefix: '/site-audit-reports/lighthouse',
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
