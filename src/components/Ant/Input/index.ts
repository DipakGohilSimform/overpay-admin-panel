import { Input as AntInput } from 'antd'
import styled from 'styled-components'

export const Input = styled(AntInput)`
  height: 56px;
  background: var(--neutral-0);
  &.ant-input-outlined:focus,
  &.ant-input-outlined:focus-within {
    border-color: var(--primary-500);
    box-shadow: none;
  }
  &::placeholder {
    letter-spacing: 0.3px;
  }
  &.no-border {
    padding: 0;
    border: none;
    height: 24px;
    .ant-input {
      font-size: 18px;
      line-height: 24px;
      font-weight: 800;
      letter-spacing: 0.2px;
      color: var(--neutral-900);
    }
  }
`

export const InputPassword = styled(AntInput.Password)`
  height: 56px;
  &.ant-input-outlined:focus,
  &.ant-input-outlined:focus-within {
    border-color: var(--primary-500);
    box-shadow: none;
  }
  &::placeholder {
    letter-spacing: 0.3px;
  }
`
export const InputOTP = styled(AntInput.OTP)``

export const InputSearch = styled(AntInput.Search)`
  width: 295px;
  .ant-input-group {
    .ant-input-affix-wrapper {
      border-radius: 12px;
      height: 48px;
      &::placeholder {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0.2px;
      }
    }
    .ant-input-prefix {
      margin-inline-end: 12px;
      .anticon {
        font-size: 20px;
      }
    }
    .ant-input-group-addon {
      display: none;
    }
  }
`
