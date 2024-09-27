import styled from 'styled-components'

export const FormWrapper = styled.div`
  max-width: 427px;
  width: 100%;
  .btnsContainer {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
  }
  .nameContainer {
    display: flex;
    gap: 16px;
  }
  .ant-input-suffix {
    .anticon {
      font-size: 24px;
      color: var(--neutral-600);
    }
  }
  .infoText {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.2px;
    color: var(--neutral-600);
    padding: 8px 0 32px 0;
    span {
      color: var(--neutral-900);
      font-weight: 600;
    }
  }
  .linkText {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: var(--neutral-900);
    padding-top: 32px;
    text-align: center;
    a {
      font-weight: 800;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .rememberWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    .ant-checkbox-wrapper {
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: var(--neutral-900);
      }
    }
    a {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--primary-500);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .forgotEmailLink {
    display: block;
    font-size: 16px;
    color: var(--neutral-900);
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.2px;
    margin-top: 24px;
    text-align: center;
  }
  .otpText {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    text-align: center;
    color: var(--neutral-600);
    font-weight: 500;
    margin-top: 24px;
    span {
      color: var(--neutral-900);
      font-weight: 800;
    }
  }
  .otpInputWrapper {
    margin-bottom: 40px;
    .ant-otp {
      gap: 24px;
      width: 100%;
      justify-content: center;
      .ant-otp-input {
        width: 56px;
        height: 56px;
        font-size: 24px;
        font-weight: 800;
        line-height: 31px;
        color: var(--neutral-900);
      }
    }
  }
`
