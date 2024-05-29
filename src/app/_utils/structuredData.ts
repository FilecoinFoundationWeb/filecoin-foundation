import type {
  BlogPosting,
  Event,
  Organization,
  SoftwareApplication,
  WebPage,
  WithContext,
} from 'schema-dts'

import { BlogPostData } from '@/types/blogPostTypes'
import { EventData } from '@/types/eventTypes'

import siteMetadata from '@/content/shared/site-metadata.yml'

import { EcosystemProjectData } from '@/_types/ecosystemProjectTypes'
import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

const { seo } = siteMetadata

interface GenerateWebPageStructuredDataProps {
  title: string
  description: string
  path: string
}

export const baseOrganizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  url: BASE_URL,
  sameAs: [
    'https://bsky.app/profile/ff.bsky.social',
    'https://github.com/FilecoinFoundationWeb',
    'https://www.linkedin.com/company/filecoin-foundation/mycompany/',
    'https://twitter.com/FilFoundation',
    'https://www.youtube.com/channel/UCeM5ezNgFM1Sle_gIz-KMMA',
  ],
  description: seo.description,
  logo: {
    '@type': 'ImageObject',
    url: '', // Replace with actual logo URL
    width: '600', // Replace with actual width
    height: '60', // Replace with actual height
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Media and collaboration inquiries',
      email: 'mailto:hello@fil.org',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Ecosystem grants inquiries',
      email: 'mailto:devgrants@fil.org',
    },
  ],
}

export const generateWebPageStructuredData = ({
  title,
  description,
  path,
}: GenerateWebPageStructuredDataProps): WithContext<WebPage> => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: `${BASE_URL}${path}`,
})

export const generateBlogPageStructuredData = (
  posts: BlogPostData[],
  seo: any,
): WithContext<WebPage> => {
  const blogPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BLOG.path,
  })

  return {
    ...blogPageBaseData,
    publisher: baseOrganizationSchema,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 5).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          name: post.title,
          description: post.description,
          image: post.image?.url,
          url: `${BASE_URL}${PATHS.BLOG.path}/${post.slug}`,
        },
      })),
    },
  }
}

export const generateBlogPostStructuredData = (
  data: BlogPostData,
): WithContext<BlogPosting> => {
  const { title, description, image, publishedOn, updatedOn, slug } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image.url,
    author: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
    },
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.BLOG.path}/${slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export const generateAboutPageStructuredData = (
  seo: any,
): WithContext<WebPage> => {
  const aboutPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ABOUT.path,
  })

  return {
    ...aboutPageBaseData,
    about: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
    },
  }
}

export const generateEventsPageStructuredData = (
  events: EventData[],
  seo: any,
): WithContext<WebPage> => {
  const eventsPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.EVENTS.path,
  })

  return {
    ...eventsPageBaseData,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: events.slice(0, 5).map((event, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Event',
          name: event.title,
          startDate: event.startDate,
          endDate: event.endDate,
          description: event.description,
          url: `${event.externalLink?.href}`,
        },
      })),
    },
  }
}

export const generateEventPostStructuredData = (
  data: EventData,
): WithContext<Event> => {
  const {
    title,
    slug,
    description,
    startDate,
    endDate,
    image,
    location,
    externalLink,
  } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate,
    location: [
      {
        '@type': 'VirtualLocation',
        url: externalLink?.href,
      },
      {
        '@type': 'Place',
        name: location,
      },
    ],
    image: image.url,
    url: `${BASE_URL}${PATHS.EVENTS.path}/${slug}`,
  }
}

export const generateEcosystemPageStructuredData = (
  seo: any,
): WithContext<WebPage> => {
  const ecosystemPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.ECOSYSTEM.path,
  })

  return {
    ...ecosystemPageBaseData,
    publisher: baseOrganizationSchema,
  }
}

export const generateEcosystemProjectPostStructuredData = (
  data: EcosystemProjectData,
): WithContext<SoftwareApplication> => {
  const { title, slug, publishedOn, updatedOn, description, image } = data

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    headline: title,
    description,
    image: image.url,
    datePublished: publishedOn,
    dateModified: updatedOn || publishedOn,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${PATHS.ECOSYSTEM.path}/${slug}`,
    },
    ...(typeof baseOrganizationSchema === 'object'
      ? { publisher: baseOrganizationSchema }
      : {}),
  }
}

export const generateGrantsPageStructuredData = (
  seo: any,
): WithContext<WebPage> => {
  const grantsPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GRANTS.path,
  })

  return {
    ...grantsPageBaseData,
  }
}

export const generateGovernancePageStructuredData = (
  seo: any,
): WithContext<WebPage> => {
  const governancePageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.GOVERNANCE.path,
  })

  return {
    ...governancePageBaseData,
  }
}

export const generateTermsStructuredData = (seo: any): WithContext<WebPage> => {
  const termsPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.TERMS.path,
  })

  return {
    ...termsPageBaseData,
  }
}

export const generatePrivacyPolicyStructuredData = (
  seo: any,
): WithContext<WebPage> => {
  const privacyPolicyPageBaseData = generateWebPageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.PRIVACY_POLICY.path,
  })

  return {
    ...privacyPolicyPageBaseData,
  }
}
