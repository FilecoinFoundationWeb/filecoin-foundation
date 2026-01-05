import { clsx } from 'clsx'

const cellPadding = 'px-5 first:pl-7 last:pr-7'

type TableProps = React.ComponentProps<'table'> & {
  containerStyle?: React.CSSProperties
}

export function Table({ className, containerStyle, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="border-table-border relative w-full overflow-x-auto rounded-xl border"
      style={containerStyle}
    >
      <table
        data-slot="table"
        className={clsx('w-full border-separate border-spacing-0', className)}
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
        'text-table-foreground-muted bg-table-background/20 text-sm font-medium',
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
        'text-table-foreground text-base font-normal [&_tr:last-child_td]:border-b-0',
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
        'data-[state=selected]:bg-table-background h-14 transition-colors',
        className,
      )}
      {...props}
    />
  )
}

type TableHeadProps = React.ComponentProps<'th'> & {
  sticky?: boolean
}

function TableHead({ sticky, className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={clsx(
        'border-table-border border-b text-left align-middle font-medium whitespace-nowrap',
        cellPadding,
        sticky && 'sticky top-0 z-10 bg-(--color-table-background)',
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
      className={clsx(
        'border-table-border border-b align-middle whitespace-nowrap',
        cellPadding,
        className,
      )}
      {...props}
    />
  )
}
