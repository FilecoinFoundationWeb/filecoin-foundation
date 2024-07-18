import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

const companyItems = [
  PATHS.ABOUT,
  {
    path: FILECOIN_FOUNDATION_URLS.email.href,
    label: FILECOIN_FOUNDATION_URLS.email.label,
  },
]

const getInvolvedItems = [PATHS.EVENTS, PATHS.GRANTS]

const communityItems = [
  PATHS.ECOSYSTEM_EXPLORER,
  PATHS.GOVERNANCE,
  PATHS.FIL_PLUS,
  PATHS.ORBIT,
  PATHS.SECURITY,
]

const resourcesItems = [PATHS.BLOG]

const legalItems = [
  PATHS.TERMS_OF_USE,
  PATHS.EMPLOYEE_PRIVACY_POLICY,
  PATHS.PRIVACY_POLICY,
]

const baseNavigationItems = {
  'Get Involved': getInvolvedItems,
  Community: communityItems,
  Resources: resourcesItems,
}

export const footerNavigationItems = {
  Company: companyItems,
  ...baseNavigationItems,
  Legal: legalItems,
}

export const mobileNavigationItems = {
  ...baseNavigationItems,
}
