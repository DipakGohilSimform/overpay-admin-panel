import CardLists from './CardLists'
import { WalletContainer } from './MyWallet.styled'
import Statistics from './Statistics'

export default function MyWalletContent() {
  return (
    <WalletContainer>
      <div className="card-holder">
        <CardLists />
      </div>
      <div className="data-holder">
        <Statistics />
      </div>
    </WalletContainer>
  )
}
