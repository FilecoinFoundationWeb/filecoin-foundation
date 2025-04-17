import type { MetadataParams } from '@/utils/createMetadata'

type TestVisualSnapshotOptions = {
  path: MetadataParams['path']
}

export function testVisualSnapshot({ path }: TestVisualSnapshotOptions) {
  cy.visit(path)
  cy.percySnapshot()
}
