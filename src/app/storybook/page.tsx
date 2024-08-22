'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { ControlledFormCheckbox } from '@/components/Form/ControlledFormCheckbox'
import { ControlledFormFileInput } from '@/components/Form/ControlledFormFileInput'
import { ControlledFormInput } from '@/components/Form/ControlledFormInput'
import { ControlledFormListbox } from '@/components/Form/ControlledFormListbox'
import { ControlledFormTextarea } from '@/components/Form/ControlledFormTextarea'
import { Form } from '@/components/Form/Form'
import { FormCombobox } from '@/components/Form/FormCombobox'
import { FormRadioInput } from '@/components/Form/FormRadioInput'

const MAX_FILE_SIZE_IN_BYTES = 10_000
const CHARACTER_LIMIT = 1_600

const TestSchema = z.object({
  title: z.string().min(1, { message: 'This field is required' }),
  description: z
    .string({ message: 'This field is required' })
    .min(1, { message: 'This field is required' })
    .max(CHARACTER_LIMIT, { message: 'This field is too long' }),
  person: z.object({
    id: z.string(),
    name: z.string(),
    count: z.number().optional(),
  }),
  isCool: z.boolean(),
  isSuperCool: z.boolean(),
  logo:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList, {
            message: 'Logo is required',
          })
          .refine(validateFileSizes, {
            message: 'Logo size exceeds the limit',
          }),
})

type FormData = z.infer<typeof TestSchema>

const people: Array<FormData['person']> = [
  { id: '1', name: 'Durward Reynolds', count: 10 },
  { id: '2', name: 'Kenton Towne', count: 5 },
  { id: '3', name: 'Therese Wunsch', count: 2 },
  { id: '4', name: 'Benedict Kessler', count: 18 },
  { id: '5', name: 'Katelyn Rohan', count: 729 },
]

type Choice = {
  id: 'new' | 'update'
  name: string
}

const choices: Array<Choice> = [
  { id: 'new', name: 'Submit Project' },
  { id: 'update', name: 'Update Project' },
]

type Project = {
  id: string
  name: string
}

const cryptoProjects: Array<Project> = [
  { id: '1', name: 'QuantumCoin' },
  { id: '2', name: 'MetaBlock' },
  { id: '3', name: 'CryptoNova' },
  { id: '4', name: 'StellarByte' },
  { id: '5', name: 'ChainLinker' },
  { id: '6', name: 'LunaToken' },
  { id: '7', name: 'EtherWave' },
  { id: '8', name: 'NeoVerse' },
  { id: '9', name: 'AeroChain' },
  { id: '10', name: 'BitFusion' },
  { id: '11', name: 'BlockStorm' },
  { id: '12', name: 'CryptoSphere' },
  { id: '13', name: 'SolarFlareCoin' },
  { id: '14', name: 'MiraChain' },
  { id: '15', name: 'NovaDex' },
  { id: '16', name: 'TitaniumToken' },
  { id: '17', name: 'AstraCoin' },
  { id: '18', name: 'QuantumByte' },
  { id: '19', name: 'OrionChain' },
  { id: '20', name: 'LunaBlock' },
  { id: '21', name: 'EtherNova' },
  { id: '22', name: 'StellarChain' },
  { id: '23', name: 'NeoByte' },
  { id: '24', name: 'SolarNova' },
  { id: '25', name: 'QuantumLink' },
  { id: '26', name: 'MetaWave' },
  { id: '27', name: 'CryptoTitan' },
  { id: '28', name: 'FusionDex' },
  { id: '29', name: 'OrionLink' },
  { id: '30', name: 'LunaFusion' },
  { id: '31', name: 'NovaBlock' },
  { id: '32', name: 'ChainNova' },
  { id: '33', name: 'EtherStorm' },
  { id: '34', name: 'BitTitan' },
  { id: '35', name: 'QuantumStorm' },
  { id: '36', name: 'MetaFusion' },
  { id: '37', name: 'CryptoAero' },
  { id: '38', name: 'LunaSphere' },
  { id: '39', name: 'NeoStorm' },
  { id: '40', name: 'SolarTitan' },
  { id: '41', name: 'QuantumAero' },
  { id: '42', name: 'StellarWave' },
  { id: '43', name: 'NovaLink' },
  { id: '44', name: 'ChainTitan' },
  { id: '45', name: 'CryptoStorm' },
  { id: '46', name: 'OrionBlock' },
  { id: '47', name: 'BitNova' },
  { id: '48', name: 'MetaSphere' },
  { id: '49', name: 'LunaDex' },
  { id: '50', name: 'AstraChain' },
  { id: '51', name: 'QuantumDex' },
  { id: '52', name: 'EtherByte' },
  { id: '53', name: 'NeoFusion' },
  { id: '54', name: 'SolarBlock' },
  { id: '55', name: 'MetaTitan' },
  { id: '56', name: 'NovaAero' },
  { id: '57', name: 'CryptoWave' },
  { id: '58', name: 'StellarNova' },
  { id: '59', name: 'LunaLink' },
  { id: '60', name: 'ChainStorm' },
  { id: '61', name: 'QuantumSphere' },
  { id: '62', name: 'OrionTitan' },
  { id: '63', name: 'NeoDex' },
  { id: '64', name: 'SolarWave' },
  { id: '65', name: 'MetaAero' },
  { id: '66', name: 'StellarDex' },
  { id: '67', name: 'LunaByte' },
  { id: '68', name: 'CryptoNovaDex' },
  { id: '69', name: 'ChainByte' },
  { id: '70', name: 'QuantumTitan' },
  { id: '71', name: 'OrionDex' },
  { id: '72', name: 'NeoBlock' },
  { id: '73', name: 'SolarFusion' },
  { id: '74', name: 'MetaNova' },
  { id: '75', name: 'LunaStorm' },
  { id: '76', name: 'StellarSphere' },
  { id: '77', name: 'CryptoBlock' },
  { id: '78', name: 'ChainFusion' },
  { id: '79', name: 'QuantumWave' },
  { id: '80', name: 'OrionSphere' },
]

export default function Storybook() {
  const [selectedRadio, setSelectedRadio] = useState<Choice>(choices[0])
  const [selectedProject, setSelectedProject] = useState<Project>()

  const methods = useForm<FormData>({
    resolver: zodResolver(TestSchema),
    defaultValues: { isCool: true },
  })

  return (
    <div className="max-w-readable space-y-6">
      <br />
      <h1 className="mb-8 text-2xl">Uncontrolled components</h1>

      <div className="max-w-sm">
        <FormRadioInput<Choice>
          options={choices}
          value={selectedRadio}
          onChange={setSelectedRadio}
        />
      </div>

      <FormCombobox
        label="What is the name of your project?"
        options={cryptoProjects}
        value={selectedProject}
        onChange={(project) => {
          if (project) {
            setSelectedProject(project)
          }
        }}
      />

      <br />
      <h1 className="mb-8 text-2xl">Controlled by React Hook Form</h1>

      <Form<FormData>
        methods={methods}
        className="space-y-4"
        onSubmit={console.log}
      >
        <div className="mb-8 flex flex-col gap-4">
          <ControlledFormCheckbox<FormData>
            disabled
            name="isCool"
            label="Are you cool?"
          />
          <ControlledFormCheckbox<FormData>
            name="isSuperCool"
            label="Are you really cool?"
          />
        </div>

        <ControlledFormInput<FormData>
          disabled
          name="title"
          label="A title"
          placeholder="The title of something"
        />

        <ControlledFormTextarea<FormData>
          disabled
          name="description"
          label="A text area"
          charcterLimit={CHARACTER_LIMIT}
          placeholder="Write a brief summary of your project..."
        />

        <ControlledFormListbox<FormData>
          disabled
          name="person"
          label="A Listbox"
          placeholder="Choose a person"
          options={people}
        />

        <ControlledFormFileInput<FormData>
          disabled
          name="logo"
          label="Choose a Logo for your project"
          accept={['.png', '.jpg', '.svg', '.webp']}
          maxSize={MAX_FILE_SIZE_IN_BYTES}
          description="For best quality, please submit a white logo with a transparent background, at least 1000px by 1000px, and under 100KB. You can use tools like Sqoosh to compress your image."
        />

        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

function validateFileSizes(files: FileList) {
  return Array.from(files).every((file) => file.size <= MAX_FILE_SIZE_IN_BYTES)
}
