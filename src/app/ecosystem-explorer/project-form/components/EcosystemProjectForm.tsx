'use client'
import { useRef } from 'react'

import { Field } from '@headlessui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

import { Button } from '@/components/Button'
import { ControlledForm } from '@/components/Form/ControlledForm'
import { ControlledFormCheckbox } from '@/components/Form/ControlledFormCheckbox'
import { ControlledFormFileInput } from '@/components/Form/ControlledFormFileInput'
import { ControlledFormInput } from '@/components/Form/ControlledFormInput'
import { ControlledFormListbox } from '@/components/Form/ControlledFormListbox'
import { ControlledFormTextarea } from '@/components/Form/ControlledFormTextarea'
import { FormError } from '@/components/Form/FormError'
import { formFieldStyle } from '@/components/Form/FormField'
import { FormLabel } from '@/components/Form/FormLabel'
import { TextLink } from '@/components/TextLink'

import { getCategoryData } from '../actions/getCategoryData'
import {
  ALLOWED_IMAGE_FORMATS,
  BRIEF_CHARACTER_LIMIT,
  MAX_FILE_SIZE_IN_BYTES,
  NETWORK_USE_CASE_CHARACTER_LIMIT,
  SWR_KEYS,
} from '../constants'
import {
  EcosystemProjectFormSchema,
  type EcosystemProjectFormData,
  type EcosystemProjectFormDataWithoutLogo,
  type EcosystemProjectFormLogoData,
} from '../schema/EcosystemProjectFormSchema'
import type { SubmitOption } from '../types'
import { getOptionsFromObject } from '../utils/getOptionsFromObject'
import { getYearOptions } from '../utils/getYearOptions'

import { ErrorMessage } from './ErrorMessage'
import { FormSection } from './FormSection'
import { Loader } from './Loader'

type StringOrUndefined = string | undefined

type EcosystemProjectFormProps = {
  initialFormData: EcosystemProjectFormDataWithoutLogo
  logo?: EcosystemProjectFormLogoData
  onSubmit: (formData: EcosystemProjectFormData, option: SubmitOption) => void
  isUpdateForm?: boolean
}

export function EcosystemProjectForm({
  initialFormData,
  logo,
  isUpdateForm,
  onSubmit,
}: EcosystemProjectFormProps) {
  const logoUpdateState = useRef<boolean>(false)

  const { data: categories, error } = useSWR(
    SWR_KEYS.categories,
    getCategoryData,
  )

  const form = useForm<EcosystemProjectFormData>({
    resolver: zodResolver(EcosystemProjectFormSchema),
    defaultValues: { ...initialFormData, logo },
  })

  if (!categories) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message="Couldn't load categories" />
  }

  const yearOptions = getYearOptions('desc')
  const categoryOptions = getOptionsFromObject(categories.categoryData)
  const subCategoryOptions = getOptionsFromObject(categories.subCategoryData)

  const isSubmitting = form.formState.isSubmitting
  const logoHasChanged = form.formState.dirtyFields.logo

  if (logoHasChanged && isUpdateForm) {
    logoUpdateState.current = true
  }

  return (
    <ControlledForm<EcosystemProjectFormData>
      form={form}
      className="md:max-w-readable"
      onSubmit={(data) =>
        onSubmit(data, { logoIsUpdated: logoUpdateState.current })
      }
    >
      <FormSection
        title="Personal Information"
        description="We'll use this to verify your site updates and reach out to you in case of questions."
      >
        <ControlledFormInput<EcosystemProjectFormData>
          name="name"
          label="Name"
          placeholder="Your Name"
          disabled={isSubmitting}
        />
        <ControlledFormInput<EcosystemProjectFormData>
          name="email"
          label="Email"
          placeholder="Your Email"
          type="email"
          disabled={isSubmitting}
        />
      </FormSection>

      <FormSection title="Project Details">
        <ControlledFormInput<EcosystemProjectFormData>
          name="projectName"
          label="Project Name"
          placeholder="Project Name"
          disabled={isUpdateForm || isSubmitting}
        />

        <Field className={formFieldStyle}>
          <FormLabel
            label="Which technology does your project utilize?"
            as="p"
          />
          <div className="flex flex-col gap-4">
            <ControlledFormCheckbox<EcosystemProjectFormData>
              name="tech.filecoin"
              label="Filecoin"
              disabled={isSubmitting}
            />
            <ControlledFormCheckbox<EcosystemProjectFormData>
              name="tech.ipfs"
              label="IPFS"
              disabled={isSubmitting}
            />
          </div>
          <FormError error={form.formState.errors.tech?.root?.message} />
        </Field>

        <ControlledFormListbox<EcosystemProjectFormData>
          name="yearJoined"
          label="What year did your project start using Filecoin or IPFS?"
          placeholder="Select Year"
          options={yearOptions}
          disabled={isSubmitting}
          innerWidth="w-40"
        />

        <ControlledFormTextarea<EcosystemProjectFormData>
          name="briefSummary"
          label="Brief Summary"
          placeholder="Write a brief summary of your project..."
          characterLimit={BRIEF_CHARACTER_LIMIT}
          disabled={isSubmitting}
        />

        <ControlledFormTextarea<EcosystemProjectFormData>
          name="networkUseCase"
          label="How do you use the Filecoin Network?"
          placeholder="Describe how your project uses the Filecoin network..."
          characterLimit={NETWORK_USE_CASE_CHARACTER_LIMIT}
          disabled={isSubmitting}
        />

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-evenly sm:gap-6">
          <div className="min-w-0 sm:w-1/2">
            <ControlledFormListbox<EcosystemProjectFormData>
              name="category"
              label="Category"
              placeholder="Select Category"
              options={categoryOptions}
              disabled={isSubmitting}
            />
          </div>
          <div className="min-w-0 sm:w-1/2">
            <ControlledFormListbox<EcosystemProjectFormData>
              name="topic"
              label="Subcategory"
              placeholder="Select Subcategory"
              options={subCategoryOptions}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <ControlledFormFileInput<EcosystemProjectFormData>
          name="logo"
          label="Choose a logo for your project"
          accept={ALLOWED_IMAGE_FORMATS}
          maxSize={MAX_FILE_SIZE_IN_BYTES}
          disabled={isSubmitting}
          description={
            <>
              For best quality, please submit a white logo with a transparent
              background, at least 1000px by 1000px, and under 100KB. You can
              use tools like{' '}
              <TextLink href="https://squoosh.app/">Squoosh</TextLink> to
              compress your image.
            </>
          }
        />

        <ControlledFormInput<EcosystemProjectFormData>
          name="websiteUrl"
          label="Website URL"
          placeholder="Website URL"
          type="url"
          disabled={isSubmitting}
        />

        <ControlledFormInput<EcosystemProjectFormData, StringOrUndefined>
          addOptionalToLabel
          name="youtubeUrl"
          label="YouTube Video URL"
          placeholder="Video URL"
          type="url"
          disabled={isSubmitting}
        />

        <ControlledFormInput<EcosystemProjectFormData, StringOrUndefined>
          addOptionalToLabel
          name="githubUrl"
          label="GitHub Repository URL"
          placeholder="GitHub Repository URL"
          type="url"
          disabled={isSubmitting}
        />

        <ControlledFormInput<EcosystemProjectFormData, StringOrUndefined>
          addOptionalToLabel
          name="xUrl"
          label="X Profile URL"
          placeholder="X Profile URL"
          type="url"
          disabled={isSubmitting}
        />
      </FormSection>
      <Button disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Submitting...' : 'Submit Project'}
      </Button>
    </ControlledForm>
  )
}
