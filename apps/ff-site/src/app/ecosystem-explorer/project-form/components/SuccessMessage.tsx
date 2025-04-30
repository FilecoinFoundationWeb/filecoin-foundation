import Link from 'next/link'

import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

import { Button } from '@filecoin-foundation/ui/Button'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN, FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

type SuccessMessageProps = {
  prNumber: number
}

const FILECOIN_FOUNDATION_GITHUB_PR_URL = `${FILECOIN_FOUNDATION_URLS.social.github.href}/filecoin-foundation/pull`

export function SuccessMessage({ prNumber }: SuccessMessageProps) {
  return (
    <section className="my-20 flex justify-center sm:my-32">
      <div className="max-w-[420px] space-y-6 sm:text-center">
        <div className="sm:flex sm:justify-center">
          <Icon
            component={CheckCircle}
            size={96}
            weight="fill"
            color="primary"
          />
        </div>

        <Heading tag="h1" variant="4xl">
          Thank you!
        </Heading>

        <p>
          We’ve received your submission and it will now be reviewed by our
          team. You can follow the progress on GitHub{' '}
          <ExternalTextLink
            href={`${FILECOIN_FOUNDATION_GITHUB_PR_URL}/${prNumber}`}
          >
            {`PR #${prNumber}`}
          </ExternalTextLink>
          . Once accepted, your project will be featured on the Ecosystem
          Explorer page.
        </p>

        <Link
          href={PATHS.ECOSYSTEM_EXPLORER.path}
          className="inline-block w-full sm:w-auto"
        >
          <Button className="w-full" baseDomain={BASE_DOMAIN}>
            Go to Ecosystem Explorer Page
          </Button>
        </Link>
      </div>
    </section>
  )
}
