import { Button } from '@/components/Ant'
import { Calendar, Card, Lock, ProgressIcon, Shield, User } from '@/components/Icons'
import Menu from '@/components/Menu'

export default function AccountSidebar() {
  return (
    <div className="account-sidebar">
      <div className="progress-container">
        <div className="progress-info">
          <ProgressIcon />
          <div className="content">
            <h3 className="title">Complete profile</h3>
            <p className="desc">Complete your profile to unlock all features</p>
          </div>
        </div>
        <Button type="primary" block>
          Verify identity
        </Button>
      </div>
      <div className="account-details-tabs">
        <Menu
          icon={<User />}
          title="Personal Informations"
          desc="View your detail to receiving money"
        />
        <Menu icon={<Card />} title="Direct Debits" desc="Set up and manage your direct debit" />
        <Menu
          icon={<Calendar />}
          title="Scheduled Transfer"
          desc="Manage transfers that are due to go out"
        />
        <Menu
          icon={<Shield />}
          title="Login and Security"
          desc="Amet, est purus, a lobortis sit."
        />
        <Menu icon={<Lock />} title="Data Privacy" desc="Amet, est purus, a lobortis sit." />
      </div>
    </div>
  )
}
