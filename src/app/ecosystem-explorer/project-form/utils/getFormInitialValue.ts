import type { EcosystemProjectFormDataWithoutLogo } from '../types'

const unselectedOption = { id: '', name: '' }

export function getFormInitialValue(): EcosystemProjectFormDataWithoutLogo {
  return {
    name: '',
    email: '',
    title: '',
    tech: { filecoin: false, ipfs: false },
    yearJoined: unselectedOption,
    briefSummary: '',
    networkUseCase: '',
    category: unselectedOption,
    subcategory: unselectedOption,
    websiteUrl: '',
  }
}
