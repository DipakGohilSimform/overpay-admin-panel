import React from 'react'
import { Avatar, Input } from '@/components/Ant'
import { AmountCardBordered } from './AmountCard.styled'

export default function AmountCard() {
  return (
    <AmountCardBordered gap={8} vertical>
      <span>Enter amount</span>
      <Input
        className="no-border"
        placeholder="Enter Amount"
        suffix={<Avatar src="/images/united_states.png" size={20} />}
      />
    </AmountCardBordered>
  )
}
