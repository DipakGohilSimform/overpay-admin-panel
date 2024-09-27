import styled from 'styled-components'

export const WidgetsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  .ant-dropdown {
    .ant-dropdown-menu {
      border-radius: 12px;
      box-shadow: 4px 8px 50px 1px rgba(74, 85, 104, 0.12);
      padding: 17px;
      background-color: var(--neutral-50);
      .ant-dropdown-menu-item {
        border-radius: 12px;
        gap: 12px;
        cursor: auto;
        .ant-dropdown-menu-title-content {
          font-size: 14px;
          font-weight: 600;
          line-height: 21px;
          letter-spacing: 0.2px;
          color: var(--neutral-900);
          .theme-switch-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        .anticon {
          font-size: 20px;
          color: var(--neutral-500);
        }
        &:not(:first-child) {
          min-height: 44px;
        }
        &:hover {
          background: transparent;
        }
      }
      .ant-dropdown-menu-item-divider {
        background: var(--neutral-200);
        margin: 10px 12px;
      }
      .name-container {
        width: 230px;
        p {
          font-weight: 800;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.2px;
          color: var(--neutral-900);
          margin-bottom: 4px;
        }
        span {
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.4px;
          color: var(--neutral-600);
        }
      }
    }
    .notification-container {
      width: 395px;
      .notification-header {
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 16px;
          font-weight: 800;
          line-height: 24px;
        }
        .cta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 800;
          line-height: 21px;
          color: var(--primary-500);
          cursor: pointer;
          .ant-icon {
            color: var(--primary-500);
          }
        }
      }
    }
    .notification-wrapper {
      .notification {
        display: flex;
        gap: 16px;
        margin-bottom: 20px;
        .name {
          font-size: 14px;
          font-weight: 800;
          line-height: 21px;
          color: var(--neutral-900);
          margin-bottom: 4px;
        }
        .desc {
          max-width: 284px;
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 0.4px;
          color: var(--neutral-600);
          margin-bottom: 8px;
          .orange {
            font-size: 12px;
            font-weight: 800;
            line-height: 18px;
            color: var(--orange);
          }
          .green {
            font-size: 12px;
            font-weight: 800;
            line-height: 18px;
            color: var(--green);
          }
          .dark {
            font-size: 12px;
            font-weight: 800;
            line-height: 18px;
            color: var(--neutral-1000);
          }
        }
        .time {
          font-size: 12px;
          font-weight: 800;
          line-height: 18px;
          color: var(--neutral-500);
        }
      }
    }
  }
`
