import { useState } from 'react'

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export function StorageCategoryListbox() {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]])

  return (
    <Listbox multiple value={selectedPeople} onChange={setSelectedPeople}>
      <ListboxButton>
        {selectedPeople.map((person) => person.name).join(', ')}
      </ListboxButton>
      <ListboxOptions anchor="bottom">
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="data-focus:bg-blue-100"
          >
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
