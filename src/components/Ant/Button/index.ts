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
`
