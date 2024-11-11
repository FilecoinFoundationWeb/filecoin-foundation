import Link from 'next/link'

import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { SmartTextLink } from '@/components/TextLink'

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
            color="brand-300"
          />
        </div>

        <Heading tag="h1" variant="4xl">
          Thank you!
        </Heading>

        <p>
          We’ve received your submission and it will now be reviewed by our
          team. You can follow the progress on GitHub{' '}
          <SmartTextLink
            href={`${FILECOIN_FOUNDATION_GITHUB_PR_URL}/${prNumber}`}
          >
            {`PR #${prNumber}`}
          </SmartTextLink>
          . Once accepted, your project will be featured on the Ecosystem
          Explorer page.
        </p>

        <Link
          href={PATHS.ECOSYSTEM_EXPLORER.path}
          className="inline-block w-full sm:w-auto"
        >
          <Button className="w-full">Go to Ecosystem Explorer Page</Button>
        </Link>
      </div>
    </section>
  )
}
