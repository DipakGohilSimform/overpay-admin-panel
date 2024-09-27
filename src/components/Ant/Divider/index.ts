import { Divider as AntDivider } from 'antd'
import styled from 'styled-components'

export const Divider = styled(AntDivider)`
  span {
    font-weight: 400;
    letter-spacing: 0.3px;
  }
  &.card-divider {
    margin: 0;
    height: 64px;
  }
`
