import { TableProps } from 'antd'
import { Input, Table } from '@/components/Ant'

interface DataType {
  key: string
  item: React.ReactNode
  qty: React.ReactNode
  hours: React.ReactNode
  rate: React.ReactNode
  total: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    key: 'item',
    dataIndex: 'item',
    title: 'ITEM',
    width: 400
  },
  {
    key: 'qty',
    dataIndex: 'qty',
    title: 'QTY',
    width: 140
  },
  {
    key: 'hours',
    dataIndex: 'hours',
    title: 'Hours',
    width: 140
  },
  {
    key: 'rate',
    dataIndex: 'rate',
    title: 'Rate',
    width: 140
  },
  {
    key: 'total',
    dataIndex: 'total',
    title: 'Total',
    width: 140
  }
]

const data: DataType[] = [
  {
    key: '1',
    item: 'Payment - New Design Project',
    qty: 1,
    hours: 40,
    rate: '$10.00',
    total: '$400.00'
  },
  {
    key: '2',
    item: 'Payment - New Design Project',
    qty: 1,
    hours: 40,
    rate: '$10.00',
    total: '$400.00'
  },
  {
    key: '3',
    item: <Input placeholder="Description" />,
    qty: <Input placeholder="0" />,
    hours: <Input placeholder="0" />,
    rate: <Input placeholder="0" />,
    total: '$400.00'
  }
]

export default function InvoiceTable() {
  return (
    <Table columns={columns} dataSource={data} pagination={false} className="invoice-items-table" />
  )
}
