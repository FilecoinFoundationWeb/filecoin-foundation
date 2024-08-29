import { type SecurityMaturityModelAttributes } from '@/types/pageTypes'

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
  order: SecurityMaturityModelAttributes['order']
  title: SecurityMaturityModelAttributes['title']
  Content: React.ComponentType
}

export const coreFunctionsData: Array<CoreFunction> = [
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
