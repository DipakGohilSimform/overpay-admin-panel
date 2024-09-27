import styled from 'styled-components'

export const TotalDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .add-Btn {
    height: 21px;
    padding: 0;
    font-size: 14px;
    color: var(--primary-500);
  }
  .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
    background: transparent;
    color: var(--primary-100);
  }
  .total-container {
    max-width: 300px;
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    .ant-divider {
      margin: 16px 0;
    }
    p {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0.2px;
      span {
        font-weight: 800;
      }
    }
  }
`
