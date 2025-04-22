/// <reference types="cypress" />

import '@percy/cypress'

import { testPageMetaData } from '@filecoin-foundation/cypress/metadata'

import { testVisualSnapshot } from './testVisualSnapshot'

export const tests = {
  metadata: {
    prompt: 'should have valid metadata',
    fn: testPageMetaData,
  },
  visualSnapshot: {
    prompt: 'should match visual snapshot',
    fn: testVisualSnapshot,
  },
} as const
