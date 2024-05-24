import { PrivacyPolicyData } from '@/_types/privacyPolicyTypes'

export function mapMarkdownToPrivacyPolicyData({
  data,
  content,
}: {
  data: any
  content?: string
}): PrivacyPolicyData {
  return {
    header: {
      title: data.header.title,
      description: data.header.description,
    },
    seo: {
      title: data.seo.title,
      description: data.seo.description,
    },
    content: content,
  }
}
