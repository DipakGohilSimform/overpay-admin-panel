import MessageBox from './Message'
import { MessageWrapper } from './MessageWrapper.styled'

export default function MessageContentBody() {
  return (
    <MessageWrapper>
      <MessageBox type="recieve" />
      <MessageBox type="send" />
      <MessageBox type="recieve" />
      <MessageBox type="send" />
    </MessageWrapper>
  )
}
