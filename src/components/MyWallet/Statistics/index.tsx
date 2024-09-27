import { Flex } from 'antd'
import BorderedContainer from '@/components/Home/BorderedContainer'
import QuickLinks from './QuickLinks'
import TransectionRow from './TransactionsRow'
import { Input, Select, Switch } from '@/components/Ant'
import SelectIcon from '@/components/Icons/SelectIcon'
import Chart from './BarChart'
import CurrencyCard from './CurrencyCard'

export default function Statistics() {
  return (
    <>
      <QuickLinks />
      <TransectionRow />
      <BorderedContainer
        className="mb-24"
        title="Statistics"
        headingChildren={
          <Flex align="center" gap={32}>
            <Flex gap={16}>
              <Flex gap={8} align="center">
                <Switch defaultChecked />
                <span className="switch-text">Money In</span>{' '}
              </Flex>
              <Flex gap={8} align="center">
                <Switch defaultChecked />
                <span className="switch-text">Money Out</span>{' '}
              </Flex>
            </Flex>
            <Select
              defaultValue="This month"
              className="month-select"
              style={{ width: 112 }}
              suffixIcon={<SelectIcon />}
              options={[
                { value: 'This month', label: 'This month' },
                { value: 'This week', label: 'This month' },
                { value: 'This year', label: 'This year' }
              ]}
            />
          </Flex>
        }
      >
        <Chart />
      </BorderedContainer>
      <Flex gap={24} wrap>
        <BorderedContainer className="stretch" title="Currency">
          <CurrencyCard img="/images/united_states.png" amount="56,476.00" type="USD" />
          <CurrencyCard img="/images/united_kingdom.png" amount="49,973.67" type="EUR" />
          <CurrencyCard img="/images/euro.png" amount="45,098.56" type="GBP" />
        </BorderedContainer>
        <BorderedContainer className="stretch" title="Conversion">
          <Flex gap={19} vertical>
            <Flex gap={12}>
              <Select
                defaultValue="USD"
                style={{ width: 80, height: 56 }}
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'EUR', label: 'EUR' },
                  { value: 'GBP', label: 'GBP' }
                ]}
              />
              <Input type="number" placeholder="0" />
            </Flex>
            <Flex gap={12}>
              <Select
                defaultValue="EUR"
                style={{ width: 80, height: 56 }}
                suffixIcon={<SelectIcon />}
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'EUR', label: 'EUR' },
                  { value: 'GBP', label: 'GBP' }
                ]}
              />
              <Input type="number" placeholder="0" />
            </Flex>
          </Flex>
        </BorderedContainer>
      </Flex>
    </>
  )
}
