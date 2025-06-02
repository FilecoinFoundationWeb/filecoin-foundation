import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

export const bugBountyProgramData = [
  {
    step: 1,
    title: 'Submit a Report',
    description: (
      <>
        Report security vulnerabilities through our{' '}
        <ExternalTextLink href="https://immunefi.com/bug-bounty/filecoin/information/">
          secure portal
        </ExternalTextLink>
        . The Filecoin Foundation security team will review your submission for
        accuracy and severity.
      </>
    ),
  },
  {
    step: 2,
    title: 'Earn Bounty & Points',
    description:
      'Valid in-scope reports earn bounty payouts and Bounty Points. Valid out-of-scope reports can earn Reputation Points for meaningful contributions.',
  },
  {
    step: 3,
    title: 'Get Recognized',
    description:
      'Climb the leaderboard, earn exclusive Filecoin swag, and gain recognition in the community.',
  },
]
