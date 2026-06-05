import { describe, it, expect } from '@jest/globals'

import { parseVersionString } from './SoftwareVersion'

describe('parseVersionString', () => {
  it('parses a stable release version', () => {
    expect(
      parseVersionString('1.28.1+calibnet+git_16cce66a_2026-05-19T15:30:00+00:00'),
    ).toEqual({
      version: '1.28.1',
      network: 'calibnet',
      commit: '16cce66a',
      date: '2026-05-19T15:30:00+00:00',
    })
  })

  it('parses a prerelease (release candidate) version', () => {
    expect(
      parseVersionString(
        '1.28.2-rc1+calibnet+git_d36dfd8f_2026-05-28T15:41:36+04:00',
      ),
    ).toEqual({
      version: '1.28.2-rc1',
      network: 'calibnet',
      commit: 'd36dfd8f',
      date: '2026-05-28T15:41:36+04:00',
    })
  })

  it('parses a dotted prerelease (e.g. beta.1) version', () => {
    expect(
      parseVersionString(
        '1.28.2-beta.1+mainnet+git_abc123_2026-05-28T15:41:36+04:00',
      ),
    ).toEqual({
      version: '1.28.2-beta.1',
      network: 'mainnet',
      commit: 'abc123',
      date: '2026-05-28T15:41:36+04:00',
    })
  })

  it('returns undefined for an unrecognized string', () => {
    expect(parseVersionString('not-a-version')).toBeUndefined()
  })
})
