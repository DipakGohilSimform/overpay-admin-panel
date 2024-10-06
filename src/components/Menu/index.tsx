import { User } from '../Icons'
import { MenuWrapper } from './MenuWrapper'

interface MenuProps {
  icon: React.ReactNode
  title: string
  desc: string
  withArrow?: boolean
}

export default function Menu({ icon, title, desc, withArrow }: MenuProps) {
  return (
    <MenuWrapper className={`${withArrow ? 'with-arrow' : ''}`}>
      <div className="account-details-tab">
        <div className="icon">{icon}</div>
        <div className="tab-desc">
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </MenuWrapper>
  )
}
