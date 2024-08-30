import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    headerCellStyle?: string
    bodyCellStyle?: string
  }
}
