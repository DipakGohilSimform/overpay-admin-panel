import { Outlet, useLocation } from 'react-router-dom'
import { Layout } from '@/components/Ant'
import { DashboardContentStyles, DashboardLayoutStyles } from './dashboard.styles'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'

export default function DashboardLayout() {
  const location = useLocation()

  let title = 'Dashboard'
  if (location.pathname === '/') {
    title = 'Dashboard'
  } else if (location.pathname === '/transactions') {
    title = 'Transactions'
  } else if (location.pathname === '/recipients') {
    title = 'Recipients'
  } else if (location.pathname === '/invoices') {
    title = 'Invoices'
  } else if (location.pathname === '/my-wallets') {
    title = 'My Wallet'
  }
  const hideHeaderRoutes = ['/invoices/create']
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
