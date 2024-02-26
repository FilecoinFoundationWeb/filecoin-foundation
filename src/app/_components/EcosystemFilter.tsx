import React, { ChangeEvent } from 'react'

import configJson from '@/data/cmsConfigSchema.json'
const config: CMSConfig = configJson as CMSConfig

type Field = {
  name: string
  label: string
  widget: string
  options?: Option[]
}

type Collection = {
  name: string
  label: string
  fields?: Field[]
}

type CMSConfig = {
  collections: Collection[]
}

type Option = {
  label: string
  value: string
}

type OptionSelectProps = {
  label: string
  name: string
  options: Option[]
  onChange: (selectedValues: string[]) => void
}

type EcosystemFilterProps = {
  onTopicsChange: (selectedTopics: string[]) => void
  onTagsChange: (selectedTags: string[]) => void
}

function getFieldOptions(fields: Field[] = [], fieldName: string): Option[] {
  const field = fields.find((field) => field.name === fieldName)
  return field && field.options ? field.options : []
}

function OptionSelect({
  label,
  name,
  options,
  onChange,
}: OptionSelectProps): JSX.Element {
  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>): void {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )

    onChange(selectedOptions)
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-white block">
        {label}
      </label>
      <select multiple name={name} id={name} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-1">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function EcosystemFilter({
  onTopicsChange,
  onTagsChange,
}: EcosystemFilterProps) {
  const collection = config.collections.find(
    (collection) => collection.name === 'ecosystem_projects'
  )

  if (!collection || !collection.fields) {
    console.error('Collection or fields not found')
    return null
  }

  const topics = getFieldOptions(collection.fields, 'f_topic')
  const tags = getFieldOptions(collection.fields, 'f_tag')

  return (
    <div className="flex flex-col gap-2 text-brand-800">
      <OptionSelect
        label="Select Topics"
        name="topics"
        options={topics}
        onChange={(selectedTopics) => onTopicsChange(selectedTopics)}
      />
      <OptionSelect
        label="Select Tags"
        name="tags"
        options={tags}
        onChange={(selectedTags) => onTagsChange(selectedTags)}
      />
    </div>
  )
}
