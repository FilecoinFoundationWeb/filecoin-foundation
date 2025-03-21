/// <reference types="cypress" />

import { testPageMetaData } from './testPageMetadata'

export const tests = {
  metadata: {
    prompt: 'should test the page metadata',
    fn: testPageMetaData,
  },
} as const
