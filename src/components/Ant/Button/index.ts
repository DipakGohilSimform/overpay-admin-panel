import { Button as AntButton } from 'antd'
import styled from 'styled-components'

export const Button = styled(AntButton)`
  /* &.ant-btn-primary > span {
    color: var(--neutral-0);
  } */
  &.b-rounded {
    border-radius: 1000px;
    border: 1px solid var(--neutral-200);
  }
  &.ant-btn.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: var(--neutral-100);
  }
  &.ant-btn-default {
    background-color: transparent;
    &:hover {
      background-color: var(--neutral-50);
    }
    span {
      color: var(--neutral-900);
    }
  }
`
