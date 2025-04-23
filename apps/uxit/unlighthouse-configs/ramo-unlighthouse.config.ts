import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://www.ramo.io/',
  outputPath: 'public/site-audit-reports/ramo',
  routerPrefix: '/site-audit-reports/ramo',
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
