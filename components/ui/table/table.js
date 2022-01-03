import clsx from 'clsx'
import { useTable, usePagination } from 'react-table'

/* eslint-disable react/jsx-key */

export default function Table ({ columns, data, className }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    state: { pageIndex }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    usePagination
  )

  const classes = clsx('ui-table', className)

  // Render the UI for your table
  return (
    <div className={classes}>
      <div className="ui-table__wrap">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
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

      <div className="ui-table__footer md:flex-row">
        <div className="ui-table__total">Total: 50 items</div>
        <ul className="ui-table__pagination md:mt-0">
          {new Array(pageCount).fill().map((_, i) => (
            <li
              key={i}
              className={clsx({ '--active': pageIndex === i })}
              onClick={() => gotoPage(i)}
            >{i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
