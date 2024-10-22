import type { PropsWithChildren } from 'react'

import { Description } from '@headlessui/react'

export type FormErrorProps = {
  error?: string
}

export function FormError({ error }: FormErrorProps) {
  return (
    <FormError.Container>
      {error && <FormError.Message error={error} />}
    </FormError.Container>
  )
}

FormError.Container = function Container({ children }: PropsWithChildren) {
  return <div className="h-6">{children}</div>
}

FormError.Message = function Message({ error }: Pick<FormErrorProps, 'error'>) {
  return <Description className="text-nowrap text-red-400">{error}</Description>
}
