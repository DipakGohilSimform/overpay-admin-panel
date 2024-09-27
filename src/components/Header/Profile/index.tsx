import { MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import { Avatar, Switch } from '@/components/Ant'
import { DownOutline, Logout, Settings, User } from '@/components/Icons'
import { ProfileWrapper } from './Profile.styled'

export default function Profile() {
  const [theme, setTheme] = useTheme()
  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'default')
  }
  const items: MenuProps['items'] = [
    {
      label: (
        <div className="name-container">
          <p>Alesia Karapova</p>
          <span>Business account</span>
        </div>
      ),
      key: '0'
    },
    {
      type: 'divider'
    },
    {
      label: <Link to="/details">Your Details</Link>,
      icon: <User />,
      key: '2'
    },
    {
      label: <Link to="/invoices">Account Settings</Link>,
      icon: <Settings />,
      key: '3'
    },
    {
      label: <Link to="/">Logout</Link>,
      icon: <Logout />,
      key: '4'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <div className="theme-switch-container">
          <span>Dark Mode</span> <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
        </div>
      ),
      key: '5'
    }
  ]
  return (
    <ProfileWrapper
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      getPopupContainer={(t) => t.parentNode}
    >
      <div>
        <span className="user-name">
          <Avatar size={32} src={<img src="/images/alesia.png" alt="avatar" />} />
          <span className="name">Alesia K.</span>
        </span>
        <DownOutline />
      </div>
    </ProfileWrapper>
  )
}
