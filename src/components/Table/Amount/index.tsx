import { AmountValue } from './Amount.styled'

export interface AmountProps {
  amount: string
}

export default function Amount({ amount }: AmountProps) {
  return <AmountValue>{amount}</AmountValue>
}
