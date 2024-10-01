import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from '@/components/Ant'
import { DashboardContentStyles, DashboardLayoutStyles } from './dashboard.styles'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'

export default function DashboardLayout() {
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
  }

  const hideHeaderRoutes = ['/admin/invoices/create']

  return (
    <DashboardLayoutStyles>
      <Sidebar />
      <Layout>
        {!hideHeaderRoutes.includes(location.pathname) && <Header title={title} />}
        <DashboardContentStyles>
          <Outlet />
        </DashboardContentStyles>
      </Layout>
    </DashboardLayoutStyles>
  )
}
