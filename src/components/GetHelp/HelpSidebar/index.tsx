import { Input } from '@/components/Ant'
import { HelpSidebarContainer } from './HelpSidebarContainer'
import { Briefcase, Card, DollarIcon, Search, User } from '@/components/Icons'
import Menu from '@/components/Menu'

export default function HelpSidebar() {
  return (
    <HelpSidebarContainer>
      <div className="search-container">
        <h2 className="title">Hi, how can we help?</h2>
        <p className="desc">Type your question or search keyword</p>
        <Input prefix={<Search />} placeholder="Search..." />
        <div className="tag-container">
          <h4 className="title">Popular search:</h4>
          <div className="tag-wrapper">
            <div className="tag">
              <span>Send Money</span>
            </div>
            <div className="tag">
              <span>Transfer</span>
            </div>
            <div className="tag">
              <span>Change Card</span>
            </div>
          </div>
        </div>
      </div>
      <div className="account-details-tabs">
        <Menu
          icon={<Card />}
          title="Sending Money"
          desc="Setting up, paying for, editing, and canceling transfers"
        />
        <Menu
          icon={<User />}
          title="Managing Your Account"
          desc="Setting up your account and getting verified"
        />
        <Menu
          icon={<DollarIcon />}
          title="Holding Money"
          desc="Holding balances, setting up cards debits, and using assets"
        />
        <Menu
          icon={<Briefcase />}
          title="Overpay Business"
          desc="Multi-users access, accounting, and using our API"
        />
      </div>
    </HelpSidebarContainer>
  )
}
