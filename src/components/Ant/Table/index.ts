import styled from 'styled-components'

import { Table as AntTable } from 'antd'

export const Table = styled(AntTable)`
  .ant-table-container {
    .ant-table-content {
      .ant-table-thead {
        & > tr {
          & > th {
            padding: 28px;
            font-size: 16px;
            font-weight: 800;
            line-height: 24px;
            letter-spacing: 0.2px;
            border-top: 1px solid var(--neutral-200);
            border-bottom: 1px solid var(--neutral-200);
            .ant-table-column-sorters {
              gap: 12px;
              justify-content: flex-start;
              .ant-table-column-title {
                flex: none;
              }
            }
          }
        }
      }
    }
  }
  .ant-table-tbody > tr > td {
    background-color: var(--neutral-10);
    border-bottom: 1px solid var(--neutral-200);
    &:hover {
      background-color: var(--neutral-100);
    }
  }
  .ant-checkbox-checked .ant-checkbox-inner:after {
    top: 48%;
    inset-inline-start: 35%;
    display: table;
    width: 6px;
    height: 10px;
  }
`
