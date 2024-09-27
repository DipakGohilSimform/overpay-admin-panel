import { CardTitle, CardPriceText, CardStyled } from './TransectionCard.styled'

interface TransectionCardProps {
  title: string
  price: string
}
export default function TransectionCard({ title, price }: TransectionCardProps) {
  return (
    <CardStyled vertical gap={8}>
      <CardTitle>{title}</CardTitle>
      <CardPriceText>{price}</CardPriceText>
    </CardStyled>
  )
}
