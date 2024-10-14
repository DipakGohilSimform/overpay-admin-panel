import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const SettingSidebarContainer = styled.div`
  height: calc(100vh - 112px);
  overflow-y: auto;
  border-right: 1px solid var(--neutral-300);
  padding-block: 40px;
  .setting-sidebar {
    .menu-title {
      font-size: 14px;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
      margin-bottom: 16px;
      padding-inline: 26px;
    }
    .account-details-tabs {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
    }
  }
  @media ${breakpointsDown.lg} {
    flex: 1 1 auto;
    height: unset;
    border: none;
    padding-bottom: 0;
    padding-block: 0;
  }
`
