import path from 'node:path'

/**
 * Read the HubSpot documentation for more information.
 *
 * @see https://developers.hubspot.com/docs/api-reference/legacy/forms-v3-legacy/post-submissions-v3-integration-submit-portalId-formGuid
 */

const HUBSPOT_FORM_API_BASE_URL =
  'https://api.hsforms.com/submissions/v3/integration/submit'

type GetHubspotUrlParams = {
  portalId?: string
  formId?: string
}

export function getHubspotFormsUrl({ portalId, formId }: GetHubspotUrlParams) {
  if (!portalId || !formId) {
    throw new Error(
      'HUBSPOT_PORTAL_ID or HUBSPOT_STORE_DATA_FORM_ID is not set',
    )
  }

  return path.join(HUBSPOT_FORM_API_BASE_URL, portalId, formId)
}
