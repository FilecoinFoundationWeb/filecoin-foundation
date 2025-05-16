import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

export const bugBountyProgramData = [
  {
    step: 1,
    title: 'Submit a Report',
    description: (
      <>
        Provide a detailed breakdown of the vulnerability via our{' '}
        <ExternalTextLink href="https://immunefi.com/bug-bounty/filecoin/information/">
          secure portal
        </ExternalTextLink>
        . Once submitted, our security team will assess the report’s accuracy
        and severity.
      </>
    ),
  },
  {
    step: 2,
    title: 'Earn Bounty & Points',
    description:
      'Valid in-scope reports earn bounty payouts and leaderboard points. Valid out-of-scope reports may earn reputation points.',
  },
  {
    step: 3,
    title: 'Get Recognized & Redeem Rewards',
    description:
      'Earn points for your contributions, move up the leaderboard, and redeem them for exclusive Filecoin swag and recognition.',
  },
]
