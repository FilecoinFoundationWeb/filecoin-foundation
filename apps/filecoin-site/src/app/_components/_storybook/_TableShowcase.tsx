'use client'

import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'
import { TanstackTable } from '@filecoin-foundation/ui-filecoin/Table/TanstackTable'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const data: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'sally',
    lastName: 'smith',
    age: 30,
    visits: 20,
    status: 'Single',
    progress: 10,
  },
  {
    firstName: 'joe',
    lastName: 'bloggs',
    age: 20,
    visits: 20,
    status: 'Single',
    progress: 10,
  },
  {
    firstName: 'joe',
    lastName: 'bloggs',
    age: 20,
    visits: 20,
    status: 'Single',
    progress: 10,
  },
  {
    firstName: 'joe',
    lastName: 'bloggs',
    age: 20,
    visits: 20,
    status: 'Single',
    progress: 10,
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: 'Last Name',
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
  }),
]

export function TableShowcase() {
  const table = useReactTable({
    data,
    columns,
    enableMultiSort: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <PageSection backgroundVariant="light">
      <SectionContent centerTitle headingTag="h1" title="Table Style Showcase">
        <TanstackTable table={table} />
      </SectionContent>
    </PageSection>
  )
}
