import { PATHS } from '@/constants/paths'

export const footerNavigationItems = [
  {
    title: 'Browse',
    links: [
      {
        label: PATHS.ABOUT.label,
        href: PATHS.ABOUT.path,
      },
      {
        label: PATHS.PROJECTS.label,
        href: PATHS.PROJECTS.path,
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: PATHS.LEARNING_RESOURCES.label,
        href: PATHS.LEARNING_RESOURCES.path,
      },
      {
        label: PATHS.BLOG.label,
        href: PATHS.BLOG.path,
      },
      {
        label: PATHS.DIGEST.label,
        href: PATHS.DIGEST.path,
      },
      {
        label: PATHS.FAQS.label,
        href: PATHS.FAQS.path,
      },
    ],
  },
]

export const footerLegalItems = [
  {
    label: PATHS.PRIVACY_POLICY.label,
    href: PATHS.PRIVACY_POLICY.path,
  },
  {
    label: PATHS.TERMS_OF_USE.label,
    href: PATHS.TERMS_OF_USE.path,
  },
]
