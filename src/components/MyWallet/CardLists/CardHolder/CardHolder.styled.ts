import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  .holder-title {
    display: flex;
    gap: 8px;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 800;
      line-height: 27px;
      letter-spacing: 0.2px;
    }
    span {
      font-size: 18px;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--neutral-500);
    }
  }
  .ant-btn {
    color: var(--primary-500);
    border-color: var(--primary-500);
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      background: var(--primary-500);
      color: var(--neutral-0);
    }
  }
`
