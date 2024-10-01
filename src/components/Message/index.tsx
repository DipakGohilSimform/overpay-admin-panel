import { MessageContainer } from './Message.styled'
import MessageContent from './MessageContent'
import Sidebar from './Sidebar'

export default function Message() {
  return (
    <MessageContainer>
      <div className="message-sidebar">
        <Sidebar />
      </div>
      <div className="message-content">
        <MessageContent />
      </div>
      {/* <div className="user-details"></div> */}
    </MessageContainer>
  )
}
