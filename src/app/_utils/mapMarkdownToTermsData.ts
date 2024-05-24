import { TermsData } from '@/_types/termsTypes'

export function mapMarkdownToTermsData({
  data,
  content,
}: {
  data: any
  content?: string
}): TermsData {
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
