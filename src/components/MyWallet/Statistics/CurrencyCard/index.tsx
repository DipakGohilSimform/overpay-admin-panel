import React from 'react'
import { CountryName, CurrencyCardStyled } from './CurrencyCard.styled'
import Currency from '@/components/Table/Currency'

interface CurrencyCardType {
  img: string
  amount: number | string
  type: string
}
export default function CurrencyCard({ img, amount, type }: CurrencyCardType) {
  return (
    <CurrencyCardStyled gap={20} justify="space-between" align="center">
      <Currency img={img} value={type} />
      <CountryName>
        {amount}
        <span>{type}</span>
      </CountryName>
    </CurrencyCardStyled>
  )
}
