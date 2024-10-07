'use server'

import { decrypt as _decrypt } from '@/_utils/encryption'

export async function decrypt(value: string) {
  return _decrypt(value)
}
