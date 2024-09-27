import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/pages/auth'
import Signin from '@/pages/auth/signin'
import Signup from '@/pages/auth/signup'
import NotFound from '@/pages/NotFound'
import DashboardLayout from '@/pages/dashboard'
import Home from '@/pages/dashboard/home/page'
import ForgotPassword from '@/pages/auth/forgotpassword'
import Otp from '@/pages/auth/otp'
import Reason from '@/pages/auth/reason'
import Invoices from '@/pages/dashboard/invoices/page'
import Transactions from '@/pages/dashboard/transactions/page'
import Recipients from '@/pages/dashboard/recipients/page'
import CreateInvoice from '@/components/Invoice/CreateInvoice'
import MyWallets from '@/pages/dashboard/mywallets/page'

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        index: true,
        element: <Home />
      },
      {
        path: 'invoices', // Changed to relative path
        element: <Invoices />
      },
      {
        path: 'transactions', // Changed to relative path
        element: <Transactions />
      },
      {
        path: 'recipients', // Changed to relative path
        element: <Recipients />
      },
      {
        path: 'invoices/create', // Changed to relative path
        element: <CreateInvoice />
      },
      {
        path: 'my-wallets', // Changed to relative path
        element: <MyWallets />
      }
    ]
  },
  {
    element: <AuthLayout />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Signin />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'forgotpassword',
        element: <ForgotPassword />
      },
      {
        path: 'otp',
        element: <Otp />
      },
      {
        path: 'reason',
        element: <Reason />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
