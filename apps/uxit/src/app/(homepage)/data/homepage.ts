import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'

import { type CardProps } from '@filecoin-foundation/ui/Card/Card'
import { type ExternalTextLinkProps } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { PATHS } from '@/constants/paths'

type HomepageCard = Pick<CardProps, 'title' | 'description' | 'cta'>
type Resource = Pick<ExternalTextLinkProps, 'href' | 'children'>

export const homepageCards: HomepageCard[] = [
  {
    title: {
      text: 'Dogfooding Roadmap',
      tag: 'h2',
    },
    description: {
      text: `Track the status of dogfooding projects and explore what's coming up next.`,
    },
    cta: {
      href: 'https://filecoin.notion.site/Dogfooding-Roadmap-506b84a493d746e68b7c55dbd2a2d9d1',
      text: 'View Roadmap',
      baseDomain: 'filecoin.notion.site',
    },
  },
  {
    title: {
      text: 'Dogfooding Reports',
      tag: 'h2',
    },
    description: {
      text: 'Explore detailed feedback and insights from recent dogfooding efforts across Filecoin products.',
    },
    cta: {
      href: 'https://filecoin.notion.site/Dogfooding-Reports-List-14e14075f5194995a5a1ba198c932613',
      text: 'View Reports',
      baseDomain: 'filecoin.notion.site',
    },
  },
  {
    title: {
      text: 'Site Audit Reports',
      tag: 'h2',
    },
    description: {
      text: 'Data-driven insights to improve usability across Filecoin network sites.',
    },
    cta: {
      href: PATHS.SITE_AUDIT_REPORTS.path,
      text: 'View Reports',
      baseDomain: 'fil.org',
      icon: {
        component: ArrowRightIcon,
        position: 'trailing',
      },
    },
  },
  {
    title: {
      text: 'Monthly Updates',
      tag: 'h2',
    },
    description: {
      text: `Stay up to date with the latest insights, progress, and highlights from the UXIT team.`,
    },
    cta: {
      href: 'https://filecoin.notion.site/User-Experience-Insights-UXIT-Monthly-Updates-Filecoin-Foundation-1827631f282580618c66e9cf9d8b60ad',
      text: 'View Updates',
      baseDomain: 'filecoin.notion.site',
    },
  },
]

export const otherResources: Resource[] = [
  {
    href: 'https://filecoin.notion.site/Minimum-Viable-Discoverability-Checklist-19a7631f28258017b602ef3ba4e92ae3',
    children: 'Minimum Viable Discoverability Checklist',
  },
  {
    href: 'https://filecoin.notion.site/12-Most-Common-UX-Pitfalls-and-How-to-Avoid-Them-1377631f28258055aa82dfe02cb0c6cc',
    children: '12 Most Common UX Pitfalls and How to Avoid Them',
  },
]
