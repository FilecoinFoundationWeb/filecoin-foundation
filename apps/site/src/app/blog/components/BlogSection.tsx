'use client'
import { PageSection } from '@/components/PageSection'
import { BlogContent } from './BlogContent'
import { blogSortConfigs } from '../constants/sortConfigs'
import type { BlogPost } from '../types/blogPostType'
import { useSearchParams } from 'next/navigation'
import type { NextServerSearchParams } from '@/_types/searchParams'
import { getSortOptions } from '@/_utils/getSortOptions'

type Props = {
  posts: Array<BlogPost>
}

export function BlogSection({ posts }: Props) {
  const readonlySearchParams = useSearchParams()
  const sortOptions = getSortOptions(blogSortConfigs)
  const searchParams: NextServerSearchParams = Object.fromEntries(
    readonlySearchParams.entries(),
  )
  return (
    <>
      <PageSection
        kicker="Blog"
        title="Filecoin Ecosystem Updates"
        description="Read the latest updates and announcements from the Filecoin ecosystem and Filecoin Foundation."
      >
        <BlogContent
          searchParams={searchParams}
          posts={posts}
          sortOptions={sortOptions}
        />
      </PageSection>
    </>
  )
}
