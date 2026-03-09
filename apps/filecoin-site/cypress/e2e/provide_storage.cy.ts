import translations from '@/i18n/translations/en.json'
import zhCnTranslations from '@/i18n/translations/zh-cn.json'

import { tests } from '@filecoin-foundation/cypress/support'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

const { path } = PATHS.PROVIDE_STORAGE
const { title, description } = translations[path].metadata

const excludedLinks = ['ndlabs.io']

describe('Provide Storage Page', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path,
      title,
      description,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(path, excludedLinks)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(path)
  })
})

const zhCnPath = `/zh-cn${path}`
const { title: zhCnTitle, description: zhCnDescription } =
  zhCnTranslations[path].metadata

describe('Provide Storage Page (zh-cn)', () => {
  it(tests.metadata.prompt, () => {
    tests.metadata.fn({
      path: zhCnPath,
      title: zhCnTitle,
      description: zhCnDescription,
      baseUrl: BASE_URL,
    })
  })

  it(tests.links.prompt, () => {
    tests.links.fn(zhCnPath, excludedLinks)
  })

  it(tests.visualSnapshot.prompt, () => {
    tests.visualSnapshot.fn(zhCnPath)
  })
})
