import styled from 'styled-components'
import { Content, Layout } from '@/components/Ant'

export const DashboardLayoutStyles = styled(Layout)`
  min-height: 100vh;
  min-height: 100dvh;
  .ant-layout {
    .ant-layout-content {
      padding: 16px 40px 40px 40px;
    }
  }
  .ant-layout-sider-collapsed {
    padding: 0;
  }
`

export const DashboardContentStyles = styled(Content)`
  /* padding-top: 40px; */
`
