import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { BUILD_ON_FILECOIN_SEO } from '@/build-on-filecoin/constants/seo'
import { tests } from '@/cypress/support'

const { path } = PATHS.BUILD_ON_FILECOIN
const { title, description } = BUILD_ON_FILECOIN_SEO

describe('Build on Filecoin Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title,
      description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})
