import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    headerCellStyle?: string
    bodyCellStyle?: string
    align?: 'center' | 'right' // left is the default
  }
}
