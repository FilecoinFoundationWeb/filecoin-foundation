import { Description } from '@headlessui/react'

export type FormErrorProps = {
  error?: string
  hideError?: boolean
}

export function FormError({ error, hideError = false }: FormErrorProps) {
  if (hideError) {
    return null
  }

  return (
    <div className="mt-2 h-6">{error && <ErrorMessage error={error} />}</div>
  )
}

function ErrorMessage({ error }: Pick<FormErrorProps, 'error'>) {
  return <Description className="text-nowrap text-red-400">{error}</Description>
}

FormError.Message = ErrorMessage
