import styled from 'styled-components'

export const ContentFooter = styled.div`
  flex: 0 0 136px;
  margin: 24px;
  .ant-input {
    resize: none;
    background: var(--neutral-10);
  }
  .footer-cta-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    .links {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .anticon {
      font-size: 20px;
      color: var(--neutral-600);
      cursor: pointer;
    }
    .ant-btn {
      width: 120px;
    }
  }
`
