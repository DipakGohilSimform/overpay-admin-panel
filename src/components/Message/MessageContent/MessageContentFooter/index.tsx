import { Link } from 'react-router-dom'
import { Button, Input } from '@/components/Ant'
import { ContentFooter } from './ContentFooter.styled'
import { Photo } from '@/components/Icons/Photo'
import { LinkIcon } from '@/components/Icons/LinkIcon'
import { Smile } from '@/components/Icons/Smile'

export default function MessageContentFooter() {
  return (
    <ContentFooter>
      <Input.TextArea autoSize={false} name="Description" placeholder="Type a message..." />
      <div className="footer-cta-wrapper">
        <div className="links">
          <Link to="/">
            <Photo />
          </Link>
          <Link to="/">
            <LinkIcon />
          </Link>
          <Link to="/">
            <Smile />
          </Link>
        </div>
        <Button type="primary">Send</Button>
      </div>
    </ContentFooter>
  )
}
