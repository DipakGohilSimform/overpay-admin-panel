/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TableProps } from 'antd'
import { Table } from '@/components/Ant/Table'
import { Sort } from '@/components/Icons'
import NameContent from '@/components/Table/NameContent'
import { Avatar } from '@/components/Ant'
import Data from '@/components/Table/Data'
import Currency from '@/components/Table/Currency'

interface DataType {
  key: string
  name: string
  icon: React.ReactNode
  email: string
  account_type: string
  currency: string
  img: string
  date_time: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name/Business',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => <NameContent icon={record.icon} name={record.name} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_, record) => <Data text={record.email} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Account Type',
    dataIndex: 'account_type',
    key: 'account_type',
    render: (_, record) => <Data text={record.account_type} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    render: (_, record) => <Currency img={record.img} value={record.currency} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (_, record) => <Data text={record.date_time} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'Guy Hawkins',
    icon: <Avatar src="/images/GuyHawkins.png" size={48} />,
    email: 'guy.hawkins@mail.com',
    account_type: 'Business',
    currency: 'USD',
    img: '/images/united_states.png',
    date_time: '20 Jan 2022, 09.00 PM'
  },
  {
    key: '2',
    name: 'Roselle Ehrman',
    icon: <Avatar src="/images/rose.png" size={48} />,
    email: 'roselleehrman@mail.com',
    account_type: 'Personal',
    currency: 'GBP',
    img: '/images/united_kingdom.png',
    date_time: '20 Jan 2022, 07.00 PM'
  },
  {
    key: '3',
    name: 'Marielle Wiging',
    icon: <Avatar src="/images/marielle.png" size={48} />,
    email: 'wiging_marie@mail.com',
    account_type: 'Personal',
    currency: 'EUR',
    img: '/images/euro.png',
    date_time: '20 Jan 2022, 06.00 PM'
  },
  {
    key: '4',
    name: 'Cyndy Lillibridge',
    icon: <Avatar src="/images/cyndy.png" size={48} />,
    email: 'cindylillibridge@mail.com',
    account_type: 'Business',
    currency: 'EUR',
    img: '/images/euro.png',
    date_time: '17 Jan 2022, 10.00 PM'
  },
  {
    key: '5',
    name: 'Darcel Ballentine',
    icon: <Avatar src="/images/darcel.png" size={48} />,
    email: 'darcelballenti@mail.com',
    account_type: 'Personal',
    currency: 'EUR',
    img: '/images/euro.png',
    date_time: '15 Jan 2022, 04.00 PM'
  },
  {
    key: '6',
    name: 'Tanner Stafford',
    icon: <Avatar src="/images/tanner.png" size={48} />,
    email: 'stafford.tenn@mail.com',
    account_type: 'stafford.tenn@mail.com',
    currency: 'GBP',
    img: '/images/united_kingdom.png',
    date_time: '15 Jan 2022, 04.00 PM'
  },
  {
    key: '7',
    name: 'Francene Vandyne',
    icon: <Avatar src="/images/francene.png" size={48} />,
    email: 'stafford.tenn@mail.com',
    account_type: 'vandyne0090@mail.com',
    currency: 'GBP',
    img: '/images/united_kingdom.png',
    date_time: '15 Jan 2022, 04.00 PM'
  },
  {
    key: '8',
    name: 'Elmer Laverty',
    icon: <Avatar src="/images/elmer.png" size={48} />,
    email: 'elmerlaverty@mail.com',
    account_type: 'vandyne0090@mail.com',
    currency: 'GBP',
    img: '/images/united_kingdom.png',
    date_time: '15 Jan 2022, 04.00 PM'
  }
]

export default function RecipientListing() {
  return <Table columns={columns} dataSource={data} pagination={false} />
}
