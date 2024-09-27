import { MenuProps } from 'antd'
import { Avatar, Badge } from '@/components/Ant'
import { Bell, Checks, Settings } from '@/components/Icons'
import { NotificationWrapper } from './Notification.styled'

export default function Notification() {
  const items: MenuProps['items'] = [
    {
      label: (
        <div className="notification-container">
          <div className="notification-header">
            <h3 className="title">Notification</h3>
            <span className="cta">
              <span>
                <Checks />
              </span>
              Mark all as read
            </span>
          </div>
        </div>
      ),
      key: '0'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div className="notification-wrapper">
          <div className="notification">
            <Avatar src="/images/avatar2.png" size={48} />
            <div className="content">
              <h4 className="name">Tenner Stafford</h4>
              <p className="desc">
                You have sent&nbsp;<span className="orange">$200.00</span> to&nbsp;
                <span className="dark">Tenner Stafford</span>
              </p>
              <span className="time">2 mins ago</span>
            </div>
          </div>
        </div>
      ),
      key: '1'
    },
    {
      label: (
        <div className="notification-wrapper">
          <div className="notification">
            <Avatar src="/images/avatar1.png" size={48} />
            <div className="content">
              <h4 className="name">New Invoice Sent</h4>
              <p className="desc">
                You have sent a new invoice of&nbsp;<span className="green">$4,567.00</span>&nbsp;
                to&nbsp;<span className="dark">Biffco Enterprises</span>
              </p>
              <span className="time">5 mins ago</span>
            </div>
          </div>
        </div>
      ),
      key: '2'
    },
    {
      label: (
        <div className="notification-wrapper">
          <div className="notification">
            <Avatar src="/images/antonio1.png" size={48} />
            <div className="content">
              <h4 className="name">Cindy Lillibridge</h4>
              <p className="desc">
                You have a new payment request from&nbsp;
                <span className="dark">Cindy Lillibridge</span>&nbsp;for&nbsp;
                <span className="orange">for $800.00</span>
              </p>
              <span className="time">10 mins ago</span>
            </div>
          </div>
        </div>
      ),
      key: '3'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div className="notification-container">
          <div className="notification-header">
            <h3 className="title">Notification</h3>
            <span className="cta">
              <Settings />
            </span>
          </div>
        </div>
      ),
      key: '0'
    }
  ]

  return (
    <NotificationWrapper
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      getPopupContainer={(t) => t.parentNode}
    >
      <div>
        <Badge>
          <Avatar shape="circle" icon={<Bell />} />
        </Badge>
      </div>
    </NotificationWrapper>
  )
}
