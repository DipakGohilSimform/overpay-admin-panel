import styled from 'styled-components'
import { breakpointsDown } from '@/config/variables'

export const InvoiceContainer = styled.div``
export const CreateContent = styled.div`
  display: flex;
  gap: 48px;
  .invoice-items {
    flex: 1 1 auto;
    .invoice-items-table {
      .ant-table-container {
        .ant-table-content {
          .ant-table-thead {
            & > tr {
              & > th {
                font-size: 14px;
                color: var(--neutral-900);
                line-height: 21px;
                padding: 16px;
              }
            }
          }
          .ant-table-tbody {
            & > tr {
              & > td {
                border-bottom: transparent;
                font-size: 14px;
                color: var(--neutral-900);
                line-height: 21px;
                font-weight: 800;
                letter-spacing: 0.2px;
                padding: 16px;
              }
            }
          }
        }
      }
      @media ${breakpointsDown.sm} {
        display: none;
      }
    }
  }

  .invoice-info {
    flex: 0 0 345px;
    .invoice-content {
      margin-bottom: 32px;
    }
    .invoice-input {
      font-size: 14px;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: 0.2px;
    }
    .currency-select {
      height: 56px;
    }
    .other-actions-container {
      display: flex;
      gap: 24px;
      flex-direction: column;
      .action-wrapper {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          font-weight: 800;
          line-height: 21px;
          color: var(--neutral-900);
        }
      }
    }
    .input-action-btns {
      display: flex;
      gap: 16px;
      margin-top: 16px;
    }
    @media ${breakpointsDown.lg} {
      flex: 1 1 auto;
    }
  }
  @media ${breakpointsDown.lg} {
    flex-wrap: wrap;
  }
`
