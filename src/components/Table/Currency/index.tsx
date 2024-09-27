/* eslint-disable react/require-default-props */
import { CurrencyWrapper } from './Currency.styled'

export interface CurrencyProps {
  img: string
  value: string
  className?: string
}

export default function Currency({ img, value, className }: CurrencyProps) {
  return (
    <CurrencyWrapper>
      <img src={img} alt="currency" className={className} />
      <span>{value}</span>
    </CurrencyWrapper>
  )
}
