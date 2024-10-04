import { Button } from '@/components/Ant'
import { ProgressIcon, User } from '@/components/Icons'

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
        <Button type="default" block>
          Manage Card
        </Button>
      </div>
      <div className="account-details-tabs">
        <div className="account-details-tab">
          <div className="icon">
            <User />
          </div>
          <div className="tab-desc">
            <h3 className="title">Personal Informations</h3>
            <p className="desc">View your detail to receiving money</p>
          </div>
        </div>
      </div>
    </div>
  )
}
