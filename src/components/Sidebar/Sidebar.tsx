/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { DashboardSiderStyles, SidebarMenuStyles } from './Sidebar.styled'
import { Activity, Card, Dashboard, Invoice, Message, Question, Settings } from '../Icons'
import { Menu } from '../Ant'
import { Logo } from '../Logo/Logo'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  disabled?: boolean
) => ({
  key,
  icon,
  children,
  label,
  disabled
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
  getItem(<Link to="/admin/help">Get Help</Link>, '7', <Question />),
  getItem(<Link to="/admin/account-setting">Settings</Link>, '8', <Settings />)
]

export default function Sidebar() {
  const location = useLocation()
  const currentPath: string = location.pathname

  const isActivityRoute: boolean = ['/admin/transactions', '/admin/recipients'].includes(
    currentPath
  )

  const activeKey: string =
    primaryMenuItems
      .find((item: any) => {
        if ('label' in item) {
          const labelElement = item.label as React.ReactNode
          if (isActivityRoute && item.key === 'sub1') {
            return true
          }
          if (React.isValidElement(labelElement) && labelElement.props.to) {
            return currentPath.includes(labelElement.props.to)
          }
        }
        return false
      })
      ?.key?.toString() || '1'

  return (
    <DashboardSiderStyles width={250}>
      <div className="logoContainer">
        <Logo color="dark-dark" />
      </div>
      <SidebarMenuStyles>
        <Menu theme="dark" mode="inline" selectedKeys={[activeKey]} items={primaryMenuItems} />
      </SidebarMenuStyles>
    </DashboardSiderStyles>
  )
}
