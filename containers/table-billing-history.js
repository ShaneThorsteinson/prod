import { useMemo } from 'react'
import Table from 'components/ui/table'

export default function TableBillingHistory () {
  const columns = useMemo(
    () => [
      {
        Header: 'date',
        accessor: 'date'
      },
      {
        Header: 'billing period',
        accessor: 'period',
      },
      {
        Header: 'billing plan',
        accessor: 'plan'
      },
      {
        Header: 'amount',
        accessor: 'amount'
      }
    ],
    []
  )

  const data = new Array(50).fill().map((_, i) => ({
    date: 'February 18, 2021',
    period: 'February 18 - March 18',
    plan: 'CODAgent Prestige',
    amount: `$${i + Math.floor(Math.random() * 100)}`
  }))

  return (
    <Table columns={columns} data={data} />
  )
}
