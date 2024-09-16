import {
  Input,
  Description,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react'

import { FormField, type FormFieldProps } from '@/components/Form/FormField'

import { SelectedFile } from './SelectedFile'
import { UploadInstructions } from './UploadInstructions'

type ExcludedHeadlessUIProps =
  | 'type'
  | 'onChange'
  | 'accept'
  | 'multiple'
  | 'invalid'

export type FormFileInputProps = {
  files: Array<File> | null
  accept: Array<`.${string}`>
  maxSize: number
  description?: string | React.ReactNode
  onChange: (files: Array<File> | null) => void
} & Omit<HeadlessInputProps, ExcludedHeadlessUIProps> &
  FormFieldProps

export function FormFileInput({
  files,
  label,
  hideLabel,
  error,
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
      onChange(Array.from(files))
    }
  }

  return (
    <FormField label={label} hideLabel={hideLabel} error={error}>
      <div>
        <div className="group relative h-60 w-full md:h-52">
          {loadedFile ? (
            <SelectedFile file={loadedFile} onReset={resetFiles} />
          ) : (
            <>
              <Input
                {...rest}
                type="file"
                disabled={disabled}
                accept={accept.join(',')}
                invalid={Boolean(error)}
                multiple={false}
                className="peer absolute inset-0 z-10 opacity-0 ui-disabled:cursor-not-allowed ui-not-disabled:cursor-pointer"
                onChange={loadFiles}
              />
              <UploadInstructions
                accept={accept}
                maxSize={maxSize}
                error={error}
              />
            </>
          )}
        </div>

        {description && (
          <Description className="mt-4 text-sm text-brand-100">
            {description}
          </Description>
        )}
      </div>
    </FormField>
  )
}
