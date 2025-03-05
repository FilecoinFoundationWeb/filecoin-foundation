import sharedConfig from '@filecoin-foundation/tailwind-config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
}

export default config
