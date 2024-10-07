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
  &.ant-picker-outlined {
    background-color: var(--neutral-50);
    color: var(--neutral-900);
    input {
      &::placeholder {
        color: var(--neutral-900);
      }
    }
    &:hover {
      border-color: var(--neutral-500);
    }
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected:not(.ant-picker-cell-disabled)
    .ant-picker-cell-inner {
    background-color: var(--primary-500);
  }
  .ant-picker-input {
    .ant-picker-suffix {
      font-size: 24px;
      color: var(--primary-500);
    }
  }
`
