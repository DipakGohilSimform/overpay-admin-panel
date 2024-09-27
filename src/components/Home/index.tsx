import { Avatar, Button, Form, FormItem, Input, Select } from '../Ant'
import { Table } from '../Ant/Table'
import {
  ArrowRight,
  Bitcoin,
  CardReceive,
  CardSend,
  ChevronRight,
  DownOutline,
  ElementPlus,
  More,
  Paypal,
  Receipt
} from '../Icons'
import BorderedContainer from './BorderedContainer'
import { HomeWrapper } from './Home.styled'
import WalletWidgets from './WalletWidgets'
import NameContent from '../Table/NameContent'
import Status from '../Table/Status'
import DateWithCalendar from '../Table/DateWithCalendar'
import Amount from '../Table/Amount'

interface DataType {
  key: string
  name: string
  icon: React.ReactNode
  color: string
  statusText: string
  date: string
  amount: string
}

const columns = [
  {
    key: 'name',
    render: (record: DataType) => <NameContent icon={record.icon} name={record.name} />
  },
  {
    key: 'date',
    render: (record: DataType) => <DateWithCalendar date={record.date} />
  },
  {
    key: 'amount',
    render: (record: DataType) => <Amount amount={record.amount} />
  },
  {
    key: 'status',
    render: (record: DataType) => <Status color={record.color} text={record.statusText} />
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'Bitcoin transactions',
    icon: <Bitcoin />,
    color: 'green',
    statusText: 'Success',
    date: 'Jan 16, 2022',
    amount: '-$835.00'
  },
  {
    key: '2',
    name: 'Sent to Antonio',
    icon: <Avatar src="/images/antonio1.png" size={40} />,
    color: 'volcano',
    statusText: 'Pending',
    date: 'Jan 14, 2022',
    amount: '-$150.00'
  },
  {
    key: '3',
    name: 'Witdraw Paypal',
    icon: <Paypal />,
    color: 'green',
    statusText: 'Success',
    date: 'Jan 13, 2022',
    amount: '+$200.00'
  }
]

export default function HomeContent() {
  return (
    <HomeWrapper>
      <div className="graph-container">
        <div className="cashback-content">
          <div className="upgrade">
            <h4>Unlimited Cashback</h4>
            <p>Instant 2% back on all your spend to your account</p>
            <Button icon={<ArrowRight />} iconPosition="end">
              Upgrade Now
            </Button>
          </div>
          <div className="banner-img">
            <img src="/images/mobile-in-hand.png" alt="Mobile" />
          </div>
        </div>
        <BorderedContainer
          title="Money Flow"
          headingChildren={
            <div className="data-info">
              <div className="tag-wrapper">
                <img src="/images/income-bar.png" alt="income" />
                <span>Income</span>
              </div>
              <div className="tag-wrapper">
                <img src="/images/expense-bar.png" alt="expense" />
                <span>Expenses</span>
              </div>
              <Select
                variant="filled"
                defaultValue="Jan 10 - Jan 16"
                suffixIcon={<DownOutline />}
                options={[
                  { value: 'Jan 20 - Jan 26', label: 'Jan 20 - Jan 26' },
                  { value: 'Jan 27 - Feb 01', label: 'Jan 27 - Feb 01' },
                  { value: 'Feb 10 - Feb 16', label: 'Feb 10 - Feb 16' }
                ]}
                getPopupContainer={(trigger) => trigger.parentNode}
              />
            </div>
          }
        >
          <img src="/images/money-flow-graph.png" alt="moneyflow" />
        </BorderedContainer>
        <BorderedContainer
          title="Recent Transactions"
          headingChildren={
            <Button icon={<ChevronRight />} iconPosition="end" className="view-all-btn">
              View all
            </Button>
          }
        >
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="recent-transactions"
          />
        </BorderedContainer>
      </div>
      <div className="card-container">
        <BorderedContainer title="Wallet" headingChildren={<Button icon={<More />} type="text" />}>
          <div className="visa-card">
            <img src="/images/visa-card.png" alt="card" />
          </div>
          <div className="wallet-controls">
            <WalletWidgets icon={<CardSend />} title="Send" />
            <WalletWidgets icon={<CardReceive />} title="Recieve" />
            <WalletWidgets icon={<Receipt />} title="Invoicing" />
            <WalletWidgets icon={<ElementPlus />} title="More" />
          </div>
        </BorderedContainer>
        <BorderedContainer title="Quick Transfer">
          <div className="card-selection">
            <img src="/images/debit.png" alt="Debit" />
            <Select
              variant="borderless"
              defaultValue="$10,431"
              suffixIcon={<DownOutline />}
              options={[
                { value: '$9,431', label: '$9,431' },
                { value: '$8,431', label: '$8,431' },
                { value: '$7,431', label: '$7,431' }
              ]}
              getPopupContainer={(trigger) => trigger.parentNode}
            />
          </div>
          <div className="quick-transfer-group">
            <Form layout="vertical">
              <FormItem label="Enter Amount" colon={false}>
                <Input placeholder="$110" variant="borderless" />
              </FormItem>
            </Form>
            <Avatar.Group className="quick-transfer-users">
              <Avatar src="/images/Antonio.png" shape="circle" size={28} className="qt-user1" />
              <Avatar src="/images/Lily.png" shape="circle" size={28} className="qt-user2" />
            </Avatar.Group>
          </div>
          <Button type="primary" block>
            Send Money
          </Button>
        </BorderedContainer>
      </div>
    </HomeWrapper>
  )
}
