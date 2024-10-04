import { MessageContainer } from './Message.styled'
import MessageContent from './MessageContent'
import Sidebar from './Sidebar'
import UserDetails from './UserDetails'

export default function Message() {
  return (
    <MessageContainer>
      <div className="message-sidebar">
        <Sidebar />
      </div>
      <div className="message-content">
        <MessageContent />
      </div>
      <div className="user-details">
        <UserDetails />
      </div>
    </MessageContainer>
  )
}
