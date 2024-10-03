import { Button } from '@/components/Ant'
import { MessageContainer } from './MessageContainer.styled'
import { ShareIcon } from '@/components/Icons/ShareIcon'

interface MessageBoxProps {
  type: string
}
export default function MessageBox({ type = 'recieve' }: MessageBoxProps) {
  return (
    <MessageContainer className={type}>
      <div className="msg">
        <p className="msg-content">
          Auctor urna, varius duis suspendisse mi in dictum. Interdum egestas ut porttitor tortor
          aliquet massa.
          <Button type="text" icon={<ShareIcon />} />
        </p>
        <div className="info">
          <span className="name">Stefanie Ang</span>
          <span className="date">08:23 AM</span>
        </div>
      </div>
    </MessageContainer>
  )
}
