import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const HelpSidebarContainer = styled.div`
  flex: 0 0 440px;
  height: calc(100vh - 150px);
  overflow: auto;
  padding-right: 40px;
  border-right: 1px solid var(--neutral-300);
  .search-container {
    padding: 40px 32px;
    border-radius: 16px;
    background-color: var(--neutral-350);
    margin-bottom: 40px;
    .title {
      font-size: 24px;
      font-weight: 800;
      line-height: 31.2px;
      color: var(--neutral-900);
      margin-bottom: 8px;
    }
    .desc {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-600);
      margin-bottom: 32px;
    }
    .ant-input-affix-wrapper {
      margin-bottom: 24px;
    }

    .tag-container {
      .title {
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.4px;
        color: var(--neutral-600);
        margin-bottom: 12px;
      }
      .tag-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        .tag {
          font-size: 12px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0.4px;
          padding: 7px 12px;
          border-radius: 8px;
          color: var(--primary-500);
          border: 1px solid var(--primary-500);
        }
      }
    }
  }
  @media ${breakpointsDown.lg} {
    flex: 1 1 auto;
    height: unset;
    border: none;
    padding-bottom: 0;
    padding-right: 0;
  }
`
