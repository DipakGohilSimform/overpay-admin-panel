import styled from 'styled-components'
import { Content, Layout } from '@/components/Ant'
import { breakpointsDown } from '@/config/variables'

export const DashboardLayoutStyles = styled(Layout)`
  position: relative;
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
  @media ${breakpointsDown.lg} {
    .sider-mask {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(5px);
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      cursor: pointer;
    }
  }
`

export const DashboardContentStyles = styled(Content)`
  /* padding-top: 40px; */
`
