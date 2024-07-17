import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const companyItems = [
  PATHS.ABOUT,
  { label: 'Contact Us', path: FILECOIN_FOUNDATION_URLS.email.href },
]

export const getInvolvedItems = [
  PATHS.EVENTS,
  PATHS.GRANTS,
  { label: 'Careers', path: FILECOIN_FOUNDATION_URLS.email.href },
]

export const communityItems = [
  PATHS.ECOSYSTEM_EXPLORER,
  PATHS.GOVERNANCE,
  PATHS.ORBIT,
  PATHS.SECURITY,
]

export const resourcesItems = [PATHS.BLOG]

export const legalItems = [
  PATHS.TERMS_OF_USE,
  PATHS.EMPLOYEE_PRIVACY_POLICY,
  PATHS.PRIVACY_POLICY,
]

export const footerNavigationList = {
  Company: companyItems,
  'Get Involved': getInvolvedItems,
  Community: communityItems,
  Resources: resourcesItems,
  Legal: legalItems,
}

export const mobileViewNavigationList = {
  'Get Involved': getInvolvedItems,
  Community: communityItems,
  Resources: resourcesItems,
}
