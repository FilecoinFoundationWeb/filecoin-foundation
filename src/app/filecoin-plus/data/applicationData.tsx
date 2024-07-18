import { TextLink } from '@/components/TextLink'

import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

export const applicationData = [
  {
    step: 1,
    title: 'Start Application',
    description: (
      <>
        Visit the{' '}
        <TextLink href={FIL_PLUS_URLS.notary}>
          Allocator Governance GitHub
        </TextLink>{' '}
        page. Create a pull request, name the file “Allocator application”, and
        commit the change as a branch.
      </>
    ),
  },
  {
    step: 2,
    title: 'Complete Form',
    description:
      'A comment will appear with a link to Airtable. Complete the Airtable form with the required information. Ensure you have your GitHub ID and pull request number handy!',
  },
  {
    step: 3,
    title: 'Confirm Submission',
    description:
      'Submit the form and find an issue created with your application details. Check the allocator registry GitHub for a new issue requesting to add you to the JSON file used by the governance team.',
  },
]
