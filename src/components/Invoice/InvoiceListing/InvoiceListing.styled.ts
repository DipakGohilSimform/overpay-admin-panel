import styled from 'styled-components'
import { Table } from '@/components/Ant'

export const InvoiceListingTable = styled(Table)`
  .ant-table-container {
    .ant-table-content {
      .ant-table-tbody {
        & > tr {
          td {
            .action-dropdown {
              .ant-dropdown-menu {
                min-width: 160px;
                padding: 4px 8px;
                border-radius: 12px;
                .ant-dropdown-menu-item {
                  gap: 12px;
                  font-size: 12px;
                  font-weight: 600;
                  line-height: 18px;
                  letter-spacing: 0.4px;
                  color: var(--neutral-600);
                  padding: 6px;
                  border-radius: 6px;
                  .anticon {
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
