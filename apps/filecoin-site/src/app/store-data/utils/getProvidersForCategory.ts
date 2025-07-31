import type { StorageKey } from '../data/storageCategories'
import type { StorageProvider } from '../data/storageProviders'

export function getProvidersForCategory(
  providers: Array<StorageProvider>,
  categoryId: StorageKey,
) {
  return providers.filter((provider) => provider.category === categoryId)
}
