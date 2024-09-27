import { Flex } from 'antd'
import React from 'react'
import TransectionCard from './TransectionCard'
import { Divider, Select } from '@/components/Ant'
import SelectIcon from '@/components/Icons/SelectIcon'

function TransectionRow() {
  return (
    <Flex className="mb-32" gap="32px" justify="center" align="center" wrap>
      <Select
        className="time-range-select"
        defaultValue="Last 30 days"
        variant="borderless"
        style={{ width: 120 }}
        suffixIcon={<SelectIcon />}
        options={[
          { value: 'Last 30 days', label: 'Last 30 days' },
          { value: 'Last 7 days', label: 'Last 7 days' },
          { value: 'Last 15 days', label: 'Last 15 days' }
        ]}
      />
      <Divider className="card-divider" type="vertical" />
      <TransectionCard title="Transactions" price="56" />
      <Divider className="card-divider" type="vertical" />
      <TransectionCard title="Total Spent" price="$10,654.00" />
      <Divider className="card-divider" type="vertical" />
      <TransectionCard title="Total Cashback" price="$2,456.00" />
    </Flex>
  )
}

export default TransectionRow
