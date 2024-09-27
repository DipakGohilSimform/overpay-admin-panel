import { ContentWrapper } from './CarouselContent.styled'

export interface ContentProps {
  src: string
  title: string
}

export function CarouselContent(props: ContentProps) {
  const { src, title } = props
  return (
    <ContentWrapper>
      <div className="imgContainer">
        <img src={src} alt="overpay" />
      </div>
      <div className="contentContainer">
        <h2>{title}</h2>
        <p>
          Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more
          details and get paychecks up to two days early. Get a $20 bonus when you receive
          qualifying direct deposits
        </p>
      </div>
    </ContentWrapper>
  )
}
