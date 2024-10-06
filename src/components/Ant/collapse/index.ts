import { Collapse as AntCollapse } from 'antd'
import styled from 'styled-components'

export const Collapse = styled(AntCollapse)`
  border: none;
  background-color: var(--neutral-50);
  .ant-collapse-header {
    padding-block: 10px;
    svg {
      color: var(--neutral-600);
    }
  }
  .ant-collapse-content {
    background-color: var(--neutral-50);
    border: none;
  }
  .ant-collapse-expand-icon {
    margin-top: 10px;
  }
  .recent-file {
    .title {
      font-size: 14px;
      font-weight: 800;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
    .total {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0.4px;
      color: var(--neutral-600);
    }
  }
  .file-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 10px;
    .file {
      display: flex;
      gap: 12px;
      color: var(--neutral-600);
      .file-name {
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0.2px;
      }
    }
    .anticon {
      color: var(--neutral-600);
      cursor: pointer;
    }
  }
  .images {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    img {
      height: 100px;
    }
  }
`
