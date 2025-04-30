import { BookOpen, GitFork, Globe, XLogo } from '@phosphor-icons/react/dist/ssr'

import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'
import { SmartTextLink } from '@filecoin-foundation/ui/TextLink/SmartTextLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { YouTubeVideoEmbed } from '@/components/YouTubeVideoEmbed'

type ArticleProps = {
  title: string
  content?: string
  videoUrl?: string
  website?: string
  repo?: string
  twitter?: string
  featuredContent?: string
  category: string
}

export function Article({
  title,
  content,
  videoUrl,
  website,
  repo,
  twitter,
  featuredContent,
  category,
}: ArticleProps) {
  return (
    <article className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <TagLabel>{category}</TagLabel>
      </div>
      <div className="flex flex-wrap justify-between gap-16">
        <div className="max-w-readable gap-8 space-y-8">
          <div className="space-y-6">
            <Heading tag="h1" variant="4xl">
              {title}
            </Heading>
            {content && <MarkdownContent>{content}</MarkdownContent>}
          </div>

          {videoUrl && <YouTubeVideoEmbed videoUrl={videoUrl} />}
        </div>

        <ul className="flex flex-col gap-5">
          {website && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={Globe} />
              <SmartTextLink href={website} baseDomain={BASE_DOMAIN}>
                Website
              </SmartTextLink>
            </li>
          )}
          {repo && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={GitFork} />
              <ExternalTextLink href={repo}>GitHub</ExternalTextLink>
            </li>
          )}
          {twitter && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={XLogo} />
              <ExternalTextLink href={twitter}>X.com</ExternalTextLink>
            </li>
          )}
          {featuredContent && (
            <li className="inline-flex gap-2 whitespace-nowrap text-brand-300">
              <Icon component={BookOpen} />
              <SmartTextLink href={featuredContent} baseDomain={BASE_DOMAIN}>
                Featured Content
              </SmartTextLink>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}
