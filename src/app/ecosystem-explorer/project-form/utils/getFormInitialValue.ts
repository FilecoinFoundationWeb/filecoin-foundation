import type { EcosystemProjectFormData } from '../components/ProjectForm'

const unselectedOption = { id: '', name: '' }

export function getFormInitialValue(): EcosystemProjectFormData {
  return {
    name: '',
    email: '',
    projectName: '',
    tech: { filecoin: false, ipfs: false },
    yearJoined: unselectedOption,
    briefSummary: '',
    networkUseCase: '',
    category: unselectedOption,
    topic: unselectedOption,
    files: [],
    websiteUrl: '',
  }
}
