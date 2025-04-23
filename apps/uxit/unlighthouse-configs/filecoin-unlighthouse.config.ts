import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://filecoin.io/',
  outputPath: 'public/site-audit-reports/filecoin',
  routerPrefix: '/site-audit-reports/filecoin',
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
