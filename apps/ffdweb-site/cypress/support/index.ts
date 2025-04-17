/// <reference types="cypress" />

import { testPageMetaData } from './testPageMetadata'
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
