import { MenuWrapper } from './MenuWrapper'

interface MenuProps {
  icon: React.ReactNode
  title: string
  desc: string
}

export default function Menu({ icon, title, desc }: MenuProps) {
  return (
    <MenuWrapper>
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
