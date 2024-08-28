import {
  attributes as assetManagementAttributes,
  react as AssetManagement,
} from '../content/asset-management.md'
import {
  attributes as dataProtectionPracticesAttributes,
  react as DataProtectionPractices,
} from '../content/data-protection-practices.md'
import {
  attributes as identityAndAccessManagementAttributes,
  react as IdentityAndAccessManagement,
} from '../content/identity-and-access-management.md'
import {
  attributes as incidentResponseAttributes,
  react as IncidentResponse,
} from '../content/incident-response.md'
import {
  attributes as leadershipAndOrganizationalPrinciplesAttributes,
  react as LeadershipAndOrganizationalPrinciples,
} from '../content/leadership-and-organizational-principles.md'
import {
  attributes as MaturityOfSecurityDocumentationOutreachAndDeveloperTrainingAttributes,
  react as MaturityOfSecurityDocumentationOutreachAndDeveloperTraining,
} from '../content/maturity-of-security-documentation-outreach-and-developer-training.md'
import {
  attributes as relevantPoliciesAndMaturityLevelsAttributes,
  react as RelevantPoliciesAndMaturityLevels,
} from '../content/relevant-policies-and-maturity-levels.md'
import {
  attributes as riskManagementAttributes,
  react as RiskManagement,
} from '../content/risk-management.md'
import {
  attributes as softwareSecurityAttributes,
  react as SoftwareSecurity,
} from '../content/software-security.md'

type CoreFunction = {
  title: string
  order: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  Content: React.ComponentType
}

export const coreFunctionsData: CoreFunction[] = [
  {
    title: leadershipAndOrganizationalPrinciplesAttributes.title,
    order: leadershipAndOrganizationalPrinciplesAttributes.order,
    Content: LeadershipAndOrganizationalPrinciples,
  },
  {
    title: relevantPoliciesAndMaturityLevelsAttributes.title,
    order: relevantPoliciesAndMaturityLevelsAttributes.order,
    Content: RelevantPoliciesAndMaturityLevels,
  },
  {
    title: riskManagementAttributes.title,
    order: riskManagementAttributes.order,
    Content: RiskManagement,
  },
  {
    title: identityAndAccessManagementAttributes.title,
    order: identityAndAccessManagementAttributes.order,
    Content: IdentityAndAccessManagement,
  },
  {
    title: assetManagementAttributes.title,
    order: assetManagementAttributes.order,
    Content: AssetManagement,
  },
  {
    title: dataProtectionPracticesAttributes.title,
    order: dataProtectionPracticesAttributes.order,
    Content: DataProtectionPractices,
  },
  {
    title: softwareSecurityAttributes.title,
    order: softwareSecurityAttributes.order,
    Content: SoftwareSecurity,
  },
  {
    title:
      MaturityOfSecurityDocumentationOutreachAndDeveloperTrainingAttributes.title,
    order:
      MaturityOfSecurityDocumentationOutreachAndDeveloperTrainingAttributes.order,
    Content: MaturityOfSecurityDocumentationOutreachAndDeveloperTraining,
  },
  {
    title: incidentResponseAttributes.title,
    order: incidentResponseAttributes.order,
    Content: IncidentResponse,
  },
]
