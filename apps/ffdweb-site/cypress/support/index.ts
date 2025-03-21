/// <reference types="cypress" />

import { testPageMetaData } from './testPageMetadata'

export const tests = {
  metadata: {
    prompt: 'should have valid metadata',
    fn: testPageMetaData,
  },
} as const
