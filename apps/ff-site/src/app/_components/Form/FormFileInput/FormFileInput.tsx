import { Input, type InputProps as HeadlessInputProps } from '@headlessui/react'

import {
  FormField,
  type FormFieldProps,
} from '@filecoin-foundation/ui/FormField'
import {
  FormLabelDescription,
  type FormLabelDescriptionProps,
} from '@filecoin-foundation/ui/FormField'

import { SelectedFile } from './SelectedFile'
import { UploadInstructions } from './UploadInstructions'

type ExcludedHeadlessUIProps =
  | 'type'
  | 'onChange'
  | 'accept'
  | 'multiple'
  | 'invalid'

type FileExtension = `.${string}`
type FileOrNull = File | null

export type FormFileInputProps = {
  file: FileOrNull
  accept: Array<FileExtension> | ReadonlyArray<FileExtension>
  maxSize: number
  description?: FormLabelDescriptionProps['children']
  onChange: (file: FileOrNull) => void
} & Omit<HeadlessInputProps, ExcludedHeadlessUIProps> &
  FormFieldProps

export function FormFileInput({
  file,
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
  function resetFile() {
    onChange(null)
  }

  function loadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    onChange(files ? files[0] : null)
  }

  return (
    <FormField label={label} hideLabel={hideLabel} error={error}>
      <div>
        <div className="group relative h-60 w-full md:h-52">
          {file ? (
            <SelectedFile file={file} onReset={resetFile} />
          ) : (
            <>
              <Input
                {...rest}
                type="file"
                disabled={disabled}
                accept={accept.join(',')}
                invalid={Boolean(error)}
                multiple={false}
                className="peer ui-disabled:cursor-not-allowed ui-not-disabled:cursor-pointer absolute inset-0 z-10 opacity-0"
                onChange={loadFile}
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
          <div className="mt-4">
            <FormLabelDescription>{description}</FormLabelDescription>
          </div>
        )}
      </div>
    </FormField>
  )
}
