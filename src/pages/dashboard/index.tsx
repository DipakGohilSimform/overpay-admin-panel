import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from '@/components/Ant'
import { DashboardContentStyles, DashboardLayoutStyles } from './dashboard.styles'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import { useState } from 'react'

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const currentRoute = location.pathname.split('/').pop()

  let title = 'Dashboard'
  if (currentRoute === 'dashboard') {
    title = 'Dashboard'
  } else if (currentRoute === 'transactions') {
    title = 'Transactions'
  } else if (currentRoute === 'recipients') {
    title = 'Recipients'
  } else if (currentRoute === 'invoices') {
    title = 'Invoices'
  } else if (currentRoute === 'messages') {
    title = 'Message'
  } else if (currentRoute === 'my-wallets') {
    title = 'My Wallet'
  } else if (currentRoute === 'account-details') {
    title = 'Account Details'
  } else if (currentRoute === 'account-setting') {
    title = 'Account setting'
  } else if (currentRoute === 'help') {
    title = 'Get Help'
  }

  const hideHeaderRoutes = ['/admin/invoices/create']

  return (
    <DashboardLayoutStyles>
      <Sidebar setCollapsed={setCollapsed} collapsed={collapsed} />
      <Layout>
        {!hideHeaderRoutes.includes(location.pathname) && (
          <Header title={title} setCollapsed={setCollapsed} collapsed={collapsed} />
        )}
        <DashboardContentStyles>
          <Outlet />
        </DashboardContentStyles>
      </Layout>
    </DashboardLayoutStyles>
  )
}
