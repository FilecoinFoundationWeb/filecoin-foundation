import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const companyItems = [
  PATHS.ABOUT,
  {
    label: FILECOIN_FOUNDATION_URLS.email.label,
    path: FILECOIN_FOUNDATION_URLS.email.href,
  },
]

const getInvolvedItems = [PATHS.EVENTS, PATHS.GRANTS]

const communityItems = [
  PATHS.ECOSYSTEM_EXPLORER,
  PATHS.GOVERNANCE,
  PATHS.ORBIT,
  PATHS.SECURITY,
]

const resourcesItems = [PATHS.BLOG]

const legalItems = [
  PATHS.TERMS_OF_USE,
  PATHS.EMPLOYEE_PRIVACY_POLICY,
  PATHS.PRIVACY_POLICY,
]

const baseNavigationList = {
  'Get Involved': getInvolvedItems,
  Community: communityItems,
  Resources: resourcesItems,
}

export const footerNavigationList = {
  Company: companyItems,
  ...baseNavigationList,
  Legal: legalItems,
}

export const mobileViewNavigationList = {
  ...baseNavigationList,
}
