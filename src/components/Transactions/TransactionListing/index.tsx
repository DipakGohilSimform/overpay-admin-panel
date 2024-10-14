/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Table } from '@/components/Ant/Table'
import { BOA, BTC, Facebook, Sort, Stripe, UI8, Upwork } from '@/components/Icons'
import Amount from '@/components/Table/Amount'
import NameContent from '@/components/Table/NameContent'
import Status from '@/components/Table/Status'
import { Avatar } from '@/components/Ant'
import DateWithTime from '@/components/Table/DateWithTime'
import TransactionDetail from '../TransactionDetail'

interface DataType {
  key: string
  name: string
  icon: React.ReactNode
  color: string
  statusText: string
  date: any
  time: string
  invoice: string
  amount: any
  action: string
}

const columns = [
  {
    title: 'Name/Business',
    dataIndex: 'name',
    key: 'name',
    render: (_: any, record: any) => (
      <NameContent icon={record.icon} name={record.name} action={record.action} />
    ),
    sorter: (a: any, b: any) => a.name.length - b.name.length,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (_: any, record: any) => <DateWithTime date={record.date} time={record.time} />,
    sorter: (a: any, b: any) => a.date - b.date,
    sortIcon: (_props: { sortOrder: any }) => <Sort />,
    width: 300
  },
  {
    title: 'Invoice ID',
    dataIndex: 'invoice',
    key: 'invoice',
    render: (_: any, record: any) => <DateWithTime date={record.invoice} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (_: any, record: any) => <Amount amount={record.amount} />,
    sorter: (a: any, b: any) => a.amount - b.amount,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: any, record: any) => <Status color={record.color} text={record.statusText} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <TransactionDetail />
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'Stripe',
    icon: <Stripe />,
    color: 'volcano',
    statusText: 'Pending',
    date: 'Jan 29, 2022',
    time: 'at 08.00 PM',
    invoice: 'PMX09812',
    amount: '+$300.00',
    action: 'Withdraw'
  },
  {
    key: '2',
    name: 'Bitcoin transaction',
    icon: <BTC />,
    color: 'green',
    statusText: 'Success',
    date: 'Jan 25, 2022',
    time: 'at 09.15 AM',
    invoice: 'PMX0979',
    amount: '-$890.15',
    action: 'Deposit'
  },
  {
    key: '3',
    name: 'Facebook charge',
    icon: <Facebook />,
    color: 'green',
    statusText: 'Success',
    date: 'Jan 25, 2022',
    time: 'at 06.45 AM',
    invoice: 'OVF19244',
    amount: '-$600.00',
    action: 'Advertising'
  },
  {
    key: '4',
    name: 'Upwork',
    icon: <Upwork />,
    color: 'volcano',
    statusText: 'Pending',
    date: 'Jan 23, 2022',
    time: 'at 09.00 AM',
    invoice: 'AMX09871',
    amount: '+1,243.00',
    action: 'Business'
  },
  {
    key: '5',
    name: 'Send to Antonio',
    icon: <Avatar src="/images/antonio1.png" size={48} />,
    color: 'red',
    statusText: 'Failed',
    date: 'Jan 15, 2022',
    time: 'at 10.15 AM',
    invoice: 'PMX09873',
    amount: '-$123.00',
    action: 'Withdraw'
  },
  {
    key: '6',
    name: 'UI8.net',
    icon: <UI8 />,
    color: 'green',
    statusText: 'Success',
    date: 'Jan 15, 2022',
    time: 'at 09.00 AM',
    invoice: 'AMX89786',
    amount: '-$190.00',
    action: 'Payment'
  },
  {
    key: '7 ',
    name: 'Bank of America',
    icon: <BOA />,
    color: 'volcano',
    statusText: 'Pending',
    date: 'Jan 15, 2022',
    time: 'at 07.00 AM',
    invoice: 'AMX89785',
    amount: '-$1,565.99',
    action: 'Withdraw'
  }
]

export default function TransactionListing() {
  return <Table columns={columns} dataSource={data} pagination={false} />
}
