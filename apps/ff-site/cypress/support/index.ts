/// <reference types="cypress" />

import '@percy/cypress'

import { testPageMetaData } from '@filecoin-foundation/cypress/metadata'

export const tests = {
  metadata: {
    prompt: 'should have valid metadata',
    fn: testPageMetaData,
  },
} as const
