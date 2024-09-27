import React, { useState } from 'react'
import { Flex } from 'antd'
import { PaymentCardBordered } from './PaymentCard.styled'
import { Avatar, Checkbox } from '@/components/Ant'

interface IPaymentCard {
  img: string
  method: 'Visa' | 'Mastercard' | 'Payoneer'
  price: string
}
export default function PaymentCard({ img, method, price }: IPaymentCard) {
  const [active, setActive] = useState<boolean>(false)
  const checkboxHandler = () => {
    setActive(!active)
  }
  return (
    <PaymentCardBordered
      gap={20}
      align="center"
      justify="space-between"
      className={active ? 'active' : ''}
    >
      <Flex gap={12} align="center">
        <Avatar size={40} src={img} />
        <Flex gap={4} vertical>
          <span className="menthod-text">{method}</span>
          <span className="price-text">{price}</span>
        </Flex>
      </Flex>
      <Checkbox checked={active} onChange={checkboxHandler} />
    </PaymentCardBordered>
  )
}
