import translations from '@/i18n/translations/en.json'
import zhCnTranslations from '@/i18n/translations/zh-cn.json'

import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { path } = PATHS.BLOG
const { title, description } = translations[path].metadata

describe('Blog Page', () => {
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

const zhCnPath = `/zh-cn${path}`
const { title: zhCnTitle, description: zhCnDescription } =
  zhCnTranslations[path].metadata

describe('Blog Page (zh-cn)', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: zhCnPath,
      title: zhCnTitle,
      description: zhCnDescription,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(zhCnPath)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(zhCnPath)
  })
})
