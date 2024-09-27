import { Modal as AntModal } from 'antd'
import styled from 'styled-components'

export const Modal = styled(AntModal)`
  .ant-modal-content {
    padding: 24px;
  }
  .ant-modal-body {
    margin-top: 30px;
  }
  .modal-title {
    font-size: 24px;
    line-height: 31px;
    font-weight: 800;
    color: var(--neutral-900);
    text-align: center;
  }
  .modal-desc {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.4px;
    font-weight: 500;
    color: var(--neutral-600);
    text-align: center;
  }
  .transfer-text {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.2px;
    font-weight: 500;
    color: var(--neutral-600);
    &.primary {
      font-weight: 800;
      color: var(--primary-500);
    }
    &.secondary {
      color: var(--neutral-900);
    }
    &.secondary-bold {
      font-weight: 800;
      color: var(--neutral-900);
    }
  }
  h6 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 800;
    color: var(--neutral-900);
  }
`
