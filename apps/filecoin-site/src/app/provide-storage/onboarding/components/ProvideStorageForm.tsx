'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormCheckbox } from '@filecoin-foundation/ui/FormCheckbox'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { ControlledFormTextarea } from '@filecoin-foundation/ui/FormTextarea'

import { Button } from '@/components/Button'

import {
  ProvideStorageFormSchema,
  type ProvideStorageFormData,
} from '../../schema/ProvideStorageFormSchema'

import { ProvideStoragePrivacyDisclaimer } from './ProvideStoragePrivacyDisclaimer'

export function ProvideStorageForm() {
  const form = useForm<ProvideStorageFormData>({
    resolver: zodResolver(ProvideStorageFormSchema),
    defaultValues: {
      communicationOptIn: false,
    },
  })

  const isSubmitting = form.formState.isSubmitting

  return (
    <ControlledForm<ProvideStorageFormData>
      form={form}
      className="space-y-15"
      onSubmit={(data) => console.log(data)}
    >
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ControlledFormInput<ProvideStorageFormData>
            name="firstName"
            label="First name"
            placeholder="Alex"
            disabled={isSubmitting}
          />
          <ControlledFormInput<ProvideStorageFormData>
            name="lastName"
            label="Last name"
            placeholder="Smith"
            disabled={isSubmitting}
          />
        </div>

        <ControlledFormInput<ProvideStorageFormData>
          name="businessEmail"
          label="Business email address"
          type="email"
          placeholder="alex@company.com"
          disabled={isSubmitting}
        />

        <ControlledFormInput<ProvideStorageFormData>
          name="companyName"
          label="Company name"
          placeholder="Company Co"
          disabled={isSubmitting}
        />

        <ControlledFormTextarea<ProvideStorageFormData>
          addOptionalToLabel
          name="additionalInfo"
          label="Additional information"
          placeholder="Share details about your setup, goals, or anything you'd like us to know."
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-8">
        <ProvideStoragePrivacyDisclaimer />

        <ControlledFormCheckbox<ProvideStorageFormData>
          name="communicationOptIn"
          label="I agree to receive other communications from Filecoin Foundation. You may unsubscribe from these communications at any time."
        />
      </div>

      <div className="grid md:block">
        <Button variant="primary" type="submit">
          Book onboarding call
        </Button>
      </div>
    </ControlledForm>
  )
}
