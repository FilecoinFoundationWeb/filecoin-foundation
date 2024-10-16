import slugify from 'slugify'

import {
  react as AssetManagement,
  attributes as assetManagementAttributes,
} from '../content/asset-management.md'
import {
  react as DataProtectionPractices,
  attributes as dataProtectionPracticesAttributes,
} from '../content/data-protection-practices.md'
import {
  react as IdentityAndAccessManagement,
  attributes as identityAndAccessManagementAttributes,
} from '../content/identity-and-access-management.md'
import {
  react as IncidentResponse,
  attributes as incidentResponseAttributes,
} from '../content/incident-response.md'
import {
  react as LeadershipAndOrganizationalPrinciples,
  attributes as leadershipAndOrganizationalPrinciplesAttributes,
} from '../content/leadership-and-organizational-principles.md'
import {
  react as MaturityOfSecurityDocumentationOutreachAndDeveloperTraining,
  attributes as MaturityOfSecurityDocumentationOutreachAndDeveloperTrainingAttributes,
} from '../content/maturity-of-security-documentation-outreach-and-developer-training.md'
import {
  react as RelevantPoliciesAndMaturityLevels,
  attributes as relevantPoliciesAndMaturityLevelsAttributes,
} from '../content/relevant-policies-and-maturity-levels.md'
import {
  react as RiskManagement,
  attributes as riskManagementAttributes,
} from '../content/risk-management.md'
import {
  react as SoftwareSecurity,
  attributes as softwareSecurityAttributes,
} from '../content/software-security.md'

const coreFunctionsBaseData = [
  {
    order: leadershipAndOrganizationalPrinciplesAttributes.order,
    title: leadershipAndOrganizationalPrinciplesAttributes.title,
    Content: LeadershipAndOrganizationalPrinciples,
  },
  {
    order: relevantPoliciesAndMaturityLevelsAttributes.order,
    title: relevantPoliciesAndMaturityLevelsAttributes.title,
    Content: RelevantPoliciesAndMaturityLevels,
  },
  {
    order: riskManagementAttributes.order,
    title: riskManagementAttributes.title,
    Content: RiskManagement,
  },
  {
    order: identityAndAccessManagementAttributes.order,
    title: identityAndAccessManagementAttributes.title,
    Content: IdentityAndAccessManagement,
  },
  {
    order: assetManagementAttributes.order,
    title: assetManagementAttributes.title,
    Content: AssetManagement,
  },
  {
    order: dataProtectionPracticesAttributes.order,
    title: dataProtectionPracticesAttributes.title,
    Content: DataProtectionPractices,
  },
  {
    order: softwareSecurityAttributes.order,
    title: softwareSecurityAttributes.title,
    Content: SoftwareSecurity,
  },
  {
    order:
      MaturityOfSecurityDocumentationOutreachAndDeveloperTrainingAttributes.order,
    title:
      MaturityOfSecurityDocumentationOutreachAndDeveloperTrainingAttributes.title,
    Content: MaturityOfSecurityDocumentationOutreachAndDeveloperTraining,
  },
  {
    order: incidentResponseAttributes.order,
    title: incidentResponseAttributes.title,
    Content: IncidentResponse,
  },
]

export const coreFunctionsData = coreFunctionsBaseData.map((item) => ({
  ...item,
  slug: slugify(item.title, { lower: true, strict: true, trim: true }),
}))

export const coreFunctionsTableOfContents = coreFunctionsBaseData.map(
  (item) => ({
    title: item.title,
    slug: slugify(item.title, { lower: true, strict: true, trim: true }),
  }),
)
