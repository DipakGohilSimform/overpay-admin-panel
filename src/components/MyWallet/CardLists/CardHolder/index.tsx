import { Button } from '@/components/Ant'
import { CardContainer } from './CardHolder.styled'

export default function CardHolder() {
  return (
    <CardContainer>
      <div className="holder-title">
        <p>Card Lists</p>
        <span>2</span>
      </div>
      <img src="/images/Card1.png" alt="VisaCard" />
      <img src="/images/Card2.png" alt="VisaCard" />
      <Button type="default">Manage Card</Button>
    </CardContainer>
  )
}
