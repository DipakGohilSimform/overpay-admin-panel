import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { DashboardSiderStyles, SidebarMenuStyles } from './Sidebar.styled'
import {
  Activity,
  Analytics,
  Card,
  Dashboard,
  Invoice,
  Message,
  Question,
  Settings
} from '../Icons'
import { Menu } from '../Ant'
import { Logo } from '../Logo/Logo'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon,
  children,
  label
})

const primaryMenuItems: MenuItem[] = [
  getItem(<Link to="/admin/dashboard">Dashboard</Link>, '1', <Dashboard />),
  getItem(<Link to="/admin/invoices">Invoices</Link>, '2', <Invoice />),
  getItem(<Link to="/admin/messages">Messages</Link>, '3', <Message />),
  getItem(<Link to="/admin/my-wallets">My Wallets</Link>, '4', <Card />),
  getItem('Activity', 'sub1', <Activity />, [
    getItem(<Link to="/admin/transactions">Transactions</Link>, '5'),
    getItem(<Link to="/admin/recipients">Recipients</Link>, '6')
  ]),
  getItem(<Link to="/admin/analytics">Analytics</Link>, '7', <Analytics />),
  getItem(<Link to="/admin/help">Get Help</Link>, '8', <Question />),
  getItem(<Link to="/admin/account-setting">Settings</Link>, '9', <Settings />)
]

export default function Sidebar() {
  const location = useLocation()

  const selectedKey = (() => {
    switch (location.pathname) {
      case '/dashboard':
        return '1'
      case '/invoices':
        return '2'
      case '/messages':
        return '3'
      case '/my-wallets':
        return '4'
      case '/transactions':
        return '5'
      case '/recipients':
        return '6'
      case '/analytics':
        return '7'
      case '/help':
        return '8'
      case '/account-setting':
        return '9'
      default:
        return '1'
    }
  })()

  return (
    <DashboardSiderStyles width={250}>
      <div className="logoContainer">
        <Logo color="dark-dark" />
      </div>
      <SidebarMenuStyles>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          items={primaryMenuItems}
        />
      </SidebarMenuStyles>
    </DashboardSiderStyles>
  )
}
