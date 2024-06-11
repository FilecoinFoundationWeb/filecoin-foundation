import { TextLink } from '@/components/TextLink'

export const applicationProcessData = [
  {
    step: 1,
    title: 'Submit a Proposal',
    description: (
      <>
        After reviewing the{' '}
        <TextLink href="https://github.com/filecoin-project/devgrants">
          grant criteria
        </TextLink>
        , create a new issue using the proposal template on{' '}
        <TextLink href="https://github.com/filecoin-project/devgrants/issues/new/choose">
          GitHub
        </TextLink>
        .
      </>
    ),
  },
  {
    step: 2,
    title: 'Proposal Review',
    description:
      'Proposals are reviewed on a three-month cycle, including a preliminary and final review. Preliminary results will be shared by the end of the next month after the submission date. Final decisions will be shared by the end of the following month.',
  },
  {
    step: 3,
    title: 'Agreement and Funding',
    description:
      'Accepted applications are formalized with an agreement between Filecoin Foundation and grant applicant.',
  },
]
