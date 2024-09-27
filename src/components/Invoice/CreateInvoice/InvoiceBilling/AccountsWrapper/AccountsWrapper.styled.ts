import styled from 'styled-components'

export const AccountDetailContainer = styled.div`
  display: flex;
  gap: 40px;
`
export const DetailWrapper = styled.div`
  width: 100%;
  h5 {
    font-size: 20px;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: 0.2px;
    margin-bottom: 24px;
  }
  .billto-bg {
    background: var(--neutral-50);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    .ant-select {
      width: 100%;
      height: 48px;
      .ant-select-selector {
        padding-left: 0;
      }
    }
  }
  .account-input {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    .ant-input-prefix {
      font-size: 20px;
      color: var(--neutral-600);
    }
  }
`
