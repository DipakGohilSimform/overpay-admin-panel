import { Logo } from '@/components/Logo/Logo'
import { HelpItemContainer } from './HelpItemContainer'
import { Tag } from '@/components/Icons/Tag'
import { Like } from '@/components/Icons/Like'

interface HelpItemProps {
  title: string
  desc: string
  tag: string
  likeCount: string
}

export default function HelpItem({ title, desc, tag, likeCount }: HelpItemProps) {
  return (
    <HelpItemContainer>
      <div className="title-wrapper">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
      <div className="bottom">
        <Logo color="dark-dark" />
        <div className="info">
          <div className="wrapper">
            <Tag />
            {tag}
          </div>
          <div className="wrapper">
            <Like />
            {likeCount}
          </div>
        </div>
      </div>
    </HelpItemContainer>
  )
}
