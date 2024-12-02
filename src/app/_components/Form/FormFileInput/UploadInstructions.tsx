import { Image } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import prettyBytes from 'pretty-bytes'

import { Icon } from '@/components/Icon'

import type { FormFileInputProps } from './FormFileInput'

type UploadInstructionsProps = Pick<
  FormFileInputProps,
  'accept' | 'maxSize' | 'error'
>

export function UploadInstructions({
  accept,
  maxSize,
  error,
}: UploadInstructionsProps) {
  return (
    <div
      aria-label="Instructions to upload a file"
      className={clsx(
        'flex h-full w-full items-center justify-center rounded-lg border border-dashed border-brand-300 peer-focus:brand-outline group-hover:border-brand-400',
        error && 'border-red-400',
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <Icon component={Image} size={80} weight="fill" />
        <p className="max-w-xs text-center text-brand-100">
          <span className="font-bold text-brand-300 group-hover:text-brand-400">
            Upload a file
          </span>
          <span>
            {' '}
            or drag and drop {getDisplayableFileFormats(accept)} up to{' '}
            {prettyBytes(maxSize)}
          </span>
        </p>
      </div>
    </div>
  )
}

function getDisplayableFileFormats(
  formatsWithLeadingDot: FormFileInputProps['accept'],
) {
  const formats = formatsWithLeadingDot.map((format) => format.replace('.', ''))

  if (formats.length === 0) {
    return 'any file type'
  }

  if (formats.length === 1) {
    return `${formats[0]} file`
  }

  if (formats.length === 2) {
    return `${formats[0]} and ${formats[1]} files`
  }

  const lastFormat = formats.pop()
  return `${formats.join(', ')}, and ${lastFormat} files`
}
