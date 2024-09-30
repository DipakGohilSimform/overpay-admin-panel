import CardLists from './CardLists'
import { WalletContainer } from './MyWallet.styled'
import Chart from './Statistics/BarChart'

export default function MyWalletContent() {
  return (
    <WalletContainer>
      <div className="card-holder">
        <CardLists />
      </div>
      <div className="data-holder">
        <Chart />
      </div>
    </WalletContainer>
  )
}
