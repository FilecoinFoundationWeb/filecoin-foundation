import { PATHS } from '../../../src/app/_constants/paths'
import { verifyAllBlogPostLinks } from '../../support/verifyAllEntryLinksUtil'

describe('All Blog Posts', () => {
  it('should check links with events category', () => {
    verifyAllBlogPostLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
      'events',
    )
  })

  it('should check links with use-case category', () => {
    verifyAllBlogPostLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
      'use-case',
    )
  })

  it('should check links with interview category', () => {
    verifyAllBlogPostLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
      'interview',
    )
  })

  it('should check links with reports category', () => {
    verifyAllBlogPostLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
      'reports',
    )
  })

  it('should check links with news category', () => {
    verifyAllBlogPostLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
      'news',
    )
  })

  it('should check links with ecosystem category', () => {
    verifyAllBlogPostLinks(
      PATHS.BLOG.entriesContentPath as string,
      PATHS.BLOG.path as string,
      'ecosystem',
    )
  })
})
