import clsx from 'clsx'
import { useTable } from 'react-table'

/* eslint-disable react/jsx-key */

export default function TableRows ({ columns, data, className }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    }
  )

  const classes = clsx('ui-table', className)

  // Render the UI for your table
  return (
    <div className={classes}>
      <div className="ui-table__wrap custom-scroll">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {/* {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))} */}
                {headerGroup.headers.map(column => {
                  return (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
