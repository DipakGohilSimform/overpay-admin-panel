import styled from 'styled-components'
import { DatePicker as AntDatePicker } from 'antd'

export const DatePicker = styled(AntDatePicker)`
  height: 56px;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  &:focus,
  &:focus-within {
    box-shadow: none;
  }
  .ant-picker-input {
    .ant-picker-suffix {
      font-size: 24px;
      color: var(--primary-500);
    }
  }
`
