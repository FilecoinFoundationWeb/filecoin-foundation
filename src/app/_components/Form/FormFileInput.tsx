import NextImage from 'next/image'

import {
  Field,
  Input,
  Description,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react'
import { Image, X } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { FormError, type FormErrorProps } from '@/components/Form/FormError'
import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'
import { Icon } from '@/components/Icon'

type HardCodedProps = 'type' | 'onChange' | 'accept'

export type FormFileInputProps = {
  files: FileList | null
  accept: Array<`.${string}`>
  maxSize: number
  description?: string | React.ReactNode
  onChange: (files: FileList | null) => void
} & Omit<HeadlessInputProps, HardCodedProps> &
  FormLabelProps &
  FormErrorProps

export function FormFileInput({
  files,
  label,
  hideLabel,
  error,
  hideError,
  disabled,
  onChange,
  description,
  maxSize,
  accept,
  ...rest
}: FormFileInputProps) {
  const loadedFile = files?.[0]

  function resetFiles() {
    onChange(null)
  }

  function loadFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files

    if (files) {
      onChange(files)
    }
  }

  return (
    <Field className="w-full">
      <FormLabel label={label} hideLabel={hideLabel} />

      <div className="group relative h-48 w-full">
        {loadedFile ? (
          <SelectedFile file={loadedFile} onReset={resetFiles} />
        ) : (
          <>
            <UploadInstructions
              accept={accept}
              maxSize={maxSize}
              error={error}
            />
            <Input
              {...rest}
              type="file"
              disabled={disabled}
              accept={accept.join(',')}
              invalid={Boolean(error)}
              className={clsx(
                'absolute inset-0 z-10 opacity-0',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
              onChange={loadFiles}
            />
          </>
        )}
      </div>

      {description && (
        <Description className="mt-4 text-sm text-brand-100">
          {description}
        </Description>
      )}

      <FormError error={error} hideError={hideError} />
    </Field>
  )
}

type SelectedFileProps = {
  file: File
  onReset: () => void
}

function SelectedFile({ file, onReset }: SelectedFileProps) {
  return (
    <div className="h-full w-full">
      <NextImage
        fill
        src={URL.createObjectURL(file)}
        alt={file.name}
        className="rounded-lg object-cover"
      />

      <button
        className="group absolute right-2 top-2 rounded-full p-2 focus:brand-outline"
        aria-label="Remove selected file"
        onClick={onReset}
      >
        <div className="z-10 flex size-8 items-center justify-center rounded-full bg-brand-100 p-3 text-brand-700 shadow-brand-800/20 drop-shadow-md group-hover:bg-brand-200">
          <Icon component={X} size={20} />
        </div>
      </button>
    </div>
  )
}

function UploadInstructions({
  accept,
  maxSize,
  error,
}: Pick<FormFileInputProps, 'accept' | 'maxSize' | 'error'>) {
  return (
    <div
      aria-label="Instructions to upload a file"
      className={clsx(
        'flex h-full w-full items-center justify-center rounded-lg border border-dashed border-brand-300 group-hover:border-brand-400',
        error && 'border-red-400',
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <Icon component={Image} size={80} weight="fill" />

        <p className="text-center text-brand-100" role="button">
          <strong className="text-brand-300 group-hover:text-brand-400">
            Upload a file
          </strong>{' '}
          or drag and drop <br /> {getReadableAcceptedFormats(accept)} up to{' '}
          {getReadableMaxSize(maxSize)}
        </p>
      </div>
    </div>
  )
}

function getReadableAcceptedFormats(
  formatsWithLeadingDot: FormFileInputProps['accept'],
) {
  const formats = formatsWithLeadingDot.map((format) => format.replace('.', ''))

  if (formats.length === 0) {
    return 'any file type'
  }

  if (formats.length === 1) {
    return `${formats[0]} files`
  }

  if (formats.length === 2) {
    return `${formats[0]} and ${formats[1]} files`
  }

  const lastFormat = formats.pop()
  return `${formats.join(', ')}, and ${lastFormat} files`
}

function getReadableMaxSize(size: FormFileInputProps['maxSize']) {
  if (size < 1_000_000) {
    return `${(size / 1_000).toFixed()}KB`
  }

  return `${(size / 1_000_000).toFixed()}MB`
}
