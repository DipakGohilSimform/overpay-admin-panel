import styled from 'styled-components'

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  .actions-btn-container {
    display: flex;
    gap: 16px;
    .ant-btn {
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
      background-color: var(--neutral-0);
    }
    .anticon {
      font-size: 20px;
    }
  }
`
