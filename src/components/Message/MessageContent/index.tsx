import { MessageContentWrapper } from './MessageContentWrapper.styled'
import MessageContentHeader from './MessageContentHeader'
import MessageContentBody from './MessageContentBody'
import MessageContentFooter from './MessageContentFooter'

export default function MessageContent() {
  return (
    <MessageContentWrapper>
      <MessageContentHeader />
      <MessageContentBody />
      <MessageContentFooter />
    </MessageContentWrapper>
  )
}
