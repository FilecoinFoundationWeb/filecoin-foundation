'use server'

import { encrypt as _encrypt } from '@/_utils/encryption'

export async function encrypt(value: string) {
  return _encrypt(value)
}
