import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const HomeWrapper = styled.div`
  display: flex;
  gap: 32px;
  .graph-container {
    flex: 0 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .cashback-content {
      background: var(--primary-500);
      display: flex;
      justify-content: space-between;
      border-radius: 16px;
      padding: 32px;
      min-height: 184px;
      position: relative;
      .upgrade {
        h4 {
          font-size: 24px;
          font-weight: 800;
          color: var(--white);
          line-height: 31px;
          margin-bottom: 8px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: var(--white);
          line-height: 21px;
          margin-bottom: 24px;
          letter-spacing: 0.3px;
        }
        .ant-btn {
          font-size: 12px;
          height: 36px;
          border-radius: 8px;
          line-height: 18px;
          letter-spacing: 0.4px;
          padding: 10px;
          gap: 2px;
          color: var(--primary-500);
          background-color: var(--white);
          border: none;
          span {
            color: var(--primary-500);
          }
          .ant-btn-icon {
            flex-shrink: 0;
            .anticon {
              font-size: 16px;
            }
          }
          &:hover {
            color: var(--black);
          }
        }
      }
      .banner-img {
        position: absolute;
        top: 0;
        right: 0;
        img {
          object-fit: contain;
        }
      }
    }
    .view-all-btn {
      &.view-all-btn {
        border: none;
        background: var(--neutral-50);
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0.4px;
        border-radius: 8px;
        height: 34px;
        color: var(--neutral-900);
        &:hover {
          background: var(--neutral-50);
          color: var(--neutral-900);
        }
      }
    }
    .data-info {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      .tag-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        label {
          font-size: 12px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0.2px;
        }
      }
      .ant-select {
        width: 130px;
        height: 34px;
        .ant-select-arrow {
          color: var(--neutral-900);
        }

        .ant-select-selection-item {
          font-size: 12px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0.2px;
          color: var(--neutral-900);
        }
      }
      span {
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0.4;
        color: var(--neutral-900);
      }
      @media ${breakpointsDown.md} {
        gap: 20px;
      }
    }
    .recent-transactions {
      /* border: 1px solid; */
      .ant-table {
        .ant-table-container {
          .ant-table-content {
            .ant-table-thead {
              display: none;
            }
            .ant-table-tbody {
              & > tr:last-child {
                & > td {
                  border-bottom: none;
                }
              }
            }
          }
        }
      }
    }
  }
  .card-container {
    flex: 0 0 365px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .heading-content {
      .ant-btn {
        &:hover {
          background: transparent;
        }
        .anticon {
          font-size: 24px;
          color: var(--neutral-400);
        }
      }
    }
    .wallet-controls {
      display: flex;
      justify-content: space-between;
      max-width: 295px;
    }
    .card-selection {
      border: 1px solid var(--neutral-200);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .quick-transfer-group {
      border: 1px solid var(--neutral-200);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      align-items: end;
      margin-bottom: 35px;
      .ant-form {
        height: 64px;
        .ant-form-item {
          .ant-form-item-label {
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.4px;
            color: var(--neutral-600);
          }
          .ant-input {
            padding-left: 0;
            font-size: 24px;
            font-weight: 800;
            line-height: 31px;
            color: var(--neutral-900);
            caret-color: var(--primary-500);
            &::placeholder {
              font-size: 24px;
              font-weight: 800;
              line-height: 31px;
              color: var(--neutral-400);
            }
          }
        }
      }
      .quick-transfer-users {
        .qt-user1 {
          background: var(--pink);
        }
        .qt-user2 {
          background: var(--blue);
        }
      }
    }
    @media ${breakpointsDown.xxl} {
      flex: 0 1 365px;
    }
  }
  @media ${breakpointsDown.xl} {
    flex-wrap: wrap;
    .card-container {
      flex: 1 1 auto;
      flex-direction: row;
    }
  }

  @media ${breakpointsDown.lg} {
    flex-wrap: wrap;
    .card-container {
      flex-wrap: wrap;
    }
  }
`
