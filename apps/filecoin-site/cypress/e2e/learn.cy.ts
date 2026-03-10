import { tests } from '@filecoin-foundation/cypress/support'

import { BASE_URL } from '@/constants/siteMetadata'

import { getPageTestData } from '@/cypress/utils/getPageTestData'

const { en, zhCn } = getPageTestData('LEARN')

describe('Learn Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: en.path,
      title: en.title,
      description: en.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(en.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(en.path)
  })
})

describe('Learn Page (zh-cn)', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: zhCn.path,
      title: zhCn.title,
      description: zhCn.description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(zhCn.path)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(zhCn.path)
  })
})
