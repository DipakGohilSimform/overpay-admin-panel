import { Ellipse, More, Trending } from '@/components/Icons'
import { BalanceContainer } from './Balance.styled'

export default function Balance() {
  return (
    <BalanceContainer>
      <div className="balance-heading">
        <span>Total Balance</span>
        <More />
      </div>
      <div className="balance-value">
        $56,476.00
        <span>USD</span>
      </div>
      <div className="balance-dated">
        <span className="increment-value">
          <Trending /> 2,05%
        </span>
        <Ellipse />
        <span className="date">February 05, 2022</span>
      </div>
    </BalanceContainer>
  )
}
