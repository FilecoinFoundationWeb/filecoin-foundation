/// <reference types="cypress" />

import { verifyLinks } from '@filecoin-foundation/cypress/links'
import { testPageMetaData } from '@filecoin-foundation/cypress/metadata'
import { testVisualSnapshot } from '@filecoin-foundation/cypress/percy'

// Suppress React hydration errors in Cypress tests
// #todo: Revisit when Cypress fixes this known issue: https://github.com/cypress-io/cypress/issues/27204
Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Hydration failed') ||
    err.message.includes('Minified React error #418') ||
    err.message.includes('Minified React error #423') ||
    err.message.includes('Unknown root exit status')
  ) {
    return false
  }
  return true
})

export const tests = {
  metadata: {
    prompt: 'should have valid metadata',
    fn: testPageMetaData,
  },
  links: {
    prompt: 'should check links',
    fn: verifyLinks,
  },
  visualSnapshot: {
    prompt: 'should match visual snapshot',
    fn: testVisualSnapshot,
  },
} as const
