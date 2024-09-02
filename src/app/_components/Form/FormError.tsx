import { Description } from '@headlessui/react'

export type FormErrorProps = {
  error?: string
  hideError?: boolean // #Q: When is this used?
}

export function FormError({ error, hideError = false }: FormErrorProps) {
  if (hideError) {
    return null
  }

  return (
    <div className="mt-2 h-6">
      {error && <FormError.Message error={error} />}
    </div>
  )
}

// #Q: Why is this a separate component?
FormError.Message = function Message({ error }: Pick<FormErrorProps, 'error'>) {
  return <Description className="text-nowrap text-red-400">{error}</Description>
}
