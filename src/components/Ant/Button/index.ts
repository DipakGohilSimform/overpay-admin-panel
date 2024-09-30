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
    color: var(--neutral-1000);
  }
`
