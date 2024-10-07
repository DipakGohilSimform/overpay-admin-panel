import Menu from '@/components/Menu'
import { SettingSidebarContainer } from './SettingSidebarContainer'
import { Bell, Briefcase, Card, DollarIcon, FileText, GroupIcon, User } from '@/components/Icons'

export default function SettingSidebar() {
  return (
    <SettingSidebarContainer>
      <div className="setting-sidebar">
        <h2 className="menu-title">BUSINESS PROFILE</h2>
        <div className="account-details-tabs">
          <Menu
            icon={<Briefcase />}
            title="Business Information"
            desc="Set up and manage your business"
          />
          <Menu
            icon={<DollarIcon />}
            title="Money, Banks, and Card"
            desc="Gravida gravida nisi, magna blandit"
          />
          <Menu icon={<Bell />} title="Notifications" desc="Manage notifications" />
        </div>
        <h2 className="menu-title">ACCOUNT AND SERVICES</h2>
        <div className="account-details-tabs">
          <Menu icon={<User />} title="Account Access" desc="Set up and manage your business" />
          <Menu
            icon={<Card />}
            title="Payment Preference"
            desc="Gravida gravida nisi, magna blandit"
          />
          <Menu
            icon={<GroupIcon />}
            title="Auto Conversions"
            desc="Gravida gravida nisi, magna blandit"
          />
          <Menu
            icon={<FileText />}
            title="Statement and Reports"
            desc="Gravida gravida nisi, magna blandit"
          />
        </div>
      </div>
    </SettingSidebarContainer>
  )
}
