import type { UserConfig } from '@unlighthouse/core'

const config: UserConfig = {
  site: 'https://filecoin-site.vercel.app/',
  outputPath: 'public/site-audit-reports/filecoin-prototype',
  routerPrefix: '/site-audit-reports/filecoin-prototype',
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
