/* eslint-disable react/require-default-props */
import { ContentContainer } from './AccountContent.styled'

export interface AccountProps {
  accountName: string
  accountId: string
  img?: string
}

export default function AccountContent({ accountName, accountId, img }: AccountProps) {
  return (
    <ContentContainer>
      <img src={img} alt="logo" />
      <div className="name-container">
        <h6>{accountName}</h6>
        <span>{accountId}</span>
      </div>
    </ContentContainer>
  )
}
