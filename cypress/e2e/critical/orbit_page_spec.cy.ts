import { PATHS } from '@/constants/paths'
import { testPageMetadata } from '@/support/test-utils'

describe('Orbit Page', () => {
  testPageMetadata({ path: PATHS.ORBIT, overrideDefaultTitle: true })
})
