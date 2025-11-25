import { clsx } from 'clsx'

const cellPadding = 'px-5 first:pl-7 last:pr-7'

export function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className="border-table-border relative w-full overflow-x-auto rounded-xl border"
    >
      <table
        data-slot="table"
        className={clsx('w-full', className)}
        {...props}
      />
    </div>
  )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Head = TableHead
Table.Cell = TableCell

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={clsx(
        'text-table-foreground-muted bg-table-background/20 text-sm font-medium [&_tr]:border-b',
        className,
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={clsx(
        'text-table-foreground text-base font-normal [&_tr:last-child]:border-0',
        className,
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={clsx(
        'data-[state=selected]:bg-table-background border-table-border h-14 border-b transition-colors',
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={clsx(
        'text-left align-middle font-medium whitespace-nowrap',
        cellPadding,
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={clsx('align-middle whitespace-nowrap', cellPadding, className)}
      {...props}
    />
  )
}
