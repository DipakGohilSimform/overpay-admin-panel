import styled from 'styled-components'

export const AccountSidebarContainer = styled.div`
  .account-sidebar {
    flex: 0 0 410px;
    padding: 40px;
    .progress-container {
      background-color: var(--primary-500);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 48px;
      .progress-info {
        display: flex;
        gap: 24px;
        margin-bottom: 32px;
        .content {
          .title {
            font-size: 16px;
            font-weight: 800;
            line-height: 24px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            color: var(--white);
          }
          .desc {
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.4px;
            opacity: 60%;
            color: var(--white);
          }
        }
        .anticon {
          flex-shrink: 0;
        }
      }
      .ant-btn {
        background-color: var(--white);
        color: var(--primary-500);
      }
    }
    .account-details-tabs {
      .account-details-tab {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 26px;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 48px;
          width: 48px;
          border-radius: 50%;
          background-color: var(--neutral-100);
          svg {
            font-size: 18px;
          }
        }
        .title {
          font-size: 14px;
          font-weight: 800;
          line-height: 21px;
          letter-spacing: 0.2px;
          color: var(--neutral-900);
          margin-bottom: 4px;
        }
        .desc {
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0.4px;
          color: var(--neutral-600);
        }
      }
    }
  }
`
