/// <reference types="cypress" />

import '@percy/cypress'

import { verifyLinks } from '@filecoin-foundation/cypress/links'
import { testPageMetaData } from '@filecoin-foundation/cypress/metadata'

export const tests = {
  metadata: {
    prompt: 'should have valid metadata',
    fn: testPageMetaData,
  },
  links: {
    prompt: 'should check links',
    fn: verifyLinks,
  },
} as const
