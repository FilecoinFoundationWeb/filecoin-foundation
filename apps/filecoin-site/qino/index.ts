import { initQino } from '@qino/cms'

export default initQino({
  contentFolder: 'content',
  mediaFolder: 'public',
  cli: { check: { localAssetReferences: false } },
})
