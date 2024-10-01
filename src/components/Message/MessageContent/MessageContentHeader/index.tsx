import { Video } from '@/components/Icons'
import { ContentHeaderWrapper } from './ContentHeaderWrapper.styled'
import { Avatar, Button } from '@/components/Ant'
import { Phone } from '@/components/Icons/Phone'
import { DotVerticle } from '@/components/Icons/DotVerticle'

export default function MessageContentHeader() {
  return (
    <ContentHeaderWrapper>
      <div className="profile">
        <Avatar src="/images/avatar2.png" size={48} />
        <div className="about">
          <p className="name">Bertolt Reiner</p>
          <span className="status">Online</span>
        </div>
      </div>
      <div className="cta">
        <Button icon={<Video />} type="default" className="cta-btn" />
        <Button icon={<Phone />} type="default" className="cta-btn" />
        <Button icon={<DotVerticle />} type="default" className="cta-btn" />
      </div>
    </ContentHeaderWrapper>
  )
}
